#!/bin/bash

# EC2 Setup Script for ISO Easy Web
# This script sets up Nginx to serve static files from the 'out' directory with SSL support

# Exit on error
set -e

# Default domain name (can be overridden with command line argument)
DOMAIN_NAME=${1:-"isoeasy.app"}
ENABLE_SSL=${2:-"false"}
GRAPHQL_ENDPOINT=${3:-"http://localhost:4000/graphql"}

echo "========================================"
echo "Starting ISO Easy Web EC2 Setup"
echo "Domain: $DOMAIN_NAME"
echo "SSL Enabled: $ENABLE_SSL"
echo "GraphQL Endpoint: $GRAPHQL_ENDPOINT"
echo "========================================"

# Update system packages
echo "Updating system packages..."
if command -v apt-get &> /dev/null; then
    # Debian/Ubuntu
    sudo apt-get update -y
    sudo apt-get install -y nginx
elif command -v dnf &> /dev/null; then
    # Amazon Linux 2023 or RHEL/CentOS 8+
    sudo dnf update -y
    sudo dnf install -y nginx
elif command -v yum &> /dev/null; then
    # Amazon Linux 2 or RHEL/CentOS 7
    sudo yum update -y
    if command -v amazon-linux-extras &> /dev/null; then
        sudo amazon-linux-extras install -y nginx1
    else
        sudo yum install -y nginx
    fi
else
    echo "Unsupported package manager. Please install Nginx manually."
    exit 1
fi

# Verify Nginx installation
if ! command -v nginx &> /dev/null; then
    echo "ERROR: Nginx installation failed. Please install Nginx manually."
    exit 1
fi
echo "Nginx successfully installed!"

# Check for .env file to get GraphQL endpoint
if [ -f ".env" ]; then
    echo "Reading GraphQL endpoint from .env file..."
    ENV_GRAPHQL_ENDPOINT=$(grep "^NEXT_PUBLIC_GRAPHQL_ENDPOINT=" .env | cut -d '=' -f2 | tr -d '"' | tr -d "'")
    if [ ! -z "$ENV_GRAPHQL_ENDPOINT" ]; then
        GRAPHQL_ENDPOINT="$ENV_GRAPHQL_ENDPOINT"
        echo "Using GraphQL endpoint from .env: $GRAPHQL_ENDPOINT"
    fi
fi

# Validate GraphQL endpoint
if [ -z "$GRAPHQL_ENDPOINT" ]; then
    echo "ERROR: GraphQL endpoint not specified. Please provide it as the third argument or set NEXT_PUBLIC_GRAPHQL_ENDPOINT in .env file."
    exit 1
fi

echo "GraphQL endpoint configured: $GRAPHQL_ENDPOINT"

# Test GraphQL endpoint connectivity
echo "Testing GraphQL endpoint connectivity..."
if curl -s --connect-timeout 10 --max-time 30 "$GRAPHQL_ENDPOINT" > /dev/null 2>&1; then
    echo "✅ GraphQL endpoint is reachable: $GRAPHQL_ENDPOINT"
elif curl -s --connect-timeout 10 --max-time 30 -X POST -H "Content-Type: application/json" -d '{"query":"{ __schema { queryType { name } } }"}' "$GRAPHQL_ENDPOINT" > /dev/null 2>&1; then
    echo "✅ GraphQL endpoint is reachable (POST): $GRAPHQL_ENDPOINT"
else
    echo "⚠️  WARNING: GraphQL endpoint may not be reachable: $GRAPHQL_ENDPOINT"
    echo "   This could cause 502 errors. Please ensure:"
    echo "   1. The GraphQL server is running"
    echo "   2. The endpoint URL is correct"
    echo "   3. Firewall allows connections to the GraphQL port"
    echo "   4. The GraphQL server accepts connections from this server"
    echo ""
    echo "   Continuing with setup, but you may need to fix the GraphQL endpoint later."
fi

# Create directory for the app if it doesn't exist
echo "Setting up application directory..."
APP_DIR="/var/www/iso-easy-web"
sudo mkdir -p $APP_DIR

# Copy the out directory contents to the app directory
echo "Copying static files to web directory..."
sudo cp -r out/* $APP_DIR/

# Set proper permissions
echo "Setting proper permissions..."
sudo chown -R ec2-user:ec2-user $APP_DIR
sudo chmod -R 755 $APP_DIR

# Create Nginx configuration
echo "Creating Nginx configuration..."
if [ "$ENABLE_SSL" = "true" ]; then
    # Configuration with SSL placeholders
    cat > iso-easy-web.conf << EOF
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name $DOMAIN_NAME;
    return 301 https://\$host\$request_uri;
}

# Main application server (HTTPS)
server {
    listen 443 ssl;
    server_name $DOMAIN_NAME;

    root $APP_DIR;
    index index.html;

    # SSL certificates will be configured by Certbot

    # API proxy
    location /api/graphql {
        rewrite ^/api/graphql(.*) /graphql\$1 break;
        proxy_pass $GRAPHQL_ENDPOINT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        
        # Debug headers
        add_header X-Debug-Path \$request_uri;
        add_header X-Debug-Upstream \$upstream_addr;
        
        # Add error handling
        proxy_intercept_errors on;
        error_page 502 503 504 /50x.html;
        
        # Log proxy requests for debugging
        access_log /var/log/nginx/graphql_proxy.log;
        error_log /var/log/nginx/graphql_proxy_error.log;
    }

    location / {
        try_files \$uri \$uri.html \$uri/ /index.html;
    }
    
    # Handle Next.js static files
    location /_next/static/ {
        alias $APP_DIR/_next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle other static assets
    location /static/ {
        alias $APP_DIR/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Add caching for static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
EOF
else
    # Standard HTTP configuration
    cat > iso-easy-web.conf << EOF
server {
    listen 80;
    server_name $DOMAIN_NAME;

    root $APP_DIR;
    index index.html;

    # API proxy
    location /api/graphql {
        rewrite ^/api/graphql(.*) /graphql\$1 break;
        proxy_pass $GRAPHQL_ENDPOINT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        
        # Debug headers
        add_header X-Debug-Path \$request_uri;
        add_header X-Debug-Upstream \$upstream_addr;
        
        # Add error handling
        proxy_intercept_errors on;
        error_page 502 503 504 /50x.html;
        
        # Log proxy requests for debugging
        access_log /var/log/nginx/graphql_proxy.log;
        error_log /var/log/nginx/graphql_proxy_error.log;
    }

    location / {
        try_files \$uri \$uri.html \$uri/ /index.html;
    }
    
    # Handle Next.js static files
    location /_next/static/ {
        alias $APP_DIR/_next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle other static assets
    location /static/ {
        alias $APP_DIR/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Add caching for static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
}
EOF
fi

# Configure Nginx
echo "Configuring Nginx..."
if [ -d "/etc/nginx/sites-available" ] && [ -d "/etc/nginx/sites-enabled" ]; then
    # Debian/Ubuntu style
    sudo mv iso-easy-web.conf /etc/nginx/sites-available/
    sudo ln -sf /etc/nginx/sites-available/iso-easy-web.conf /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
else
    # Amazon Linux/RHEL/CentOS style
    sudo mv iso-easy-web.conf /etc/nginx/conf.d/
    if [ -f "/etc/nginx/conf.d/default.conf" ]; then
        sudo mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak
    fi
fi

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

# Set up SSL with Certbot if enabled
if [ "$ENABLE_SSL" = "true" ]; then
    echo "Setting up SSL with Let's Encrypt..."
    
    # Install Certbot
    if command -v apt-get &> /dev/null; then
        sudo apt-get install -y certbot python3-certbot-nginx
    elif command -v dnf &> /dev/null; then
        sudo dnf install -y certbot python3-certbot-nginx
    elif command -v yum &> /dev/null; then
        # Install EPEL repository if needed
        if ! rpm -qa | grep -q epel-release; then
            sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm || true
        fi
        sudo yum install -y certbot python3-certbot-nginx || sudo yum install -y certbot
    fi
    
    # Get server's public IP for troubleshooting
    PUBLIC_IP=$(curl -s http://checkip.amazonaws.com || wget -qO- http://checkip.amazonaws.com)
    
    # Obtain SSL certificate
    echo "Obtaining SSL certificate for $DOMAIN_NAME..."
    if sudo certbot --nginx -d $DOMAIN_NAME --non-interactive --agree-tos --email admin@$DOMAIN_NAME --redirect; then
        echo "SSL certificate successfully installed!"
    else
        echo "Failed with Nginx plugin. Trying standalone mode..."
        sudo systemctl stop nginx
        if sudo certbot certonly --standalone -d $DOMAIN_NAME --non-interactive --agree-tos --email admin@$DOMAIN_NAME; then
            # Update Nginx config with certificate paths
            CERT_PATH="/etc/letsencrypt/live/$DOMAIN_NAME"
            if [ -d "$CERT_PATH" ]; then
                # Find and update the Nginx config
                if [ -f "/etc/nginx/conf.d/iso-easy-web.conf" ]; then
                    sudo sed -i "s|# SSL certificates will be configured by Certbot|ssl_certificate $CERT_PATH/fullchain.pem;\n    ssl_certificate_key $CERT_PATH/privkey.pem;\n    ssl_trusted_certificate $CERT_PATH/chain.pem;|g" /etc/nginx/conf.d/iso-easy-web.conf
                elif [ -f "/etc/nginx/sites-available/iso-easy-web.conf" ]; then
                    sudo sed -i "s|# SSL certificates will be configured by Certbot|ssl_certificate $CERT_PATH/fullchain.pem;\n    ssl_certificate_key $CERT_PATH/privkey.pem;\n    ssl_trusted_certificate $CERT_PATH/chain.pem;|g" /etc/nginx/sites-available/iso-easy-web.conf
                fi
                sudo systemctl start nginx
                echo "SSL certificate successfully installed with standalone mode!"
            else
                echo "ERROR: SSL certificates not found in expected location."
                sudo systemctl start nginx
            fi
        else
            echo "ERROR: Failed to obtain SSL certificates."
            echo "Troubleshooting:"
            echo "1. Ensure domain $DOMAIN_NAME points to this server's IP: $PUBLIC_IP"
            echo "2. Check that ports 80 and 443 are not blocked by firewall"
            echo "3. Run manually: sudo certbot --nginx -d $DOMAIN_NAME"
            sudo systemctl start nginx
        fi
    fi
    
    # Setup automatic renewal
    echo "Setting up automatic SSL certificate renewal..."
    echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
    
    echo "========================================"
    echo "Setup Complete!"
    echo "Your ISO Easy Web application is now running with HTTPS on $DOMAIN_NAME"
else
    echo "========================================"
    echo "Setup Complete!"
    echo "Your ISO Easy Web application is now running on http://$DOMAIN_NAME"
fi

echo "========================================"
echo "To deploy updates:"
echo "1. Build your Next.js app: npm run build"
echo "2. Copy the 'out' directory to the server"
echo "3. Run this script again to update the files"
echo ""
echo "Usage examples:"
echo "  ./ec2-setup.sh yourdomain.com false http://localhost:4000/graphql"
echo "  ./ec2-setup.sh yourdomain.com true https://api.yourdomain.com/graphql"
echo "  ./ec2-setup.sh yourdomain.com true  # Will read from .env file"
echo ""
echo "API Proxy Configuration:"
echo "  - Frontend requests: https://yourdomain.com/api/graphql"
echo "  - Rewritten to: /graphql (strips /api/ prefix)"
echo "  - Proxied to: $GRAPHQL_ENDPOINT"
echo "  - No CORS issues: All requests appear from same origin"
echo ""
echo "Troubleshooting 502 Errors:"
echo "  - Check GraphQL endpoint: curl -I $GRAPHQL_ENDPOINT"
echo "  - Check Nginx logs: sudo tail -f /var/log/nginx/graphql_proxy_error.log"
echo "  - Check Nginx access: sudo tail -f /var/log/nginx/graphql_proxy.log"
echo "  - Test GraphQL directly: curl -X POST -H 'Content-Type: application/json' -d '{\"query\":\"{ __schema { queryType { name } } }\"}' $GRAPHQL_ENDPOINT"
echo "  - Test proxy rewrite: curl -I https://yourdomain.com/api/graphql"
echo "  - Check debug headers: curl -I https://yourdomain.com/api/graphql -v"
echo "  - Restart Nginx: sudo systemctl restart nginx"
echo "========================================"
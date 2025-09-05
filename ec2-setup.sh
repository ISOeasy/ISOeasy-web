#!/bin/bash

# EC2 Setup Script for ISO Easy Web
# This script sets up Nginx to serve static files from the 'out' directory

# Exit on error
set -e

echo "========================================"
echo "Starting ISO Easy Web EC2 Setup"
echo "========================================"

# Update system packages
echo "Updating system packages..."
sudo apt-get update -y
sudo apt-get upgrade -y

# Install Nginx
echo "Installing Nginx..."
sudo apt-get install nginx -y

# Create directory for the app if it doesn't exist
echo "Setting up application directory..."
APP_DIR="/var/www/iso-easy-web"
sudo mkdir -p $APP_DIR

# Copy the out directory contents to the app directory
echo "Copying static files to web directory..."
sudo cp -r out/* $APP_DIR/

# Set proper permissions
echo "Setting proper permissions..."
sudo chown -R www-data:www-data $APP_DIR
sudo chmod -R 755 $APP_DIR

# Create Nginx configuration
echo "Creating Nginx configuration..."
cat > iso-easy-web.conf << EOF
server {
    listen 80;
    server_name _;  # Replace with your domain name if available

    root /var/www/iso-easy-web;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
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

# Move Nginx config to sites-available
sudo mv iso-easy-web.conf /etc/nginx/sites-available/

# Enable the site
echo "Enabling site configuration..."
sudo ln -sf /etc/nginx/sites-available/iso-easy-web.conf /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

# Enable Nginx to start on boot
echo "Enabling Nginx to start on boot..."
sudo systemctl enable nginx

echo "========================================"
echo "Setup Complete!"
echo "Your ISO Easy Web application is now running on port 80"
echo "========================================"

# Instructions for the user
echo "To deploy updates:"
echo "1. Build your Next.js app: npm run build"
echo "2. Copy the 'out' directory to the server"
echo "3. Run this script again to update the files"
echo "========================================"

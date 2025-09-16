import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import { FaClock, FaRocket } from 'react-icons/fa';

const NoBuildComingSoon = ({ platformName, className = "" }) => {
    return (
        <Card className={`coming-soon-card ${className}`} style={{ border: '1px solid var(--secondary-color)', borderRadius: '12px' }}>
            <Card.Body className="text-center p-5">
                <div className="mb-4">
                    <FaRocket size={64} style={{ color: 'var(--primary-color)' }} />
                </div>
                <h4 className="mb-3" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
                    Coming Soon!
                </h4>
                <p className="mb-4" style={{ fontSize: '16px', color: '#666' }}>
                    {platformName ? 
                        `ISO Easy for ${platformName} is currently under development. We're working hard to bring you an amazing experience!` :
                        `ISO Easy builds are currently under development. We're working hard to bring you an amazing experience across all platforms!`
                    }
                </p>
                <Alert variant="info" className="mb-4" style={{ border: 'none', backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)' }}>
                    <div className="d-flex align-items-center justify-content-center">
                        <FaClock className="me-2" style={{ color: 'var(--primary-color)' }} />
                        <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
                            Stay tuned for updates!
                        </span>
                    </div>
                </Alert>
                <div className="features-preview">
                    <small className="text-muted">
                        <strong>What to expect:</strong> Intuitive design tools, cross-platform sync, professional-grade features
                    </small>
                </div>
            </Card.Body>
        </Card>
    );
};

export default NoBuildComingSoon;

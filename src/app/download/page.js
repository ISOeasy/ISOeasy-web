"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaWindows, FaApple, FaLinux, FaMobile } from 'react-icons/fa';
import { SiAndroid } from 'react-icons/si';
import './download.css';

const DownloadPage = () => {
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const platforms = [
        {
            id: 'windows',
            name: 'Windows',
            icon: <FaWindows size={48} />,
            versions: [
                { version: 'Windows (64-bit)', link: '#', size: '85 MB' }
            ],
            requirements: 'Windows 7 or later, 4GB RAM, 500MB disk space'
        },
        {
            id: 'macos',
            name: 'macOS',
            icon: <FaApple size={48} />,
            versions: [
                { version: 'macOS (Apple Silicon)', link: '#', size: '90 MB' },
                { version: 'macOS (Intel)', link: '#', size: '88 MB' }
            ],
            requirements: 'macOS 10.15 or later, 4GB RAM, 500MB disk space'
        },
        {
            id: 'linux',
            name: 'Linux',
            icon: <FaLinux size={48} />,
            versions: [
                { version: '.deb (Ubuntu/Debian)', link: '#', size: '82 MB' },
                { version: '.rpm (Fedora/RHEL)', link: '#', size: '82 MB' },
                { version: '.AppImage (Universal)', link: '#', size: '85 MB' }
            ],
            requirements: 'Most modern Linux distributions, 4GB RAM, 500MB disk space'
        },
        {
            id: 'ios',
            name: 'iOS',
            icon: <FaApple size={48} />,
            versions: [
                { version: 'App Store', link: '#', size: '45 MB' }
            ],
            requirements: 'iOS 14.0 or later, Compatible with iPhone, iPad, and iPod touch'
        },
        {
            id: 'android',
            name: 'Android',
            icon: <SiAndroid size={48} />,
            versions: [
                { version: 'Google Play', link: '#', size: '40 MB' },
                { version: 'APK Direct Download', link: '#', size: '38 MB' }
            ],
            requirements: 'Android 8.0 or later, 2GB RAM'
        }
    ];

    return (
        <div className="download-page" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>Download ISO Easy</h1>
                        <p className="text-center" style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                            Get the ISO Easy app for your preferred platform and start creating amazing isometric designs today.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                        <Card className="platform-selector h-100"
                            onClick={() => setSelectedPlatform('windows')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'windows' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'windows' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                                <div className="mb-3">
                                    <FaWindows size={48} />
                                </div>
                                <h4>Windows</h4>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                        <Card className="platform-selector h-100"
                            onClick={() => setSelectedPlatform('macos')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'macos' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'macos' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                                <div className="mb-3">
                                    <FaApple size={48} />
                                </div>
                                <h4>macOS</h4>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                        <Card className="platform-selector h-100"
                            onClick={() => setSelectedPlatform('linux')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'linux' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'linux' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                                <div className="mb-3">
                                    <FaLinux size={48} />
                                </div>
                                <h4>Linux</h4>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
                        <Card className="platform-selector h-100"
                            onClick={() => setSelectedPlatform('mobile')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'mobile' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'mobile' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                                <div className="mb-3">
                                    <FaMobile size={48} />
                                </div>
                                <h4>Mobile</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {selectedPlatform && (
                    <Row className="mb-5">
                        <Col>
                            <Card className="download-details">
                                <Card.Body>
                                    {selectedPlatform === 'mobile' ? (
                                        <Row>
                                            <Col md={6} className="mb-4">
                                                <div className="p-4 text-center">
                                                    <FaApple size={64} className="mb-3" />
                                                    <h3>iOS</h3>
                                                    <p className="mb-4">{platforms.find(p => p.id === 'ios').requirements}</p>
                                                    <Button variant="vision" href="#" className="mb-2 w-100">Download from App Store</Button>
                                                    <small>Size: {platforms.find(p => p.id === 'ios').versions[0].size}</small>
                                                </div>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <div className="p-4 text-center">
                                                    <SiAndroid size={64} className="mb-3" />
                                                    <h3>Android</h3>
                                                    <p className="mb-4">{platforms.find(p => p.id === 'android').requirements}</p>
                                                    <Button variant="vision" href="#" className="mb-2 w-100">Download from Google Play</Button>
                                                    <Button variant="outline-vision" href="#" className="mb-2 w-100">Download APK</Button>
                                                    <small>Size: {platforms.find(p => p.id === 'android').versions[0].size}</small>
                                                </div>
                                            </Col>
                                        </Row>
                                    ) : (
                                        <>
                                            <h3 className="mb-4">Download ISO Easy for {platforms.find(p => p.id === selectedPlatform).name}</h3>
                                            <Row>
                                                <Col md={8}>
                                                    <div className="versions mb-4">
                                                        {platforms.find(p => p.id === selectedPlatform).versions.map((ver, idx) => (
                                                            <div key={idx} className="version-item p-3 mb-3" style={{ border: '1px solid var(--secondary-color)', borderRadius: '8px' }}>
                                                                <Row className="align-items-center">
                                                                    <Col xs={8}>
                                                                        <h5 className="mb-0">{ver.version}</h5>
                                                                        <small>Size: {ver.size}</small>
                                                                    </Col>
                                                                    <Col xs={4} className="text-end">
                                                                        <Button variant="vision" href={ver.link}>Download</Button>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="system-requirements">
                                                        <h5>System Requirements</h5>
                                                        <p>{platforms.find(p => p.id === selectedPlatform).requirements}</p>
                                                    </div>
                                                </Col>
                                                <Col md={4} className="text-center">
                                                    <div className="platform-icon mb-4" style={{ fontSize: '120px', color: 'var(--primary-color)' }}>
                                                        {platforms.find(p => p.id === selectedPlatform).icon}
                                                    </div>
                                                    <h4>ISO Easy for {platforms.find(p => p.id === selectedPlatform).name}</h4>
                                                    <p>Latest Version: 1.0.0</p>
                                                    <p>Released: June 2023</p>
                                                </Col>
                                            </Row>
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}

                <Row className="mb-5">
                    <Col>
                        <Card className="p-4">
                            <Card.Body>
                                <h3 className="mb-4">Why Choose ISO Easy?</h3>
                                <Row>
                                    <Col md={4} className="mb-4">
                                        <div className="feature text-center">
                                            <div className="feature-icon mb-3" style={{ fontSize: '48px', color: 'var(--primary-color)' }}>
                                                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 7.5v9l-9 5.25L3 16.5v-9L12 2.25l9 5.25ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                                                </svg>
                                            </div>
                                            <h4>Intuitive Design</h4>
                                            <p>Our user-friendly interface makes creating isometric designs simple and enjoyable.</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className="mb-4">
                                        <div className="feature text-center">
                                            <div className="feature-icon mb-3" style={{ fontSize: '48px', color: 'var(--primary-color)' }}>
                                                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25ZM18.75 12a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"></path>
                                                </svg>
                                            </div>
                                            <h4>Cross-Platform</h4>
                                            <p>Work seamlessly across all your devices with our synchronized cloud storage.</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className="mb-4">
                                        <div className="feature text-center">
                                            <div className="feature-icon mb-3" style={{ fontSize: '48px', color: 'var(--primary-color)' }}>
                                                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25ZM10.5 16.5l-4.5-4.5 1.5-1.5 3 3 6-6 1.5 1.5-7.5 7.5Z"></path>
                                                </svg>
                                            </div>
                                            <h4>Professional Tools</h4>
                                            <p>Access advanced features designed for both beginners and professionals.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="text-center">
                            <h3 className="mb-4">Need Help?</h3>
                            <p className="mb-4">Visit our <Link href="#" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Documentation</Link> or <Link href="#contact" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Contact Support</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DownloadPage;

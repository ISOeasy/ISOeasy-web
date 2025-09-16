"use client";
import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import { SiAndroid } from 'react-icons/si';
import { useGetBuildsByPlatformQuery, useGenerateSignedUrlMutation, Platform } from '@/generated/graphql';
import NoBuildComingSoon from '@/components/landingpagecomponents/NoBuildComingSoon';
import './download.css';

// Type definitions
interface PlatformInfo {
    id: string;
    name: string;
    icon: React.ReactNode;
    graphqlPlatform: Platform;
    requirements: string;
}

type PlatformId = 'windows' | 'macos' | 'linux' | 'mobile' | 'ios' | 'android';

const platforms: PlatformInfo[] = [
    {
        id: 'windows',
        name: 'Windows',
        icon: <FaWindows size={48} />,
        graphqlPlatform: Platform.Windows,
        requirements: 'Windows 7 or later, 4GB RAM, 500MB disk space'
    },
    {
        id: 'macos',
        name: 'macOS',
        icon: <FaApple size={48} />,
        graphqlPlatform: Platform.Macos,
        requirements: 'macOS 10.15 or later, 4GB RAM, 500MB disk space'
    },
    {
        id: 'linux',
        name: 'Linux',
        icon: <FaLinux size={48} />,
        graphqlPlatform: Platform.Linux,
        requirements: 'Most modern Linux distributions, 4GB RAM, 500MB disk space'
    },
    {
        id: 'ios',
        name: 'iOS',
        icon: <FaApple size={48} />,
        graphqlPlatform: Platform.Ios,
        requirements: 'iOS 14.0 or later, Compatible with iPhone, iPad, and iPod touch'
    },
    {
        id: 'android',
        name: 'Android',
        icon: <SiAndroid size={48} />,
        graphqlPlatform: Platform.Android,
        requirements: 'Android 8.0 or later, 2GB RAM'
    }
];

const DownloadPage: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformId | null>(null);

    // Get the selected platform's GraphQL platform
    const selectedPlatformInfo = useMemo(() => {
        return platforms.find(p => p.id === selectedPlatform);
    }, [selectedPlatform]);

    // Fetch builds for the selected platform
    const { data, loading, error } = useGetBuildsByPlatformQuery({
        variables: { platform: selectedPlatformInfo?.graphqlPlatform || Platform.Windows },
        skip: !selectedPlatformInfo
    });

    // Generate signed URL mutation
    const [generateSignedUrl, { loading: generatingUrl }] = useGenerateSignedUrlMutation();

    const handlePlatformSelect = (platformId: PlatformId): void => {
        setSelectedPlatform(platformId);
    };

    const getPlatformById = (id: PlatformId): PlatformInfo | undefined => {
        return platforms.find(p => p.id === id);
    };


    // Format file size helper
    const formatFileSize = (bytes?: number | null): string => {
        if (!bytes) return 'Unknown size';
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
    };

    // Handle download with signed URL
    const handleDownload = async (buildId: string): Promise<void> => {
        try {
            const result = await generateSignedUrl({
                variables: {
                    input: {
                        buildId: buildId
                    }
                }
            });

            if (result.data?.generateSignedUrl?.signedUrl) {
                // Open the signed URL in a new tab/window to trigger download
                window.open(result.data.generateSignedUrl.signedUrl, '_blank');
            } else {
                console.error('Failed to generate signed URL');
                alert('Failed to generate download link. Please try again.');
            }
        } catch (error) {
            console.error('Error generating signed URL:', error);
            alert('Error generating download link. Please try again.');
        }
    };

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

                <Row className="mb-5 platform-buttons-row">
                    <Col className="mb-2">
                        <Card className="platform-selector h-100"
                            onClick={() => handlePlatformSelect('windows')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'windows' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'windows' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-1 p-md-4">
                                <div className="mb-1 mb-md-3">
                                    <FaWindows className="platform-icon" size={48} />
                                </div>
                                <h5 className="mb-0 platform-title">Windows</h5>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mb-2">
                        <Card className="platform-selector h-100"
                            onClick={() => handlePlatformSelect('macos')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'macos' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'macos' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-1 p-md-4">
                                <div className="mb-1 mb-md-3">
                                    <FaApple className="platform-icon" size={48} />
                                </div>
                                <h5 className="mb-0 platform-title">macOS</h5>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mb-2">
                        <Card className="platform-selector h-100"
                            onClick={() => handlePlatformSelect('linux')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'linux' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'linux' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-1 p-md-4">
                                <div className="mb-1 mb-md-3">
                                    <FaLinux className="platform-icon" size={48} />
                                </div>
                                <h5 className="mb-0 platform-title">Linux</h5>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mb-2">
                        <Card className="platform-selector h-100"
                            onClick={() => handlePlatformSelect('ios')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'ios' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'ios' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-1 p-md-4">
                                <div className="mb-1 mb-md-3">
                                    <FaApple className="platform-icon" size={48} />
                                </div>
                                <h5 className="mb-0 platform-title">iOS</h5>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mb-2">
                        <Card className="platform-selector h-100"
                            onClick={() => handlePlatformSelect('android')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedPlatform === 'android' ? 'var(--primary-color)' : 'white',
                                color: selectedPlatform === 'android' ? 'var(--secondary-color)' : 'var(--primary-color)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--primary-color)'
                            }}>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-center p-1 p-md-4">
                                <div className="mb-1 mb-md-3">
                                    <SiAndroid className="platform-icon" size={48} />
                                </div>
                                <h5 className="mb-0 platform-title">Android</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {selectedPlatform && (
                    <Row className="mb-5">
                        <Col>
                            <Card className="download-details">
                                <Card.Body>
                                    {loading ? (
                                        <div className="text-center p-4">
                                            <Spinner animation="border" variant="primary" />
                                            <p className="mt-3">Loading build information...</p>
                                        </div>
                                    ) : error ? (
                                        <Alert variant="danger">
                                            <Alert.Heading>Error Loading Builds</Alert.Heading>
                                            <p>Unable to load build information. Please try again later.</p>
                                            <small>{error.message}</small>
                                        </Alert>
                                    ) : (
                                        <>
                                            <h3 className="mb-4">Download ISO Easy for {getPlatformById(selectedPlatform)?.name}</h3>
                                            <Row>
                                                <Col md={8}>
                                                    <div className="versions mb-4">
                                                        {data?.buildsByPlatform?.builds?.map((build) => (
                                                            <div key={build.id} className="version-item p-3 mb-3" style={{ border: '1px solid var(--secondary-color)', borderRadius: '8px' }}>
                                                                <Row className="align-items-center">
                                                                    <Col xs={8}>
                                                                        <h5 className="mb-0">{build.appName} v{build.version}</h5>
                                                                        <small>Size: {formatFileSize(build.fileSize)}</small>
                                                                        {build.changelog && (
                                                                            <div className="mt-2">
                                                                                <small className="text-muted">
                                                                                    <strong>Changelog:</strong> {build.changelog}
                                                                                </small>
                                                                            </div>
                                                                        )}
                                                                    </Col>
                                                                    <Col xs={4} className="text-end">
                                                                        <Button
                                                                            variant="vision"
                                                                            onClick={() => handleDownload(build.id)}
                                                                            disabled={generatingUrl}
                                                                        >
                                                                            {generatingUrl ? (
                                                                                <>
                                                                                    <Spinner size="sm" className="me-2" />
                                                                                    Generating...
                                                                                </>
                                                                            ) : (
                                                                                'Download'
                                                                            )}
                                                                        </Button>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        ))}
                                                        {data?.buildsByPlatform?.builds?.length === 0 && (
                                                            <div className="mb-4">
                                                                <NoBuildComingSoon platformName={getPlatformById(selectedPlatform)?.name} />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="system-requirements">
                                                        <h5>System Requirements</h5>
                                                        <p>{getPlatformById(selectedPlatform)?.requirements}</p>
                                                    </div>
                                                </Col>
                                                <Col md={4} className="text-center">
                                                    <div className="platform-icon mb-4" style={{ fontSize: '120px', color: 'var(--primary-color)' }}>
                                                        {getPlatformById(selectedPlatform)?.icon}
                                                    </div>
                                                    <h4>ISO Easy for {getPlatformById(selectedPlatform)?.name}</h4>
                                                    {data?.buildsByPlatform?.builds && data.buildsByPlatform.builds.length > 0 && (
                                                        <>
                                                            <p>Latest Version: {data.buildsByPlatform.builds[0].version}</p>
                                                            <p>Released: {new Date(data.buildsByPlatform.builds[0].createdAt || '').toLocaleDateString()}</p>
                                                        </>
                                                    )}
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

"use client";
import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useGenerateSignedUrlMutation } from '@/generated/graphql';

interface DownloadButtonProps {
    buildId: string;
    className?: string;
    style?: React.CSSProperties;
    title?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
    buildId,
    className = "download-btn-icon download-button",
    style,
    title = "Download"
}) => {
    const [isGenerating, setIsGenerating] = useState(false);

    // Generate signed URL mutation
    const [generateSignedUrl] = useGenerateSignedUrlMutation();

    const handleDownload = async (): Promise<void> => {
        setIsGenerating(true);
        try {
            const result = await generateSignedUrl({
                variables: {
                    input: {
                        buildId: buildId
                    }
                }
            });

            if (result.data?.generateSignedUrl?.signedUrl) {
                const downloadUrl = result.data.generateSignedUrl.signedUrl;

                try {
                    // Method 1: Create a temporary anchor element to trigger download
                    const link = document.createElement('a');
                    link.href = downloadUrl;
                    link.download = ''; // This tells the browser to download instead of navigate
                    link.target = '_blank';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } catch (anchorError) {
                    console.warn('Anchor download failed, trying window.open:', anchorError);
                    // Method 2: Fallback to window.open (might be blocked but worth trying)
                    try {
                        window.open(downloadUrl, '_blank');
                    } catch (windowError) {
                        console.warn('Window.open also failed:', windowError);
                        // Method 3: Last resort - redirect current window
                        window.location.href = downloadUrl;
                    }
                }
            } else {
                console.error('Failed to generate signed URL');
                alert('Failed to generate download link. Please try again.');
            }
        } catch (error) {
            console.error('Error generating signed URL:', error);
            alert('Error generating download link. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <Button
            variant="vision"
            onClick={handleDownload}
            disabled={isGenerating}
            className={className}
            style={style}
            title={title}
        >
            {isGenerating ? (
                <Spinner size="sm" />
            ) : (
                <span className="download-button-icon">↓</span>
            )}
        </Button>
    );
};

export default DownloadButton;

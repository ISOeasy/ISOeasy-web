import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import Link from 'next/link';

const Sidebar = ({ navItems, showOffcanvas, handleOffcanvasClose, activeButton, handleClick }) => {
    return (

        <>
            <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement='end' className='sidebar'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >Navigation</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    {navItems.map((link, index) => (
                        <Link key={index} href={link.href} passHref legacyBehavior>
                            <a 
                                className={`nav-link p-3 d-block text-decoration-none ${activeButton === index ? 'activesidebar' : ''}`}
                                onClick={() => handleClick(index)}
                                style={{ 
                                    color: 'inherit',
                                    cursor: 'pointer',
                                    WebkitTapHighlightColor: 'transparent',
                                    WebkitTouchCallout: 'none',
                                    WebkitUserSelect: 'none',
                                    userSelect: 'none'
                                }}
                            >
                                {link.label}
                                <div className="underline"></div>
                            </a>
                        </Link>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;

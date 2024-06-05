import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import Link from 'next/link';

const SidebarNavlinks = ({ navItems, showOffcanvas, handleOffcanvasClose, activeButton, handleClick }) => {
    return (
        <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="end" className={"Sidebar"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='p-0'>
                <Nav>
                    <div>
                        {navItems.map((item, index) => (
                            <Nav.Link
                                key={index}
                                href={item.href}
                                className={`nav-link-wrapper py-3 ${activeButton === index ? 'activenav' : ''}`}
                                onClick={() => {
                                    handleClick(index);
                                    handleOffcanvasClose();
                                }}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </div>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default SidebarNavlinks;

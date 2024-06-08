import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';

const Sidebar = ({ navItems, showOffcanvas, handleOffcanvasClose, activeButton, handleClick }) => {
    return (

        <>
            <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement='end' className='sidebar'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >Navigation</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    {navItems.map((link, index) => (
                        <Nav.Link className={`p-3 ${activeButton === index ? 'activesidebar' : ''}`} key={index} href={link.href} onClick={handleClick}>
                            {link.label}
                            <div className="underline"></div>
                        </Nav.Link>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;

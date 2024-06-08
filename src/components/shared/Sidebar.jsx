import Link from 'next/link';
import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';

const Sidebar = ({ navItems, showOffcanvas, handleOffcanvasClose, activeButton, handleClick }) => {
    return (


        <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                {navItems.map((link, index) => (
                    <Nav.Link className=" p-3" key={index} href={link.href} onClick={handleClose}>
                        {link.label}
                        <div className="underline"></div>
                    </Nav.Link>
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Sidebar;

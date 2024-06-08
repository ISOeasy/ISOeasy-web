import Link from 'next/link';
import React from 'react';
import { Offcanvas, Nav, NavLink } from 'react-bootstrap';

const Sidebar = ({ navItems, showOffcanvas, handleOffcanvasClose, activeButton, handleClick }) => {
    return (
        <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="end" className={"Sidebar"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='p-0'>
          
                    <div>
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                href={item.href}
                                className={`nav-link-wrapper py-3 ${activeButton === index ? 'activenav' : ''}`}
                                onClick={() => {
                                    handleClick(index);
                                    handleOffcanvasClose();
                                }}
                            >
                                
                              <span className='px-3'>
                              {item.label}
                              </span>
                            
                              
                               
                            </NavLink>
                        ))}
                    </div>
      
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Sidebar;

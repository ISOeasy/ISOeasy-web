"use client";
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import { navItems } from './NavItems';
import Sidebar from './Sidebar';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasClose = () => setShowOffcanvas(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 60);

            navItems.forEach((item, index) => {
                const element = document.getElementById(item.href.slice(1));
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 60 && rect.bottom >= 60) {
                        setActiveButton(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSetActive = (index) => {
        setActiveButton(index);
        setShowOffcanvas(false);
    };

    const navbarStyle = {
        backgroundColor: scrolling ? '#002338' : 'rgba(0, 0, 0, 0.4)',
        borderBottom: scrolling ? '3px solid #D7BA89' : 'none',
    };

    return (
        <>
            <Navbar expanded={false} expand="lg" fixed="top" variant="dark" style={navbarStyle} className={scrolling ? 'scrolled py-2' : 'py-2'}>
                <Container>
                    <Link href="#home" passHref legacyBehavior>
                        <a className="text-decoration-none">
                            <div>
                                <h3 className='logotext mt-2'>ISO EASY</h3>
                            </div>
                        </a>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setShowOffcanvas(!showOffcanvas)} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {navItems.map((item, index) => (
                                <Link key={index} href={item.href} passHref legacyBehavior>
                                    <a className={`nav-link-wrapper text-decoration-none mx-3 ${activeButton === index ? 'active' : 'nonactive'}`}>
                                        {item.label}
                                        <div className="underline mt-1"></div>
                                    </a>
                                </Link>
                            ))}
                        </Nav>
                        <Link href="#contact" passHref legacyBehavior>
                            <Button variant="mailing">Join Mailing List</Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Sidebar
                navItems={navItems}
                showOffcanvas={showOffcanvas}
                handleOffcanvasClose={handleOffcanvasClose}
                activeButton={activeButton}
                handleClick={(index) => handleSetActive(index)}
            />
        </>
    );
};

export default Header;

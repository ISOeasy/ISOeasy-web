"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import SidebarNavlinks from './SidebarNavlinks';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'Who We Are' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Some Of our features' },
    { href: '#', label: 'Contact Us' },
];

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [activeButton, setActiveButton] = useState();
    const pathname = usePathname();

    const handleClick = (index) => {
        setActiveButton(index);
    };

    const handleOffcanvasClose = () => setShowOffcanvas(false);
    const handleOffcanvasShow = () => setShowOffcanvas(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const initialActiveButton = navItems.findIndex(item => item.href === pathname);
            if (initialActiveButton !== -1) {
                setActiveButton(initialActiveButton);
            }
            const handleScroll = () => {
                if (window.scrollY > 60) {
                    setScrolling(true);
                } else {
                    setScrolling(false);
                }
            };
            handleScroll();
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [pathname]);

    const navbarStyle = {
        backgroundColor: scrolling ? '#002338' : 'rgba(0, 0, 0, 0.4)',
        borderBottom: scrolling ? '3px solid #FFB300' : 'none',
    };

    return (
        <>
            <Navbar expanded={false} expand="lg" fixed="top" variant="dark" style={navbarStyle} className={scrolling ? 'scrolled' : ''}>
                <Container>
                    <Link href="/" passHref className='text-decoration-none'>
                        <Navbar.Brand>
                            <div style={{ width: "60px" }}>
                                <Image src="/logo.png" width={160} height={60} alt='logo' />
                            </div>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleOffcanvasShow} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {navItems.map((item, index) => (
                                <Nav.Link
                                    key={index}
                                    href={item.href}
                                    className={`nav-link-wrapper mx-3 ${activeButton === index ? 'activenav' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    {item.label}
                                    <div className="underline"></div>
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Link href='/contact' passHref>
                            <Button variant="outline-warning">Join Our Mailing List</Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SidebarNavlinks
                navItems={navItems}
                showOffcanvas={showOffcanvas}
                handleOffcanvasClose={handleOffcanvasClose}
                activeButton={activeButton}
                handleClick={handleClick}
            />
        </>
    );
};

export default Header;

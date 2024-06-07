"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../assets/logo.png";
import { navItems } from './NavItems';
import Sidebar from './Sidebar';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [activeButton, setActiveButton] = useState();
    const [showOffcanvas, setShowOffcanvas] = useState(false); // State for Offcanvas visibility

    const handleOffcanvasClose = () => setShowOffcanvas(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        const index = navItems.findIndex(item => item.href === `#${id}`);
                        if (index !== -1) {
                            setActiveButton(index);
                        }
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
            }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: scrolling ? '#002338' : 'rgba(0, 0, 0, 0.4)',
        borderBottom: scrolling ? '3px solid #D7BA89' : 'none',
    };

    return (
        <>
            <Navbar expanded={false} expand="lg" fixed="top" variant="dark" style={navbarStyle} className={scrolling ? 'scrolled' : ''}>
                <Container>
                    <Link href="#home" passHref className='text-decoration-none'>
                        <div>
                            <Image src={logo} width={160} height={60} alt='logo' />
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setShowOffcanvas(!showOffcanvas)} /> 
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {navItems.map((item, index) => (
                                <Nav.Link
                                    key={index}
                                    href={item.href}
                                    className={`nav-link-wrapper mx-3 ${activeButton === index ? 'activenav' : ''}`}
                                >
                                    {item.label}
                                    <div className="underline"></div>
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Link href='#contact' passHref>
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
                handleClick={(index) => setActiveButton(index)}
            />
        </>
    );
};

export default Header;

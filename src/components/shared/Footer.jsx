"use client"
import Link from 'next/link';
import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = moment().format('YYYY');

    const headings = {
        letterSpacing: "1.2px",
        lineHeight: "1.2",
        padding: "20px 0",
        color: "white"
    };
    const social = {
        color: "white",
    }
    const navItems = [
        { href: '#', label: 'Home' },
        { href: '#', label: 'Who We Are' },
        { href: '#', label: 'Services' },
        { href: '#', label: 'Some of our features' },
    ];

    return (
        <>
            <footer className='footer' >
                <Container className="py-4">
                    <Row>
                        <Col lg={4} className="text-start">
                            {/* <Image src="footerlogo.png" width={0} height={0} style={{ width: "100%", height: "100%" }} alt='footerlogo' /> */}
                        </Col>
                        <Col lg={3}>
                            <h5 style={headings}>WE OFFER</h5>
                            {['Web Development', 'App Development', 'Project Management', 'Blockchain Development', 'Saas Service', 'Graphic Design'].map(service => (
                                <div className='py-2' key={service}>
                                    <span className="text-white" style={{ textDecoration: "none" }}>{service}</span>
                                </div>
                            ))}
                        </Col>
                        <Col lg={2}>
                            <h5 style={headings}>PAGES</h5>
                            {navItems.map((page, index) => (
                                <div className='py-2' key={page}>
                                    <Link className="text-white" href={page.href} style={{ textDecoration: "none" }}>
                                        {page.label}
                                    </Link>
                                </div>
                            ))}
                        </Col>
                        <Col lg={3}>
                            <h5 style={headings}>SOCIALS</h5>
                            <div className="sociallinks">
                                <Row className="pb-3">
                                    {[
                                        { href: "#", icon: "linkedin" },
                                        { href: "#", icon: "instagram" },
                                        { href: "#", icon: "facebook" },
                                        { href: "#", icon: "twitter" }
                                    ].map((social, index) => (
                                        <Col key={index} xs={2}>
                                            <div className="social">
                                                <a href={social.href} style={social}>
                                                    <svg width="30" height="30" className='footertext' fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d={`M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z`}></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div>
                                    <Row className="py-2">
                                        <Col lg={2} xs={1} className="pt-4">
                                            <svg width="30" height="30" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 1.5c-4.14 0-7.5 3.024-7.5 6.75 0 6 7.5 14.25 7.5 14.25s7.5-8.25 7.5-14.25c0-3.726-3.36-6.75-7.5-6.75ZM12 12a3 3 0 1 1 0-5.999A3 3 0 0 1 12 12Z"></path>
                                            </svg>
                                        </Col>
                                        <Col lg={10} xs={10}>
                                            <div className="location text-white">
                                                USA: Connecticut 06880
                                                pi box 25 larkspur Ca 94977

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="py-2">
                                        <Col lg={2} xs={1}>
                                            <svg width="30" height="30" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.45 17.35c-.244-.26-1.108-1.031-2.697-2.05-1.6-1.03-2.78-1.67-3.118-1.82a.18.18 0 0 0-.183.023 59.029 59.029 0 0 0-1.513 1.248c-.317.273-.317.273-.578.188-.457-.15-1.878-.905-3.117-2.146-1.238-1.241-2.032-2.698-2.182-3.155-.085-.26-.085-.26.188-.578.042-.05.823-.967 1.249-1.512a.18.18 0 0 0 .022-.184c-.149-.339-.79-1.518-1.819-3.118-1.02-1.588-1.79-2.451-2.05-2.696a.183.183 0 0 0-.183-.04 15.11 15.11 0 0 0-2.625 1.192 15.844 15.844 0 0 0-2.28 1.61.18.18 0 0 0-.06.176c.098.456.566 2.362 2.02 5.002 1.482 2.694 2.51 4.075 4.687 6.245 2.177 2.17 3.601 3.259 6.299 4.742 2.64 1.453 4.546 1.921 5.002 2.018a.181.181 0 0 0 .176-.059 15.83 15.83 0 0 0 1.61-2.28c.48-.835.88-1.714 1.193-2.625a.184.184 0 0 0-.04-.181Z"></path>
                                            </svg>
                                        </Col>
                                        <Col lg={8} xs={10}>
                                            <div className="location text-white">
                                                <a style={{ textDecoration: "none", color: "white" }} href="tel:+1 4156899833">+1 (415) 689-9833</a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="py-2">
                                        <Col lg={2} xs={1}>
                                            <svg width="30" height="30" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.75 3.75H2.25a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75ZM12 11.622 3.28 7.5h17.44L12 11.622Z"></path>
                                            </svg>
                                        </Col>
                                        <Col lg={10} xs={10}>
                                            <div className="location text-white">
                                                <a style={{ textDecoration: "none", color: "white" }} href="mailto:semantictribe@gmail.com">semantictribe@gmail.com</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-bottom py-4 text-center" >
                    <Container>
                        &copy; {currentYear} Iso Pipelines. All rights reserved.
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;

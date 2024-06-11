"use client"
import React, { useState } from "react";
import { Container, Card, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import Heading from "../components/shared/Heading";
import ComingSoon from "@/components/landingpagecomponents/ComingSoonModal";
import { toast } from "react-toastify";
import { db } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactForm = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
        
            await addDoc(collection(db, "webQueries"), {
                name,
                email,
                subject,
                phone,
                message,
            });
            
            setSubmitted(true);
            setModalShow(true);

        
            setName("");
            setEmail("");
            setSubject("");
            setPhone("");
            setMessage("");
            setSubmitted(false);

        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form")
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mt-4 pb-3" id="contact">
            <Container className="pt-2 pb-4">
                <Heading heading={"JOIN OUR MAILING LIST"} />
                <Col xs={12} lg={9} className="mx-auto">
                    <Card className="px-lg-5 px-3 py-4 border-0 contact-card">
                        <Form className="py-4 text-center" onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            name="name"
                                            placeholder="Your Name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            name="email"
                                            placeholder="Your Email"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Phone Number"
                                            name="phone"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            placeholder="Subject"
                                            name="subject"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    name="message"
                                />
                            </Form.Group>
                            <Button variant="mailing" type="submit" disabled={loading || submitted}>
                                {loading ? <Spinner animation="border" size="sm" /> : submitted ? "Submitted" : "Submit"}
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Container>
            <ComingSoon show={modalShow} handleClose={() => setModalShow(false)} />
        </section>
    );
};

export default ContactForm;

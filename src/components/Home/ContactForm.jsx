"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Alert,
} from "react-bootstrap";
import Heading from "../shared/Heading";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);
        emailjs
            .sendForm(
                "service_1t6fgv5",
                "template_3i8pdpb",
                form.current,
                "-8v3FujLGpo7401k8"
            )
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);
                setName("");
                setEmail("");
                setSubject("");
                setPhone("");
                setMessage("");
                setLoading(false);

                setTimeout(() => {
                    setSubmitted(false);
                }, 10000);
            })
            .catch((error) => {
                console.log(error.text);
                setSubmitted(false);
                setLoading(false);
            });
    };

    return (
        <section className="mt-5">
            <Container className="py-4">
                <Heading heading={"GET IN TOUCH"} />
                <Card
                    className="p-4 border-0"
                    style={{ boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.1)" }}
                >
                    <Form className="py-4 text-center" ref={form} onSubmit={sendEmail}>

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
                        <Button
                            type="submit"
                            disabled={loading}
                            className="custom-btn btn-5"
                        >
                            <span>
                                {loading ? "..." : submitted ? "Submitted" : "Submit"}
                            </span>
                        </Button>
                    </Form>
                    {submitted && (
                        <Alert variant="success" className="mt-3 text-white">
                            Thank you for taking the time to submit the form, we will be
                            reaching out to you very soon.
                        </Alert>
                    )}
                </Card>
            </Container>
        </section>
    );
};

export default ContactForm;

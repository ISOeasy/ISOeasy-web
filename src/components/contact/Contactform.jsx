"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Calendly from './Calendly'
import emailjs from 'emailjs-com';
const Contactform = () => {
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
        emailjs.sendForm('service_1t6fgv5', 'template_3i8pdpb', form.current, '-8v3FujLGpo7401k8')
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
        <>
            <div className="container py-4">
                <hr style={{ color: "#FFC205" }} />
                <div className="card p-4 border-0" style={{ boxShadow: "2px 4px 6px 4px rgba(0, 0, 0, 0.1)", background: "#002338" }}>
                    {/* Include the Calendly component here */}
                    <Calendly />
                    <hr style={{ color: "#FFC205" }} />
                    <form className="py-4 text-center" ref={form} onSubmit={sendEmail}>
                        <div className="contactheading">
                            <h1>GET IN TOUCH</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        name="name"
                                        placeholder="Your Name"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        name="email"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Phone Number"
                                        name="phone"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder="Subject"
                                        name="subject"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="message"
                                rows="6"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                name="message"
                            ></textarea>
                        </div>
                        <button type="submit" disabled={loading} className="submitform custom-btn btn-5">
                            <span>{loading ? "..." : submitted ? "Submitted" : "Submit"}</span>
                        </button>
                    </form>
                    {submitted && (
                        <p className="submitalert text-white">
                            Thank you for taking the time to submit the form, we will be reaching out to you very soon
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contactform;
"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CounterCards from "../components/landingpagecomponents/CounterCards"
import projects from "../assets/counter/projects.svg"
import drawing from "../assets/counter/drawing.svg"
import client from "../assets/counter/clients.svg"
import reviews from "../assets/counter/reviews.svg"
const Counter = () => {
    const counters = [
        { image: projects, end: 100, suffix: '+', label: 'PROJECT' },
        { image: drawing, end: 100, suffix: '%', label: 'DRAWINGS' },
        { image: client, end: 1000, suffix: '+', label: 'CLIENTS' },
        { image: reviews, end: 500, suffix: '+', label: 'REVIEWS' }
    ];
    return (

        <div className="counterbg py-5" >
            <Container>
                <Row>
                    {counters.map((counter, index) => (
                        <Col key={index} xs={12} md={6} lg={3}>
                            



                            <CounterCards
                                image={counter.image}
                                text={counter.label}
                                end={counter.end}
                                suffix={counter.suffix}
                            />

                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default Counter
"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CounterCards from "../components/landingpagecomponents/CounterCards"
const Counter = () => {
    const counters = [
        { image: '/completed.gif', end: 100, suffix: '+', label: 'PROJECT' },
        { image: '/happy.gif', end: 100, suffix: '%', label: 'DRAWINGS' },
        { image: '/commits.gif', end: 1000, suffix: '+', label: 'CLIENTS' },
        { image: '/reviews.gif', end: 500, suffix: '+', label: 'REVIEWS' }
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
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../components/shared/Heading'
const Vision = () => {
    return (
        <>
            <section id='vision'>
                <Container className="pt-2">
                    <Row className="justify-content-around">
                        <Col xs={12} lg={6} className="col-lg-6">
                            <div className="who py-5">
                                <Heading heading={"Our vision"} />
                                <p className='text-justify'>
                                    We turn your digital dreams into reality, providing top-tier tech solutions to empower your business and enhance user experiences. Our expertise spans a wide range of services, including web and mobile applications, custom software development, staff augmentation, project management, and social media marketing. With a relentless focus on innovation, we deliver cutting-edge solutions that transform concepts into robust software solutions. Let us be your partner in making your digital dream a reality.
                                </p>

                            </div>
                        </Col>
                        <Col xs={12} lg={5}>
                            <div className="text-center">
                                <Image
                                    src="/earth.gif"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    alt='team'
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Vision
import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Heading from '../components/shared/Heading'
import staytuned from "../assets/stay2.jpeg"
import Link from 'next/link'
const Vision = () => {
    return (
        <>
            <section id='vision'>
                <Container className=" my-5">
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6} className="col-lg-6">
                            <div className="who py-2 py-lg-5">
                                <Heading heading={"Our vision"} />
                                <p className='text-justify'>
                                    An Innovative new product, ISO easy! This cutting-edge platform is designed to revolutionize the way you create and design your pipelines. With ISOeasy, you will have access to an intuitive interface featuring dynamic shapes and graphics that allow for seamless, creative pipeline design. Whether you are a seasoned engineer or new to the field, ISOeasy offers powerful tools to help you visualize and implement your ideas effortlessly. Stay tuned for more updates as we prepare to unveil a new era in pipeline design, tailored to meet all your needs with precision and creativity.<i><b>Join our Mailing List to get to know when we launch!</b> </i>
                                </p>

                                <Link href='#contact' passHref>
                                    <Button variant="vision">Join Mailing List</Button>
                                </Link>

                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className=" text-center text-lg-end">
                                <Image
                                    src={staytuned}
                                    width={0}
                                    height={0}
                                    sizes="80vw"
                                    style={{ width: '80%', height: 'auto', borderRadius: "20px" }}
                                    alt='team'
                                    className='ms-auto'
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
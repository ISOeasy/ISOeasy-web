import React from 'react';
import FeaturedCard from '../components/landingpagecomponents/FeaturedCard';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/shared/Heading';
const capabilitiesData = [
  {
    title: 'Graphics',
    description: 'Craft visually stunning and interactive websites that leave a lasting impression. ',
    image: "/web.gif"
  },
  {
    title: 'Custom Shapes',
    image: "/mobile.gif",
    description: 'Transform your unique app ideas into user-friendly and engaging mobile applications. ',
  },
  {
    title: 'Upload',
    image: "/ui.gif",
    description: 'Blend aesthetics with user-friendly functionality for designs that stand out. ',
  },
  {
    title: 'Add Tables',
    image: "/cloud.gif",
    description: 'Use the strength of the cloud for smart solutions, making sure everything runs smoothly. ',
  },
  {
    title: 'Export Options',
    image: "/game.gif",
    description: 'Dive your audience into exciting gaming adventures with our skilled game development services. ',
  },
  {
    title: 'Blockchain Development',
    image: "/blockchain.gif",
    description: 'Explore innovative decentralized solutions that bring a fresh perspective to your business. ',
  },


];

const Offer = () => {
  return (
    <>
      <Container className="container py-5">
        <Heading heading={"OUR PROVISIONS"} />
        <Row className="justify-content-around">
          {capabilitiesData.map((capability, index) => (
            <Col xs={12} md={6} lg={4} className='py-3' key={index}>
              <FeaturedCard
                image={capability.image}
                title={capability.title}
                description={capability.description}

              />
            </Col>
          ))}
        </Row>

      </Container>
    </>
  );
};

export default Offer;

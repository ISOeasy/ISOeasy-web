import React from 'react';
import FeaturedCard from '../components/landingpagecomponents/FeaturedCard';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/shared/Heading';
const capabilitiesData = [
  {
    title: 'Graphics',
    description: `Enhance pipeline design with visually striking graphics tailored to your project's needs.`,
    image: "/web.gif"
  },
  {
    title: 'Custom Shapes',
    image: "/mobile.gif",
    description: 'Craft unique pipeline layouts using our diverse range of customizable shapes. ',
  },
  {
    title: 'Self Upload',
    image: "/ui.gif",
    description: 'Empower users to seamlessly incorporate their own data and assets into the pipeline design process. ',
  },
  {
    title: 'Add Tables',
    image: "/cloud.gif",
    description: '"Effortlessly integrate tables to organize and present key information within your pipeline design." ',
  },
  {
    title: 'Export Options',
    image: "/game.gif",
    description: 'Flexible export options ensure easy preview of the design',
  },
  {
    title: 'Action Controls',
    image: "/blockchain.gif",
    description: 'Effortlessly navigate and refine your pipeline designs with zoom, undo, and other intuitive actions for enhanced productivity. ',
  },


];

const Provisions = () => {
  return (
    <>
      <section id='provisions'>
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
      </section>

    </>
  );
};

export default Provisions;

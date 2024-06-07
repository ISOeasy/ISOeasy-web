import React from 'react';
import FeaturedCard from '../components/landingpagecomponents/FeaturedCard';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../components/shared/Heading';
import graphics from "../assets/flipcards/graphics.png"
import shapes from "../assets/flipcards/shapes.png"
import upload from "../assets/flipcards/upload.png"
import tables from "../assets/flipcards/tables.png"
import exporticons from "../assets/flipcards/export.png"
import actions from "../assets/flipcards/actions.png"

const capabilitiesData = [
  {
    title: 'Multi-Project Management',
    description: `Handle multiple drawings and projects  effortlessly.`,
    image: graphics
  },
  {
    title: 'Custom Shapes',
    image: shapes,
    description: 'Craft unique pipeline layouts using our diverse range of customizable shapes. ',
  },
  {
    title: 'Continuous Advancement',
    image: upload,
    description: 'Preserve your progress effortlessly with the ability to save and continue your work on different drawings and projects.',
  },
  {
    title: 'Add Tables',
    image: tables,
    description: 'Effortlessly integrate tables to organize and present key information within your pipeline design.',
  },
  {
    title: 'Export PDF',
    image: exporticons,
    description: 'Export individual drawings or whole projects in a single pdf ',
  },
  {
    title: 'Action Controls',
    image: actions,
    description: 'Effortlessly navigate and refine your pipeline designs with zoom, undo, and other intuitive actions for enhanced productivity. ',
  },
];

const Provisions = () => {
  return (
    <section id='assistance'>
      <Container className="container py-5">
        <Heading heading={"OUR ASSISTANCE"} />
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
  );
};

export default Provisions;

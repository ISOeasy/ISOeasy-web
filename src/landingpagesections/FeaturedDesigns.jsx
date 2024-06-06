import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DesignsCard from '../components/landingpagecomponents/DesignsCard';
import Heading from '../components/shared/Heading';
import cardimg from "../assets/card_img.png"
const projects = [
  {
    title: 'AAAA Scott Phelps Files',
    description: 'A Small Description',
    image: cardimg
  },
  {
    title: 'Anderson',
    description: 'A Small Description',
    image: cardimg,
  },
  {
    title: 'Bar F Slug Catcher',
    description: 'A Small Description',
    image: cardimg,
  },
  {
    title: 'Charts',
    description: 'A Small Description',
    image: cardimg,
  },
  {
    title: 'Demonstration',
    description: 'A Small Description',
    image: cardimg,
  },
  {
    title: 'Oil Company Test',
    description: 'A Small Description',
    image: cardimg,
  },


];

const FeaturedDesigns = () => {
  return (
    <>
      <Container className="pt-5 pb-2">
        <Heading heading={"Our Featured Designs"} />

        <Row>
          {projects.map((projects, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <DesignsCard
                image={projects.image}
                title={projects.title}
                description={projects.description}
              />
            </Col>
          ))}
        </Row>

      </Container>
    </>
  )
}

export default FeaturedDesigns
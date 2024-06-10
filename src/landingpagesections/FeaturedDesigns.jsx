"use client"
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DesignsCard from '../components/landingpagecomponents/DesignsCard';
import Heading from '../components/shared/Heading';
import cardimg from "../assets/card_img.png";
import ImageEnlargeModal from '@/components/landingpagecomponents/ImageEnlargeModal';

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
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id='featured_design'>
        <Container className="pt-5 pb-2">
          <Heading heading={"Our Featured Designs"} />

          <Row>
            {projects.map((project, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <DesignsCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  onClick={() => handleCardClick(project)}
                />
              </Col>
            ))}
          </Row>

        </Container>

        <ImageEnlargeModal
          showModal={showModal}
          handleClose={handleClose}
          selectedProject={selectedProject}
        />
      </section>
    </>
  );
};

export default FeaturedDesigns;

"use client"
import React, { useState } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import DesignsCard from '../components/landingpagecomponents/DesignsCard';
import Heading from '../components/shared/Heading';
import cardimg from "../assets/card_img.png";
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

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
  const [loading, setLoading] = useState(true);
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

        <Modal show={showModal} className='image-enlarge' onHide={handleClose} centered>
          <Modal.Header closeButton className='bg-transparent'>
          </Modal.Header>
          <Modal.Body className='bg-transparent'>
            <div style={{ width: '100%', height: '400px', position: 'relative' }}>

              {loading && (
                <div className="loader-container">
                  <ClipLoader color="#d7ba89" />
                </div>
              )}
              {selectedProject && (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="responsive"
                  width={700}
                  height={475}
                  onLoadingComplete={() => setLoading(false)}
                />
              )}

            </div>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default FeaturedDesigns;

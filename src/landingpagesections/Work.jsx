import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DesignsCard from '../components/landingpagecomponents/DesignsCard';
import Heading from '../components/shared/Heading';
const projects = [
  {
    title: 'Dobie Do',
    description: 'We developed game website and UI/UX for dobiedog',
    href: '/product/dobiedog',
    image: "/dobie.jpg"
  },
  {
    title: 'Bangla Bazar',
    description: 'Application and design services for Bangla Bazar, serving Deshi customers globally',
    href: "/product/BanglaBazar",
    image: "/bangla.jpg"
  },
  {
    title: 'Dado Gym',
    description: 'Dado Gym: Muay Thai excellence since 1990. Join us for fitness and mastery in Zürich.',
    href: "/product/Dadogym",
    image: "/gym.png"
  },
  {
    title: 'Joyeria',
    description: 'Online perfume store with designer-inspired scents for diverse preferences.',
    href: "/product/joyeria",
    image: "/joyeria.png",
  },
  {
    title: 'Raldor',
    description: 'Explore diverse footwear for all genders and ages. User-friendly site, convenient payment options for seamless online shopping.',
    href: "/product/raldor",
    image: "/raldor.png",
  },
  {
    title: '366 Degree Fit',
    description: '366° Fitness Studio and Research Center: A hub for functional training, fitness innovation, and invention.',
    href: "/product/degreefit",
    image: "/degree.png",
  },


];

const Work = () => {
  return (
    <>
      <Container className="pt-5 pb-2">
        <Heading heading={"Some of Our Work"} />

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

export default Work
import React from 'react';
import Image from 'next/image';
import Heading from '../components/shared/Heading';
import { Container } from 'react-bootstrap';
import vision from "../assets/essence/vision.jpeg"
import shape from "../assets/essence/shape.jpeg"
import dynamic from "../assets/essence/dynamic.jpeg"
import canvas from "../assets/essence/canvas.jpeg"
import path from "../assets/essence/path.jpeg"
import harmonizing from "../assets/essence/harmonizing.jpeg"
import empowering from "../assets/essence/empowering.jpeg"

const honeycombData = [
  { id: 1, imageUrl: vision, title: 'CRAFTING YOUR VISION' },
  { id: 2, imageUrl: shape, title: 'SHAPE YOUR IDEAS' },
  { id: 3, imageUrl: dynamic, title: 'CRAFTING DYNAMIC DESIGNS' },
  { id: 4, imageUrl: canvas, title: 'CANVAS OF CREATION' },
  { id: 5, imageUrl: path, title: `SHAPING TOMORROWS'S PATH` },
  { id: 6, imageUrl: harmonizing, title: 'HARMONIZING DESIGNS' },
  { id: 7, imageUrl: empowering, title: 'EMPOWERING CREATIVITY' },
];

const Essence = () => {
  return (
    <>
    <section id='essence'>
    <Container >
        <Heading heading={"THE ESSENCE OF OUR PURPOSE"} />
        <div className="outercomb pt-3 pb-5">
          <ul className="honeycomb">
            {honeycombData.map(item => (
              <li key={item.id} className="honeycomb-cell">
                <Image className="honeycomb-cell__image" src={item.imageUrl} sizes="80vw" width={0}
                  height={0} alt={item.title} />

                <div className="honeycomb-cell__title px-2">{item.title}</div>
              </li>
            ))}
            <li className="honeycomb-cell honeycomb__placeholder"></li>
          </ul>
        </div>
      </Container>
    </section>
     
    </>
  );
}

export default Essence;

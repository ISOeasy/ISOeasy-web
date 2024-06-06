import React from 'react';
import Image from 'next/image';
import Heading from '../components/shared/Heading';
import { Container } from 'react-bootstrap';
const honeycombData = [
  { id: 1, imageUrl: "/1.gif", title: 'CRAFTING YOUR VISION' },
  { id: 2, imageUrl: "/2.gif", title: 'SHAPE YOUR IDEAS' },
  { id: 3, imageUrl: "/sucess.gif", title: 'CRAFTING DYNAMIC DESIGNS' },
  { id: 4, imageUrl: "/4.gif", title: 'CANVAS OF CREATION' },
  { id: 5, imageUrl: "/5.gif", title: `SHAPING TOMORROWS'S PATH` },
  { id: 6, imageUrl: "/6.gif", title: 'HARMONIZING DESIGNS' },
  { id: 7, imageUrl: "/7.gif", title: 'EMPOWERING CREATIVITY' },
];

const Essence = () => {
  return (
    <>
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
    </>
  );
}

export default Essence;

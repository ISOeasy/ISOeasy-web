import React from 'react';
import Image from 'next/image';
import Heading from '../components/shared/Heading';
import { Container } from 'react-bootstrap';
const honeycombData = [
  { id: 1, imageUrl: "/1.gif", title: 'FASTEST RESPONSE TIMES' },
  { id: 2, imageUrl: "/2.gif", title: 'AUTHENTIC RELATIONSHIPS' },
  { id: 3, imageUrl: "/sucess.gif", title: 'SUCCESS THROUGH COMMUNICATION' },
  { id: 4, imageUrl: "/4.gif", title: 'STRATEGIC SOLUTIONS' },
  { id: 5, imageUrl: "/5.gif", title: 'TRUSTWORTHINESS' },
  { id: 6, imageUrl: "/6.gif", title: 'ELEVATE EVERY EXPERIENCE' },
  { id: 7, imageUrl: "/7.gif", title: 'RELENTLESS OPTIMIZATION' },
];

const Whyus = () => {
  return (
    <>
      <Container >
        <Heading heading={"WHY WE"} />
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

export default Whyus;

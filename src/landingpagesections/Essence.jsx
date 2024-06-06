import React from 'react';
import Image from 'next/image';
import vision from "../assets/vision.jpeg";

const honeycombData = [
  { id: 1, imageUrl: vision, title: 'FASTEST RESPONSE TIMES' },
  { id: 2, imageUrl: "/images/2.gif", title: 'AUTHENTIC RELATIONSHIPS' },
  { id: 3, imageUrl: "/images/sucess.gif", title: 'SUCCESS THROUGH COMMUNICATION' },
  { id: 4, imageUrl: "/images/4.gif", title: 'STRATEGIC SOLUTIONS' },
  { id: 5, imageUrl: "/images/5.gif", title: 'TRUSTWORTHINESS' },
  { id: 6, imageUrl: "/images/6.gif", title: 'ELEVATE EVERY EXPERIENCE' },
  { id: 7, imageUrl: "/images/7.gif", title: 'RELENTLESS OPTIMIZATION' },
];

const Essence = () => {
  return (
    <>
      <div className="container">
        <div className="capabilities pt-3 pb-5">
          <h2>WHY SEMANTIC TRIBE</h2>
        </div>

        <div className="outercomb pt-3 pb-5">
          <ul className="honeycomb">
            {honeycombData.map(item => (
              <li key={item.id} className="honeycomb-cell">
                <img
                  className="honeycomb-cell__image"
                  src={item.imageUrl}
                  alt={item.title}
                  width={500}
                  height={500}
                />
                <div className="honeycomb-cell__title px-2">{item.title}</div>
              </li>
            ))}
            <li className="honeycomb-cell honeycomb__placeholder"></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Essence;

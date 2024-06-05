import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const capabilitiesData = [
  {
    title: 'Web Development',
    description: 'Craft visually stunning and interactive websites that leave a lasting impression. ',
    image:"/web.gif"
  },
  {
    title: 'Mobile App Development',
    image:"/mobile.gif",
    description: 'Transform your unique app ideas into user-friendly and engaging mobile applications. ',
  },
  {
    title: 'UI/UX Design',
    image:"/ui.gif",
    description: 'Blend aesthetics with user-friendly functionality for designs that stand out. ',
  },
  {
    title: 'Cloud & Devops Services',
    image:"/cloud.gif",
    description: 'Use the strength of the cloud for smart solutions, making sure everything runs smoothly. ',
  },
  {
    title: 'Game Development',
    image:"/game.gif",
    description: 'Dive your audience into exciting gaming adventures with our skilled game development services. ',
  },
  {
    title: 'Blockchain Development',
    image:"/blockchain.gif",
    description: 'Explore innovative decentralized solutions that bring a fresh perspective to your business. ',
  },
  

];

const Offer = () => {
  return (
    <>
      <div className="container py-5">
      
        <div className="capabilities pt-3 pb-5">
          <h2>SOME OF OUR SERVICES</h2>
        </div>

        <div className="row justify-content-around">
          {capabilitiesData.map((capability, index) => (
            <div className="col-lg-4 py-2" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front pt-2">
                    <Image src={capability.image} height={100} width={100} alt={`We offer ${capability.title}`} />
                    <h3 className="pt-4">{capability.title}</h3>
                  </div>
                  <div className="flip-card-back px-5 pt-3">
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-end pt-5">
          <Link href={'/services'}>
            <button class=" custom-btn-home btn-50"><span>View All</span></button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Offer;

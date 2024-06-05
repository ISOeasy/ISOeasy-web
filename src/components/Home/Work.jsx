import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
const projects = [
  {
    title: 'Dobie Dog',
    description: 'We developed game website and UI/UX for dobiedog',
    href: '/product/dobiedog',
    image: "dobie.jpg"
  },
  {
    title: 'Bangla Bazar',
    description: 'Application and design services for Bangla Bazar, serving Deshi customers globally',
    href: "/product/BanglaBazar",
    image: "bangla.jpg"
  },
  {
    title: 'Dado Gym',
    description: 'Dado Gym: Muay Thai excellence since 1990. Join us for fitness and mastery in Zürich.',
    href: "/product/Dadogym",
    image: "gym.png"
  },
  {
    title: 'Joyeria',
    description: 'Online perfume store with designer-inspired scents for diverse preferences.',
    href: "/product/joyeria",
    image:"joyeria.png",
},
{
    title: 'Raldor',
    description: 'Explore diverse footwear for all genders and ages. User-friendly site, convenient payment options for seamless online shopping.',
    href: "/product/raldor",
    image:"raldor.png",
},
{
    title: '366 Degree Fit',
    description: '366° Fitness Studio and Research Center: A hub for functional training, fitness innovation, and invention.',
    href: "/product/degreefit",
    image:"degree.png",
},


];

const Work = () => {
  return (
    <>
      <div className="container pt-5 pb-2">
        <div className="capabilities pt-3 pb-5">
          <h2>SOME OF OUR WORK</h2>
        </div>
        <div className="row">
          {projects.map((projects, index) => (
            <div className="col-lg-4" key={index}>
              <Link href={projects.href} style={{textDecoration:"none"}}>
                <div className=" projects border-0">
                  <div className="imagewrapper" >
                    {/* <Image className='zoomin' src={projects.image} alt="" title="" width="100" height="100" layout="responsive" objectFit="contain" /> */}
                  </div>
                  <div className='py-3 px-2 text-black' >
                    <h5>{projects.title}</h5>
                    <p>{projects.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-end pt-5">
          <Link href={'/casestudies'}>
            <button class="custom-btn-home btn-50"><span>View All</span></button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Work
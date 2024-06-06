import Hero from '@/components/Home/Hero'
import React from 'react'
import "./home.css"
import Offer from '@/components/Home/Offer'
import Whyus from '@/components/Home/Whyus'
import Who from '@/components/Home/Who'
import Counter from '@/components/Home/Counter'
import Work from '@/components/Home/Work'
import ContactForm from '@/components/Home/ContactForm'


const page = () => {
  return (
    <>
      <Hero />
      <Who />
      <Counter />
      <Offer />
      <Work />
      <Whyus />
      <ContactForm/>

    </>
  )
}

export default page
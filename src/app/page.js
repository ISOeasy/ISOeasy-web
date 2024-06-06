import React from 'react'
import ContactForm from '@/landingpagesections/ContactForm'
import Counter from '@/landingpagesections/Counter'
import Hero from '@/landingpagesections/Hero'
import Offer from '@/landingpagesections/Offer'
import Whyus from '@/landingpagesections/Whyus'
import Vision from '@/landingpagesections/Vision'
import FeaturedDesigns from '@/landingpagesections/FeaturedDesigns'

const page = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Counter />
      <Offer />
      <FeaturedDesigns/>
      <Whyus />
      <ContactForm />

    </>
  )
}

export default page
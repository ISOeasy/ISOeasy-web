import React from 'react'
import ContactForm from '@/landingpagesections/ContactForm'
import Counter from '@/landingpagesections/Counter'
import Hero from '@/landingpagesections/Hero'
import Offer from '@/landingpagesections/Offer'
import Vision from '@/landingpagesections/Vision'
import FeaturedDesigns from '@/landingpagesections/FeaturedDesigns'
import Essence from '@/landingpagesections/ESSENCE'

const page = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Counter />
      <Offer />
      <FeaturedDesigns/>
      <Essence/>
      <ContactForm />

    </>
  )
}

export default page
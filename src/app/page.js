import React from 'react'
import ContactForm from '@/landingpagesections/ContactForm'
import Counter from '@/landingpagesections/Counter'
import Hero from '@/landingpagesections/Hero'
import Vision from '@/landingpagesections/Vision'
import FeaturedDesigns from '@/landingpagesections/FeaturedDesigns'
import Essence from '@/landingpagesections/Essence'
import Provisions from '@/landingpagesections/Provisions'

const page = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Counter />
      <Provisions/>
      <FeaturedDesigns/>
      <Essence/>
      <ContactForm />

    </>
  )
}

export default page
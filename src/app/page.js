import React from 'react'
import ContactForm from '@/landingpagesections/ContactForm'
import Counter from '@/landingpagesections/Counter'
import Hero from '@/landingpagesections/Hero'
import Offer from '@/landingpagesections/Offer'
import Who from '@/landingpagesections/Who'
import Whyus from '@/landingpagesections/Whyus'
import Work from '@/landingpagesections/Work'

const page = () => {
  return (
    <>
      <Hero />
      <Who />
      <Counter />
      <Offer />
      <Work />
      <Whyus />
      <ContactForm />

    </>
  )
}

export default page
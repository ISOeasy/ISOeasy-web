
import React from 'react'
import "./contact.css"
import Contactform from '@/components/contact/Contactform'
import Location from '@/components/contact/Location'
import Contactbanner from '@/components/contact/Contactbanner'
export const metadata = {
    title: 'SemanticTribe | Contact',
    description: 'Get in touch with us to explore how our dedicated team can help bring your software ideas to life.',
  }


const page = () => {
    return (
        <>

    
           <div style={{background:"#002338"}}>

            <Contactbanner/>
            <Location/>
            <Contactform/>
           </div> 
        </>
    )
}

export default page
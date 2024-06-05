import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Calendly = () => {
    return (
        <>
            <div className="meeting text-center">
                <p>Come And Join</p>
                <h1>BOOK YOUR
                    MEETING NOW</h1>
                <hr className='small-line' />
            </div>
            <div className="row justify-content-between py-3">

                <div className="col-lg-8 order-lg-0 order-1">
                    <div className="calendly pt-3 text-lg-start text-center">
                        <h2>SELECT YOUR TIME SLOT</h2>
                        <p className='py-2'>We appreciate your interest in meeting with us. Please select a convenient time slot using the Calendly link below to schedule a meeting and discuss how we can collaborate towards project success.</p>
                        <Link href={'https://calendly.com/inaam-mirza'}>
                            <button class="custom-btn btn-5"><span>Book Now</span></button>
                        </Link>

                    </div>
                </div>
                <div className="col-lg-4 order-lg-1 order-0">
                    <div className="text-center">

                        <Image
                            src="/calendly.jpg"
                            width={250}
                            height={250}
                            alt='ceo'
                            className='ceo-rounded'
                            style={{ borderRadius: "150px" }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendly
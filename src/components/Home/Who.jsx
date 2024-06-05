import Image from 'next/image'
import React from 'react'
const Who = () => {
    return (
        <>
            <div className="container pt-2">

                <div className="row justify-content-around">

                    <div className="col-lg-6">
                        <div className="who py-5">
                            <h2>WHO WE ARE</h2>
                            <p className='text-justify'>
                                We turn your digital dreams into reality, providing top-tier tech solutions to empower your business and enhance user experiences. Our expertise spans a wide range of services, including web and mobile applications, custom software development, staff augmentation, project management, and social media marketing. With a relentless focus on innovation, we deliver cutting-edge solutions that transform concepts into robust software solutions. Let us be your partner in making your digital dream a reality.
                            </p>
                            <div className="text-start">

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5">

                   

                        <div className="text-center">
                            <Image
                                src="/earth.gif"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt='team'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Who
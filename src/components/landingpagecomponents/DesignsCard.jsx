import Image from 'next/image'
import React from 'react'

const DesignsCard = ({ image, title, description }) => {
    return (
        <>

            <div className=" projects border-0">
                <div className="imagewrapper" >
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image
                            alt={title}
                            src={image}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                </div>
                <div className='py-3 px-2 text-black' >
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default DesignsCard
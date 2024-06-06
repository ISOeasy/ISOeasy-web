import Image from 'next/image'
import React from 'react'

const FeaturedCard = ({ image, title, description }) => {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front pt-2">
                        <Image src={image} height={100} width={100} alt={title} />
                        <h3 className="pt-4">{title}</h3>
                    </div>
                    <div className="flip-card-back px-5 pt-3">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FeaturedCard
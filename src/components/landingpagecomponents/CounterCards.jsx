import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup';

const CounterCards = ({ image, text, end, suffix }) => {

    return (
        <>
            <div className="counter text-center pb-5 pb-lg-0">
                <Image src={image} width={100} height={100} alt="" />
                <h1 style={count}><CountUp start={0} end={end} duration={10} suffix={suffix} /></h1>
                <h5>{text}</h5>
            </div>
        </>
    )
}
const count = {
    fontWeight: "700",
    letterSpacing: "1.2px",
    lineHeight: "1.2",
    padding: "10px 0"
};

export default CounterCards
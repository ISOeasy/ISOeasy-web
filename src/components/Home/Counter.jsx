"use client"
import React from 'react'
import CountUp from 'react-countup';
import Image from 'next/image';

const Counter = () => {
    const count = {
        fontWeight: "700",
        letterSpacing: "1.2px",
        lineHeight: "1.2",
        padding: "20px 0"
    };
    return (

        <div className="counterbg" style={{ background: "#002338", color: "#FDC305" }}>

            <div className="container">

                <div className="row py-5">
                    <div className="col-lg-3">
                        <div className="counter text-center">
                        <Image src="/completed.gif" width={100} height={100} alt="" />
                            <h1 style={count}><CountUp start={0} end={100} duration={10} suffix="+" /></h1>
                            <h5>PROJECTS  COMPLETED</h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="counter text-center">
                        <Image src='/happy.gif' width={100} height={100} alt="" />
                            <h1 style={count}><CountUp start={0} end={100} duration={10} suffix="%" /></h1>
                            <h5>HAPPY  CLIENTS</h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="counter text-center">
                        <Image src='/commits.gif' width={100} height={100} alt="" />
                            <h1 style={count}><CountUp start={0} end={1000} duration={10} suffix="+" /></h1>
                            <h5>CODE COMMITS</h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="counter text-center">
                        <Image src="/reviews.gif" width={100} height={100} alt="" />
                            <h1 style={count}><CountUp start={0} end={500} duration={10} suffix="+" /></h1>
                            <h5>POSITIVE REVIEWS</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Counter
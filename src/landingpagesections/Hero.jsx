"use client"
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";
import { loadFull } from "tsparticles";

export default function Hero() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>
            <div className="py-5" style={{ background: "#002338" }}>
                <div id="particles-container" >
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            fpsLimit: 30,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: false,
                                        mode: "push"
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse"
                                    },
                                    resize: false
                                },
                                modes: {
                                    push: {
                                        quantity: 2
                                    },
                                    repulse: {
                                        distance: 50,
                                        duration: 0.4
                                    }
                                }
                            },
                            particles: {
                                color: {
                                    value: "#FDC307"
                                },
                                links: {
                                    color: "#FDC307",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1
                                },
                                collisions: {
                                    enable: false
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce"
                                    },
                                    random: false,
                                    speed: 1,
                                    straight: false
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800
                                    },
                                    value: 200
                                },
                                opacity: {
                                    value: 0.2
                                },
                                shape: {
                                    type: "circle"
                                },
                                size: {
                                    value: { min: 1, max: 5 }
                                }
                            },
                            detectRetina: true,
                            fullScreen: { enable: false }

                        }}
                    />



                    <div className="text-container ">

                        <div className="header">
                            <h1 >
                                ISO<span style={{ color: "#FFB300" }}>PIPELINE</span>
                            </h1>


                        </div>
                        <TypeAnimation
                            sequence={[

                                'Turning Your Imagination into Tangible Creations.',
                                1000,
                                'Transforming Your Concepts into Concrete Achievements.',
                                1000,
                                'We Bring Your Vision to Life.',
                                1000,
                                'Innovation Meets Implementation: Your Vision, Our Craftsmanship.',
                                1000
                            ]}
                            wrapper="p"
                            speed={80}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />

                    </div>
                </div>
            </div>
        </>

    );
}

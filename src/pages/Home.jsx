import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlock from '../components/core/HomePage/CodeBlock'
import { FiArrowRight } from "react-icons/fi"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructionSection from '../components/core/HomePage/InstructionSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'

const Home = () => {
    return (
        <div>
            {/* Section1 */}

            <div className='relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-between '>

                <Link to='/signup'>

                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95'>

                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>
                                Become an instructor
                            </p>
                            <FaArrowRight />

                        </div>

                    </div>

                </Link>

                <div className='text-4xl text-center font-semibold mt-6'>
                    Empower Your Future with
                    <HighlightText text={"Coding skills"} direction={"bg-gradient-to-b"} gradient={" from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]"} />
                </div>

                <div className='w-[90%] text-center font-bold text-richblack-300 mt-4 text-lg '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis ipsam, deleniti amet quaerat voluptatibus illum magnam voluptatem. Iusto doloremque natus dolores doloribus, magnam exercitationem  nesciunt. Veritatis?
                </div>

                <div className='flex flex-row gap-7 mt-8'>

                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a demo</CTAButton>


                </div>

                <div className='shadow-blue-200 mx-3 my-12'>

                    <video
                        muted
                        autoPlay
                        loop>
                        <source src={Banner} />
                    </video>
                </div>

                {/* codeSection1 */}

                <div className=''>

                    <CodeBlock
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock your
                                <HighlightText text={" coding potential "} />
                                with our online courses
                            </div>
                        }
                        subheading={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis ipsam, deleniti amet quaerat voluptatibus illum magnam voluptatem. Iusto . Veritatis"}

                        ctnbtn1={
                            {
                                btnText: "Try it yourself",
                                linkto: "/singup",
                                active: true,
                            }
                        }

                        ctnbtn2={
                            {
                                btnText: "Learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>\nExample</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-yellow-25"}
                        backgroundGradient={<div className=' codeblock2 absolute'></div>}

                    />


                </div>

                {/* codeSection2 */}
                <div>
                    <CodeBlock
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock your
                                <HighlightText text={" coding potential "} />
                                with our online courses
                            </div>
                        }
                        subheading={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis ipsam, deleniti amet quaerat voluptatibus illum magnam voluptatem. Iusto . Veritatis"}

                        ctnbtn1={
                            {
                                btnText: "Try it yourself",
                                linkto: "/singup",
                                active: true,
                            }
                        }

                        ctnbtn2={
                            {
                                btnText: "Learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>\nExample</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-white"}
                        backgroundGradient={<div className=' codeblock2 absolute'></div>}

                    />
                </div>
                <ExploreMore />
            </div>

        
            {/* Section2 */}

            <div className='bg-pure-greys-5  text-richblack-500'>

                <div className='homepage_bg h-[310px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5  mx-auto justify-between'>
                        <div className='h-[150px] '></div>


                        <div className='flex flex-row gap-7 text-white'>

                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Explore full Catlog
                                    <FiArrowRight />
                                </div>
                            </CTAButton>


                            <CTAButton active={false} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Learn More
                                    <FiArrowRight />
                                </div>
                            </CTAButton>


                        </div>

                    </div>

                </div>


                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col gap-7 justify-between items-center'>


                    <div className='flex flex-row gap-5 mb-10 mt-[95px]'>

                        <div className='text-4xl font-semibold w-[45%]'>
                            Get the skills you need for a
                            <HighlightText text={"job that is in demand."} />
                        </div>

                        <div className='flex flex-col gap-10 w-[40%] items-start'>
                            <div className='text-[16px]'>
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Learn More
                                    <FiArrowRight />
                                </div>
                            </CTAButton>

                        </div>


                    </div>

                    <TimelineSection />

                    <LearningLanguageSection />



                </div>


            </div>

            {/* Section3 */}

            <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                <InstructionSection />

                <h2 className='text-center text-xl lg:text-4xl font-semibold mt-10'>Review from other learners</h2>
                {/* <ReviewSlider /> */}

            </div>

            {/* <ReviewSlider /> */}

            {/* Footer */}

            <Footer />

        </div>
    )
}

export default Home
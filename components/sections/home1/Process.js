'use client'
import { useState } from "react"
import Link from "next/link"


export default function Process(){

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <> 

        <section className="process-section pt_120 pb_90">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Process</span>
                    <h2 className="title-animation">How It Works?</h2>
                </div>
                <div className="tabs-box">
                    <ul className="tab-btns tab-buttons">
                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}><i className="far fa-user"></i>For Talents</li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}><i className="fas fa-briefcase"></i>For Business</li>
                    </ul>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                                    <div className="processing-block-one">
                                        <div className="inner-box">
                                            <span className="count-text">1</span>
                                            <h3><Link href="/">Sign up, It's Free!</Link></h3>
                                            <p>Our team will set up your account and help you build job to  easy-to-use web dashboard.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                                    <div className="processing-block-one">
                                        <div className="inner-box">
                                            <span className="count-text">2</span>
                                            <h3><Link href="/">Post jobs in minutes</Link></h3>
                                            <p>Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                                    <div className="processing-block-one">
                                        <div className="inner-box">
                                            <span className="count-text">3</span>
                                            <h3><Link href="/">Review Your Staff</Link></h3>
                                            <p>View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                                    <div className="processing-block-one">
                                        <div className="inner-box">
                                            <span className="count-text">3</span>
                                            <h3><Link href="/">Review Your Staff</Link></h3>
                                            <p>View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                                    <div className="processing-block-one">
                                        <div className="inner-box">
                                            <span className="count-text">2</span>
                                            <h3><Link href="/">Post jobs in minutes</Link></h3>
                                            <p>Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                                    <div className="processing-block-one">
                                        <div className="inner-box">
                                            <span className="count-text">1</span>
                                            <h3><Link href="/">Sign up, It's Free!</Link></h3>
                                            <p>Our team will set up your account and help you build job to  easy-to-use web dashboard.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

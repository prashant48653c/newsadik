'use client'
import { useState } from "react"
import Link from "next/link"


export default function Dueal(){

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <> 

        <section className="dueal-section p_relative alternat-2 pt_120 pb_120">
            <div className="bg-color"></div>
            <div className="shape">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
                <div className="shape-4"></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_three">
                            <div className="content-box mr_150">
                                <div className="sec-title pb_30 sec-title-animation animation-style2">
                                    <span className="sub-title mb_10 title-animation">General Faqs</span>
                                    <h2 className="title-animation">Frequently Asked Questions</h2>
                                </div>
                                <ul className="accordion-box">
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>How Can I Prepare for an Interview?</h4>
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>To prepare for an interview, research the company, understand the job role and responsibilities, and prepare questions to ask the interviewer.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>Hiring Managers and Candidates?</h4>
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>To prepare for an interview, research the company, understand the job role and responsibilities, and prepare questions to ask the interviewer.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>Clarifying Recruitment Concepts?</h4>
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>To prepare for an interview, research the company, understand the job role and responsibilities, and prepare questions to ask the interviewer.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>Employers look for in candidates?</h4>
                                        </div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>To prepare for an interview, research the company, understand the job role and responsibilities, and prepare questions to ask the interviewer.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                            <div className="content-box ml_100">
                                <div className="sec-title light pb_35 sec-title-animation animation-style2">
                                    <span className="sub-title mb_10 title-animation">The Process</span>
                                    <h2 className="title-animation">How it Works</h2>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item">
                                        <span className="count-text">1</span>
                                        <h3><Link href="/index-2">Sign up, It's Free!</Link></h3>
                                        <p>Our team will set up your account and help you build job to  easy-to-use web dashboard.</p>
                                    </div>
                                    <div className="single-item">
                                        <span className="count-text">2</span>
                                        <h3><Link href="/index-2">Find best Deals and Invest</Link></h3>
                                        <p>Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.</p>
                                    </div>
                                    <div className="single-item">
                                        <span className="count-text">3</span>
                                        <h3><Link href="/index-2">Get you profit back</Link></h3>
                                        <p>View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.</p>
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

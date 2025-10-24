'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { useState } from "react"


export default function Faq_Page() {

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
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Frequently Asked Question">
                <section className="testimonial-page-section pt_110 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_three">
                                    <div className="content-box">
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
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box ml_70">
                                    <figure className="image image-hov-one"><img src="assets/images/resource/faq-1.jpg" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="download-section alternat-3 pb_120">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>The 2024 guide for Optimal Content <span>Management</span></h2>
                                        <ul className="list-item mb_30">
                                            <li>Start by explaining the fundamental concepts of talent acquisition.</li>
                                            <li> Provide guidance on crafting clear and compelling job descriptions that accurately reflect.</li>
                                            <li>Practical tips for conducting effective interviews, including types of interview questions interview formats.</li>
                                        </ul>
                                        <button type="button" className="theme-btn btn-one">Download E-book</button>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/book-2.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe/>

            </Layout>
        </div>
    )
}
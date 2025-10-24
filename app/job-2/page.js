'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"
import Subscribe from '@/components/sections/home2/Subscribe'
import Service from '@/components/sections/home4/Service'
import Pricing from '@/components/sections/home2/Pricing'

export default function Job_Page_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Job Seekers Overview">

            <Service/>
            <section className="about-section pt_0 pb_120">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                            <div className="video_block_one">
                                <div className="video-box p_relative pt_40 pb_40 pl_30 centred">
                                    <div className="image-layer">
                                        <figure className="image-1"><img src="assets/images/resource/video-3.jpg" alt=""/></figure>
                                        <figure className="image-2"><img src="assets/images/resource/video-2.jpg" alt=""/></figure>
                                    </div>
                                    <div className="video-inner" style={{ backgroundImage: "url(assets/images/resource/video-1.jpg)" }}>
                                        <div className="video-content">
                                            <VideoPopup />
                                            <h6>Watch Video</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box ml_80">
                                    <div className="sec-title pb_20 sec-title-animation animation-style2">
                                        <span className="sub-title mb_10 title-animation">About us</span>
                                        <h2 className="title-animation">The Leading Hospitality Staffing <span>Platform</span></h2>
                                    </div>
                                    <div className="text-box">
                                        <p>This staffing platform provides access to a diverse pool of qualified candidates with specialized skills in areas such as hospitality management.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>This helps businesses maintain service excellence</li>
                                            <li>This scalability allows businesses to adjust staffing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="chooseus-section light-section centred">
                <div className="outer-container p_relative pt_120 pb_90">
                    <div className="shape">
                        <div className="shape-1"></div>
                        <div className="shape-2"></div>
                        <div className="shape-3"></div>
                        <div className="shape-4"></div>
                    </div>
                    <div className="auto-container">
                        <div className="sec-title light pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Why Us</span>
                            <h2 className="title-animation">Why Choose Us</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-4"></i></div>
                                        <h3><Link href="/">Retain Top Talent</Link></h3>
                                        <p>Providing clear career paths and growth opportunities is key to retaining top talent.</p>
                                        <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-5"></i></div>
                                        <h3><Link href="/">Stay Compliant</Link></h3>
                                        <p>Educate employees about compliance requirements through regular training</p>
                                        <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-6"></i></div>
                                        <h3><Link href="/">Improve Employee</Link></h3>
                                        <p>Invest in employee training and development programs to enhance skills and knowledge.</p>
                                        <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-33"></i></div>
                                        <h3><Link href="/">Great Support</Link></h3>
                                        <p>We invest in the best to support your productivity and success.</p>
                                        <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Pricing/>
            <Subscribe/>

            </Layout>
        </div>
    )
}
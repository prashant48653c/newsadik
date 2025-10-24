'use client'
import React from 'react'
import VideoPopup from "@/components/elements/VideoPopup"
import CircleText from "../../components/elements/CircleText"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import About from '@/components/sections/home4/About'
import Clients from '@/components/sections/home4/Clients'


export default function Testimonial_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Testimonials">
                
                <About/>
                <section className="testimonial-section pt_120 pb_90">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Testimonials</span>
                            <h2 className="title-animation">Words From Our Partners</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                            <h4>Ashitaka Dai</h4>
                                            <span className="designation">Art Director</span>
                                        </div>
                                        <p>Company and was impressed by the main personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                            <h4>Franklin Bailey</h4>
                                            <span className="designation">Sale Manager</span>
                                        </div>
                                        <p>Recently I went through their recruitment process with Jobaway Company, and I was impressed by how the smooth and efficient these were.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                            <h4>Evan Clement</h4>
                                            <span className="designation">Mahager, Cypertech</span>
                                        </div>
                                        <p>I had a fantastic experience throughout the recruitment process with Jobaway team. The communication was clear, interview process was well-organized</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-6.png" alt=""/></figure>
                                            <h4>Ashitaka Dai</h4>
                                            <span className="designation">Art Director</span>
                                        </div>
                                        <p>The quality of candidates we've received has significantly improved, and the time-to-hire has reduced dramatically. It's a must-have tool for any company</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-7.png" alt=""/></figure>
                                            <h4>Diarmuid Eoin</h4>
                                            <span className="designation">Art Director</span>
                                        </div>
                                        <p>The targeted advertising options and comprehensive candidate profiles have allowed us to connect with highly qualified professionals</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                <div className="testimonial-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                        <div className="author-box">
                                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-8.png" alt=""/></figure>
                                            <h4>Antonio Alex</h4>
                                            <span className="designation">Mahager, Cypertech</span>
                                        </div>
                                        <p>We’ve seen a significant increase in the quality of applicants since using this recruitment site. The detailed profiles and easy-to-use dashboard make managing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Clients/>
                <div className='pb_120'></div>
                <section className="video-section centred pb_120">
                    <div className="auto-container">
                        <div className="inner-container" style={{ backgroundImage: "url(assets/images/background/video-bg.jpg)" }}>
                            <div className="video_block_two">
                                <div className="video-box p_relative">
                                    <div className="video-content">
                                        <div className="curve-text">
                                            <span className="curved-circle"><CircleText text="watch&nbsp;the&nbsp;video&nbsp;right&nbsp;now&nbsp;" radius={67} /></span>
                                        </div>
                                        <VideoPopup />
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
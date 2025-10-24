'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}


export default function Team_Page() {

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
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Our Team">
                <section className="team-section centred pt_110 pb_70">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Our Team</span>
                            <h2 className="title-animation">Meet The Team</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Tom Oliver</Link></h3>
                                            <span className="designation">Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Loenard Barnes</Link></h3>
                                            <span className="designation">Lead Engineer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Gilbert Sherman</Link></h3>
                                            <span className="designation">Sale Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Franklin Bailey</Link></h3>
                                            <span className="designation">Art Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-5.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-5.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Antonio Alex</Link></h3>
                                            <span className="designation">Lead Engineer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-6.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-6.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Diarmuid Eoin</Link></h3>
                                            <span className="designation">Sale Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-7.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-7.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Ashitaka Dai</Link></h3>
                                            <span className="designation">Art Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-8.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-8.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Azizi Dai</Link></h3>
                                            <span className="designation">Assistant Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dueal-section alternat-3 p_relative">
                    <div className="outer-container b_radius_0 p_relative pt_120 pb_120">
                        <div className="bg-color"></div>
                        <div className="shape">
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <div className="shape-3"></div>
                            <div className="shape-4"></div>
                        </div>
                        <div className="auto-container">
                            <div className="row align-items-center">
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
                                    <div className="testimonial-content p_relative ml_130">
                                        <Swiper {...swiperOptions} className="single-item-carousel">
                                            <SwiperSlide>
                                                <div className="testimonial-block-three">
                                                    <div className="inner-box">
                                                        <div className="icon-box"><i className="icon-36"></i></div>
                                                        <h2>Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage</h2>
                                                        <figure className="signature mb_30"><img src="assets/images/icons/signature-1.png" alt=""/></figure>
                                                        <div className="author-box">
                                                            <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                                            <h3>Franklin Bailey</h3>
                                                            <span className="designation">CEO, JobAway</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-block-three">
                                                    <div className="inner-box">
                                                        <div className="icon-box"><i className="icon-36"></i></div>
                                                        <h2>Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage</h2>
                                                        <figure className="signature mb_30"><img src="assets/images/icons/signature-1.png" alt=""/></figure>
                                                        <div className="author-box">
                                                            <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                                            <h3>Franklin Bailey</h3>
                                                            <span className="designation">CEO, JobAway</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="testimonial-block-three">
                                                    <div className="inner-box">
                                                        <div className="icon-box"><i className="icon-36"></i></div>
                                                        <h2>Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage</h2>
                                                        <figure className="signature mb_30"><img src="assets/images/icons/signature-1.png" alt=""/></figure>
                                                        <div className="author-box">
                                                            <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                                            <h3>Franklin Bailey</h3>
                                                            <span className="designation">CEO, JobAway</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="join-section centred pt_120 pb_120">
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="sec-title pb_20 sec-title-animation animation-style2">
                                <span className="sub-title mb_10 title-animation">Join Our Team</span>
                                <h2 className="title-animation">Be Imagine, Be Artistic, and let’s Engage.</h2>
                            </div>
                            <div className="text-box">
                                <p>Join our team and be part of a dynamic and forward-thinking organization where <br />your talents and ambitions are valued and nurtured.</p>
                                <Link href="/contact" className="theme-btn btn-one">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe/>

            </Layout>
        </div>
    )
}
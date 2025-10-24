'use client'
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

        <section className="dueal-section alternat-3 p_relative pl_100 pr_100">
            <div className="outer-container p_relative pt_120 pb_120">
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

        </>
    )
}

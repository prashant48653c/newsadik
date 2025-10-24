'use client'
import React from 'react'
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

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
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

export default function Testimonial(){

    return (
    <> 
       <section className="testimonial-style-three">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape">
                        <div className="shape-1"></div>
                        <div className="shape-2"></div>
                    </div>
                    <Swiper {...swiperOptions} className="single-item-carousel">
                        <SwiperSlide>
                            <div className="testimonial-block">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon-36"></i></div>
                                    <h2>Company was impressed by the personal approach of their recruitment team for the improvement. They kept informed at every stage of the task.</h2>
                                    <h3>Franklin Bailey</h3>
                                    <span className="designation">CEO, JobAway</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon-36"></i></div>
                                    <h2>Company was impressed by the personal approach of their recruitment team for the improvement. They kept informed at every stage of the task.</h2>
                                    <h3>Franklin Bailey</h3>
                                    <span className="designation">CEO, JobAway</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block">
                                <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon-36"></i></div>
                                    <h2>Company was impressed by the personal approach of their recruitment team for the improvement. They kept informed at every stage of the task.</h2>
                                    <h3>Franklin Bailey</h3>
                                    <span className="designation">CEO, JobAway</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className='nav-style-one'>
                            <div className="owl-nav">
                                <button type="button" className="owl-prev"><span className="icon-34"></span></button>
                                <button type="button" className="owl-next"><span className="icon-35"></span></button>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    </>
  )
}

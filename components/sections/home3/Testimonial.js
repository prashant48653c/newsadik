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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial(){

    return (
    <> 
       <section className="testimonial-style-two pt_120 pb_120">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Testimonials</span>
                    <h2 className="title-animation">Love From Users</h2>
                </div>
                <div className='slider-content p_relative'>
                    <Swiper {...swiperOptions} className="two-item-carousel">
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <h4>Evan Clement</h4>
                                        <span className="designation">HR Assistant, NFL</span>
                                    </div>
                                    <p>Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all the information I needed to succeed.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                        <h4>Maharan Depaak</h4>
                                        <span className="designation">CEO, Amaban</span>
                                    </div>
                                    <p>Recently I went through their recruitment process with Jobaway Company, and I was impressed by how the smooth and efficient these were.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <h4>Evan Clement</h4>
                                        <span className="designation">HR Assistant, NFL</span>
                                    </div>
                                    <p>Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all the information I needed to succeed.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-two">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                        <h4>Maharan Depaak</h4>
                                        <span className="designation">CEO, Amaban</span>
                                    </div>
                                    <p>Recently I went through their recruitment process with Jobaway Company, and I was impressed by how the smooth and efficient these were.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="owl-dots">
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

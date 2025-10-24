'use client'
import React from 'react'
import Link from "next/link"
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Chooseus(){
    return (
        <> 
            <section className="chooseus-style-three pt_120 pb_90">
                <div className="auto-container">
                    <div className='inner-container p_relative'>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-12 col-sm-12 title-column">
                                <div className="sec-title pb_60 sec-title-animation animation-style2">
                                    <span className="sub-title mb_10 title-animation">Why Us</span>
                                    <h2 className="title-animation">Why People Choose Us</h2>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 content-column">
                                <Swiper {...swiperOptions} className="three-item-carousel">
                                    <SwiperSlide>
                                        <div className="chooseus-block-one">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-4"></i></div>
                                                <h3><Link href="/index-5">Stay Compliant</Link></h3>
                                                <p>Educate employees about compliance requirements through regular training</p>
                                                <div className="link"><Link href="/index-5">Learn More<i className="icon-7"></i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="chooseus-block-one">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-5"></i></div>
                                                <h3><Link href="/index-5">Improve Employee</Link></h3>
                                                <p>Invest in employee training and development programs to enhance skills and knowledge.</p>
                                                <div className="link"><Link href="/index-5">Learn More<i className="icon-7"></i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="chooseus-block-one">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-6"></i></div>
                                                <h3><Link href="/index-5">Great Support</Link></h3>
                                                <p>We invest in the best to support your productivity and success.</p>
                                                <div className="link"><Link href="/index-5">Learn More<i className="icon-7"></i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="chooseus-block-one">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-4"></i></div>
                                                <h3><Link href="/index-5">Stay Compliant</Link></h3>
                                                <p>Educate employees about compliance requirements through regular training</p>
                                                <div className="link"><Link href="/index-5">Learn More<i className="icon-7"></i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="chooseus-block-one">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-5"></i></div>
                                                <h3><Link href="/index-5">Improve Employee</Link></h3>
                                                <p>Invest in employee training and development programs to enhance skills and knowledge.</p>
                                                <div className="link"><Link href="/index-5">Learn More<i className="icon-7"></i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="chooseus-block-one">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className="icon-6"></i></div>
                                                <h3><Link href="/index-5">Great Support</Link></h3>
                                                <p>We invest in the best to support your productivity and success.</p>
                                                <div className="link"><Link href="/index-5">Learn More<i className="icon-7"></i></Link></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper> 
                                <div className="nav-style-one">
                                    <div className='owl-nav'>
                                        <button type="button" className="owl-prev"><span className="icon-34"></span></button>
                                        <button type="button" className="owl-next"><span className="icon-35"></span></button>
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

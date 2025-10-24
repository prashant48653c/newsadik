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

export default function Banner(){
    return (
        <> 
            <section className="banner-style-four p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}></div>
                            <div className="shape-box">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="upper-text">Top Agency</span>
                                    <h2>Discover Your Next <span>Career Move</span> with JobAway</h2>
                                    <p>Implementing a robust employee referral program can be a creative and effective way to recruit at scale.</p>
                                    <div className="btn-box">
                                        <Link href="/index-4" className="theme-btn banner-btn mr_20">Hire Talents Now</Link>
                                        <Link href="/index-4" className="theme-btn banner-btn-two"><span>Find Works</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-5.jpg)" }}></div>
                            <div className="shape-box">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="upper-text">Top Agency</span>
                                    <h2>Discover Your Next <span>Career Move</span> with JobAway</h2>
                                    <p>Implementing a robust employee referral program can be a creative and effective way to recruit at scale.</p>
                                    <div className="btn-box">
                                        <Link href="/index-4" className="theme-btn banner-btn mr_20">Hire Talents Now</Link>
                                        <Link href="/index-4" className="theme-btn banner-btn-two"><span>Find Works</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                            <div className="shape-box">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="upper-text">Top Agency</span>
                                    <h2>Discover Your Next <span>Career Move</span> with JobAway</h2>
                                    <p>Implementing a robust employee referral program can be a creative and effective way to recruit at scale.</p>
                                    <div className="btn-box">
                                        <Link href="/index-4" className="theme-btn banner-btn mr_20">Hire Talents Now</Link>
                                        <Link href="/index-4" className="theme-btn banner-btn-two"><span>Find Works</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className='owl-dots'>
                        <div className='swiper-pagination'></div>
                    </div>
                </Swiper> 
            </section>
        </>
  )
}

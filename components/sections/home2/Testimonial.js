'use client'
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function Testimonial(){

    return (
        <> 

        <section className="testimonial-section pt_120 pb_90">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Testimonials</span>
                    <h2 className="title-animation">Words From Our Partners</h2>
                </div>
                <Swiper {...swiperOptions} className="tab-btns tab-buttons tab-btn-carousel">
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        </>
    )
}

'use client'
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}


export default function Clients(){
    return (
        <> 

        <section className="clients-style-two centred pt_110 pb_120">
            <div className="auto-container">
                <div className="title-text">
                    <h3>Trusted by the next-gen industry leaders</h3>
                </div>
                <Swiper {...swiperOptions} className="tab-btns tab-buttons tab-btn-carousel">
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-6.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-7.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-8.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-9.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-10.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-6.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-7.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-8.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-9.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-10.png" alt=""/></Link></figure>
                    </SwiperSlide>
                </Swiper> 
            </div>
        </section>

        </>
    )
}

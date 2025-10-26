"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home4/About";
import Clients from "@/components/sections/home3/Clients";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Subscribe from "@/components/sections/home2/Subscribe";
import Industries from "@/components/sections/home1/Industries";
import toast from "react-hot-toast";
import { getTestimonial } from "@/service/testimonial.service";
import Chooseus from "@/components/sections/home1/Chooseus";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    1199: { slidesPerView: 2 },
    1350: { slidesPerView: 2 },
  },
};

export default function About_Page() {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonial() {
      try {
        const response = await getTestimonial();
        if (response && Array.isArray(response)) {
          setTestimonial(response);
        } else {
          toast.error("No testimonials found");
        }
      } catch (error) {
        toast.error("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonial();
  }, []);

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About Us">
        <About />

        {/* WHY US SECTION */}
      <Chooseus/>

        <Industries />

        {/* TESTIMONIAL SECTION */}
        <section className="testimonial-style-two pt_120 pb_120">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}
          ></div>
          <div className="auto-container">
            <div className="sec-title centred pb_60 sec-title-animation animation-style2">
              <span className="sub-title mb_10 title-animation">Testimonials</span>
              <h2 className="title-animation">Love From Users</h2>
            </div>

            <div className="slider-content p_relative">
              {loading ? (
                <p className="text-center">Loading testimonials...</p>
              ) : testimonial.length === 0 ? (
                <p className="text-center">No testimonials available.</p>
              ) : (
                <Swiper {...swiperOptions} className="two-item-carousel">
                  {testimonial.map((testi, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-block-two">
                        <div className="inner-box">
                          <div className="icon-box">
                            <img src="assets/images/icons/icon-11.png" alt="quote" />
                          </div>
                          <div className="author-box">
                            <figure className="thumb-box">
                              <img
                                src={testi.image || "assets/images/resource/testimonial-1.png"}
                                alt={testi.name || "user"}
                              />
                            </figure>
                            <h4>{testi.name || "Anonymous"}</h4>
                            <span className="designation">
                              {testi.designation || ""}
                            </span>
                          </div>
                          <p>{testi.message || ""}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <div className="owl-dots">
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

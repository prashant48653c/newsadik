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
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="About Us">
        <About />

        {/* WHY US SECTION */}
        <section className="chooseus-section alternat-3 pt_120 pb_90">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}
          ></div>
          <div className="auto-container">
            <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
              <span className="sub-title mb_10 title-animation">Why Us</span>
              <h2 className="title-animation">Why Choose Us</h2>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                {[
                  {
                    icon: "icon-4",
                    title: "Retain Top Talent",
                    text: "Providing clear career paths and growth opportunities is key to retaining top talent.",
                  },
                  {
                    icon: "icon-5",
                    title: "Stay Compliant",
                    text: "Educate employees about compliance requirements through regular training.",
                  },
                  {
                    icon: "icon-6",
                    title: "Improve Employee",
                    text: "Invest in employee training and development programs to enhance skills and knowledge.",
                  },
                ].map((item, i) => (
                  <div key={i} className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                    <div className="chooseus-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className={item.icon}></i>
                        </div>
                        <h3>
                          <Link href="/">{item.title}</Link>
                        </h3>
                        <p>{item.text}</p>
                        <div className="link">
                          <Link href="/">
                            Learn More<i className="icon-7"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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

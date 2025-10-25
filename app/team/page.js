"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Subscribe from "@/components/sections/home2/Subscribe";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTeam } from "@/service/team.service";
import toast from "react-hot-toast";

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
    1199: { slidesPerView: 1 },
    1350: { slidesPerView: 1 },
  },
};

export default function Team_Page() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await getTeam();
        if (response && Array.isArray(response)) {
          setTeam(response);
        } else {
          toast.error("No team available at the moment!");
        }
      } catch (error) {
        toast.error("Failed to load team members!");
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  const handleToggle = (key) => {
    setIsActive((prev) => ({
      status: prev.key !== key,
      key,
    }));
  };

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Our Team">
        <section className="team-section centred pt_110 pb_70">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
          ></div>
          <div className="auto-container">
            <div className="sec-title pb_60 sec-title-animation animation-style2">
              <span className="sub-title mb_10 title-animation">Our Team</span>
              <h2 className="title-animation">Meet The Team</h2>
            </div>

            <div className="row clearfix">
              {loading ? (
                <p className="text-center w-100">Loading team members...</p>
              ) : team.length === 0 ? (
                <p className="text-center w-100">No team members found.</p>
              ) : (
                team.map((member, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-12 team-block"
                  >
                    <div
                      className="team-block-one wow fadeInUp animated"
                      data-wow-delay={`${index * 100}ms`}
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src={
                                member.profileImg ||
                                "assets/images/team/team-1.jpg"
                              }
                              alt={member.name}
                              style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                            />
                          </figure>
                          <figure className="overlay-image">
                            <img
                              src={
                                member.profileImg ||
                                "assets/images/team/team-1.jpg"
                              }
                              alt={member.name}
                              style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "10px",
                              }}
                            />
                          </figure>
                        </div>

                        <div className="lower-content">
                          <h3>
                            <Link href={member.linkedin || "/"}>
                              {member.name || "Unnamed"}
                            </Link>
                          </h3>
                          <span className="designation">
                            {member.role || "Team Member"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* FAQ + Testimonials Section */}
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
                {/* Left Column: FAQs */}
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_three">
                    <div className="content-box mr_150">
                      <div className="sec-title pb_30 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">
                          General Faqs
                        </span>
                        <h2 className="title-animation">
                          Frequently Asked Questions
                        </h2>
                      </div>
                      <ul className="accordion-box">
                        {[
                          "How Can I Prepare for an Interview?",
                          "Hiring Managers and Candidates?",
                          "Clarifying Recruitment Concepts?",
                          "Employers look for in candidates?",
                        ].map((question, i) => (
                          <li
                            key={i}
                            className={`accordion block ${
                              isActive.key === i + 1 ? "active-block" : ""
                            }`}
                          >
                            <div
                              className={`acc-btn ${
                                isActive.key === i + 1 ? "active" : ""
                              }`}
                              onClick={() => handleToggle(i + 1)}
                            >
                              <div className="icon-box">
                                <i className="icon-21"></i>
                              </div>
                              <h4>{question}</h4>
                            </div>
                            <div
                              className={`acc-content ${
                                isActive.key === i + 1 ? "current" : ""
                              }`}
                            >
                              <div className="content">
                                <p>
                                  To prepare for an interview, research the
                                  company, understand the job role and
                                  responsibilities, and prepare questions to ask
                                  the interviewer.
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column: Testimonials Swiper */}
              {/* Right Column: Dynamic Team Member Slider */}
<div className="col-lg-6 col-md-12 col-sm-12 content-column">
  <div className="testimonial-content p_relative ml_130">
    <Swiper {...swiperOptions} className="single-item-carousel">
      {team.map((member, i) => (
        <SwiperSlide key={i}>
          <div className="testimonial-block-three">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-36"></i>
              </div>

              {/* Replace testimonial text with member.title */}
              <h4 className="my-5 text-white">{member.title || "Our valued team member"}</h4>

              

              {/* Member info box */}
              <div className="author-box d-flex align-items-center">
                <figure className="author-thumb m-0 me-3">
                  <img
                    src={member.profileImg || "assets/images/team/team-1.jpg"}
                    alt={member.name}
                    style={{
                      width: "59px",
                      height: "59px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </figure>
                <div>
                  <h3 className="mb-1">{member.name}</h3>
                  <span className="designation">{member.role}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>

        {/* JOIN SECTION */}
        <section className="join-section centred pt_120 pb_120">
          <div className="auto-container">
            <div className="content-box">
              <div className="sec-title pb_20 sec-title-animation animation-style2">
                <span className="sub-title mb_10 title-animation">
                  Join Our Team
                </span>
                <h2 className="title-animation">
                  Be Imagine, Be Artistic, and let’s Engage.
                </h2>
              </div>
              <div className="text-box">
                <p>
                  Join our team and be part of a dynamic and forward-thinking
                  organization where <br /> your talents and ambitions are
                  valued and nurtured.
                </p>
                <Link href="/contact" className="theme-btn btn-one">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Subscribe />
      </Layout>
    </div>
  );
}

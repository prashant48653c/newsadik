'use client'

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home5/Testimonial'
import Subscribe from '@/components/sections/home2/Subscribe'
import { getService } from '@/service/service'
import toast from 'react-hot-toast'

export default function Service_Page() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch services from API
  const fetchServices = async () => {
    try {
      setLoading(true)
      const response = await getService()
      if (response) {
        setServices(response)
      }
    } catch (error) {
      console.error("Error fetching services:", error)
      toast.error("Failed to load services")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Our Solutions">

        <section className="service-section centred pt_110 pb_90">
          <div className="auto-container">
            <div className="sec-title pb_60 sec-title-animation animation-style2">
              <span className="sub-title mb_10 title-animation">What We Provide</span>
              <h2 className="title-animation">Inspiring Staffing Solutions</h2>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <p>Loading services...</p>
              </div>
            ) : (
              <div className="row clearfix services">
                {services.length > 0 ? (
                  services.map((service) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 service-block"
                      key={service.id}
                    >
                      <div
                        className="service-block-one wow fadeInUp animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <Link href={`/service/${service.id}`}>
                                <img
                                  src={service.image || "/assets/images/service/default.jpg"}
                                  alt={service.serviceType}
                                />
                              </Link>
                            </figure>
                            <figure className="overlay-image">
                              <Link href={`/service/${service.id}`}>
                                <img
                                  src={service.image || "/assets/images/service/default.jpg"}
                                  alt={service.serviceType}
                                />
                              </Link>
                            </figure>
                          </div>
                          <div className="lower-content">
                            <h3>
                              <Link href={`/service/${service.id}`}>
                                {service.serviceType}
                              </Link>
                            </h3>
                            <p>{service.heading}</p>
                            <div className="btn-box">
                              <Link
                                href={`/service/${service.id}`}
                                className="theme-btn btn-one"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-5">
                    <p>No services available at the moment.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="dueal-section service-page p_relative pt_110 pb_120">
          <div className="bg-color"></div>
          <div className="shape">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
            <div className="shape-4"></div>
          </div>
          <figure className="image-layer-1 p_absolute l_150 b_0">
            <img src="assets/images/resource/women-1.png" alt="" />
          </figure>
          <figure className="image-layer-2 p_absolute r_150 b_0">
            <img src="assets/images/resource/men-1.png" alt="" />
          </figure>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="hiring-content align-3 mr_60">
                  <h2>Professions Hiring</h2>
                  <p>
                    This dynamic hiring landscape presents a wealth of opportunities for professionals across
                  </p>
                  <Link href="/service" className="theme-btn btn-one">
                    Professions
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="hiring-content light ml_45">
                  <h2>Industries Hiring</h2>
                  <p>
                    The current job market is dynamic, with numerous industries actively seeking new talent
                  </p>
                  <Link href="/service" className="theme-btn btn-one">
                    Industries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
        <div className="pb_120"></div>
        <Subscribe />

      </Layout>
    </div>
  )
}

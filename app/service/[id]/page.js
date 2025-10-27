'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/sections/home2/Subscribe"
import { useParams } from "next/navigation"
import { getService, getServiceById, Service as ServiceType } from "@/service/service"

const fallbackBenefits = [
  { title: "Industry Expertise", desc: "Professionally trained and experienced candidates." },
  { title: "Cost-Effective", desc: "Efficient recruitment without compromising quality." },
  { title: "Cultural Compatibility", desc: "Workers who easily adapt to diverse environments." },
  { title: "Comprehensive Support", desc: "End-to-end onboarding, documentation, and visa help." },
]

export default function Service_Details() {
  const params = useParams()
  const [activeIndex, setActiveIndex] = useState(1)
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleOnClick = (index) => setActiveIndex(index)

   const [services, setServices] = useState([])

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
  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServiceById(Number(params.id))
        if (data) setService(data)
        else setError("Service not found")
      } catch (err) {
        console.error("Error fetching service:", err)
        setError("Failed to load service")
      } finally {
        setLoading(false)
      }
    }
    if (params.id) fetchService()
  }, [params.id])

  if (loading) {
    return (
      <div className="boxed_wrapper">
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Loading...">
          <section className="service-details pt_110 pb_120 text-center">
            <p>Loading service details...</p>
          </section>
        </Layout>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="boxed_wrapper">
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Service Not Found">
          <section className="service-details pt_110 pb_120 text-center">
            <h2 className="text-red-600">{error || "Service not found"}</h2>
          </section>
        </Layout>
      </div>
    )
  }

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle={service.serviceType || "Service Details"}>
        {/* Main Content */}
        <section className="service-details pt_110 pb_120">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Sidebar */}
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="service-sidebar mr_40">
                  <div className="category-widget mb_40">
                  <ul className="category-list clearfix">
  {services && services.length > 0 && services.map((service) => (
    <li key={service.id}>
      <Link href={`/service/${service.id}`}  className={service.id === Number(params.id) ? "current" : ""}>
        {service.serviceType} <i className="icon-42"></i>
      </Link>
    </li>
  ))}
</ul>

                  </div>
                  <div className="download-widget">
                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-24.png)" }}></div>
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="/assets/images/resource/book-3.png" alt="Book" />
                      </figure>
                      <h4>
                        The 2024 guide for Optimal Content <span>Management</span>
                      </h4>
                      <button type="button" className="theme-btn btn-one">Download E-book</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="service-details-content">
                  <div className="sec-title mb_70">
                    <span className="sub-title mb_10">{service.serviceType}</span>
                    <h2>{service.heading}</h2>
                    <p className="mt_20">{service.subheading}</p>
                  </div>

                  <figure className="image-box mb_30">
                    <img src={service.image || "/assets/images/service/service-7.jpg"} alt={service.heading} />
                  </figure>

                  <div className="text-box mb_30">
                    <p className="mb_5">
                      {service.description ||
                        "We provide exceptional staffing solutions designed to meet the unique challenges of your industry."}
                    </p>
                  </div>


                            {/* Remaining photos image2 and image3 */}
                            <div className="row mb_25">
                              <div className="col-md-6">
                                <figure className="image-box">
                                  <img src={service.image2 || "/assets/images/service/service-8.jpg"} alt={service.heading} />
                                </figure>
                              </div>
                              <div className="col-md-6">
                                <figure className="image-box">
                                  <img src={service.image3 || "/assets/images/service/service-9.jpg"} alt={service.heading} />
                                </figure>
                              </div>
                            </div>

                  {/* Advertisements */}

            

                  {service.advertisements && service.advertisements.length > 0 && (
                    <div className="mb_70">
                           <h3 className="mb-4 text-center display-5 fw-bold text-primary">
  Available Hiring
</h3>
                      {service.advertisements.map((ad) => (
                        <div key={ad.id} className="mb_40 text-center">
                          <Image
                            src={ad.image}
                            alt={ad.title}
                            width={700}
                            height={400}
                            className="rounded-lg mx-auto"
                          />
                          <h4 className="mb_20">{ad.title}</h4>

                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tabs */}
                  {service.specialization && service.specialization.length > 0 && (
                    <div className="tabs-box mb_50">
                      <ul className="tab-btns tab-buttons">
                        {service.specialization.slice(0, 3).map((spec, idx) => (
                          <li
                            key={idx}
                            onClick={() => handleOnClick(idx + 1)}
                            className={activeIndex === idx + 1 ? "tab-btn active-btn" : "tab-btn"}
                          >
                             {spec.title}
                          </li>
                        ))}
                      </ul>

                      <div className="tabs-content">
                        {service.specialization.slice(0, 3).map((spec, idx) => (
                          <div
                            key={idx}
                            className={activeIndex === idx + 1 ? "tab active-tab" : "tab"}
                          >
                            <div className="inner-box">
                              <figure className="image-box">
                                <img src={spec.image || service.image} alt={spec.title} />
                              </figure>
                              <div className="content-box">
                                <h6>{spec.title}</h6>
                                <p>{spec.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
             {service.feature && service.feature.length > 0 && (
  <div className="text-box mb-5">
    <h2 className="h4 mb-4 border-bottom pb-2">Key Features</h2>
    <ul className="list-group list-group-flush">
      {service.feature.map((feature, i) => (
        <li key={i} className="list-group-item d-flex align-items-start">
          <i className="bi bi-check-circle-fill text-success me-2"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)}


                  {/* Benefits */}
                  <div className="text-box">
                    <h2 className="mb_20">Benefits</h2>
                    <div className="row clearfix">
                      {(service.benefit?.length ? service.benefit : fallbackBenefits).map((benefit, i) => (
                        <div className="col-md-6 col-sm-12 mb_20" key={i}>
                          <div className="p_20 border rounded">
                            <h5>{benefit.title}</h5>
                            <p className="text-muted">{benefit.subtitle || benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <Subscribe />
      </Layout>
    </div>
  )
}

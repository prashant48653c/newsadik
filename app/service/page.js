'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home5/Testimonial'
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Our Solutions">

            <section className="service-section centred pt_110 pb_90">
                <div className="auto-container">
                    <div className="sec-title pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">What We Provide</span>
                        <h2 className="title-animation">Inspiring Staffing Solutions</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-2"><img src="assets/images/service/service-1.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-2"><img src="assets/images/service/service-1.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-2">Training Session</Link></h3>
                                        <p>These experts guide new employees through interactive workshops</p>
                                        <div className="btn-box"><Link href="/service-details-2" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details"><img src="assets/images/service/service-2.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details"><img src="assets/images/service/service-2.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details">Executive Search</Link></h3>
                                        <p>Our executive search services are customized to meet your specific</p>
                                        <div className="btn-box"><Link href="/service-details" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-6"><img src="assets/images/service/service-3.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-6"><img src="assets/images/service/service-3.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-6">Temporary Jobs</Link></h3>
                                        <p>Apply for our temporary jobs and become part of our talent pool</p>
                                        <div className="btn-box"><Link href="/service-details-6" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-4"><img src="assets/images/service/service-4.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-4"><img src="assets/images/service/service-1.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-4">Payroll Services</Link></h3>
                                        <p>Utilizing a reliable payroll service can significantly improve operational</p>
                                        <div className="btn-box"><Link href="/service-details-4" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-5"><img src="assets/images/service/service-5.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-5"><img src="assets/images/service/service-2.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-5">Workforce System</Link></h3>
                                        <p>This system leverages advanced technologies such as Applicant Tracking</p>
                                        <div className="btn-box"><Link href="/service-details-5" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-3"><img src="assets/images/service/service-6.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-3"><img src="assets/images/service/service-3.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-3">Career Growth</Link></h3>
                                        <p>career growth is about fostering a culture where individuals can achieve</p>
                                        <div className="btn-box"><Link href="/service-details-3" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <figure className="image-layer-1 p_absolute l_150 b_0"><img src="assets/images/resource/women-1.png" alt=""/></figure>
                <figure className="image-layer-2 p_absolute r_150 b_0"><img src="assets/images/resource/men-1.png" alt=""/></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="hiring-content align-3 mr_60">
                                <h2>Professions Hiring</h2>
                                <p>This dynamic hiring landscape presents a wealth of opportunities for professionals across</p>
                                <Link href="/service" className="theme-btn btn-one">Professions</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="hiring-content light ml_45">
                                <h2>Industries Hiring</h2>
                                <p>The current job market is dynamic, with numerous industries actively seeking new talent</p>
                                <Link href="/service" className="theme-btn btn-one">Industries</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial/>
            <div className='pb_120'></div>
            <Subscribe/>

            </Layout>
        </div>
    )
}
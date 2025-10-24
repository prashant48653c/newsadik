'use client'
import React from 'react'
import Link from "next/link"

export default function Service(){
    return (
        <> 
            <section className="service-section centred pt_120 pb_90">
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
                    </div>
                </div>
            </section>
        </>
  )
}

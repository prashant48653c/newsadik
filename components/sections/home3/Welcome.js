'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"

export default function Welcome(){

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
    <> 
       <section className="welcome-section pt_120 pb_120">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Welcome to JobAway</span>
                    <h2 className="title-animation">Modern Day Staffing Agency</h2>
                </div>
                <div className="tabs-box">
                    <ul className="tab-btns tab-buttons">
                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="far fa-user"></i>For Talents</li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="fas fa-briefcase"></i>For Business</li>
                    </ul>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                            <div className="inner-container">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="text-box mb_40">
                                                <h2>An Award Winning Hiring Agency for <span>12 years</span></h2>
                                                <p>Voted the fastest solution to implement the easiest to administer your employee & business.</p>
                                            </div>
                                            <div className="inner-box clearfix">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3><Link href="job-details.html">Easiest Admin</Link></h3>
                                                    <span>Fall 2023</span>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-30"></i></div>
                                                    <h3><Link href="job-details.html">Users love Us</Link></h3>
                                                    <span>Winter 2023</span>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-31"></i></div>
                                                    <h3><Link href="job-details.html">Leader</Link></h3>
                                                    <span>Winter 2023</span>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-32"></i></div>
                                                    <h3><Link href="job-details.html">Best support</Link></h3>
                                                    <span>Winter 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image_block_one">
                                            <div className="image-box pl_65">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-1 mb_16 image-hov-one"><img src="assets/images/resource/welcome-1.jpg" alt=""/></figure>
                                                            <div className="experience-box">
                                                                <h3>12</h3>
                                                                <h4>Year of Experience</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <div className="support-box">
                                                                <div className="icon-box"><i className="icon-28"></i></div>
                                                                <span>Online Support</span>
                                                                <h4><Link href="tel:912556889">+912 (556) 889</Link></h4>
                                                            </div>
                                                            <figure className="image-2 mt_16 image-hov-two"><img src="assets/images/resource/welcome-2.jpg" alt=""/></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                            <div className="inner-container">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="text-box mb_40">
                                                <h2>An Award Winning Hiring Agency for <span>16 years</span></h2>
                                                <p>Voted the fastest solution to implement the easiest to administer your employee & business.</p>
                                            </div>
                                            <div className="inner-box clearfix">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-29"></i></div>
                                                    <h3><Link href="job-details.html">Easiest Admin</Link></h3>
                                                    <span>Fall 2023</span>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-30"></i></div>
                                                    <h3><Link href="job-details.html">Users love Us</Link></h3>
                                                    <span>Winter 2023</span>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-31"></i></div>
                                                    <h3><Link href="job-details.html">Leader</Link></h3>
                                                    <span>Winter 2023</span>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="icon-32"></i></div>
                                                    <h3><Link href="job-details.html">Best support</Link></h3>
                                                    <span>Winter 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image_block_one">
                                            <div className="image-box pl_65">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <figure className="image-1 mb_16 image-hov-one"><img src="assets/images/resource/welcome-1.jpg" alt=""/></figure>
                                                            <div className="experience-box">
                                                                <h3>12</h3>
                                                                <h4>Year of Experience</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <div className="support-box">
                                                                <div className="icon-box"><i className="icon-28"></i></div>
                                                                <span>Online Support</span>
                                                                <h4><Link href="tel:912556889">+912 (556) 889</Link></h4>
                                                            </div>
                                                            <figure className="image-2 mt_16 image-hov-two"><img src="assets/images/resource/welcome-2.jpg" alt=""/></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

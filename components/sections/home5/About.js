'use client'
import React from 'react'
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"
import CircleText from "../../../components/elements/CircleText"

export default function About(){
    return (
        <> 
            <section className="about-style-three about-style-five">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                            <div className="video_block_two">
                                <div className="video-box p_relative pb_100 pr_150 mr_30">
                                    <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt=""/></figure>
                                    <figure className="image image-2 z_1 p_absolute r_0 b_0"><img src="assets/images/resource/about-2.jpg" alt=""/></figure>
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
                                    <div className="video-content">
                                        <div className="curve-text z_2">
                                            <span className="curved-circle"><CircleText text="watch&nbsp;the&nbsp;video&nbsp;right&nbsp;now&nbsp;" radius={67} /></span>
                                        </div>
                                        <VideoPopup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box mr_80">
                                    <div className="sec-title pb_20 sec-title-animation animation-style2">
                                        <span className="sub-title mb_10 title-animation">About us</span>
                                        <h2 className="title-animation">Exploring the benefits of diversity and inclusion</h2>
                                    </div>
                                    <div className="text-box">
                                        <p>Moreover embracing diversity and inclusion can enhance employee engagement and morale. They are more likely</p>
                                        <ul className="list-style-one mb_40 clearfix">
                                            <li>Inclusive teams consider a wider range of viewpoints</li>
                                            <li>Demonstrating a commitment to diversity and inclusion enhances</li>
                                            <li>Embracing diversity aligns with legal and ethical standards</li>
                                        </ul>
                                    </div>
                                    <div className="btn-box"><Link href="/about" className="theme-btn btn-one"><span>Find Works</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

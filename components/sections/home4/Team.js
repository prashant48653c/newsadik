'use client'
import React from 'react'
import Link from "next/link"

export default function Team(){
    return (
        <> 
            <section className="team-section centred pt_120 pb_70">
                <div className="auto-container">
                    <div className="sec-title pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">Our Team</span>
                        <h2 className="title-animation">Meet The Team</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                        <figure className="overlay-image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/index-4">Tom Oliver</Link></h3>
                                        <span className="designation">Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                        <figure className="overlay-image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/index-4">Loenard Barnes</Link></h3>
                                        <span className="designation">Lead Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                        <figure className="overlay-image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/index-4">Gilbert Sherman</Link></h3>
                                        <span className="designation">Sale Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                        <figure className="overlay-image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/index-4">Franklin Bailey</Link></h3>
                                        <span className="designation">Art Director</span>
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

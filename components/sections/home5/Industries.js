'use client'
import React from 'react'
import Link from "next/link"

export default function Industries(){
    return (
        <> 
            <section className="industries-style-five centred pt_120 pb_120">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                <div className="auto-container">
                    <div className="sec-title pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">Industries</span>
                        <h2 className="title-animation">Industries Served</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-1.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-1.jpg)" }}></div>
                                    <h4><Link href="/index-5">Hotel</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-2.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-2.jpg)" }}></div>
                                    <h4><Link href="/index-5">Hospitality</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-3.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-3.jpg)" }}></div>
                                    <h4><Link href="/index-5">Kitchen</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-4.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-4.jpg)" }}></div>
                                    <h4><Link href="/index-5">Retail</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-5.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-5.jpg)" }}></div>
                                    <h4><Link href="/index-5">Events</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-6.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-6.jpg)" }}></div>
                                    <h4><Link href="/index-5">Labor</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-7.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-7.jpg)" }}></div>
                                    <h4><Link href="/index-5">Driving</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                            <div className="industries-block-four">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/industries-8.jpg)" }}></div>
                                    <div className="overlay-bg" style={{ backgroundImage: "url(assets/images/resource/industries-8.jpg)" }}></div>
                                    <h4><Link href="/index-5">Caretaker</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn mt_30"><Link href="/index-5" className="theme-btn btn-one">View All Categories</Link></div>
                </div>
            </section>
        </>
  )
}

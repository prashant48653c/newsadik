import React from 'react'
import Link from "next/link"

export default function Apps(){
    return (
        <> 
            <section className="apps-section pt_120 pb_120">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_four">
                                <div className="content-box">
                                    <div className="sec-title light pb_40 sec-title-animation animation-style2">
                                        <span className="sub-title mb_10 title-animation">Download APp</span>
                                        <h2 className="title-animation">Download Our App</h2>
                                        <p className="title-animation">We use cookies to understand how you use our website and to give you the best possible experience. </p>
                                    </div>
                                    <div className="download-btn">
                                        <Link href="/about" className="apple-store">
                                            <img src="assets/images/icons/icon-12.png" alt=""/>
                                            <span>Download on</span>
                                            App Store
                                        </Link>
                                        <Link href="/about" className="play-store">
                                            <img src="assets/images/icons/icon-5.png" alt=""/>
                                            <span>Get it on</span>
                                            Google Play
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-content">
                    <div className="map-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="map-author">
                        <figure className="author-thumb"><img src="assets/images/resource/author-7.png" alt=""/></figure>
                        <h6>Fayde Carinaste</h6>
                        <span className="rating-box"><img src="assets/images/icons/icon-13.png" alt=""/> 4.96 out of 5</span>
                        <p>Event Server, Bartender, event Set Up</p>
                    </div>
                </div>
            </section>
        </>
  )
}

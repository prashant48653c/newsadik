import React from 'react'
import Link from "next/link"

export default function Banner(){
    return (
        <> 
      <section className="banner-section banner-style-three p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
            <div className="shape">
                <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                <div className="shape-3" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <h2>Discover Your Next Career Move with <span>JobAway</span></h2>
                            <p>Implementing a robust employee referral program can be a creative and effective way to recruit at scale.</p>
                            <div className="btn-box">
                                <Link href="/index-3" className="theme-btn btn-one mr_20"><span>Find Works</span></Link>
                                <Link href="/index-3" className="theme-btn banner-btn">Hire Talents Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-inner">
                            <div className="icon-logo"><img src="assets/images/icons/logo-icon-1.png" alt=""/></div>
                            <div className="image-box mr_15">
                                <figure className="image image-1 mb_15"><img src="assets/images/banner/banner-img-1.jpg" alt=""/></figure>
                                <figure className="image image-2"><img src="assets/images/banner/banner-img-2.jpg" alt=""/></figure>
                            </div>
                            <div className="image-box pt_55">
                                <figure className="image image-3 mb_15"><img src="assets/images/banner/banner-img-3.jpg" alt=""/></figure>
                                <figure className="image image-4"><img src="assets/images/banner/banner-img-4.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

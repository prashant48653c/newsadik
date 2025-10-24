'use client'
import Link from "next/link"


export default function Banner(){
    return (
        <> 

        <section className="banner-section banner-style-two p_relative">
            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
            <div className="pattern-layer-2" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
            <div className="outer-container">
                <div className="content-box">
                    <h2>Creative to Hiring with <span>Thousands Workers</span></h2>
                    <p>Implementing a robust employee referral program can be a creative and effective way to recruit at scale.</p>
                    <div className="btn-box">
                        <Link href="/index-2" className="theme-btn btn-one mr_20"><span>Find Works</span></Link>
                        <Link href="/index-2" className="theme-btn banner-btn">Hire Talents Now</Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

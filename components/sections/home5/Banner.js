'use client'
import React from 'react'
import Link from "next/link"

export default function Banner(){
    return (
        <> 
            <section className="banner-style-five">
                <div className="outer-container clearfix">
                    <div className="left-column">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}></div>
                        <div className="content-box">
                            <h2>I’m Looking for <span>Job</span></h2>
                            <p>Searching for a job can be both exciting and daunting, filled with anticipation and uncertainty.</p>
                            <Link href="/job-details" className="theme-btn banner-btn">Find a Job</Link>
                        </div>
                    </div>
                    <div className="right-column align-3">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-4.jpg)" }}></div>
                        <div className="content-box">
                            <h2>I am an <span>Employer</span></h2>
                            <p>I believe that the key to a successful business lies in valuing each team member's unique strengths.</p>
                            <Link href="/job-details" className="theme-btn banner-btn">Hire Talents</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

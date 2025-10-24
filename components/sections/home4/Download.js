'use client'
import React from 'react'

export default function Download(){
    return (
        <> 
            <section className="download-section alternat-3">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h2>The 2024 guide for Optimal Content <span>Management</span></h2>
                                    <ul className="list-item mb_30">
                                        <li>Start by explaining the fundamental concepts of talent acquisition.</li>
                                        <li> Provide guidance on crafting clear and compelling job descriptions that accurately reflect.</li>
                                        <li>Practical tips for conducting effective interviews, including types of interview questions interview formats.</li>
                                    </ul>
                                    <button type="button" className="theme-btn btn-one">Download E-book</button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/book-2.png" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

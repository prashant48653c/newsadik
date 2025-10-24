import React from 'react'
import Link from "next/link"

export default function Category(){
    return (
    <> 
       <section className="category-section home-3 centred pt_120 pb_0">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one">
                            <div className="inner-box">
                                <h2>For Local Workers</h2>
                                <p>Join over 1 million workers who use GravyWork to <br />find flexible and temp to hire</p>
                                <Link href="/job-details" className="theme-btn btn-one">Find Work</Link>
                                <figure className="image-box image-hov-one"><img src="assets/images/resource/category-1.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 category-block">
                        <div className="category-block-one">
                            <div className="inner-box">
                                <h2>For Business Owner</h2>
                                <p>Finding individuals who share your company's values and <br />vision can contribute to a cohesive</p>
                                <Link href="/job-details" className="theme-btn btn-one">Find Employee</Link>
                                <figure className="image-box image-hov-two"><img src="assets/images/resource/category-2.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

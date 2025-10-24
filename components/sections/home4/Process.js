'use client'
import React from 'react'

export default function Process(){
    return (
        <> 
            <section className="process-style-two centred pl_100 pr_100">
                <div className="outer-container p_relative pt_120 pb_120">
                    <div className="auto-container">
                        <div className="sec-title pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Process</span>
                            <h2 className="title-animation">Easy Steps to Fisnish</h2>
                        </div>
                        <div className="inner-container">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}></div>
                            <div className="processing-block-two">
                                <div className="inner-box">
                                    <h4>01 <span>Step</span></h4>
                                    <h3>Fill In The <br />Required Form</h3>
                                    <p>Filling in our application form is the gateway</p>
                                </div>
                            </div>
                            <div className="processing-block-two">
                                <div className="inner-box">
                                    <h4>02 <span>Step</span></h4>
                                    <h3>Submit All <br />Your Documents</h3>
                                    <p>Submitting all required documents promptly</p>
                                </div>
                            </div>
                            <div className="processing-block-two">
                                <div className="inner-box">
                                    <h4>03 <span>Step</span></h4>
                                    <h3>Get Your <br />Desire Account</h3>
                                    <p>Succeed in the competitive world of account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import About from '@/components/sections/home5/About'
import Subscribe from '@/components/sections/home2/Subscribe'
import Clients from '@/components/sections/home2/Clients'
import Testimonial from '@/components/sections/home5/Testimonial'

export default function Job_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Place Your Job">

            <About/>

            <section className="job-form-section pt_120 pb_120">
                <div className="auto-container">
                    <div className="sec-title centred pb_70 light sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">REQUEST NEEDED TALENT</span>
                        <h2 className="title-animation">Talented Professionals Needed</h2>
                        <p className="title-animation">We are on the lookout for talented professionals who are eager to contribute to our <br />innovative and dynamic team.</p>
                    </div>
                    <form method="post" action="job.html">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <div className="title-box">
                                        <div className="icon-box"><i className="icon-39"></i></div>
                                        <h3>Contact Person</h3>
                                        <p>Please fill out your contact person details here.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="fname" placeholder="First Name" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="lname" placeholder="Last Name" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required/>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="address" placeholder="Address" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <div className="title-box">
                                        <div className="icon-box"><i className="icon-40"></i></div>
                                        <h3>Company Details</h3>
                                        <p>Please fill out your contact person details here.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="company_name" placeholder="Company Name" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="web_url" placeholder="Website" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                <option data-display="Industry">Industry</option>
                                                <option value="1">Executive</option>
                                                <option value="2">Training</option>
                                                <option value="3">Career</option>
                                                <option value="4">Payroll</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required/>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="address" placeholder="Address" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <div className="row clearfix">
                                        <div className="col-lg-7 col-md-12 col-sm-12 left-column">
                                            <div className="title-box">
                                                <div className="icon-box"><i className="icon-41"></i></div>
                                                <h3>Request Talent</h3>
                                                <p>Here you can leave your job details & Submit your job post.</p>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <div className="select-box">
                                                        <select className="wide">
                                                        <option data-display="Specialisation">Specialisation</option>
                                                        <option value="1">Information technology</option>
                                                        <option value="2">Marketing</option>
                                                        <option value="3">Finance</option>
                                                        <option value="4">International trade</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <div className="select-box">
                                                        <select className="wide">
                                                        <option data-display="Preferred Pronoun">Preferred Pronoun</option>
                                                        <option value="1">Information technology</option>
                                                        <option value="2">Marketing</option>
                                                        <option value="3">Finance</option>
                                                        <option value="4">International trade</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="post" placeholder="Position hiring for" required/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <div className="select-box">
                                                        <select className="wide">
                                                        <option data-display="Number of Opening">Number of Opening</option>
                                                        <option value="1">01</option>
                                                        <option value="2">02</option>
                                                        <option value="3">03</option>
                                                        <option value="4">04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="location" placeholder="Job Location" required/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="rate" placeholder="Pay Rate Range" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12 col-sm-12 right-column">
                                            <div className="right-content">
                                                <div className="form-group">
                                                    <textarea name="message" placeholder="Job Description"></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-one">Submit Your Request</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <Clients/>
            <Testimonial/>
            <div className='pb_120'></div>
            <Subscribe/>

            </Layout>
        </div>
    )
}
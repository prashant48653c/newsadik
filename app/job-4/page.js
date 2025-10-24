'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Job_Page_Four() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Job Apply">
            <section className="job-form-section dark-section pt_110 pb_90">
                <div className="auto-container">
                    <div className="sec-title centred pb_70 sec-title-animation animation-style2">
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
                                        <h3>Basic Infomation</h3>
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
                                        <h3>Qualification</h3>
                                        <p>Please fill out your contact person details here.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="education" placeholder="Education" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <div className="select-box">
                                                <select className="wide">
                                                <option data-display="Skills">Skills</option>
                                                <option value="1">Executive</option>
                                                <option value="2">Training</option>
                                                <option value="3">Career</option>
                                                <option value="4">Payroll</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="experience" placeholder="Experience" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="qualities" placeholder="Qualities" required/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <div className="upload-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                <input name="files[]" id="filer_input" multiple="multiple" type="file"/>
                                                <button type="button">Upload Photo</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <div className="form-group">
                                        <textarea name="message" placeholder="Additional Information..."></textarea>
                                    </div>
                                    <div className="form-group message-btn centred">
                                        <button type="submit" className="theme-btn btn-one">Apply For Job</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Subscribe/>

            </Layout>
        </div>
    )
}
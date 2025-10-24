'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Job_Details() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Job Details">
            <section className="job-details pt_110 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="job-sidebar mr_40">
                                <div className="info-widget sidebar-widget mb_30">
                                    <ul className="clearfix">
                                        <li>
                                            <h5>Location</h5>
                                            <p>San Fransisco, Californ</p>
                                        </li>
                                        <li>
                                            <h5>Website</h5>
                                            <p><Link href="/job-details">http://www.example.com</Link></p>
                                        </li>
                                        <li>
                                            <h5>Salary</h5>
                                            <p>$200 - $300 Per  Month</p>
                                        </li>
                                        <li>
                                            <h5>Experience Need</h5>
                                            <p>2-3 Yrs</p>
                                        </li>
                                        <li>
                                            <h5>Apply Within</h5>
                                            <p>25th March, 2025</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="requirements-widget sidebar-widget">
                                    <h3>Requirements</h3>
                                    <ul className="clearfix">
                                        <li><span>Age :</span> 25th March, 2025</li>
                                        <li><span>Sex :</span> Male/ Female</li>
                                        <li><span>Education :</span> CSE enginear</li>
                                        <li><span>Experience :</span> 1-3 Yrs</li>
                                        <li><span>Skills :</span> Something Related this Job</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="job-details-content">
                                <div className="text-box mb_60">
                                    <h3>Job Description</h3>
                                    <p>A Software Engineer is a professional who applies engineering principles to the design, development, maintenance, testing, and evaluation of software and systems that make computers or devices function effectively.</p>
                                    <p>Software Engineers are proficient in various programming languages and tools, and they continuously update their skills to keep pace with the ever-evolving technology landscape.</p>
                                </div>
                                <div className="text-box mb_55">
                                    <h3>Responsibilities</h3>
                                    <ul className="list-item">
                                        <li>Collaborate with stakeholders to understand the requirements</li>
                                        <li>Design the overall structure of the software system, including system </li>
                                        <li>Choose appropriate technologies and frameworks to meet project requirements.</li>
                                        <li>Review code written by peers to ensure quality and adherence to standards.</li>
                                        <li>Participate in project planning, including estimating timelines and resources needed.</li>
                                        <li>Optimize software for performance, scalability, and efficiency.</li>
                                    </ul>
                                </div>
                                <div className="text-box mb_65">
                                    <h3>Advantages</h3>
                                    <p>A Software Engineer is a professional who applies engineering principles to the design, development, maintenance, testing, and evaluation of software and systems that make computers or devices function effectively.</p>
                                    <p>Software Engineers are proficient in various programming languages and tools, and they continuously update their skills to keep pace with the ever-evolving technology landscape.</p>
                                </div>
                                <ul className="share-box">
                                    <li><h5>Share On:</h5></li>
                                    <li><Link href="/job-details"><i className="icon-22"></i></Link></li>
                                    <li><Link href="/job-details"><i className="icon-23"></i></Link></li>
                                    <li><Link href="/job-details"><i className="icon-24"></i></Link></li>
                                    <li><Link href="/job-details"><i className="icon-25"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribe/>

            </Layout>
        </div>
    )
}
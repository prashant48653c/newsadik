'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Details_Six() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Temporary Jobs">

            <section className="service-details pt_110 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar mr_40">
                                <div className="category-widget mb_40">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/service-details">Executive Search <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-2">Training Session <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-3">Career Growth <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-4">Payroll Services <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-5">Workforce System <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-6" className='current'>Temporary Jobs <i className="icon-42"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="download-widget">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/book-3.png" alt=""/></figure>
                                        <h4>The 2024 guide for Optimal Content <span>Management</span></h4>
                                        <button type="button" className="theme-btn btn-one">Download E-book</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="service-details-content">
                                <div className="sec-title mb_70">
                                    <span className="sub-title mb_10">Executive Search</span>
                                    <h2>The Temporary Jobs Process for Optimal Results</h2>
                                    <p className="mt_20">The executive search process is meticulously designed to identify and attract top-tier leadership talent that aligns with an organization’s strategic goals.</p>
                                </div>
                                <figure className="image-box mb_30"><img src="assets/images/service/service-9.jpg" alt=""/></figure>
                                <div className="text-box mb_110">
                                    <p className="mb_25">It begins with a thorough understanding of the company’s needs, culture, and long-term vision, ensuring that the search is precisely targeted.</p>
                                    <p>Leveraging an extensive network and advanced assessment tools, executive search firms meticulously evaluate candidates’ qualifications, experience, and leadership capabilities. The process includes rigorous interviews, reference checks, and often psychometric testing to ensure a comprehensive evaluation.</p>
                                </div>
                                <div className="text-box mb_70">
                                    <h2>Finding You The Leaders Of Tomorrow</h2>
                                    <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                                </div>
                                <div className="tabs-box mb_50">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Short Time Hiring</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Last Minute Hiring</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Immediate Hiring</li>
                                    </ul>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/service-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Short Time Hiring</h6>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Consequat tellus proin massa lacus. Arcu ullamcorper proin urna rhoncus odio</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/service-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Last Minute Hiring</h6>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Consequat tellus proin massa lacus. Arcu ullamcorper proin urna rhoncus odio</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/service-8.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Immediate Hiring</h6>
                                                    <p>Lorem ipsum dolor sit amet consectetur. Consequat tellus proin massa lacus. Arcu ullamcorper proin urna rhoncus odio</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p className="mb_25">Lorem ipsum dolor sit amet consectetur. Mi luctus at sapien viverra enim pharetra augue. Aliquam tellus amet est amet in non sem adipiscing urna. Neque etiam eu pellentesque velit ultricies dictumst mauris tortor hac.</p>
                                    <p>Elit morbi maecenas sit viverra nibh elementum bibendum arcu a. Suscipit magna vitae nulla aenean suspendisse scelerisque montes.</p>
                                </div>
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
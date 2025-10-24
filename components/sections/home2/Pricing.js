'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing(){

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <> 

        <section className="pricing-section pt_120 pb_90">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Pricing</span>
                    <h2 className="title-animation">Pricing Plans</h2>
                </div>
                <div className="tabs-box">
                    <ul className="tab-btns tab-buttons">
                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Monthly</li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Yearly</li>
                    </ul>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Starter plan</h3>
                                                <h2>$19.00</h2>
                                                <span>Per Month</span>
                                            </div>
                                            <div className="table-content mb_40">
                                                <p>For new comer to the industry trying out for an unlimited period.</p>
                                                <ul className="list-item">
                                                    <li><i className="icon-26"></i>Advantage on the list</li>
                                                    <li><i className="icon-26"></i>Live Tutorial</li>
                                                    <li><i className="icon-26"></i>Expert Advice Plan</li>
                                                    <li><i className="icon-27"></i>Weekly Workshop</li>
                                                    <li><i className="icon-27"></i>Auto Apply to new Job</li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <Link href="/index-2">Start Free Trial</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Basic plan</h3>
                                                <h2>$39.00</h2>
                                                <span>Per Month</span>
                                            </div>
                                            <div className="table-content mb_40">
                                                <p>For new comer to the industry trying out for an unlimited period.</p>
                                                <ul className="list-item">
                                                    <li><i className="icon-26"></i>Advantage on the list</li>
                                                    <li><i className="icon-26"></i>Live Tutorial</li>
                                                    <li><i className="icon-26"></i>Expert Advice Plan</li>
                                                    <li><i className="icon-27"></i>Weekly Workshop</li>
                                                    <li><i className="icon-27"></i>Auto Apply to new Job</li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <Link href="/index-2">Start Free Trial</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Advanced plan</h3>
                                                <h2>$59.00</h2>
                                                <span>Per Month</span>
                                            </div>
                                            <div className="table-content mb_40">
                                                <p>For new comer to the industry trying out for an unlimited period.</p>
                                                <ul className="list-item">
                                                    <li><i className="icon-26"></i>Advantage on the list</li>
                                                    <li><i className="icon-26"></i>Live Tutorial</li>
                                                    <li><i className="icon-26"></i>Expert Advice Plan</li>
                                                    <li><i className="icon-27"></i>Weekly Workshop</li>
                                                    <li><i className="icon-27"></i>Auto Apply to new Job</li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <Link href="/index-2">Start Free Trial</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Starter plan</h3>
                                                <h2>$119.00</h2>
                                                <span>Per Year</span>
                                            </div>
                                            <div className="table-content mb_40">
                                                <p>For new comer to the industry trying out for an unlimited period.</p>
                                                <ul className="list-item">
                                                    <li><i className="icon-26"></i>Advantage on the list</li>
                                                    <li><i className="icon-26"></i>Live Tutorial</li>
                                                    <li><i className="icon-26"></i>Expert Advice Plan</li>
                                                    <li><i className="icon-27"></i>Weekly Workshop</li>
                                                    <li><i className="icon-27"></i>Auto Apply to new Job</li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <Link href="/index-2">Start Free Trial</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Basic plan</h3>
                                                <h2>$239.00</h2>
                                                <span>Per Year</span>
                                            </div>
                                            <div className="table-content mb_40">
                                                <p>For new comer to the industry trying out for an unlimited period.</p>
                                                <ul className="list-item">
                                                    <li><i className="icon-26"></i>Advantage on the list</li>
                                                    <li><i className="icon-26"></i>Live Tutorial</li>
                                                    <li><i className="icon-26"></i>Expert Advice Plan</li>
                                                    <li><i className="icon-27"></i>Weekly Workshop</li>
                                                    <li><i className="icon-27"></i>Auto Apply to new Job</li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <Link href="/index-2">Start Free Trial</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="pricing-table">
                                            <div className="table-header">
                                                <h3>Advanced plan</h3>
                                                <h2>$359.00</h2>
                                                <span>Per Year</span>
                                            </div>
                                            <div className="table-content mb_40">
                                                <p>For new comer to the industry trying out for an unlimited period.</p>
                                                <ul className="list-item">
                                                    <li><i className="icon-26"></i>Advantage on the list</li>
                                                    <li><i className="icon-26"></i>Live Tutorial</li>
                                                    <li><i className="icon-26"></i>Expert Advice Plan</li>
                                                    <li><i className="icon-27"></i>Weekly Workshop</li>
                                                    <li><i className="icon-27"></i>Auto Apply to new Job</li>
                                                </ul>
                                            </div>
                                            <div className="table-footer">
                                                <Link href="/index-2">Start Free Trial</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

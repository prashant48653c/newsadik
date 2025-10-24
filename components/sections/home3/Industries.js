import React from 'react'
import Link from "next/link"

export default function Industries(){
    return (
    <> 
       <section className="industries-style-three centred pt_120 pb_120">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title light pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Industries</span>
                    <h2 className="title-animation">Industries Served</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-9"></i></div>
                                <h3><Link href="/">Hotel</Link></h3>
                                <p>2853 Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-10"></i></div>
                                <h3><Link href="/">Hospitality</Link></h3>
                                <p>2256 Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3><Link href="/">Kitchen</Link></h3>
                                <p>1408 Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-12"></i></div>
                                <h3><Link href="/">Retail</Link></h3>
                                <p>1740 Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-13"></i></div>
                                <h3><Link href="/">Events</Link></h3>
                                <p>3948 Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="/">Labor</Link></h3>
                                <p>2984 Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-15"></i></div>
                                <h3><Link href="/">Driving</Link></h3>
                                <p>4509 Staffs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                        <div className="industries-block-three">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-16"></i></div>
                                <h3><Link href="/">Caretaker</Link></h3>
                                <p>1039 Staffs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-btn"><Link href="/index-3" className="theme-btn btn-one">View All Categories</Link></div>
            </div>
        </section>
    </>
  )
}

'use client'
import Link from "next/link"


export default function Chooseus(){
    return (
        <> 

        <section className="chooseus-section pt_200 pb_90">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Why Us</span>
                    <h2 className="title-animation">Why Choose Us</h2>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-4"></i></div>
                                    <h3><Link href="/">Retain Top Talent</Link></h3>
                                    <p>Providing clear career paths and growth opportunities is key to retaining top talent.</p>
                                    <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h3><Link href="/">Stay Compliant</Link></h3>
                                    <p>Educate employees about compliance requirements through regular training</p>
                                    <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h3><Link href="/">Improve Employee</Link></h3>
                                    <p>Invest in employee training and development programs to enhance skills and knowledge.</p>
                                    <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
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

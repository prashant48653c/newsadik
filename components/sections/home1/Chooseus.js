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
                                    <h3><Link href="/">Our mission</Link></h3>
                                    <p>Sadiksya oversea is committed to uplifting lives, supporting economic development, and setting benchmarks in workforce mobility, compliance, and client satisfaction.</p>
                                    <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h3><Link href="/">OUR VISION</Link></h3>
                                    <p>To become Nepal's most trusted gateway for global employment, empowering Nepal talent to thrive on the world stage while upholding dignity, ethics, and excellence in international recruitment.</p>
                                    <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h3><Link href="/">Core Values</Link></h3>
                                    <p>We uphold integrity, empowerment, excellence, accountability, respect, and compliance in every recruitment process, ensuring honesty, quality, responsibility, and adherence to global standards.
</p>
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

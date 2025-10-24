'use client'
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"


export default function Training(){

    return (
        <> 

        <section className="training-section">
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Training</span>
                    <h2 className="title-animation">Recent Workshops</h2>
                </div>
            </div>
            <div className="inner-container clearfix">
                <div className="training-block-one">
                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/training-1.jpg)" }}>
                        <div className="video-content mb_150 centred">
                            <VideoPopup />
                        </div>
                        <div className="text-box">
                            <h3><Link href="/job-details">Business Intelligence and Data Analytics</Link></h3>
                            <div className="link"><Link href="/job-details">Find Works<img src="assets/images/icons/icon-8.png" alt=""/></Link></div>
                        </div>
                    </div>
                </div>
                <div className="training-block-one">
                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/training-2.jpg)" }}>
                        <div className="video-content mb_150 centred">
                            <VideoPopup />
                        </div>
                        <div className="text-box">
                            <h3><Link href="/job-details">Information Technology Management</Link></h3>
                            <div className="link"><Link href="/job-details">Find Works<img src="assets/images/icons/icon-8.png" alt=""/></Link></div>
                        </div>
                    </div>
                </div>
                <div className="training-block-one">
                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/training-3.jpg)" }}>
                        <div className="video-content mb_150 centred">
                            <VideoPopup />
                        </div>
                        <div className="text-box">
                            <h3><Link href="/job-details">Public Policy and Management</Link></h3>
                            <div className="link"><Link href="/job-details">Find Works<img src="assets/images/icons/icon-8.png" alt=""/></Link></div>
                        </div>
                    </div>
                </div>
                <div className="training-block-one">
                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/training-4.jpg)" }}>
                        <div className="video-content mb_150 centred">
                            <VideoPopup />
                        </div>
                        <div className="text-box">
                            <h3><Link href="/job-details">Mathematics and its Applications</Link></h3>
                            <div className="link"><Link href="/job-details">Find Works<img src="assets/images/icons/icon-8.png" alt=""/></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

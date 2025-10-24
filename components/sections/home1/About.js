'use client'
import VideoPopup from "@/components/elements/VideoPopup"


export default function About(){
    return (
        <> 

        <section className="about-section pt_120 pb_120">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                        <div className="video_block_one">
                            <div className="video-box p_relative pt_40 pb_40 pl_30 centred">
                                <div className="image-layer">
                                    <figure className="image-1"><img src="assets/images/resource/video-3.jpg" alt=""/></figure>
                                    <figure className="image-2"><img src="assets/images/resource/video-2.jpg" alt=""/></figure>
                                </div>
                                <div className="video-inner" style={{ backgroundImage: "url(assets/images/resource/video-1.jpg)" }}>
                                    <div className="video-content">
                                        <VideoPopup />
                                        <h6>Watch Video</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                            <div className="content-box ml_80">
                                <div className="sec-title pb_20 sec-title-animation animation-style2">
                                    <span className="sub-title mb_10 title-animation">About us</span>
                                    <h2 className="title-animation">The Leading Hospitality Staffing <span>Platform</span></h2>
                                </div>
                                <div className="text-box">
                                    <p>This staffing platform provides access to a diverse pool of qualified candidates with specialized skills in areas such as hospitality management.</p>
                                    <ul className="list-style-one clearfix">
                                        <li>This helps businesses maintain service excellence</li>
                                        <li>This scalability allows businesses to adjust staffing</li>
                                    </ul>
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

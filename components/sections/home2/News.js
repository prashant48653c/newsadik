'use client'
import Link from "next/link"


export default function News(){

    return (
        <> 

        <section className="news-section pt_120 pb_90">
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Media</span>
                    <h2 className="title-animation">Latest News</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/news/news-1.jpg)" }}></div>
                                <div className="overlay-bg-layer" style={{ backgroundImage: "url(assets/images/news/news-1.jpg)" }}></div>
                                <div className="content-box">
                                    <span className="post-date">March 20, 2023</span>
                                    <h4><Link href="/blog-details">Create a series of blog posts discussing common interview</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/news/news-2.jpg)" }}></div>
                                <div className="overlay-bg-layer" style={{ backgroundImage: "url(assets/images/news/news-2.jpg)" }}></div>
                                <div className="content-box">
                                    <span className="post-date">March 19, 2023</span>
                                    <h4><Link href="/blog-details">Explore the concept of personal branding and its impact on</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/news/news-3.jpg)" }}></div>
                                <div className="overlay-bg-layer" style={{ backgroundImage: "url(assets/images/news/news-3.jpg)" }}></div>
                                <div className="content-box">
                                    <span className="post-date">March 18, 2023</span>
                                    <h4><Link href="/blog-details">Feature interviews with employees from top companies</Link></h4>
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

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
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-4.jpg" alt=""/></Link></figure>
                                    <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-4.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <span className="category">Business</span>
                                    <h3><Link href="index-2.html">Create a series of blog posts discussing common interview</Link></h3>
                                    <ul className="post-info">
                                        <li>By <Link href="/blog-details">Alex Beniwal</Link></li>
                                        <li><span>March 20, 2023</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-5.jpg" alt=""/></Link></figure>
                                    <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-5.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <span className="category">Analytics</span>
                                    <h3><Link href="index-2.html">Explore the concept of personal branding and its impact on</Link></h3>
                                    <ul className="post-info">
                                        <li>By <Link href="/blog-details">Alex Beniwal</Link></li>
                                        <li><span>March 19, 2023</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-6.jpg" alt=""/></Link></figure>
                                    <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-6.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="lower-content">
                                    <span className="category">Business</span>
                                    <h3><Link href="index-2.html">Feature interviews with employees from top companies</Link></h3>
                                    <ul className="post-info">
                                        <li>By <Link href="/blog-details">Alex Beniwal</Link></li>
                                        <li><span>March 18, 2023</span></li>
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

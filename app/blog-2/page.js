'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'


export default function Blog_Standard() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Blog Standard">
                
                <section className="sidebar-page-container p_relative pt_110 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar mr_40 mb_30">
                                    <div className="search-widget mb_60">
                                        <div className="search-form">
                                            <form method="post" action="/blog-2">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Search" required/>
                                                    <button type="submit"><i className="icon-1"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget category-widget mb_50">
                                        <div className="widget-title mb_11">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/blog-details">Day Trading<span>(09)</span></Link></li>
                                                <li><Link href="/blog-details">Finance<span>(20)</span></Link></li>
                                                <li><Link href="/blog-details">Virtual Hiring<span>(25)</span></Link></li>
                                                <li><Link href="/blog-details">Headhunting<span>(06)</span></Link></li>
                                                <li><Link href="/blog-details">Promotions<span>(18)</span></Link></li>
                                                <li><Link href="/blog-details">Recruitment Agencies<span>(11)</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget post-widget mb_60">
                                        <div className="widget-title mb_20">
                                            <h3>Latest Posts</h3>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><img src="assets/images/news/post-1.jpg" alt=""/></Link></figure>
                                                <h6><Link href="/blog-details">Provide guidance on crafting effective</Link></h6>
                                                <span className="post-date">1 May 2024</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><img src="assets/images/news/post-2.jpg" alt=""/></Link></figure>
                                                <h6><Link href="/blog-details">Explore the concept of personal branding</Link></h6>
                                                <span className="post-date">1 May 2024</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><img src="assets/images/news/post-3.jpg" alt=""/></Link></figure>
                                                <h6><Link href="/blog-details">Use relevant keywords to improve</Link></h6>
                                                <span className="post-date">1 May 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget tags-widget mb_45">
                                        <div className="widget-title mb_20">
                                            <h3>Popular tag</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="tags-list clearfix">
                                                <li><Link href="/blog-details">Account</Link></li>
                                                <li><Link href="/blog-details">Careers</Link></li>
                                                <li><Link href="/blog-details">Demo</Link></li>
                                                <li><Link href="/blog-details">Development</Link></li>
                                                <li><Link href="/blog-details">Technology</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget archives-widget">
                                        <div className="widget-title mb_11">
                                            <h3>Archives</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="archives-list clearfix">
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 20, 2022<span>(09)</span></Link></li>
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 26, 2022<span>(20)</span></Link></li>
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 26, 2022<span>(25)</span></Link></li>
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 26, 2022<span>(06)</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="download-widget mr_40">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/book-3.png" alt=""/></figure>
                                        <h4>The 2024 guide for Optimal Content <span>Management</span></h4>
                                        <button type="button" className="theme-btn btn-one">Download E-book</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-standard-content">
                                    <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-13.jpg" alt=""/></Link></figure>
                                                <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-13.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="lower-content">
                                                <span className="category">Business</span>
                                                <h3><Link href="/blog-details">Create a series of blog posts discussing common interview Discuss the company’s core values</Link></h3>
                                                <ul className="post-info">
                                                    <li>By <Link href="/blog-details">Alex Beniwal</Link></li>
                                                    <li><span>March 20, 2023</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-14.jpg" alt=""/></Link></figure>
                                                <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-14.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="lower-content">
                                                <span className="category">Business</span>
                                                <h3><Link href="/blog-details">Use relevant keywords to improve the blog’s visibility in hare stories of employees who have advanced within</Link></h3>
                                                <ul className="post-info">
                                                    <li>By <Link href="/blog-details">Haris Gulati</Link></li>
                                                    <li><span>March 19, 2023</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-15.jpg" alt=""/></Link></figure>
                                                <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-15.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="lower-content">
                                                <span className="category">Business</span>
                                                <h3><Link href="/blog-details">Provide guidance on crafting effective resumes and cover detailing responsibilities and expectations.</Link></h3>
                                                <ul className="post-info">
                                                    <li>By <Link href="/blog-details">Ema Chawal</Link></li>
                                                    <li><span>March 18, 2023</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-16.jpg" alt=""/></Link></figure>
                                                <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-16.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="lower-content">
                                                <span className="category">Business</span>
                                                <h3><Link href="/blog-details">Share stories of employees who have advanced within the and cover detailing responsibilities and expectations.</Link></h3>
                                                <ul className="post-info">
                                                    <li>By <Link href="/blog-details">Dorin Baby</Link></li>
                                                    <li><span>March 17, 2023</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination-wrapper">
                                        <ul className="pagination clearfix">
                                            <li><Link href="/blog-2"><i className="icon-34"></i></Link></li>
                                            <li><Link href="/blog-2" className="current">1</Link></li>
                                            <li><Link href="/blog-2">2</Link></li>
                                            <li><Link href="/blog-2">3</Link></li>
                                            <li><Link href="/blog-2"><i className="icon-35"></i></Link></li>
                                        </ul>
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
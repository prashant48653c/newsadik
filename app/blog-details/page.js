'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'


export default function Blog_Details() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Blog Details">
                
                <section className="sidebar-page-container p_relative pt_110 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar mr_40 mb_30">
                                    <div className="search-widget mb_60">
                                        <div className="search-form">
                                            <form method="post" action="/blog-details">
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
                                <div className="blog-details-content">
                                    <div className="news-block-two">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="assets/images/news/news-15.jpg" alt=""/></figure>
                                            </div>
                                            <div className="lower-content">
                                                <span className="category">Business</span>
                                                <h3>Create a series of blog posts discussing common interview Discuss the company’s core values</h3>
                                                <ul className="post-info">
                                                    <li>By <Link href="/blog-details">Ema Chawal</Link></li>
                                                    <li><span>March 18, 2023</span></li>
                                                </ul>
                                            </div>
                                            <div className="text-box pt_25 mb_50">
                                                <p className="mb_30">Another post might tackle technical questions relevant to your industry, offering strategies for breaking down complex problems and showcasing problem-solving skills. By breaking down each type of question and offering practical advice, sample answers.</p>
                                                <p className="mb_40">tips for tailoring responses to align with the company's values and expectations, this blog series can become an essential resource for candidates aiming to succeed in their interviews and secure their desired positions.</p>
                                                <blockquote>
                                                    <div className="icon-box"><i className="icon-36"></i></div>
                                                    <h4>That's why we adhere to strict quality standards and regulations to ensure that all our products meet the highest levels of safety and efficacy.</h4>
                                                    <h3>Hemandi Kaur</h3>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="two-column">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                <figure className="image-box mb_25"><img src="assets/images/news/news-17.jpg" alt=""/></figure>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                <figure className="image-box mb_25"><img src="assets/images/news/news-18.jpg" alt=""/></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-one mb_40">
                                        <h3>Hiring & Onboarding Process</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                                        <h4>Your Gateway to Hiring Success</h4>
                                        <ul className="list-item clearfix">
                                            <li>The wise man therefore always holds in these matters</li>
                                            <li>Have to be repudiated and annoyances accepted.</li>
                                            <li>Rejects pleasures to secure other greater pleasures, or else</li>
                                        </ul>
                                    </div>
                                    <div className="post-share-option mb_60">
                                        <ul className="tags-list">
                                            <li><h6>Tags:</h6></li>
                                            <li><Link href="/blog-details">Careers</Link></li>
                                            <li><Link href="/blog-details">Demo</Link></li>
                                        </ul>
                                        <ul className="social-links"> 
                                            <li><h6>Share This :</h6></li>
                                            <li><Link href="/blog-details"><i className="icon-22"></i></Link></li>
                                            <li><Link href="/blog-details"><i className="icon-23"></i></Link></li>
                                            <li><Link href="/blog-details"><i className="icon-24"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="comment-box">
                                        <div className="group-title mb_25"><h3>Write Comment</h3></div>
                                        <div className="form-inner">
                                            <form method="post" action="/blog-details">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="form-group">
                                                            <label>Name <span>*</span></label>
                                                            <input type="text" name="name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="form-group">
                                                            <label>Email <span>*</span></label>
                                                            <input type="email" name="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                        <div className="form-group">
                                                            <label>Message <span>*</span></label>
                                                            <textarea name="message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                        <div className="check-box mb_35">
                                                            <input className="check" type="checkbox" id="checkbox9"/>
                                                            <label for="checkbox9">Save my name, email, and website in this browser for the next time I comment.</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                        <div className="message-btn">
                                                            <button type="submit" className="theme-btn btn-one">Submit Review</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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
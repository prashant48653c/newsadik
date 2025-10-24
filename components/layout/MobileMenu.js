'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="fas fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo-2.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="/index-2">Home Two</Link></li>
                                        <li><Link href="/index-3">Home Three</Link></li>
                                        <li><Link href="/index-4">Home Four</Link></li>
                                        <li><Link href="/index-5">Home Five</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/about">About</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Solutions</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/service">Our Solutions</Link></li>
                                        <li><Link href="/service-details">Executive Search</Link></li>
                                        <li><Link href="/service-details-2">Training Session</Link></li>
                                        <li><Link href="/service-details-3">Career Growth</Link></li>
                                        <li><Link href="/service-details-4">Payroll Services</Link></li>
                                        <li><Link href="/service-details-5">Workforce System</Link></li>
                                        <li><Link href="/service-details-6">Temporary Jobs</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/job">Place Job</Link></li>
                                        <li><Link href="/job-2">Job Seekers</Link></li>
                                        <li><Link href="/job-3">Job Openings</Link></li>
                                        <li><Link href="/job-4">Job Apply</Link></li>
                                        <li><Link href="/job-details">Job Details</Link></li>
                                        <li><Link href="/portfolio">Portfolio 3 column</Link></li>
                                        <li><Link href="/portfolio-2">Portfolio 2 column</Link></li>
                                        <li><Link href="/portfolio-3">Portfolio Masonry</Link></li>
                                        <li><Link href="/team">Our Team</Link></li>
                                        <li><Link href="/faq">FAQ's</Link></li>
                                        <li><Link href="/testimonial">Testimonials</Link></li>
                                        <li><Link href="/login">Login</Link></li>
                                        <li><Link href="/signup">Sing Up</Link></li>
                                        <li><Link href="/error">404</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/blog">Blog Grid</Link></li>
                                        <li><Link href="/blog-2">Blog Standard</Link></li>
                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                    </div>
                    
                    <div className="search-form">
                        <h4>Search</h4>
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search here ..." required/>
                                <button type="submit"><i className="icon-47"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melborne City, USA</li>
                            <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                            <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}

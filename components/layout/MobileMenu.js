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
                    <div className="nav-logo"><Link href="/"><img src="/logo.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "current" : ""}><Link href="/">Home</Link>
                                   
                                 
                                </li>
                                <li><Link href="/about">About</Link></li>
                                <li className={isActive.key == 2 ? " current" : ""}><Link href="/services">Services</Link>
                                  
                                </li>
                               
                                <li className={isActive.key == 4 ? " current" : ""}><Link href="//blog">Blog</Link>

                                  
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
                            <li>Samakushi-26, Kathmandu, Nepal</li>
                            <li><Link href="tel:+8801682648101"> +977 9841992641</Link></li>
                            <li><Link href="mailto:info@example.com">info@sadiksha.com.np</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}

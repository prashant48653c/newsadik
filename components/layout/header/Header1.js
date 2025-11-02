'use client'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { useRouter } from "next/navigation"


export default function Header1({ scroll, handleMobileMenu, handlePopup }) {
    const Router=useRouter()
    return (
        <>

        {/* main header */}


        <header  className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
            
            <div  className="header-lower">
                <div  className="auto-container">
                    <div style={{background:'#fcfcfcff'}} className="outer-box">
                        <figure className="logo-box pl_15"><Link href="/"><img width={150} src="/logo.png" alt=""/></Link></figure>
                        <div className="menu-area">
                            
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            <div className="search-btn mr_20"><button className="search-toggler" onClick={()=>Router.push("/jobs")}>
                            <i className="bi bi-bell"></i>
                                </button></div>
                            <div className="link-box mr_20"><Link href="/jobs">Jobs</Link></div>
                            <div className="btn-box"><Link href="/jobs" className="theme-btn btn-one">Get Started</Link></div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="outer-box">
                        <figure className="logo-box pl_15"><Link href="/"><img width={150} src="/logo.png" alt=""/></Link></figure>
                        <div className="menu-area">
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            
                            <div className="link-box mr_20"><Link href="/jobs">Jobs</Link></div>
                            <div className="btn-box"><Link href="/jobs" className="theme-btn btn-one">Get Started</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>


        </>
    )
}

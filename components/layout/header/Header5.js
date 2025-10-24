'use client'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import CustomSelect from '../../elements/CustomSelect'

const options = [
    { value: "1", label: "DE" },
    { value: "2", label: "EN" },
    { value: "3", label: "FR" },
    { value: "4", label: "IT" },
  ];


export default function Header5({ scroll, handleMobileMenu, handlePopup }) {

    const handleSelectChange = (selectedOption) => {
        console.log("Select", selectedOption);
      };
    
    return (
        <>

        {/* main header */}


        <header className={`main-header header-style-five ${scroll ? "fixed-header" : ""}`}>

            <div className="header-top">
                <div className="auto-container">
                    <div className="top-inner">
                        <ul className="info">
                            <li>
                                <img src="assets/images/icons/icon-6.png" alt=""/>
                                Call: <Link href="tel:912345432">+91 (234) 5432</Link>
                            </li>
                            <li>
                                <img src="assets/images/icons/icon-7.png" alt=""/>
                                Mail: <Link href="mailto:jobinfo@example.com">jobinfo@example.com</Link>
                            </li>
                        </ul>
                        <p><span>Latest News:</span> Fusce neque CEO egestas cursu magna sapien</p>
                        <div className="right-column">
                            <div className="language-picker mr_30">
                                <CustomSelect options={options} onChange={handleSelectChange} />
                            </div>
                            <ul className="social-links">
                                <li><span>Share:</span></li>
                                <li><Link href="/index-3"><i className="icon-22"></i></Link></li>
                                <li><Link href="/index-3"><i className="icon-23"></i></Link></li>
                                <li><Link href="/index-3"><i className="icon-24"></i></Link></li>
                                <li><Link href="/index-3"><i className="icon-25"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-lower">
                <div className="auto-container">
                    <div className="outer-box">
                        <figure className="logo-box"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
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
                            <div className="search-btn mr_20"><button className="search-toggler" onClick={handlePopup}><i className="icon-1"></i></button></div>
                            <div className="link-box mr_20"><Link href="/login">Log In</Link></div>
                            <div className="btn-box"><Link href="/" className="theme-btn btn-one">Get Started</Link></div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="outer-box">
                        <figure className="logo-box"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                        <div className="menu-area">
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            <div className="search-btn mr_20"><button className="search-toggler" onClick={handlePopup}><i className="icon-1"></i></button></div>
                            <div className="link-box mr_20"><Link href="/login">Log In</Link></div>
                            <div className="btn-box"><Link href="/" className="theme-btn btn-one">Get Started</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>


        </>
    )
}

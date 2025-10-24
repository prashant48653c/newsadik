import Link from "next/link"

export default function Footer5() {
    return (
        <>           
            
            <footer className="main-footer light-footer">
                <div className="widget-section p_relative pt_80 pb_100">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget mr_30">
                                    <figure className="footer-logo mb_20"><Link href="/index-5"><img src="assets/images/logo-2.png" alt=""/></Link></figure>
                                    <p>Since 2018, JobAway has connecting hospitality workers to thousands of business, private events and universities.</p>
                                    <div className="download-btn">
                                        <Link href="about.html" className="apple-store">
                                            <img src="assets/images/icons/icon-12.png" alt=""/>
                                            <span>Download on</span>
                                            App Store
                                        </Link>
                                        <Link href="about.html" className="play-store">
                                            <img src="assets/images/icons/icon-5.png" alt=""/>
                                            <span>Get it on</span>
                                            Google Play
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>For Workers</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-5">Find Work</Link></li>
                                            <li><Link href="/index-5">Jobs in Dubai</Link></li>
                                            <li><Link href="/index-5">Jobs in Virginia</Link></li>
                                            <li><Link href="/index-5">Jobs in California</Link></li>
                                            <li><Link href="/index-5">Jobs in Alaska</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>For Business</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-5">Merchandising</Link></li>
                                            <li><Link href="/index-5">Hospitality Staff</Link></li>
                                            <li><Link href="/index-5">General Labour</Link></li>
                                            <li><Link href="/index-5">Car Drivers</Link></li>
                                            <li><Link href="/index-5">Bus Driver</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>Company</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/index-5">Career</Link></li>
                                            <li><Link href="/index-5">Partners</Link></li>
                                            <li><Link href="/blog">Blog</Link></li>
                                            <li><Link href="/index-5">Clients</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>Help &amp; Support</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/contact">Contact Us</Link></li>
                                            <li><Link href="/faq">General FAQ</Link></li>
                                            <li><Link href="/index-5">Support Center</Link></li>
                                            <li><Link href="/index-5">Privacy Policy</Link></li>
                                            <li><Link href="/index-5">Terms &amp; Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner">
                            <div className="copyright"><p>Copyright &copy; {new Date().getFullYear()} <Link href="/index-5">JobAway</Link> All rights reserved.</p></div>
                            <ul className="social-links">
                                <li><h5>Follow Us On:</h5></li>
                                <li><Link href="/index-5"><i className="icon-22"></i></Link></li>
                                <li><Link href="/index-5"><i className="icon-23"></i></Link></li>
                                <li><Link href="/index-5"><i className="icon-24"></i></Link></li>
                                <li><Link href="/index-5"><i className="icon-25"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

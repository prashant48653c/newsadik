import Link from "next/link"

export default function Footer4() {
    return (
        <>           
            
            <footer className="main-footer light-footer">
                <div className="widget-section p_relative pt_80 pb_100">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget mr_30">
                                    <figure className="footer-logo mb_20"><Link href="/index-4"><img src="assets/images/logo-2.png" alt=""/></Link></figure>
                                    <p>Since 2018, JobAway has connecting hospitality workers to thousands of business, private events and universities.</p>
                                    <ul className="social-links">
                                        <li><Link href="/index-4"><i className="icon-22"></i></Link></li>
                                        <li><Link href="/index-4"><i className="icon-23"></i></Link></li>
                                        <li><Link href="/index-4"><i className="icon-24"></i></Link></li>
                                        <li><Link href="/index-4"><i className="icon-25"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>For Workers</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/index-4">Find Work</Link></li>
                                            <li><Link href="/index-4">Jobs in Dubai</Link></li>
                                            <li><Link href="/index-4">Jobs in Virginia</Link></li>
                                            <li><Link href="/index-4">Jobs in California</Link></li>
                                            <li><Link href="/index-4">Jobs in Alaska</Link></li>
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
                                            <li><Link href="/index-4">Merchandising</Link></li>
                                            <li><Link href="/index-4">Hospitality Staff</Link></li>
                                            <li><Link href="/index-4">General Labour</Link></li>
                                            <li><Link href="/index-4">Car Drivers</Link></li>
                                            <li><Link href="/index-4">Bus Driver</Link></li>
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
                                            <li><Link href="/index-4">Career</Link></li>
                                            <li><Link href="/index-4">Partners</Link></li>
                                            <li><Link href="/blog">Blog</Link></li>
                                            <li><Link href="/index-4">Clients</Link></li>
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
                                            <li><Link href="/index-4">Support Center</Link></li>
                                            <li><Link href="/index-4">Privacy Policy</Link></li>
                                            <li><Link href="/index-4">Terms &amp; Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="bottom-inner d_block">
                            <div className="copyright"><p>Copyright &copy; {new Date().getFullYear()} <Link href="/index-4">JobAway</Link> All rights reserved.</p></div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/#">Home</Link>
                    <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="/index-2">Home Two</Link></li>
                        <li><Link href="/index-3">Home Three</Link></li>
                        <li><Link href="/index-4">Home Four</Link></li>
                        <li><Link href="/index-5">Home Five</Link></li>
                    </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li className="dropdown"><Link href="/#">Solutions</Link>
                    <ul>
                        <li><Link href="/service">Our Solutions</Link></li>
                        <li><Link href="/service-details">Executive Search</Link></li>
                        <li><Link href="/service-details-2">Training Session</Link></li>
                        <li><Link href="/service-details-3">Career Growth</Link></li>
                        <li><Link href="/service-details-4">Payroll Services</Link></li>
                        <li><Link href="/service-details-5">Workforce System</Link></li>
                        <li><Link href="/service-details-6">Temporary Jobs</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/#">Pages</Link>
                    <ul>
                        <li className="dropdown"><Link href="/#">Job</Link>
                            <ul>
                                <li><Link href="/job">Place Job</Link></li>
                                <li><Link href="/job-2">Job Seekers</Link></li>
                                <li><Link href="/job-3">Job Openings</Link></li>
                                <li><Link href="/job-4">Job Apply</Link></li>
                                <li><Link href="/job-details">Job Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="/#">Portfolio</Link>
                            <ul>
                                <li><Link href="/portfolio">Portfolio 3 column</Link></li>
                                <li><Link href="/portfolio-2">Portfolio 2 column</Link></li>
                                <li><Link href="/portfolio-3">Portfolio Masonry</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/team">Our Team</Link></li>
                        <li><Link href="/faq">FAQ's</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/signup">Sing Up</Link></li>
                        <li><Link href="/error">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}

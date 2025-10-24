'use client'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin } from "lucide-react"

export default function Footer1() {
  const quickLinks = [
     { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/testimonial", label: "Testimonials" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="main-footer">
      <div className="widget-section p_relative pt_80 pb_100">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Logo + Third Image (Certificate image) */}
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget mr_30">
                <figure className="footer-logo mb_20">
                  <Link href="/"><img src="assets/images/logo.png" alt=""/></Link>
                </figure>
                <div className="certificate-image mb-4">
                  <Image
                    src="/image.png?height=150&width=180"
                    alt="Certificate"
                    width={150}
                    height={125}
                    className="rounded w-36 sm:w-44"
                  />
                </div>
              </div>
            </div>

            {/* Quick Links (replaces For Workers) */}
            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Quick Links</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Certificates (without third image) */}
            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Certificates</h4>
                </div>
                <div style={{display:'flex',flexDirection:'column',
                    gap:'5px'
                }}  className="widget-content flex flex-col">
                  <a href="/license.pdf"  target="_blank" rel="noopener noreferrer" className="block mr-2">
                    License
                  </a>
                  <a href="/s.pdf" target="_blank" rel="noopener noreferrer" className="block">
                    Permissions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Section (replaces For Business) */}
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Contact Us</h4>
                </div>
                <div style={{display:'flex',flexDirection:'column',
                    gap:'5px'
                }} className="widget-content  text-white">
                  <p><strong>Address:</strong> Samakushi-26, Kathmandu, Nepal</p>
                  <p><strong>Email:</strong> info@sadiksha.com.np</p>
                  <p><strong>Phone:</strong> +977 9841992641</p>
                  <p><strong>Website:</strong> <a href="http://www.sadiksha.com.np" className="hover:underline">www.sadiksha.com.np</a></p>
                  <div className="mt-2 flex space-x-3">
                    <a href='https://www.facebook.com/profile.php?id=61559076539202'>
                      <Facebook className="w-5 h-5 hover:text-gray-400 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/company/sadiksha-overseas/?feedView=all">
                      <Linkedin className="w-5 h-5 hover:text-gray-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="bottom-inner text-center">
            <p>Copyright &copy; {new Date().getFullYear()} <Link href="/">JobAway</Link> All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

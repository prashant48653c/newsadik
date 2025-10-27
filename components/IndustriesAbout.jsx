'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { getService } from "@/service/service"

export default function IndustriesAbout() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await getService()
        if (res && Array.isArray(res)) {
          setServices(res)
        }
      } catch (error) {
        console.error("Failed to fetch services:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  // Fallback or limit to 8 items
  const displayedServices = services.slice(0, 8)

  return (
    <section className="industries-style-four pt_120 pb_90">
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Industries</span>
          <h2 className="title-animation">Industries Served</h2>
        </div>

        <div className="row clearfix">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            displayedServices.map((service, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12 industries-block"
              >
                <div className="industries-block-two">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className={`icon-${9 + index}`}></i>
                    </div>
                    <h3>
                      <Link
                        href="/"
                        className="industry-link"
                        style={{fontSize:"1rem",lineHeight:"100%"}}
                      >
                        {service.serviceType}
                      </Link>
                    </h3>
                    <p>2853 Staffs</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="btn-box centred mt_60">
          <Link href="/" className="theme-btn btn-one">
            View All Categories
          </Link>
        </div>
      </div>

      {/* Inline styles or move this CSS to your stylesheet */}
      <style jsx>{`
        .industry-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .industry-link:hover {
          color: white;
        }
      `}</style>
    </section>
  )
}

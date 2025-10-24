'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { getService } from "@/service/service"
 
export default function Industries() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getServices() {
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

    getServices()
  }, [])

  // Fallback dummy data while loading or if no services
  const displayedServices =  services

  return (
    <section className="industries-section pt_20 pb_120">
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Industries</span>
          <h2 className="title-animation">Industries Served</h2>
        </div>
        <div className="inner-container clearfix">
          {displayedServices.slice(0,8).map((service, index) => (
            <div key={index} className="industries-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className={`icon-${9 + index}`}></i>
                </div>
                <h6><Link href="/">{service.serviceType}</Link></h6>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box centred mt_60">
          <Link href="/" className="theme-btn btn-one">View All Categories</Link>
        </div>
      </div>
    </section>
  )
}

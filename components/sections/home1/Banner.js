'use client'
import Link from "next/link"
import { useEffect, useState } from "react";


export default function Banner(){
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 500);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
    return (
        <> 

        <section className="banner-section p_relative centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
            <div className="author-box">
               <div className="author author-1"><img style={{width:'140px',height:"140px",objectFit:"cover"}} src="/waiter.jpg" alt=""/><span>Waiter</span></div>
                <div className="author author-2"><img style={{width:'110px',height:"110px",objectFit:"cover"}} src="/ass.jpg" alt=""/><span>Assistant</span></div>
                <div className="author author-3"><img style={{width:'90px',height:"90px",objectFit:"cover"}} src="/painter.jpg"  alt=""/><span>Painter</span></div>
                <div className="author author-4"><img style={{width:'110px',height:"110px",objectFit:"cover"}} src="/banker.jpg"  alt=""/><span>Finance</span></div>
                <div className="author author-5"><img style={{width:'90px',height:"90px",objectFit:"cover"}} src="/cleaner.jpg" alt=""/><span>Cleaner</span></div>
                <div className="author author-6"><img style={{width:'140px',height:"140px",objectFit:"cover"}} src="/nurse.jpg" alt=""/><span>Nurse</span></div>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>Find Your Next Career Here Our Open Positions</h2>
                    <p>Explore our open positions to find roles that align with your interests and expertise. From entry-level positions to leadership roles.</p>
               <div
      className="btn-box cus-box d-flex"
      style={{
        flexDirection: isMobile ? "column" : "row",
        gap: "1rem",
        justifyContent: "center",
        alignItems: isMobile ? "stretch" : "center",
      }}
    >
      <Link
        href="/apply-now"
        className="theme-btn btn-one"
        style={{
          marginRight: isMobile ? 0 : "1.25rem",
          flex: isMobile ? 1 : "none",
          textAlign: "center",
        }}
      >
        <span>Find Works</span>
      </Link>
      <Link
        href="/apply-now"
        className="theme-btn banner-btn"
        style={{
          flex: isMobile ? 1 : "none",
          textAlign: "center",
        }}
      >
        Hire Talents Now
      </Link>
    </div>
                </div>
            </div>
        </section>

        </>
    )
}

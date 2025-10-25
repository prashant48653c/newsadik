'use client'
import Link from "next/link"


export default function Banner(){
    return (
        <> 

        <section className="banner-section p_relative centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
            <div className="author-box">
                <div className="author author-1"><img src="assets/images/resource/author-1.png" alt=""/><span>Waiter</span></div>
                <div className="author author-2"><img src="assets/images/resource/author-2.png" alt=""/><span>Assistant</span></div>
                <div className="author author-3"><img src="assets/images/resource/author-3.png" alt=""/><span>Painter</span></div>
                <div className="author author-4"><img src="assets/images/resource/author-4.png" alt=""/><span>Finance</span></div>
                <div className="author author-5"><img src="assets/images/resource/author-5.png" alt=""/><span>Cleaner</span></div>
                <div className="author author-6"><img src="assets/images/resource/author-6.png" alt=""/><span>Nurse</span></div>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>Find Your Next Career Here Our Open Positions</h2>
                    <p>Explore our open positions to find roles that align with your interests and expertise. From entry-level positions to leadership roles.</p>
                    <div className="btn-box">
                        <Link href="/" className="theme-btn btn-one mr_20"><span>Find Works</span></Link>
                        <Link href="/" className="theme-btn banner-btn">Hire Talents Now</Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

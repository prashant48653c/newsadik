'use client'
import Link from "next/link"


export default function Subscribe(){

    return (
        <> 

        <section className="subscribe-section pt_100 pb_100 centred">
            <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: "url(assets/images/background/subscribe-bg.jpg)" }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>Subscribe Newsletter</h2>
                    <div className="form-inner">
                        <form method="post" action="contact.html">
                            <div className="form-group">
                                <div className="icon-box"><i className="far fa-envelope"></i></div>
                                <input type="email" name="email" placeholder="Email Address" required/>
                                <button type="submit" className="theme-btn btn-one">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <p>You can unsubscribe at any time.</p>
                </div>
            </div>
        </section>

        </>
    )
}

'use client'


export default function Subscribe(){

    return (
        <> 

        <section className="subscribe-style-two">
            <div className="bg-color"></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape-box">
                        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                    </div>
                    <div className="text-box">
                        <h2>Subscribe for <span>latest update</span></h2>
                    </div>
                    <div className="form-inner">
                        <form method="post" action="contact.html">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email Address" required/>
                                <button type="submit" className="theme-btn btn-one">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

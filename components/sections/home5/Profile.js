'use client'
import React from 'react'

export default function Profile(){
    return (
        <> 
            <section className="profile-section p_relative">
                <div className="auto-container">
                    <div className="inner-container p_relative">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 chat-column">
                                <div className="chat-content">
                                    <div className="shape">
                                        <div className="shape-1"></div>
                                        <div className="shape-2"></div>
                                    </div>
                                    <div className="title-text centred p_relative mb_45">
                                        <h3><img src="assets/images/icons/icon-15.png" alt=""/>Live Chat Support</h3>
                                    </div>
                                    <div className="chat-slide">
                                        <div className="single-item">
                                            <div className="image-box"><img src="assets/images/resource/author-8.png" alt=""/></div>
                                            <p>I’m available starting next week. I can answer any questions live.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="image-box"><img src="assets/images/icons/logo-icon-2.png" alt=""/></div>
                                            <p>How about we schedule a meeting for next Tuesday at 10 AM?</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="image-box"><img src="assets/images/resource/author-9.png" alt=""/></div>
                                            <p>That works for me. Is there a specific agenda you have in mind?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 verified-column">
                                <div className="verified-content">
                                    <div className="shape">
                                        <div className="shape-1"></div>
                                        <div className="shape-2"></div>
                                    </div>
                                    <div className="title-text centred p_relative mb_45">
                                        <h3><img src="assets/images/icons/icon-16.png" alt=""/>Verified Profiles</h3>
                                    </div>
                                    <div className="image-box">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/profile-1.jpg)" }}></div>
                                        <figure className="image"><img src="assets/images/resource/profile-2.jpg" alt=""/></figure>
                                        <span className="designation designation-1">Finance</span>
                                        <span className="designation designation-2">Nurse</span>
                                        <span className="designation designation-3">Assistant</span>
                                        <span className="designation designation-4">Cleaner</span>
                                    </div>
                                    <div className="lower-content centred">
                                        <div className="single-item">
                                            <h4>7 yrs</h4>
                                            <p>Experience</p>
                                        </div>
                                        <div className="single-item">
                                            <h4>4.61 <img src="assets/images/icons/icon-17.png" alt=""/></h4>
                                            <p>Rating</p>
                                        </div>
                                        <div className="single-item">
                                            <h4>7 <img src="assets/images/icons/icon-18.png" alt=""/></h4>
                                            <p>Favorites</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

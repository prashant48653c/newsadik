'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'


export default function Signup_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Sing Up">
                
                <section className="sign-section pt_110 pb_120">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                    <div className="auto-container">
                        <div className="form-inner">
                            <form method="post" action="/signup">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" required/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" required/>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" required/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" required/>
                                </div>
                                <div className="form-group message-btn">
                                    <button type="submit" className="theme-btn btn-one">Sign Up</button>
                                </div>
                                <span className="text">or</span>
                                <ul className="social-links clearfix">
                                    <li>
                                        <Link href="/signup"><img src="assets/images/icons/icon-25.png" alt=""/>Continue with Google</Link>
                                    </li>
                                    <li>
                                        <Link href="/signup"><img src="assets/images/icons/icon-26.png" alt=""/>Continue with Facebook</Link>
                                    </li>
                                </ul>
                            </form>
                            <div className="other-option">
                                <div className="check-box">
                                    <input className="check" type="checkbox" id="checkbox1"/>
                                    <label for="checkbox1">Remember me</label>
                                </div>
                            </div>
                            <div className="lower-text centred"><p>Already have an account? <Link href="/login">Login Here</Link></p></div>
                        </div>
                    </div>
                </section>
                
                <Subscribe/>

            </Layout>
        </div>
    )
}
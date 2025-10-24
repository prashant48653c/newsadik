'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'


export default function Login_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Login">
                <section className="sign-section pt_110 pb_120">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                    <div className="auto-container">
                        <div className="form-inner">
                            <form method="post" action="/login">
                                <div className="form-group">
                                    <label>Email <span>*</span></label>
                                    <input type="email" name="email" required/>
                                </div>
                                <div className="form-group">
                                    <label>Password <span>*</span></label>
                                    <input type="password" name="password" required/>
                                </div>
                                <div className="form-group message-btn">
                                    <button type="submit" className="theme-btn btn-one">Log In</button>
                                </div>
                                <span className="text">or</span>
                                <ul className="social-links clearfix">
                                    <li>
                                        <Link href="/login"><img src="assets/images/icons/icon-25.png" alt=""/>Continue with Google</Link>
                                    </li>
                                    <li>
                                        <Link href="/login"><img src="assets/images/icons/icon-26.png" alt=""/>Continue with Facebook</Link>
                                    </li>
                                </ul>
                            </form>
                            <div className="other-option">
                                <div className="check-box">
                                    <input className="check" type="checkbox" id="checkbox1"/>
                                    <label for="checkbox1">Remember me</label>
                                </div>
                                <button className="forgot-password">Forget password?</button>
                            </div>
                            <div className="lower-text centred"><p>Not registered yet? <Link href="/signup">Create an Account</Link></p></div>
                        </div>
                    </div>
                </section>
                
                <Subscribe/>

            </Layout>
        </div>
    )
}
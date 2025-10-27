'use client'
import React, { useState } from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { toast } from 'react-toastify'
import api from "../../lib/axios" // Update this path to your actual API instance

export default function Contact_Page() {
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })
    }

    const validateForm = () => {
        const newErrors = {}

        if (!form.fullName.trim() || form.fullName.length < 3) {
            newErrors.fullName = "Full Name must be at least 3 characters"
        }

        if (!form.phone.trim() || !/^\d{10,15}$/.test(form.phone)) {
            newErrors.phone = "Phone must be a valid number"
        }

        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address"
        }

        if (!form.message.trim() || form.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        try {
            const response = await api.post("/landing/feedback", form)
            if (response.status === 200) {
                toast.success("Email sent successfully!")
                setForm({ fullName: "", phone: "", email: "", message: "" })
            } else {
                toast.error("Failed to send message.")
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.")
        }
    }

    return (
        <div className="boxed_wrapper ">
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Contact us">
                
                <section className="contact-section pt_110 pb_30">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h3>Contact Information</h3>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt=""/></div>
                                            <h4>Corporate Office</h4>
                                            <p>Samakushi-26, Kathmandu, Nepal</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-28.png" alt=""/></div>
                                            <h4>Email Address</h4>
                                            <p><Link href="mailto:info@sadiksha.com.np">info@sadiksha.com.np</Link></p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt=""/></div>
                                            <h4>Phone Number</h4>
                                            <p><Link href="tel:+9779841992641">+977 9841992641</Link></p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt=""/></div>
                                            <h4>Website</h4>
                                            <p><Link href="http://www.sadiksha.com.np" target="_blank" rel="noopener noreferrer">www.sadiksha.com.np</Link></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                    <div className="form-inner">
                                        <form onSubmit={handleSubmit} id="contact-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Name <span>*</span></label>
                                                    <input 
                                                        type="text" 
                                                        name="fullName" 
                                                        value={form.fullName}
                                                        onChange={handleChange}
                                                        placeholder="" 
                                                    />
                                                    {errors.fullName && <span className="error-text" style={{color: 'red', fontSize: '12px'}}>{errors.fullName}</span>}
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Phone <span>*</span></label>
                                                    <input 
                                                        type="text" 
                                                        name="phone" 
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        placeholder="" 
                                                    />
                                                    {errors.phone && <span className="error-text" style={{color: 'red', fontSize: '12px'}}>{errors.phone}</span>}
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Email Address <span>*</span></label>
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        placeholder="" 
                                                    />
                                                    {errors.email && <span className="error-text" style={{color: 'red', fontSize: '12px'}}>{errors.email}</span>}
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Write Message <span>*</span></label>
                                                    <textarea 
                                                        name="message" 
                                                        value={form.message}
                                                        onChange={handleChange}
                                                        placeholder=""
                                                    ></textarea>
                                                    {errors.message && <span className="error-text" style={{color: 'red', fontSize: '12px'}}>{errors.message}</span>}
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-one">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="google-map pb_80">
                    <div className="auto-container">
                        <div className="inner-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d882.894682565419!2d85.3163079!3d27.7302904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192049971a5f%3A0x2fb346371b7a3ca2!2sSadiksha%20Overseas!5e0!3m2!1sen!2snp!4v1761528180098!5m2!1sen!2snp" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            
                        </div>
                    </div>
                </section>
                
                <Subscribe/>

            </Layout>
        </div>
    )
}

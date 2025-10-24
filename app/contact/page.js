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
        setErrors({ ...errors, [e.target.name]: "" }) // clear error while typing
    }

    const validateForm = () => {
        const newErrors = {}

        if (!form.fullName.trim() || form.fullName.length < 3) {
            newErrors.fullName = "Full Name must be at least 3 characters"
        }

        if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Phone must be a valid 10-digit number"
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
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Contact us">
                
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
                                            <p>0233 Brisbane Cir. Shiloh, Australia 81063</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt=""/></div>
                                            <h4>Main Warehouse</h4>
                                            <p>10445 Brisbane Cir. Shiloh, Australia 81063</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-28.png" alt=""/></div>
                                            <h4>Email Address</h4>
                                            <p><Link href="mailto:support@example.com">support@example.com</Link><br /><Link href="mailto:contact@example.com">contact@example.com</Link></p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt=""/></div>
                                            <h4>Phone Number</h4>
                                            <p><Link href="tel:2085440141">+(208) 544 -0141</Link><br /><Link href="tel:2085440142">+(208) 544 -0142</Link></p>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </section>
                
                <Subscribe/>

            </Layout>
        </div>
    )
}
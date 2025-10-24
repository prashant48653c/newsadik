'use client'
import React from 'react'
import Link from "next/link"

export default function Clients(){
    return (
        <> 
            <section className="clients-section pt_110 centred">
                <div className="auto-container">
                    <div className="title-text pb_60 sec-title-animation animation-style2">
                        <h3 className="title-animation">Trusted by the next-gen industry leaders</h3>
                    </div>
                    <div className="inner-box">
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-1.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/clients-1.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-2.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/clients-2.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-3.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/clients-3.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-4.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/clients-4.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/clients-5.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/clients-5.png" alt=""/></Link></figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

import React from 'react'
import Link from "next/link"

export default function Clients(){
    return (
    <> 
       <section className="clients-section home-3">
            <div className="bg-color"></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/clients-1.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/clients-1.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/clients-2.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/clients-2.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/clients-3.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/clients-3.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/clients-4.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/clients-4.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/clients-5.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/clients-5.png" alt=""/></Link></figure>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

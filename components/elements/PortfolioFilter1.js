'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {

    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")

    return (
        <>
            <section className="portfolio-section centred pt_110 pb_120">
                <div className="auto-container">
                    <div className="sec-title pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">REQUEST NEEDED TALENT</span>
                        <h2 className="title-animation">Talented Professionals Needed</h2>
                    </div>
                    <div className="sortable-masonry">
                        <div className="filters mb_60">
                            <ul className="filter-tabs filter-btns">
                                <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>View All</li>
                                <li className={activeBtn("consulting")} onClick={handleFilterKeyChange("consulting")}>Consulting</li>
                                <li className={activeBtn("market")} onClick={handleFilterKeyChange("market")}>Market</li>
                                <li className={activeBtn("presentation")} onClick={handleFilterKeyChange("presentation")}>Presentation</li>
                                <li className={activeBtn("recruitment")} onClick={handleFilterKeyChange("recruitment")}>Recruitment</li>
                                <li className={activeBtn("technology")} onClick={handleFilterKeyChange("technology")}>Technology</li>
                            </ul>
                        </div>
                        <div className="items-container row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all consulting presentation technology">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-1.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Consulting Excellence Portfolio</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all market recruitment">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-2.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Create a series of blog posts discussing</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all consulting presentation technology">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-3.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Explore the concept of personal</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all market recruitment technology">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-4.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Share stories of employees who have</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all consulting presentation">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-5.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Provide guidance on crafting effective</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all market recruitment technology">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-6.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Detail any internship or graduate</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all consulting presentation technology">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-7.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Use relevant keywords to improve</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all market recruitment">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-8.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Explore the concept of personal branding</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all consulting presentation technology">
                                <div className="portfolio-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-9.jpg" alt=""/></figure>
                                        <div className="content-box">
                                            <span>Consulting</span>
                                            <h3><Link href="/portfolio">Share stories of employees who have</Link></h3>
                                            <div className="link"><Link href="/portfolio">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-wrapper pt_20">
                        <ul className="pagination clearfix">
                            <li><Link href="/portfolio"><i className="icon-34"></i></Link></li>
                            <li><Link href="/portfolio" className="current">1</Link></li>
                            <li><Link href="/portfolio">2</Link></li>
                            <li><Link href="/portfolio">3</Link></li>
                            <li><Link href="/portfolio"><i className="icon-35"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
'use client'
import Link from "next/link"
export default function About() {
    return (
        <>
        {/*About One Start*/}
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-one__left wow fadeInLeft" data-wow-delay="100ms">
                            <div className="about-one__img">
                                <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">About Company</span>
                                </div>
                                <h2 className="section-title__title">We provide the best Advisors
                                    to grow your business</h2>
                            </div>
                            <p className="about-one__big-text">Suspendisse vel iaculis leo.Curabitur scelerisque mi porta
                                justo fermentum porta.</p>
                            <p className="about-one__text">Aliquam eros justo,Posuere lobortis viverr augue mattis fermentum
                                non ullamcorper
                                viverra laoreet augue.Aliquam eros justo,posuere lobortis non,viverra laoreet augue
                                mattis fermentum non ullamcorper</p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-profit"></span>
                                    </div>
                                    <h4>Best Quality
                                        <br/> Project</h4>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-discussion"></span>
                                    </div>
                                    <h4>Get Free
                                        <br/> Consultation</h4>
                                </li>
                            </ul>
                            <div className="about-one__btn-box">
                                <a href="contact" className="about-one__btn thm-btn">Get Free Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End*/}
        
        </>
    )
}

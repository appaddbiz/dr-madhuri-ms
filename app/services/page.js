'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our services">
        {/*About Three Start*/}
        <section className="about-three about-four">
            <div className="about-three__bg-box">
                <div className="about-three__bg"
                    style={{ backgroundImage: ' url(assets/images/backgrounds/about-three-bg.jpg)' }} >
                    <div className="about-three__shape-2"
                        style={{ backgroundImage: ' url(assets/images/shapes/about-three-shape-2.png)' }} ></div>
                    <div className="about-three__video-link">
                        <a  onClick={() => setOpen(true)} className="video-popup">
                            <div className="about-three__video-icon">
                                <span className="icon-play-button"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="about-three__shape-1">
                    <img src="assets/images/shapes/about-three-shape-1.jpg" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5"></div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Get to know us</span>
                                </div>
                                <h2 className="section-title__title">Professional and Dedicated
                                    <br/> Consulting Services</h2>
                            </div>
                            <h4 className="about-three__text-1">Suspendisse vel iaculis leo.Curabitur scelerisque mi porta
                                justo fermentum porta.</h4>
                            <p className="about-three__text-2">Aliquam eros justo,Posuere lobortis viverr augue mattis
                                fermentum non ullamcorper
                                viverra laoreet augue.Aliquam eros justo,posuere lobortis non,viverra laoreet augue
                                mattis fermentum non ullamcorper</p>
                            <div className="about-three__points-and-year">
                                <ul className="about-three__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>24/7 Call Services Available</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>How to improve business</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Great Skilled Consultant</p>
                                    </li>
                                </ul>
                                <div className="about-three__year">
                                    <div className="about-three__year-shape"></div>
                                    <p>Since
                                        <br/> 2024</p>
                                </div>
                            </div>
                            <div className="about-three__btn-box">
                                <a href="contact" className="about-three__btn thm-btn">Get Free Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End*/}

        {/*Service Three Start*/}
        <section className="service-three">
            <div className="service-three__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/service-three-bg.jpg)' }} ></div>
            <div className="service-three__img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src="assets/images/services/service-three-img-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="service-three__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Our Best Service</span>
                                </div>
                                <h2 className="section-title__title">What we're Offering to
                                    <br/> Our Customers</h2>
                            </div>
                            <p className="service-three__text">We are committed to providing our customers with exceptional
                                <br/> service while offering our employees the best training.</p>
                        </div>
                    </div>
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-development"></span>
                            </div>
                            <h3 className="service-three__title"><a href="website-development">Website
                                    <br/> Development</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-bullhorn"></span>
                            </div>
                            <h3 className="service-three__title"><a href="digital-marketing">Digital
                                    <br/> Marketing</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-analytics"></span>
                            </div>
                            <h3 className="service-three__title"><a href="digital-marketing">Marketing
                                    <br/> Analysis</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="500ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-curve"></span>
                            </div>
                            <h3 className="service-three__title"><a href="graphic-designing">Graphic
                                    <br/> Designing</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-seo"></span>
                            </div>
                            <h3 className="service-three__title"><a href="seo-content-writting">SEO & Content
                                    <br/> Writing</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-application"></span>
                            </div>
                            <h3 className="service-three__title"><a href="app-development">Application
                                    <br/> Development</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                </div>
            </div>
        </section>
        {/*Service Three End*/}

        {/*Blog Two Start*/}
        <section className="blog-two blog-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Blog & News</span>
                    </div>
                    <h2 className="section-title__title">Our Latest From The Blog</h2>
                </div>
                <div className="row">
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-1.jpg" alt=""/>
                                </div>
                                <div className="blog-two__arrow">
                                    <a href="#"><span className="icon-right-arrow"></span></Link>
                                </div>
                                <div className="blog-two__tag">
                                    <p>Strategy Business</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <a href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    <li>
                                        <a href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li>
                                </ul>
                                <div className="blog-two__title-box">
                                    <div className="blog-two__content-shape">
                                        <img src="assets/images/shapes/blog-two-content-shape-1.png" alt=""/>
                                    </div>
                                    <h3 className="blog-two__title"><a href="blog-details">What is the 2024 trend for
                                            Graphic Design ?</Link></h3>
                                    <p className="blog-two__text">Business is the activity of making one's
                                        livcing or buying & selling products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-2.jpg" alt=""/>
                                </div>
                                <div className="blog-two__arrow">
                                    <a href="#"><span className="icon-right-arrow"></span></Link>
                                </div>
                                <div className="blog-two__tag">
                                    <p>Business Solution</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <a href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    <li>
                                        <a href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li>
                                </ul>
                                <div className="blog-two__title-box">
                                    <div className="blog-two__content-shape">
                                        <img src="assets/images/shapes/blog-two-content-shape-1.png" alt=""/>
                                    </div>
                                    <h3 className="blog-two__title"><a href="blog-details">How To Start a Consulting
                                            Business In 2024</Link></h3>
                                    <p className="blog-two__text">Business is the activity of making one's
                                        livcing or buying & selling products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-3.jpg" alt=""/>
                                </div>
                                <div className="blog-two__arrow">
                                    <a href="#"><span className="icon-right-arrow"></span></Link>
                                </div>
                                <div className="blog-two__tag">
                                    <p>Marketing Solution</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <a href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    <li>
                                        <a href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li>
                                </ul>
                                <div className="blog-two__title-box">
                                    <div className="blog-two__content-shape">
                                        <img src="assets/images/shapes/blog-two-content-shape-1.png" alt=""/>
                                    </div>
                                    <h3 className="blog-two__title"><a href="blog-details">We are delivering the best
                                            IT Services</Link></h3>
                                    <p className="blog-two__text">Business is the activity of making one's
                                        livcing or buying & selling products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Two End*/}

        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="cta-one__inner">
                        <h3 className="cta-one__title">Let's discuss about how we can help
                            <br/> make your business better</h3>
                        <div className="cta-one__btn-box">
                            <a href="about" className="cta-one__btn thm-btn">Let's Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </Layout>
        </>
    )
}
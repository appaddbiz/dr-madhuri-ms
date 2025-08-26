'use client'
import Link from "next/link"
export default function Service() {
    return (
        <>
        {/*Services One Start*/}
        <section className="services-one">
            <h3 className="services-one__big-text">Business</h3>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Services List</span>
                    </div>
                    <h2 className="section-title__title">What We are offering</h2>
                </div>
                <div className="row">
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-coding"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="website-development">Modern Website
                                            Designing</Link></h3>
                                    <p className="services-one__text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-curve"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="seo-content-writting">Seo & Content
                                            Writting</Link></h3>
                                    <p className="services-one__text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-creative"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="digital-marketing">Business Idea &
                                            Innovation</Link></h3>
                                    <p className="services-one__text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-productivity"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="digital-marketing">Marketing &
                                            Reporting</Link></h3>
                                    <p className="services-one__text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                </div>
            </div>
        </section>
        {/*Services One End*/}

    
        </>
    )
}

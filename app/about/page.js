"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        {/*About Three Start*/}
        <section className="about-three about-four">
          <div className="about-three__bg-box">
            <div
              className="about-three__bg"
              style={{
                backgroundImage:
                  " url(assets/images/backgrounds/about-three-bg.jpg)",
              }}
            >
              <div
                className="about-three__shape-2"
                style={{
                  backgroundImage:
                    " url(assets/images/shapes/about-three-shape-2.png)",
                }}
              ></div>
              <div className="about-three__video-link">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="video-popup"
                >
                  <div className="about-three__video-icon">
                    <span className="icon-play-button"></span>
                    <i className="ripple"></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="about-three__shape-1">
              <img src="assets/images/shapes/about-three-shape-1.jpg" alt="" />
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
                        <img
                          src="assets/images/shapes/section-title-tagline-shape.png"
                          alt=""
                        />
                      </div>
                      <span className="section-title__tagline">
                        Get to know us
                      </span>
                    </div>
                    <h2 className="section-title__title">
                      Professional and Dedicated
                      <br /> Consulting Services
                    </h2>
                  </div>
                  <h4 className="about-three__text-1">
                    Suspendisse vel iaculis leo.Curabitur scelerisque mi porta
                    justo fermentum porta.
                  </h4>
                  <p className="about-three__text-2">
                    Aliquam eros justo,Posuere lobortis viverr augue mattis
                    fermentum non ullamcorper viverra laoreet augue.Aliquam eros
                    justo,posuere lobortis non,viverra laoreet augue mattis
                    fermentum non ullamcorper
                  </p>
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
                      <p>
                        Since
                        <br /> 2024
                      </p>
                    </div>
                  </div>
                  <div className="about-three__btn-box">
                    <Link href="contact" className="about-three__btn thm-btn">
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Three End*/}

        {/*Contact One Start*/}
        <section className="contact-one">
          <div
            className="contact-one__bg"
            style={{
              backgroundImage:
                " url(assets/images/backgrounds/contact-one-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div
                  className="contact-one__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="contact-one__from-shape-1">
                    <img
                      src="assets/images/shapes/contact-one-form-shape-1.png"
                      alt=""
                    />
                  </div>
                  <form
                    className="contact-form-validated contact-one__form"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="contact-one__input-box">
                          <input
                            type="text"
                            name="username"
                            placeholder="Your Name"
                            required=""
                          />
                          <div className="contact-one__input-box-icon">
                            <span className="icon-people"></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required=""
                          />
                          <div className="contact-one__input-box-icon">
                            <span className="icon-open-mail"></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__input-box">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required=""
                          />
                          <div className="contact-one__input-box-icon">
                            <span className="icon-phone-call"></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-box-icon">
                            <span className="icon-edit"></span>
                          </div>
                          <div className="select-box">
                            <select className="wide">
                              <option data-display="Select Subject">
                                Subject
                              </option>
                              <option>Select Subject 01</option>
                              <option>Select Subject 02</option>
                              <option>Select Subject 03</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-one__btn"
                          >
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="result"></div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="contact-one__right">
                  <div
                    className="contact-one__video-link wow zoomIn"
                    data-wow-delay="100ms"
                    data-wow-duration="3500ms"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="video-popup"
                    >
                      <div className="contact-one__video-icon">
                        <span className="icon-play-button"></span>
                        <i className="ripple"></i>
                      </div>
                    </button>
                    <h4 className="contact-one__video-text">
                      Better Digital Marketing Solution
                      <br /> & Services Fingertips
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact One End*/}

        {/*Sliding Text Start*/}
        <section className="sliding-text">
          <div className="sliding-text__inner">
            <ul className="sliding-text__list marquee_mode-1 list-unstyled">
              <li>
                <div className="icon">
                  <img
                    src="assets/images/resources/sliding-text-img-1.png"
                    alt=""
                  />
                </div>
                <p>Cretive Agency</p>
              </li>
              <li>
                <div className="icon">
                  <img
                    src="assets/images/resources/sliding-text-img-1.png"
                    alt=""
                  />
                </div>
                <p>Digital Marketing</p>
              </li>
              <li>
                <div className="icon">
                  <img
                    src="assets/images/resources/sliding-text-img-1.png"
                    alt=""
                  />
                </div>
                <p>Design & Development Craft</p>
              </li>
              <li>
                <div className="icon">
                  <img
                    src="assets/images/resources/sliding-text-img-1.png"
                    alt=""
                  />
                </div>
                <p>Transofrm Ideas Into Reality</p>
              </li>
              <li>
                <div className="icon">
                  <img
                    src="assets/images/resources/sliding-text-img-1.png"
                    alt=""
                  />
                </div>
                <p>It Consulting</p>
              </li>
              <li>
                <div className="icon">
                  <img
                    src="assets/images/resources/sliding-text-img-1.png"
                    alt=""
                  />
                </div>
                <p>Seo Optimization</p>
              </li>
            </ul>
          </div>
        </section>
        {/*Sliding Text End*/}

        {/*Blog Three Start*/}
        <section className="blog-three">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape">
                  <img
                    src="assets/images/shapes/section-title-tagline-shape.png"
                    alt=""
                  />
                </div>
                <span className="section-title__tagline">Blog & News</span>
              </div>
              <h2 className="section-title__title">Our Latest From The Blog</h2>
            </div>
            <div className="row">
              {/*Blog Three Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="blog-three__single">
                  <div className="blog-three__img-box">
                    <div className="blog-three__img">
                      <img src="assets/images/blog/blog-3-1.jpg" alt="" />
                    </div>
                    <div className="blog-three__tag">
                      <p>Marketing Solution</p>
                    </div>
                    <div className="blog-three__content">
                      <ul className="blog-three__meta list-unstyled">
                        <li>
                          <Link href="#">
                            <span className="fas fa-calendar-alt"></span>20 Oct
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="fas fa-comments"></span>02 Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-three__title">
                        <Link href="blog-details">
                          We are delivering the best IT Services
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog Three Single End*/}
              {/*Blog Three Single Two Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="blog-three__single-2">
                  <ul className="blog-three__meta-2 list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="fas fa-calendar-alt"></span>20 Oct 2024
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fas fa-comments"></span>02 Comment
                      </Link>
                    </li>
                  </ul>
                  <div className="blog-three__title-box">
                    <div className="blog-three__content-shape-1">
                      <img
                        src="assets/images/shapes/blog-three-content-shape-1.png"
                        alt=""
                      />
                    </div>
                    <h3 className="blog-three__title-2">
                      <Link href="blog-details">
                        Making a change on this internet business
                      </Link>
                    </h3>
                    <p className="blog-three__text-2">
                      Business is the activity of making one's livcing or buying
                      & selling products.
                    </p>
                    <div className="blog-three__read-more">
                      <Link href="blog-details">
                        READ MORE<span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog Three Single Two End*/}
              {/*Blog Three Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="500ms"
              >
                <div className="blog-three__single blog-three__single-3">
                  <div className="blog-three__img-box">
                    <div className="blog-three__img">
                      <img src="assets/images/blog/blog-3-2.jpg" alt="" />
                    </div>
                    <div className="blog-three__tag">
                      <p>Web Development</p>
                    </div>
                    <div className="blog-three__content">
                      <ul className="blog-three__meta list-unstyled">
                        <li>
                          <Link href="#">
                            <span className="fas fa-calendar-alt"></span>20 Oct
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="fas fa-comments"></span>02 Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-three__title">
                        <Link href="blog-details">
                          Necessity may give us best virtual court
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog Three Single End*/}
              {/*Blog Three Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="700ms"
              >
                <div className="blog-three__single">
                  <div className="blog-three__img-box">
                    <div className="blog-three__img">
                      <img src="assets/images/blog/blog-3-3.jpg" alt="" />
                    </div>
                    <div className="blog-three__tag">
                      <p>Business Solution</p>
                    </div>
                    <div className="blog-three__content">
                      <ul className="blog-three__meta list-unstyled">
                        <li>
                          <Link href="#">
                            <span className="fas fa-calendar-alt"></span>20 Oct
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="fas fa-comments"></span>02 Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-three__title">
                        <Link href="blog-details">
                          Revenue growth for your business
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog Three Single End*/}
              {/*Blog Three Single Two Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="900ms"
              >
                <div className="blog-three__single-2">
                  <ul className="blog-three__meta-2 list-unstyled">
                    <li>
                      <Link href="#">
                        <span className="fas fa-calendar-alt"></span>20 Oct 2024
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fas fa-comments"></span>02 Comment
                      </Link>
                    </li>
                  </ul>
                  <div className="blog-three__title-box">
                    <div className="blog-three__content-shape-1">
                      <img
                        src="assets/images/shapes/blog-three-content-shape-1.png"
                        alt=""
                      />
                    </div>
                    <h3 className="blog-three__title-2">
                      <Link href="blog-details">
                        Working together,ideas come to life
                      </Link>
                    </h3>
                    <p className="blog-three__text-2">
                      Business is the activity of making one's livcing or buying
                      & selling products.
                    </p>
                    <div className="blog-three__read-more">
                      <Link href="blog-details">
                        READ MORE<span className="icon-right-arrow"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog Three Single Two End*/}
              {/*Blog Three Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="1100ms"
              >
                <div className="blog-three__single blog-three__single-3">
                  <div className="blog-three__img-box">
                    <div className="blog-three__img">
                      <img src="assets/images/blog/blog-3-4.jpg" alt="" />
                    </div>
                    <div className="blog-three__tag">
                      <p>Strategy Business</p>
                    </div>
                    <div className="blog-three__content">
                      <ul className="blog-three__meta list-unstyled">
                        <li>
                          <Link href="#">
                            <span className="fas fa-calendar-alt"></span>20 Oct
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="fas fa-comments"></span>02 Comment
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-three__title">
                        <Link href="blog-details">
                          Get a few solutions to hire a best candidate
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*Blog Three Single End*/}
            </div>
          </div>
        </section>
        {/*Blog Three End*/}

        {/*CTA One Start*/}
        <section className="cta-one">
          <div
            className="cta-one__bg"
            style={{
              backgroundImage: " url(assets/images/backgrounds/cta-one-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Let's discuss about how we can help
                  <br /> make your business better
                </h3>
                <div className="cta-one__btn-box">
                  <Link href="about" className="cta-one__btn thm-btn">
                    Let's Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*CTA One End*/}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="Get7rqXYrbQ"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

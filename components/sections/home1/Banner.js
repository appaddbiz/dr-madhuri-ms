"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      {/*Main Slider Start*/}
      <section className="main-slider">
        <Swiper
          {...swiperOptions}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{
                    backgroundImage: " url(/assets/home-image/Banner-2.png)",
                  }}
                ></div>
                {/* <div className="main-slider__shape-bg"
                            style={{ backgroundImage: ' url(assets/images/shapes/main-slider-shape-bg.png)' }} ></div>
                        <div className="main-slider__shape-1 float-bob-y">
                            <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                        </div>
                        <div className="main-slider__shape-2 img-bounce">
                            <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                        </div>
                        <div className="main-slider__shape-3 float-bob-x">
                            <img src="assets/images/shapes/main-slider-shape-3.png" alt=""/>
                        </div> */}
                <div className="container">
                  {/* <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h2 className="main-slider__title">
                          Build Effective <br /> <span>Marketing</span> <br />
                          Strategy
                        </h2>
                        <p className="main-slider__text">
                          We have 12+ year of experience for providing <br />
                          consulting services solutions.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link
                            href="contact"
                            className="main-slider__btn thm-btn"
                          >
                            Get Free Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{
                    backgroundImage: " url(/assets/home-image/Banner-4.png)",
                  }}
                ></div>
                {/* <div
                  className="main-slider__shape-bg"
                  style={{
                    backgroundImage:
                      " url(assets/images/shapes/main-slider-shape-bg.png)",
                  }}
                ></div>
                <div className="main-slider__shape-1 float-bob-y">
                  <img
                    src="assets/images/shapes/main-slider-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="main-slider__shape-2 img-bounce">
                  <img
                    src="assets/images/shapes/main-slider-shape-2.png"
                    alt=""
                  />
                </div>
                <div className="main-slider__shape-3 float-bob-x">
                  <img
                    src="assets/images/shapes/main-slider-shape-3.png"
                    alt=""
                  />
                </div> */}
                <div className="container">
                  {/* <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h2 className="main-slider__title">
                          Build Effective <br /> <span>Marketing</span> <br />
                          Strategy
                        </h2>
                        <p className="main-slider__text">
                          We have 12+ year of experience for providing <br />
                          consulting services solutions.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link
                            href="contact"
                            className="main-slider__btn thm-btn"
                          >
                            Get Free Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{
                    backgroundImage:
                      " url(assets/images/backgrounds/slider-1-3.jpg)",
                  }}
                ></div>
                <div
                  className="main-slider__shape-bg"
                  style={{
                    backgroundImage:
                      " url(assets/images/shapes/main-slider-shape-bg.png)",
                  }}
                ></div>
                <div className="main-slider__shape-1 float-bob-y">
                  <img
                    src="assets/images/shapes/main-slider-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="main-slider__shape-2 img-bounce">
                  <img
                    src="assets/images/shapes/main-slider-shape-2.png"
                    alt=""
                  />
                </div>
                <div className="main-slider__shape-3 float-bob-x">
                  <img
                    src="assets/images/shapes/main-slider-shape-3.png"
                    alt=""
                  />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h2 className="main-slider__title">
                          Build Effective <br /> <span>Marketing</span> <br />
                          Strategy
                        </h2>
                        <p className="main-slider__text">
                          We have 12+ year of experience for providing <br />
                          consulting services solutions.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link
                            href="contact"
                            className="main-slider__btn thm-btn"
                          >
                            Get Free Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </div>

          <div className="swiper-pagination" id="main-slider-pagination"></div>
          {/* If we need navigation buttons */}
        </Swiper>
      </section>
      {/*Main Slider End*/}
    </>
  );
}

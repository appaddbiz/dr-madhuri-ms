"use client";
import Link from "next/link";

export default function Project() {
  return (
    <>
      {/*Project One Start*/}
      <section className="project-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape">
                <img
                  src="assets/images/shapes/section-title-tagline-shape.png"
                  alt=""
                />
              </div>
              <span className="section-title__tagline">Our Gallery</span>
            </div>
            <h2 className="section-title__title">
              Moments from Our Care & Services
            </h2>
          </div>

          <div className="row">
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="/assets/gallery/IMG-20250903-WA0014.jpg" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Consultant Service</Link>
                    </h3>
                    <p className="project-one__sub-title">Digital Marketing</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="/assets/gallery/IMG-20250903-WA0015.jpg" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Business Strategy</Link>
                    </h3>
                    <p className="project-one__sub-title">Digital Marketing</p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="/assets/gallery/IMG-20250903-WA0016.jpg" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Consultant Service</Link>
                    </h3>
                    <p className="project-one__sub-title">Managing Director</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="400ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="/assets/gallery/IMG-20250903-WA0032.jpg" style={{aspectRatio:"3/2"}} alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">UI/UX Designing</Link>
                    </h3>
                    <p className="project-one__sub-title">Digital Marketing</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="/assets/gallery/IMG-20250903-WA0019.jpg" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Webside Development</Link>
                    </h3>
                    <p className="project-one__sub-title">Managing Director</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img
                      src="/assets/gallery/Modern Delivery Suites.jpg"
                      alt=""
                    />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Mobile Application</Link>
                    </h3>
                    <p className="project-one__sub-title">Managing Director</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="main-menu__btn-box text-center">
              <Link href="/gallery" className="main-menu__btn thm-btn ">
                View All Images
              </Link>
            </div>
            {/*Project One Single End*/}
          </div>
        </div>
      </section>
      {/*Project One End*/}
    </>
  );
}

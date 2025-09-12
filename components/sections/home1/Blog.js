"use client";
import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/*Blog One Start */}
      <section className="blog-one">
        {/* <div
          className="blog-one__bg float-bob-x"
          style={{
            backgroundImage: " url(assets/images/backgrounds/blog-one-bg.jpg)",
          }}
        ></div> */}
        {/* <div className="blog-one__shape-1">
          <img src="assets/images/shapes/blog-one-shape-1.png" alt="" />
        </div>
        <div className="blog-one__shape-2">
          <img src="assets/images/shapes/blog-one-shape-2.png" alt="" />
        </div> */}
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape">
                <img
                  src="assets/images/shapes/section-title-tagline-shape.png"
                  alt=""
                />
              </div>
              <span className="section-title__tagline">Our Blog</span>
            </div>
            <h2 className="section-title__title">
              Latest Women’s Health & Wellness Articles
            </h2>
          </div>
          <div className="row">
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoCRnuB0PPjK-MlxWij1C8jj84h0_1fCPuQ&s"
                      alt=""
                    />
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="#">
                        <span className="fas fa-calendar-alt"></span>20 Oct 2024
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas fa-comments"></span>02 Comment
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="#">
                      10 Early Signs of Pregnancy You Should Know
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Learn about the first symptoms of pregnancy and when to
                    consult your gynecologist for confirmation and care.
                  </p>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}

            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src="https://images.onlymyhealth.com/imported/images/2022/November/02_Nov_2022/main-menstrualirregularities.jpg"
                      style={{ aspectRatio: "3/2" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="#">
                        <span className="fas fa-calendar-alt"></span>12 Nov 2024
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas fa-comments"></span>05 Comment
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="#">
                      Understanding Menstrual Irregularities
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Periods that are too frequent, too heavy, or absent may
                    signal an underlying health issue. Here’s what you need to
                    know.
                  </p>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}

            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src="https://femia.health/wp-content/uploads/2024/12/C-section-vs-vaginal-birth-title-1200x900.jpg"
                      style={{ aspectRatio: "3/2" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="#">
                        <span className="fas fa-calendar-alt"></span>05 Dec 2024
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fas fa-comments"></span>03 Comment
                      </Link>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="#">
                      C-Section vs Normal Delivery: What to Expect
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Both delivery methods are safe under medical supervision.
                    This guide helps you understand the differences, pros, and
                    recovery tips.
                  </p>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
          </div>
        </div>
      </section>

      {/*Blog One End*/}
    </>
  );
}

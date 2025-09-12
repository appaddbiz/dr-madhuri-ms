"use client";
import Link from "next/link";
export default function Process() {
  return (
    <>
      {/*Process One Start*/}
      <section className="process-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape">
                <img
                  src="assets/images/shapes/section-title-tagline-shape.png"
                  alt=""
                />
              </div>
              <span className="section-title__tagline">Our Facilities</span>
            </div>
            <h2 className="section-title__title">
              Advanced Facilities & Technology
            </h2>
          </div>
          <div className="row">
            {/*Process One Single Start*/}
            <Link
              href="#"
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="process-one__single-inner">
                <div className="process-one__single-shape"></div>
                <div className="process-one__single">
                  <div
                    className="process-one__single-bg"
                    style={{
                      backgroundImage:
                        " url(/assets/home-image/Modern-Delivery-Suites.jpg)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="process-one__icon">
                    <span className="">
                      <img
                        src="/assets/flat-icons/mother (1).svg"
                        style={{ height: "70px" }}
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="process-one__title">Modern Delivery Suites</h3>
                  <p className="process-one__text">
                    State-of-the-art suites for safe normal and C-section
                    deliveries.
                  </p>
                  <div className="process-one__count"></div>
                </div>
              </div>
            </Link>
            {/*Process One Single End*/}

            {/*Process One Single Start*/}
            <Link
              href="#"
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="process-one__single-inner">
                <div className="process-one__single-shape"></div>
                <div className="process-one__single">
                  <div
                    className="process-one__single-bg"
                    style={{
                      backgroundImage:
                        " url(/assets/home-image/Ultrasound-Fetal-Scanning.avif)",
                    }}
                  ></div>
                  <div className="process-one__icon">
                    <span className="">
                      <img
                        src="/assets/flat-icons/scan.svg"
                        style={{ height: "70px" }}
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="process-one__title">
                    Ultrasound & Fetal Scanning
                  </h3>
                  <p className="process-one__text">
                    Advanced imaging for pregnancy monitoring and fetal health.
                  </p>
                  <div className="process-one__count"></div>
                </div>
              </div>
            </Link>
            {/*Process One Single End*/}

            {/*Process One Single Start*/}
            <Link
              href="#"
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="process-one__single-inner">
                <div className="process-one__single-shape"></div>
                <div className="process-one__single">
                  <div
                    className="process-one__single-bg"
                    style={{
                      backgroundImage:
                        " url(/assets/home-image/Laparoscopy-Hysteroscopy.avif)",
                    }}
                  ></div>
                  <div className="process-one__icon">
                    <span className="">
                      <img
                        src="/assets/flat-icons/laparoscopy (1).svg"
                        style={{ height: "70px" }}
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="process-one__title">
                    Laparoscopy & Hysteroscopy
                  </h3>
                  <p className="process-one__text">
                    Minimally invasive technology ensuring quicker recovery
                    times.
                  </p>
                  <div className="process-one__count"></div>
                </div>
              </div>
            </Link>
            {/*Process One Single End*/}

            {/*Process One Single Start*/}
            <Link
              href="#"
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="400ms"
            >
              <div className="process-one__single-inner">
                <div className="process-one__single-shape"></div>
                <div className="process-one__single">
                  <div
                    className="process-one__single-bg"
                    style={{
                      backgroundImage:
                        " url(/assets/home-image/NICU-Neonatal-Care.avif)",
                    }}
                  ></div>
                  <div className="process-one__icon">
                    <span className="">
                      <img
                        src="/assets/flat-icons/neonatal.svg"
                        style={{ height: "70px" }}
                        alt=""
                      />
                    </span>
                  </div>
                  <h3 className="process-one__title">NICU & Neonatal Care</h3>
                  <p className="process-one__text">
                    Specialized neonatal intensive care for newborns needing
                    extra support.
                  </p>
                  <div className="process-one__count"></div>
                </div>
              </div>
            </Link>
            {/*Process One Single End*/}
          </div>
        </div>
      </section>

      {/*Process One End*/}
    </>
  );
}

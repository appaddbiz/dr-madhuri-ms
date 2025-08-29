"use client";
import Link from "next/link";
export default function Features() {
  return (
    <>
      {/*Feature One Start*/}
      <section className="feature-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape">
                <img
                  src="assets/images/shapes/section-title-tagline-shape.png"
                  alt=""
                />
              </div>
              <span className="section-title__tagline">Our Services</span>
            </div>
            <h2 className="section-title__title">
              Comprehensive Women’s Health, All Under One Roof
            </h2>
          </div>
          <div className="row">
            {/*Feature One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon-and-title">
                  <div className="feature-one__icon">
                    <span className="icon-baby"></span>
                  </div>
                  <h3 className="feature-one__title">
                    <Link href="obstetrics">
                      Obstetrics <br /> & Pregnancy Care
                    </Link>
                  </h3>
                </div>
                <p className="feature-one__text">
                  Comprehensive antenatal, labour, and postnatal care with
                  expertise in high-risk pregnancy management and
                  preconceptional counselling.
                </p>
                <Link href="obstetrics" className="feature-one__read-more">
                  Read More <span className="fas fa-arrow-circle-right"></span>
                </Link>
              </div>
            </div>

            {/* Infertility */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon-and-title">
                  <div className="feature-one__icon">
                    <span className="icon-heart"></span>
                  </div>
                  <h3 className="feature-one__title">
                    <Link href="infertility">
                      Infertility <br /> Treatments
                    </Link>
                  </h3>
                </div>
                <p className="feature-one__text">
                  Complete evaluation, ovulation induction, and intrauterine
                  insemination (IUI) to support couples on their journey to
                  parenthood.
                </p>
                <Link href="infertility" className="feature-one__read-more">
                  Read More <span className="fas fa-arrow-circle-right"></span>
                </Link>
              </div>
            </div>

            {/* Gynaecology */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon-and-title">
                  <div className="feature-one__icon">
                    <span className="icon-female"></span>
                  </div>
                  <h3 className="feature-one__title">
                    <Link href="gynaecology-care">
                      Gynaecology <br /> Care
                    </Link>
                  </h3>
                </div>
                <p className="feature-one__text">
                  Diagnosis and treatment of fibroids, endometriosis, ovarian
                  cysts, menstrual disorders, menopausal care, and preventive
                  screenings.
                </p>
                <Link
                  href="gynaecology-care"
                  className="feature-one__read-more"
                >
                  Read More <span className="fas fa-arrow-circle-right"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row mt-4">
            {/* Laparoscopy & Hysteroscopy */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="400ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon-and-title">
                  <div className="feature-one__icon">
                    <span className="icon-surgery"></span>
                  </div>
                  <h3 className="feature-one__title">
                    <Link href="laparoscopy-hysteroscopy">
                      Laparoscopy <br /> & Hysteroscopy
                    </Link>
                  </h3>
                </div>
                <p className="feature-one__text">
                  Advanced minimally invasive surgeries including myomectomy,
                  hysterectomy, ovarian cystectomy, tubal procedures, &
                  diagnostic hysteroscopy.
                </p>
                <Link
                  href="laparoscopy-hysteroscopy"
                  className="feature-one__read-more"
                >
                  Read More <span className="fas fa-arrow-circle-right"></span>
                </Link>
              </div>
            </div>

            {/* Ultrasonography */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="500ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon-and-title">
                  <div className="feature-one__icon">
                    <span className="icon-ultrasound"></span>
                  </div>
                  <h3 className="feature-one__title">
                    <Link href="ultrasonography">
                      Advanced <br /> Ultrasonography
                    </Link>
                  </h3>
                </div>
                <p className="feature-one__text">
                  Expertise in transvaginal scans, saline sonography, and 3D
                  ultrasound for accurate diagnosis and monitoring of women’s
                  health.
                </p>
                <Link href="ultrasonography" className="feature-one__read-more">
                  Read More <span className="fas fa-arrow-circle-right"></span>
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon-and-title">
                  <div className="feature-one__icon">
                    <span className="icon-calendar"></span>
                  </div>
                  <h3 className="feature-one__title">
                    <Link href="appointment">
                      Book an <br /> Appointment
                    </Link>
                  </h3>
                </div>
                <p className="feature-one__text">
                  Schedule your consultation with our specialists for
                  personalized, compassionate, and expert women’s healthcare.
                </p>
                <Link href="appointment" className="feature-one__read-more">
                  Book Now <span className="fas fa-arrow-circle-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Feature One End*/}
    </>
  );
}

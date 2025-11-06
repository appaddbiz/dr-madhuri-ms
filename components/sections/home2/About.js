"use client";
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/*About Two Start*/}
      <section className="about-two">
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#a90644",
              fontSize: "25px",
            }}
          >
            Best Gynecologist in Jayanagar
          </h1>
          <div
            className="section-title text-center section-title-mobile-view"
            style={{ marginBottom: "0px" }}
          >
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape">
                <img
                  src="/assets/images/shapes/section-title-tagline-shape.png"
                  alt=""
                />
              </div>
              <span className="section-title__tagline">About Doctor</span>
            </div>
            <h2 className="section-title__title">
              Compassionate Care for Women’s Health
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-5">
              <div
                className="about-two__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-two__img" style={{ marginTop: "50px" }}>
                  <img
                    src="/assets/home-image/doctorpic.jpg"
                    alt="Dr. Madhuri M S"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-two__right">
                <div className="section-title-desk-view section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape">
                      <img
                        src="/assets/images/shapes/section-title-tagline-shape.png"
                        alt=""
                      />
                    </div>
                    <span className="section-title__tagline">About Doctor</span>
                  </div>

                  <h2 className="section-title__title">
                    Compassionate Care for Women’s Health
                  </h2>
                </div>
                <p
                  className="about-two__text-2"
                  style={{ textAlign: "justify" }}
                >
                  Dr. Madhuri M S is a distinguished Obstetrician and
                  Gynaecologist with qualifications in MBBS, MS (OBG), FMAS, and
                  a Diploma in Gynaecological Ultrasound. She has trained and
                  practiced in high-volume centres, which has provided her with
                  substantial experience in the management of high-risk
                  pregnancies, infertility care, minimally invasive laparoscopic
                  procedures, and gynaecological ultrasound.
                </p>
                <p
                  className="about-two__text-2"
                  style={{ textAlign: "justify" }}
                >
                  Her clinical practice is founded on the principles of safety,
                  evidence-based medicine, and compassionate care, ensuring that
                  women receive the highest standards of healthcare across all
                  stages of life.
                </p>
                <p
                  className="about-two__text-2"
                  style={{ textAlign: "justify" }}
                >
                  With a strong academic background and proven clinical
                  expertise, Dr. Madhuri is committed to advancing women’s
                  health by offering comprehensive guidance, preventive
                  strategies, and modern therapeutic options, thereby promoting
                  better outcomes and healthier futures.
                </p>
                <div className="about-two__client-info">
                  <div className="about-two__client-content">
                    <div className="cta-one__btn-box">
                      <Link
                        href="/about-doctor"
                        className="cta-one__btn thm-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                  <div className="about-two__client-content">
                    <div className="cta-one__btn-box">
                      <Link
                        href="tel:+916361197107"
                        className="cta-one__btn thm-btn"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*About Two End*/}
    </>
  );
}

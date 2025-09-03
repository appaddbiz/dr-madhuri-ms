"use client";
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/*About Two Start*/}
      <section className="about-two">
        <div className="container">
          <div
            className="section-title text-center mobile-view"
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
                <div className="section-title text-left desk-view">
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
                  Dr. Madhuri M S is a highly skilled Obstetrician and
                  Gynaecologist with qualifications in
                  <strong> MBBS, MS (OBG), FMAS</strong> and a{" "}
                  <strong>Diploma in Gynaecological Ultrasound</strong>. She
                  brings extensive expertise in managing high-risk pregnancies,
                  infertility care, minimally invasive laparoscopic surgeries,
                  and advanced gynaecological ultrasound. Her practice is
                  centered on delivering safe, evidence-based, and compassionate
                  healthcare to women at every stage of life.
                </p>
                <p
                  className="about-two__text-2"
                  style={{ textAlign: "justify" }}
                >
                  With her strong academic background and clinical excellence,
                  Dr. Madhuri is committed to empowering women with the right
                  guidance, preventive care, and modern treatment options for a
                  healthier future.
                </p>
                <div className="about-two__client-info">
                  <div className="about-two__client-content">
                    <div className="cta-one__btn-box">
                      <Link href="#" className="cta-one__btn thm-btn">
                        View More
                      </Link>
                    </div>
                  </div>
                  <div className="about-two__client-content">
                    <div className="cta-one__btn-box">
                      <Link href="#" className="cta-one__btn thm-btn">
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

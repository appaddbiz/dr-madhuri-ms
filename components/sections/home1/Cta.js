"use client";
import Link from "next/link";

export default function Cta() {
  return (
    <>
      {/*CTA One Start*/}
      <section className="cta-one">
        <div
          className="cta-one__bg"
          style={{
            backgroundImage: " url(/assets/home-image/cta.jpeg)",
            backgroundPosition: "right",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="cta-one__inner">
              <h3 className="cta-one__title">
                Book Your Consultation for <br /> Compassionate Women’s Care
              </h3>
              <div className="cta-one__btn-box">
                <a href="tel:+916361197107" className="cta-one__btn thm-btn">
                  Book An Apppointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*CTA One End*/}
    </>
  );
}

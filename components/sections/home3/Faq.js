"use client";
import { useState } from "react";
export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      {/*FAQ One Start*/}
      <section className="faq-one">
        <div
          className="faq-one__bg"
          style={{
            backgroundImage: " url(/assets/home-image/faq.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6"></div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="faq-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape">
                      <img
                        src="assets/images/shapes/section-title-tagline-shape.png"
                        alt=""
                      />
                    </div>
                    <span className="section-title__tagline">
                      Ask Your Questions
                    </span>
                  </div>
                  <h2 className="section-title__title">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion-1"
                >
                  {/* FAQ 1 */}
                  <div
                    className={
                      isActive.key == 1 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <div className="accrodion-title">
                      <h4>How often should I visit a gynecologist?</h4>
                      <div className="faq-one__count"></div>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          It is recommended to visit once a year for routine
                          check-ups, Pap smears, and preventive care. Pregnant
                          women may require more frequent visits as advised by
                          the doctor.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div
                    className={
                      isActive.key == 2 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <div className="accrodion-title">
                      <h4>
                        What should I expect during my first prenatal visit?
                      </h4>
                      <div className="faq-one__count"></div>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          During your first prenatal visit, your gynecologist
                          will review your medical history, perform basic tests,
                          and may recommend an ultrasound to confirm pregnancy
                          and assess fetal health.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div
                    className={
                      isActive.key == 3 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <div className="accrodion-title">
                      <h4>How can I manage irregular periods?</h4>
                      <div className="faq-one__count"></div>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Irregular periods can be caused by hormonal imbalance,
                          PCOS, thyroid issues, or stress. Your gynecologist
                          will run necessary tests and suggest lifestyle changes
                          or medications if required.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div
                    className={
                      isActive.key == 4 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <div className="accrodion-title">
                      <h4>When should I consult for fertility issues?</h4>
                      <div className="faq-one__count"></div>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          If you are under 35 and have been trying to conceive
                          for over a year (or 6 months if over 35), it’s best to
                          consult a gynecologist or fertility specialist for
                          evaluation and guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*FAQ One End*/}
    </>
  );
}

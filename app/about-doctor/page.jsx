import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
        {/*Team Details Start*/}
        <section className="team-details">
          <div className="container">
            <div className="team-details__top">
              <div className="row">
                <div className="col-xl-5 col-lg-5">
                  <div className="section-title text-left mobile-view">
                    <div className="section-title__tagline-box">
                      <div className="section-title__tagline-shape">
                        <img
                          src="assets/images/shapes/section-title-tagline-shape.png"
                          alt=""
                        />
                      </div>
                      <span className="section-title__tagline">
                        About Doctor
                      </span>
                    </div>
                    <h2 className="section-title__title">Dr. Madhuri M S</h2>
                  </div>
                  <div className="team-details__top-left">
                    <div className="team-details__top-img">
                      <img
                        src="/assets/home-image/Doctor.jpg"
                        alt="Dr. Madhuri M S"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="team-details__right">
                    <div className="section-title text-left desk-view">
                      <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                          <img
                            src="assets/images/shapes/section-title-tagline-shape.png"
                            alt=""
                          />
                        </div>
                        <span className="section-title__tagline">
                          About Doctor
                        </span>
                      </div>
                      <h2 className="section-title__title">Dr. Madhuri M S</h2>
                    </div>
                    <p className="team-details__text">
                      <strong>MBBS, MS - Obstetrics & Gynaecology</strong>
                      <br />
                      Gynecologist, Obstetrician, Infertility Specialist
                      <br />
                      <span>
                        16 Years Experience Overall (10 years as specialist)
                      </span>
                    </p>
                    <p className="team-details__text">
                      Dr. Madhuri M S is a Gynecologist, Obstetrician and
                      Infertility Specialist in Banashankari 2nd Stage,
                      Bangalore and has an experience of 16 years in these
                      fields (10 years as a specialist). She practices at G and
                      G Speciality Clinic, Banashankari 2nd Stage, Bangalore.
                      <br />
                      She completed MBBS from Adichunchanagiri Institute of
                      Medical Sciences, Bellur in 2008, MS - Obstetrics and
                      Gynaecology from Vydehi Institute of Medical Sciences and
                      Research Centre, Bangalore in 2013, and Fellowship in
                      Minimal Access Surgery from GEM Institute, Coimbatore in
                      2016.
                    </p>
                    <ul className="team-details__points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>
                          Gynecologist, Obstetrician and Infertility Specialist
                        </p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Specialist in Minimal Access Surgery</p>
                      </li>
                    </ul>
                    {/* <div className="team-details__call-box">
                      <ul className="team-details__call-list list-unstyled">
                        <li>
                          <p>
                            Clinic :{" "}
                            <span>
                              G and G Speciality Clinic, Banashankari 2nd Stage,
                              Bangalore
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Qualification :{" "}
                            <span>
                              MBBS, MS (OBG), Fellowship in Minimal Access
                              Surgery
                            </span>
                          </p>
                        </li>
                      </ul>
                      <ul className="team-details__call-list team-details__call-list-2 list-unstyled">
                        <li>
                          <p>
                            Experience :{" "}
                            <span>
                              16 Years Overall (10 Years as Specialist)
                            </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Patient Trust : <span>99% (293 Patients)</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            Location :{" "}
                            <span>Banashankari 2nd Stage, Bangalore</span>
                          </p>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="team-details__bottom">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__bottom-left">
                    <div className="section-title text-left">
                      <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                          <img
                            src="assets/images/shapes/section-title-tagline-shape.png"
                            alt=""
                          />
                        </div>
                        <span className="section-title__tagline">
                          Expertise & Services
                        </span>
                      </div>
                      <h2 className="section-title__title">
                        How She Helps You
                      </h2>
                    </div>
                    <p className="team-details__bottom-left-text">
                      Dr. Madhuri M S offers comprehensive care in Obstetrics,
                      Gynecology, and Infertility management, blending advanced
                      surgical skills with compassionate patient care.
                    </p>
                    <div className="team-details__bottom-left-points-box">
                      <ul className="team-details__bottom-left-points-list list-unstyled">
                        <li>
                          <div className="team-details__bottom-points-count"></div>
                          <div className="team-details__bottom-points-content">
                            <h3>Gynecological Care</h3>
                            <p>
                              Expertise in managing fibroids, endometriosis,
                              PCOS, menstrual disorders, and hormone imbalances.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="team-details__bottom-points-count"></div>
                          <div className="team-details__bottom-points-content">
                            <h3>Obstetric Care</h3>
                            <p>
                              Specialized in high-risk pregnancies, fetal growth
                              restriction, and safe deliveries with modern
                              facilities.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="team-details__bottom-points-count"></div>
                          <div className="team-details__bottom-points-content">
                            <h3>Infertility Management</h3>
                            <p>
                              Provides treatments including ovulation induction,
                              IUI, hysteroscopy, laparoscopy, and
                              fertility-enhancing surgeries.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__bottom-img">
                    <img
                      src="https://img.freepik.com/premium-photo/indian-female-doctor-giving-advice-pregnant-woman_768688-219.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_incoming&w=740&q=80"
                      alt="Dr. Madhuri M S"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Team Details End*/}

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
      </Layout>
    </>
  );
}

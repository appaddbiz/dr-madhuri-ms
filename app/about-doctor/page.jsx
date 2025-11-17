import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Cta from "@/components/sections/home1/Cta";

export const metadata = {
  title: "VBAC Specialist in Jayanagar",
  description:
    "VBAC Specialist in Jayanagar - Expert care for safe Vaginal Birth After Cesarean, personalized guidance, and advanced support for a healthy delivery journey.",
  alternates: {
    canonical: "https://www.drmadhurimsobgyn.com/about-doctor",
  },
};
export default function Home() {
  return (
    <>
      {/* SEO H2 (visually hidden for semantics) */}
      <h2 style={{position:'absolute',left:'-9999px',width:1,height:1,overflow:'hidden'}}>
        VBAC Specialist in Jayanagar
      </h2>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
        {/*Team Details Start*/}
        <section className="team-details">
          <div className="container">
            <div className="team-details__top">
              <div className="row">
                <div className="col-xl-5 col-lg-5">
                  <div className="section-title text-left section-title-mobile-view">
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
                        alt="VBAC Specialist in Jayanagar"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="team-details__right">
                    <div className="section-title text-left section-title-desk-view">
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
                      <strong>
                        MBBS, MS (OBG), FMAS, Diploma in Gynaecological
                        Ultrasound
                      </strong>
                      <br />
                      Obstetrician, Gynaecologist, Infertility Specialist
                    </p>
                    <p
                      className="team-details__text"
                      style={{ textAlign: "justify" }}
                    >
                      Dr. Madhuri M S is a distinguished Obstetrician and
                      Gynaecologist with qualifications in MBBS, MS (OBG), FMAS,
                      and a Diploma in Gynaecological Ultrasound. She has
                      trained and practiced in high-volume centres, which has
                      provided her with substantial experience in the management
                      of high-risk pregnancies, infertility care, minimally
                      invasive laparoscopic procedures, and gynaecological
                      ultrasound.
                      <br />
                      Her clinical practice is founded on the principles of
                      safety, evidence-based medicine, and compassionate care,
                      ensuring that women receive the highest standards of
                      healthcare across all stages of life.
                      <br />
                      With a strong academic background and proven clinical
                      expertise, Dr. Madhuri is committed to advancing women’s
                      health by offering comprehensive guidance, preventive
                      strategies, and modern therapeutic options, thereby
                      promoting better outcomes and healthier futures.
                    </p>
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
                      src="/assets/gallery/Adobe Express - file (1).jpg"
                      alt="VBAC Specialist in Jayanagar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Team Details End*/}

        {/*CTA One Start*/}
        <Cta />
        {/*CTA One End*/}
      </Layout>
    </>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      <div className="mobile-nav__wrapper">
        {/* <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div> */}
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="/" aria-label="logo image">
              <img src="/assets/flat-icons/Dr Madhuri.png" width="180" alt="" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <a href="/" onClick={handleMobileMenu}>
                    Home
                  </Link>
                  {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><a href="/">Home One</Link></li>
                                        <li><a href="index-2">Home Two</Link></li>
                                        <li><a href="index-3">Home Three</Link></li>
                                    </ul> */}
                  {/* <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button> */}
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <a href="/about-doctor" onClick={handleMobileMenu}>
                    About Doctor
                  </Link>
                  {/* <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><a href="#">About Doctor</Link></li>
                                        <li><a href="team">Team</Link></li>
                                        <li><a href="team-details">Team Details</Link></li>
                                        <li><a href="testimonials">Testimonials</Link></li>
                                        <li><a href="pricing">Pricing</Link></li>
                                        <li><a href="faq">Faq</Link></li>
                                        <li><a href="404">404 Error</Link></li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button> */}
                </li>
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <a
                    href="/our-services/obstetrics"
                    onClick={handleMobileMenu}
                  >
                    Obstetrics
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <a
                        href="/our-services/obstetrics/antenatal-and-post-natal-care"
                        onClick={handleMobileMenu}
                      >
                        Comprehensive Antenatal, Labour and Postnatal Care
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/preconceptional-counselling"
                        onClick={handleMobileMenu}
                      >
                        Preconceptional Counselling
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/high-risk-pregnancy"
                        onClick={handleMobileMenu}
                      >
                        High Risk Pregnancy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/previous-cesarean-pregnancy-tolac"
                        onClick={handleMobileMenu}
                      >
                        Previous cesarean pregnancy- TOLAC
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/poor-obstetric-past"
                        onClick={handleMobileMenu}
                      >
                        Poor Obstetric Past
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/recurrent-loss-of-pregnancy"
                        onClick={handleMobileMenu}
                      >
                        Recurrent Loss of Pregnancy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/diabetes-in-pregnancy-gdm"
                        onClick={handleMobileMenu}
                      >
                        Diabetes in Pregnancy (GDM)
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/hypertension-in-pregnancy-pih"
                        onClick={handleMobileMenu}
                      >
                        Hypertension in Pregnancy (PIH)
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/twin-triplet-quadruplet-pregnancy"
                        onClick={handleMobileMenu}
                      >
                        Twin/Triplet/Quadruplet Pregnancy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/multiple-pregnancies"
                        onClick={handleMobileMenu}
                      >
                        Multiple Pregnancies
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/obstetrics/fetal-growth-restriction"
                        onClick={handleMobileMenu}
                      >
                        Fetal Growth Restriction
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/infertility"
                        onClick={handleMobileMenu}
                      >
                        Infertility
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/infertility/complete-evaluation"
                        onClick={handleMobileMenu}
                      >
                        Complete Evaluation
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/infertility/ovulation-induction"
                        onClick={handleMobileMenu}
                      >
                        Ovulation Induction
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/infertility/intra-uterine-insemination-iui"
                        onClick={handleMobileMenu}
                      >
                        Intra-Uterine Insemination (IUI)
                      </Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key == 3 ? "expanded open" : ""}
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <a
                    href="/our-services/gynaecology"
                    onClick={handleMobileMenu}
                  >
                    Gynaecology
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <a
                        href="/our-services/gynaecology/fibroids-leiomyoma-of-uterus"
                        onClick={handleMobileMenu}
                      >
                        Fibroids / Leiomyoma of Uterus
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/fibroids-of-cervix"
                        onClick={handleMobileMenu}
                      >
                        Fibroids of Cervix
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/abnormal-dysfunctional-uterus-bleeding"
                        onClick={handleMobileMenu}
                      >
                        Abnormal/Dysfunctional Uterus Bleeding
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/endometriosis"
                        onClick={handleMobileMenu}
                      >
                        Endometriosis
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/ovarian-cysts"
                        onClick={handleMobileMenu}
                      >
                        Ovarian Cysts
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/chocolate-cyst-endometrioma-of-ovary"
                        onClick={handleMobileMenu}
                      >
                        Chocolate Cyst : Endometrioma of Ovary
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/hormone-imbalances"
                        onClick={handleMobileMenu}
                      >
                        Hormone Imbalances
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/severe-pelvic-pain-management"
                        onClick={handleMobileMenu}
                      >
                        Severe Pelvic Pain Management
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/menopausal-and-perimenopausal-care"
                        onClick={handleMobileMenu}
                      >
                        Menopausal and Perimenopausal Care
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/gynaecology/annual-check-ups-and-preventive-screenings"
                        onClick={handleMobileMenu}
                      >
                        Annual Check-ups & Preventive Screenings
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy"
                        onClick={handleMobileMenu}
                      >
                        Laparoscopy & Hysteroscopy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/diagnostic-hystero-laparoscopy"
                        onClick={handleMobileMenu}
                      >
                        Diagnostic Hystero-Laparoscopy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/operative-hystero-laparoscopy"
                        onClick={handleMobileMenu}
                      >
                        Operative Hystero-Laparoscopy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/laparoscopic-myomectomy"
                        onClick={handleMobileMenu}
                      >
                        Laparoscopic Myomectomy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/total-laparoscopic-hysterectomy"
                        onClick={handleMobileMenu}
                      >
                        Total Laparoscopic Hysterectomy (TLH)
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/diagnostic-hysteroscopy"
                        onClick={handleMobileMenu}
                      >
                        Diagnostic Hysteroscopy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/hysteroscopic-septal-resection"
                        onClick={handleMobileMenu}
                      >
                        Hysteroscopic Septal Resection
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/hysteroscopic-polypectomy"
                        onClick={handleMobileMenu}
                      >
                        Hysteroscopic Polypectomy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/tubal-re-canalisation"
                        onClick={handleMobileMenu}
                      >
                        Tubal Re-canalisation
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/chromopertubation"
                        onClick={handleMobileMenu}
                      >
                        Chromopertubation
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/laparoscopic-ovarian-cystectomy"
                        onClick={handleMobileMenu}
                      >
                        Laparoscopic Ovarian Cystectomy
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/tubal-clipping-hydrosalpinx"
                        onClick={handleMobileMenu}
                      >
                        Tubal Clipping (Hydrosalpinx)
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/laparoscopy-hysteroscopy/laparoscopic-tubal-occlusion-permanent-sterilization"
                        onClick={handleMobileMenu}
                      >
                        Laparoscopic Tubal Occlusion (Permanent Sterilization)
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/ultrasonography"
                        onClick={handleMobileMenu}
                      >
                        Ultrasonography
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/ultrasonography/transvaginal-scan"
                        onClick={handleMobileMenu}
                      >
                        Transvaginal Scan
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/ultrasonography/saline-sonography"
                        onClick={handleMobileMenu}
                      >
                        Saline Sonography
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/our-services/ultrasonography/3d-ultrasonography"
                        onClick={handleMobileMenu}
                      >
                        3D
                      </Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key == 3 ? "expanded open" : ""}
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <a href="/gallery" onClick={handleMobileMenu}>
                    Gallery
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    {/* <li>
                      <a href="projects">Projects</Link>
                    </li>
                    <li>
                      <a href="project-details">Project Details</Link>
                    </li> */}
                  </ul>
                  {/* <button
                    className={isActive.key == 4 ? "expanded open" : ""}
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </button> */}
                </li>
                <li
                  className={
                    isActive.key == 5 ? "dropdown current" : "dropdown"
                  }
                >
                  <a href="/#" onClick={handleMobileMenu}>
                    Blogs
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 5 ? "block" : "none"}`,
                    }}
                  >
                    {/* <li>
                      <a href="blog">Blog</Link>
                    </li>
                    <li>
                      <a href="blog-details">Blog Details</Link>
                    </li> */}
                  </ul>
                  {/* <button
                    className={isActive.key == 5 ? "expanded open" : ""}
                    onClick={() => handleToggle(5)}
                  >
                    <span className="fa fa-angle-right" />
                  </button> */}
                </li>
                <li>
                  <a href="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a
                href="mailto:drmadhuri.og@gmail.com"
                onClick={handleMobileMenu}
              >
                drmadhuri.og@gmail.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+916361197107" onClick={handleMobileMenu}>
                +91 6361197107
              </Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></Link>
              <a href="#" className="fab fa-facebook-square"></Link>
              <a href="#" className="fab fa-pinterest-p"></Link>
              <a href="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;

import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link href="/">
            Home
            <span className="main-menu-border"></span>
          </Link>
          {/* <ul>
            <li>
              <Link href="/">Home One</Link>
            </li>
            <li>
              <Link href="index-2">Home Two</Link>
            </li>
            <li>
              <Link href="index-3">Home Three</Link>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="/about-doctor">
            Doctor
            <span className="main-menu-border"></span>
          </Link>
        </li>
        {/* <li className="dropdown">
                    <Link href="#">Pages
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li> */}
        {/* Obstetrics Menu */}
        <li className="dropdown">
          <Link href="/our-services/obstetrics">
            Obstetrics
            <span className="main-menu-border"></span>
          </Link>
          <ul
            className="col-xl-12"
            style={{
              width: "700px",
              position: "absolute",
              left: "-150px",
              padding: "20px",
            }}
          >
            <ul className="row">
              {/* Pregnancy & Care */}
              <li className="col-xl-6 dropdown" style={{ listStyle: "none" }}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="/our-services/obstetrics/antenatal-and-post-natal-care">
                      Comprehensive Antenatal, Labour and Postnatal Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/preconceptional-counselling">
                      Preconceptional Counselling
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/high-risk-pregnancy">
                      High Risk Pregnancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/previous-cesarean-pregnancy-tolac">
                      Previous cesarean pregnancy- TOLAC
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/poor-obstetric-past">
                      Poor Obstetric Past
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/recurrent-loss-of-pregnancy">
                      Recurrent Loss of Pregnancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/diabetes-in-pregnancy-gdm">
                      Diabetes in Pregnancy (GDM)
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/hypertension-in-pregnancy-pih">
                      Hypertension in Pregnancy (PIH)
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/twin-triplet-quadruplet-pregnancy">
                      Twin/Triplet/Quadruplet Pregnancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/multiple-pregnancies">
                      Multiple Pregnancies
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/obstetrics/fetal-growth-restriction">
                      Fetal Growth Restriction
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Infertility */}
              <li className="col-xl-6 dropdown" style={{ listStyle: "none" }}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="/our-services/infertility">Infertility</Link>
                  </li>
                  <li>
                    <Link href="/our-services/infertility/complete-evaluation">
                      Complete Evaluation
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/infertility/ovulation-induction">
                      Ovulation Induction
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/infertility/intra-uterine-insemination-iui">
                      Intra-Uterine Insemination (IUI)
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>

        {/* Gynaecology Menu */}
        <li className="dropdown">
          <Link href="/our-services/gynaecology">
            Gynaecology
            <span className="main-menu-border"></span>
          </Link>
          <ul
            className="col-xl-12"
            style={{
              width: "max-content",
              position: "absolute",
              left: "-450px",
              padding: "20px",
            }}
          >
            <ul className="row">
              {/* Gynaecology Care */}
              <li className="col-xl-4 dropdown" style={{ listStyle: "none" }}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="/our-services/gynaecology/fibroids-leiomyoma-of-uterus">
                      Fibroids / Leiomyoma of Uterus
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/fibroids-of-cervix">
                      Fibroids of Cervix
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/abnormal-dysfunctional-uterus-bleeding">
                      Abnormal/Dysfunctional Uterus Bleeding
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/endometriosis">
                      Endometriosis
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/ovarian-cysts">
                      Ovarian Cysts
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/chocolate-cyst-endometrioma-of-ovary">
                      Chocolate Cyst : Endometrioma of Ovary
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/hormone-imbalances">
                      Hormone Imbalances
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/severe-pelvic-pain-management">
                      Severe Pelvic Pain Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/menopausal-and-perimenopausal-care">
                      Menopausal and Perimenopausal Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/gynaecology/annual-check-ups-and-preventive-screenings">
                      Annual Check-ups & Preventive Screenings
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Laparoscopy & Hysteroscopy */}
              <li className="col-xl-4 dropdown" style={{ listStyle: "none" }}>
                <span className="main-menu-border"></span>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy">
                      Laparoscopy & Hysteroscopy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/diagnostic-hystero-laparoscopy">
                      Diagnostic Hystero-Laparoscopy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/operative-hystero-laparoscopy">
                      Operative Hystero-Laparoscopy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/laparoscopic-myomectomy">
                      Laparoscopic Myomectomy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/total-laparoscopic-hysterectomy">
                      Total Laparoscopic Hysterectomy (TLH)
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/diagnostic-hysteroscopy">
                      Diagnostic Hysteroscopy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/hysteroscopic-septal-resection">
                      Hysteroscopic Septal Resection
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/hysteroscopic-polypectomy">
                      Hysteroscopic Polypectomy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/tubal-re-canalisation">
                      Tubal Re-canalisation
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/chromopertubation">
                      Chromopertubation
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/laparoscopic-ovarian-cystectomy">
                      Laparoscopic Ovarian Cystectomy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/tubal-clipping-hydrosalpinx">
                      Tubal Clipping (Hydrosalpinx)
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/laparoscopy-hysteroscopy/laparoscopic-tubal-occlusion-permanent-sterilization">
                      Laparoscopic Tubal Occlusion (Permanent Sterilization)
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Ultrasonography */}
              <li className="col-xl-4 dropdown" style={{ listStyle: "none" }}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="/our-services/ultrasonography">
                      Ultrasonography
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/ultrasonography/transvaginal-scan">
                      Transvaginal Scan
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/ultrasonography/saline-sonography">
                      Saline Sonography
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/ultrasonography/3d-ultrasonography">
                      3D
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/gallery">
            Gallery
            <span className="main-menu-border"></span>
          </Link>
          {/* <ul>
            <li>
              <Link href="projects">Projects</Link>
            </li>
            <li>
              <Link href="project-details">Project Details</Link>
            </li>
          </ul> */}
        </li>
        <li className="dropdown">
          <Link href="#">
            Blog
            <span className="main-menu-border"></span>
          </Link>
          {/* <ul>
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="blog-details">Blog Details</Link>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="/contact">
            Contact
            <span className="main-menu-border"></span>
          </Link>
        </li>
      </ul>
    </>
  );
}

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
          <Link href="#">
            About Doctor
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
        <li className="dropdown">
          <Link href="#">
            Services
            <span className="main-menu-border"></span>
          </Link>
          <ul
            className="col-xl-12"
            style={{
              width: "1200px",
              position: "absolute",
              left: "-450px",
              padding: "20px",
            }}
          >
            <ul className="row">
              {/* Obstetrics */}
              <li className="col-xl-3 dropdown" style={{ listStyle: "none" }}>
                <Link
                  href="#"
                  style={{ textTransform: "uppercase" }}
                >
                  Obstetrics
                </Link>
                <span className="main-menu-border"></span>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="#">
                      Comprehensive Antenatal, Labour and Postnatal Care
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Preconceptional Counselling
                    </Link>
                  </li>
                  <li className="dropdown" style={{ listStyle: "none" }}>
                    <Link href="#">High Risk Pregnancy</Link>
                    {/* <ul style={{ listStyle: "none" }}> */}
                    <li>
                      <Link href="#">
                        Poor Obstetric Past
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Recurrent Loss of Pregnancy
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Diabetes in Pregnancy (GDM)
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Hypertension in Pregnancy (PIH)
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Twin/Triplet/Quadruplet Pregnancy
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Multiple Pregnancies
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Fetal Growth Restriction
                      </Link>
                    </li>
                    {/* </ul> */}
                  </li>
                </ul>
              </li>

              {/* Infertility */}
              <li className="col-xl-3 dropdown" style={{ listStyle: "none" }}>
                <Link
                  href="#"
                  style={{ textTransform: "uppercase" }}
                >
                  Infertility
                </Link>
                <span className="main-menu-border"></span>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="#">
                      Complete Evaluation
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Ovulation Induction
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Intra-Uterine Insemination (IUI)
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Gynaecology Care */}
              <li className="col-xl-3 dropdown" style={{ listStyle: "none" }}>
                <Link
                  href="#"
                  style={{ textTransform: "uppercase" }}
                >
                  Gynaecology Care
                </Link>
                <span className="main-menu-border"></span>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="#">
                      Fibroids / Leiomyoma of Uterus
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Fibroids of Cervix
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Abnormal/Dysfunctional Uterus Bleeding
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Endometriosis
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Ovarian Cysts
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Chocolate Cyst : Endometrioma of Ovary
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Hormone Imbalances
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Severe Pelvic Pain Management
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Menopausal and Perimenopausal Care
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Annual Check-ups & Preventive Screenings
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Laparoscopy & Hysteroscopy */}
              <li className="col-xl-3 dropdown" style={{ listStyle: "none" }}>
                <Link
                  href="#"
                  style={{ textTransform: "uppercase" }}
                >
                  Laparoscopy & Hysteroscopy
                </Link>
                <span className="main-menu-border"></span>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="#">
                      Diagnostic Hystero-Laparoscopy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Operative Hystero-Laparoscopy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Laparoscopic Myomectomy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Total Laparoscopic Hysterectomy (TLH)
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Diagnostic Hysteroscopy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Hysteroscopic Septal Resection
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Hysteroscopic Polypectomy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Tubal Re-canalisation
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Chromopertubation
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Laparoscopic Ovarian Cystectomy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Tubal Clipping (Hydrosalpinx)
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Laparoscopic Tubal Occlusion (Permanent Sterilization)
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Ultrasonography */}
              <li
                className="col-xl-3 dropdown"
                style={{ listStyle: "none", top: "-80px" }}
              >
                <Link
                  href="#"
                  style={{ textTransform: "uppercase" }}
                >
                  Ultrasonography
                </Link>
                <span className="main-menu-border"></span>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="#">
                      Transvaginal Scan
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Saline Sonography
                    </Link>
                  </li>
                  <li>
                    <Link href="#">3D</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="#">
            Testimonial
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
          <Link href="#">
            Contact
            <span className="main-menu-border"></span>
          </Link>
        </li>
      </ul>
    </>
  );
}

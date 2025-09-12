import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <style>
        {`
         .sticky-sidebar {
          position: fixed;
          top: 50%;
          left: 0%;
          transform: translateY(-50%);
          z-index: 999;
          display: flex;
          flex-direction: column;
        }
        .sticky-sidebar > div {
          width: 100%;
        }
        .sticky-sidebar a {
          padding: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-top: 10px;
          text-decoration: none;
        }
        .sticky-sidebar img {
          height: 30px;
          width: 30px;
          font-weight: bold;
        }
        .sticky-sidebar p {
          font-size: 12px;
          color: white;
        }
        @media (min-width: 769px) {
          .desk-view {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desk-view {
            display: block !important;
          }
        }
        `}
      </style>
      {/*Site Footer Start*/}
      <footer className="site-footer">
        <div
          className="site-footer__bg"
          style={{
            backgroundImage: "url(/assets/home-image/footer-bg.jpg)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <a href="/">
                      <img
                        src="/assets/flat-icons/Dr Madhuri.png"
                        style={{ width: "250px" }}
                        alt="Dr Madhuri Logo"
                      />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">
                    Dr. Madhuri M S, MBBS, MS(OBG), FMAS, excels in high-risk
                    pregnancies, infertility, laparoscopic surgeries,
                    ultrasound, providing compassionate women’s healthcare.
                  </p>
                  <div className="site-footer__social-box">
                    <p style={{ color: "white" }}>
                      Address : &ensp;
                      <a
                        href="https://maps.app.goo.gl/jo8ywP9BpgwnWcoL9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pattabhirama Nagar, Jayanagar, Bengaluru, Karnataka
                        560041
                      </Link>
                    </p>
                    <p style={{ color: "white" }}>
                      Phone No. :{" "}
                      <a href="tel:+916361197107">+91 6361197107</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__link">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Quick Links</h3>
                  </div>
                  <ul className="footer-widget__link-list list-unstyled">
                    <li>
                      <a href="/">Home</Link>
                    </li>
                    <li>
                      <a href="/about-doctor">About Doctor</Link>
                    </li>
                    <li>
                      <a href="/our-services/obstetrics">Obstetrics</Link>
                    </li>
                    <li>
                      <a href="/our-services/gynaecology">Gynaecology</Link>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <a href="#">Blog</Link>
                    </li>
                    <li>
                      <a href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="footer-widget__column footer-widget__Gallery">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Locate Us</h3>
                  </div>
                  <p
                    style={{
                      color: "white",
                      fontSize: "18px",
                      marginBottom: "10px",
                    }}
                  >
                    Vega Health Care and Diagnostics
                  </p>
                  <ul className="footer-widget__Gallery-list list-unstyled clearfix">
                    <li>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.220370766951!2d77.58944679999999!3d12.9261622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1563e26bbd3f%3A0x4e930c0d201868f9!2sVega%20Health%20Care%20and%20Diagnostics%20%7C%20Ultrasound%2C%20Fetal%20Imaging%2C%20Gastroenterology%2C%20ENT%20%7C%20Jayanagar%2C%20Bangalore!5e1!3m2!1sen!2sin!4v1757065813476!5m2!1sen!2sin"
                        style={{ height: "250px", width: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vega Health Care and Diagnostics Location"
                      ></iframe>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    Copyright © 2025 <a href="#">Dr. Madhuri M.</Link> All
                    Rights Reserved. Designed By{" "}
                    <a
                      href="https://appaddindia.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Appadd India Pvt Ltd...
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fixed Bottom Section */}
        <section
          style={{
            position: "fixed",
            bottom: 0,
            zIndex: 999,
            width: "100vw",
            background: "#fff",
          }}
          className="desk-view container-full"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100vw",
              height: "60px",
              zIndex: 999,
            }}
          >
            <div style={{ width: "25%" }}>
              <a
                href="https://maps.app.goo.gl/YnCGPhQwqtc42Jd89"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "10px",
                  gap: "10px",
                  textDecoration: "none",
                  backgroundColor: "#9F063E",
                  height: "100%",
                }}
              >
                <img
                  src="/assets/flat-icons/google-maps.svg"
                  alt="Google Maps"
                  height="25px"
                  width="25px"
                />
                <p
                  style={{ fontSize: "12px", color: "white", fontWeight: 600 }}
                >
                  LOCATE US
                </p>
              </a>
            </div>
            <div style={{ width: "25%" }}>
              <a
                href="https://wa.link/yiy87o"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  textDecoration: "none",
                  paddingTop: "10px",
                  gap: "10px",
                  backgroundColor: "#9F063E",
                  height: "100%",
                }}
              >
                <img
                  src="/assets/flat-icons/whatsapp.svg"
                  alt="WhatsApp"
                  height="25px"
                  width="25px"
                />
                <p
                  style={{ fontSize: "12px", color: "white", fontWeight: 600 }}
                >
                  WHATSAPP
                </p>
              </a>
            </div>
            <div style={{ width: "25%" }}>
              <a
                href="tel:+916361197107"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "10px",
                  gap: "10px",
                  textDecoration: "none",
                  backgroundColor: "#9F063E",
                  height: "100%",
                }}
              >
                <img
                  src="/assets/flat-icons/phone-call.png"
                  alt="Call"
                  height="25px"
                  width="25px"
                />
                <p
                  style={{
                    fontSize: "12px",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  CALL
                </p>
              </a>
            </div>
            <div style={{ width: "25%" }}>
              <a
                href="https://wa.link/yiy87o"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "10px",
                  gap: "10px",
                  textDecoration: "none",
                  backgroundColor: "#9F063E",
                  height: "100%",
                }}
              >
                <img
                  src="/assets/flat-icons/medical-appointment.svg"
                  alt="Appointment"
                  height="25px"
                  width="25px"
                />
                <p
                  style={{
                    overflowWrap: "break-word",
                    fontSize: "12px",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  APPOINTMENT
                </p>
              </a>
            </div>
          </div>
        </section>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}

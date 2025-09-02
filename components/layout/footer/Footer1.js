import Link from "next/link";

export default function Footer1() {
  return (
    <>
      {/*Site Footer Start*/}
      <footer className="site-footer">
        <div
          className="site-footer__bg"
          style={{
            backgroundImage:
              " url(https://wallpapers.com/images/hd/pregnant-woman-baby-bump-sitting-down-uwu8ykihqmctbd5c.jpg)",
          }}
        ></div>
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo">
                    <Link href="/">
                      <img
                        src="assets/images/resources/footer-logo.png"
                        alt=""
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
                      <Link href="https://maps.app.goo.gl/UTktM9oMxmkWy6bq6">
                        Pattabhirama Nagar, Jayanagar, Bengaluru, Karnataka
                        560041
                      </Link>
                    </p>
                    <p style={{ color: "white" }}>
                      Phone No. :{" "}
                      <Link href="tel:+916361197107">+91 6361197107</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__link">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Quick Links</h3>
                  </div>
                  <ul className="footer-widget__link-list list-unstyled">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="#">About Doctor</Link>
                    </li>
                    <li>
                      <Link href="#">Our Services</Link>
                    </li>
                    <li>
                      <Link href="#">Testimonial</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__newsletter">
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Our Services</h3>
                  </div>
                  <div className="mc-form__response"></div>
                  <ul className="footer-widget__link-list list-unstyled">
                    <li>
                      <Link href="/">Obstetrics</Link>
                    </li>
                    <li>
                      <Link href="#">Infertility</Link>
                    </li>
                    <li>
                      <Link href="#">Gynaecology Care</Link>
                    </li>
                    <li>
                      <Link href="#">Laparoscopy & Hysteroscopy</Link>
                    </li>
                    <li>
                      <Link href="#">Ultrasonography</Link>
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
                  <ul className="footer-widget__Gallery-list list-unstyled clearfix">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.221113664361!2d77.58939099999999!3d12.926115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a140eff81d%3A0xceaf71cbeec2c022!2s426%2F27-1%2C%2033rd%20Cross%20Rd%2C%204th%20T%20Block%20East%2C%20Pattabhirama%20Nagar%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041!5e1!3m2!1sen!2sin!4v1756454275623!5m2!1sen!2sin"
                      style={{ height: "250px", width: "100%" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
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
                    Copyright © 2025 <Link href="#">Dr. Madhuri M . </Link>
                    All Rights Reserved. Designed By{" "}
                    <Link href="https://appaddindia.net/">
                      Appadd India Pvt Ltd...
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}

"use client";
export default function Company() {
  return (
    <>
      {/*Company Benefits Start*/}
      <section className="company-benefits">
        <div
          className="company-benefits__bg"
          style={{
            // backgroundImage:
            //   " url(https://img.freepik.com/premium-photo/happy-pregnant-woman-expecting-baby_31965-2224.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&w=740&q=80)",
            backgroundColor: "#9f063e",
          }}
        ></div>
        {/* <div className="company-benefits__shape-2">
          <img src="assets/images/shapes/company-benefits-shape-2.png" alt="" />
        </div> */}
        {/* <div className="company-benefits__shape-4 float-bob-y">
          <img src="assets/images/shapes/company-benefits-shape-4.png" alt="" />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section-title text-left section-title-mobile-view">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape">
                    <img
                      src="assets/images/shapes/section-title-tagline-shape.png"
                      alt=""
                    />
                  </div>
                  <span className="section-title__tagline">Why Choose Us</span>
                </div>
                <h2 className="section-title__title" style={{ color: "#fff" }}>
                  Trusted Women’s Health Care with Compassion & Expertise
                </h2>
              </div>
              <div className="company-benefits__left">
                <div className="company-benefits__img">
                  <img
                    src="/assets/gallery/Adobe Express - file (3).jpg"
                    alt=""
                    className="wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  />
                  {/* <div className="company-benefits__shape-1">
                    <img
                      src="assets/images/shapes/company-benefits-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="company-benefits__shape-3">
                    <img
                      src="assets/images/shapes/company-benefits-shape-3.png"
                      alt=""
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="company-benefits__right">
                <div className="section-title text-left section-title-desk-view">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape">
                      <img
                        src="assets/images/shapes/section-title-tagline-shape.png"
                        alt=""
                      />
                    </div>
                    <span className="section-title__tagline">
                      Why Choose Us
                    </span>
                  </div>
                  <h2 className="section-title__title">
                    Trusted Women’s Health Care with Compassion & Expertise
                  </h2>
                </div>
                <p className="company-benefits__text">
                  Dr. Madhuri M S brings a blend of clinical expertise and
                  compassionate care in Obstetrics and Gynaecology. From routine
                  check-ups to advanced treatments, we ensure every woman
                  receives the highest quality healthcare tailored to her needs.
                </p>
                <ul className="company-benefits__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="">
                        <img
                          src="/assets/flat-icons/doctor.svg"
                          style={{ height: "50px" }}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="content">
                      <h3>
                        {/* <Link href="services"> */}
                        Experienced & Qualified Specialist
                        {/* </Link> */}
                      </h3>
                      <p>
                        MBBS, MS (OBG), FMAS, Diploma in Gynaecological
                        Ultrasound with years of trusted care for women’s
                        health.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="">
                        <img
                          src="/assets/flat-icons/healthcare.svg"
                          style={{ height: "50px" }}
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="content">
                      <h3>
                        {/* <Link href="services"> */}
                        Comprehensive Women’s Care
                        {/* </Link> */}
                      </h3>
                      <p>
                        From pregnancy care and infertility management to
                        preventive gynaecology, all under one roof with personal
                        attention.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Company Benefits End*/}
    </>
  );
}

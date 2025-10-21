"use client";

import Layout from "@/components/layout/Layout";
import Cta from "@/components/sections/home1/Cta";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* SEO H2 (visually hidden for semantics) */}
      <h2
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        Laparoscopic Gynecologist in Jayanagar
      </h2>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        {/*Contact Two Start*/}
        <section className="contact-two">
          {/* <div className="contact-two__img-1 wow fadeInLeft" data-wow-delay="300ms">
                <img src="assets/images/resources/contact-two-img-1.png" alt="" className="float-bob-x"/>
            </div>
            <div className="contact-two__bg-shape"></div>
            <div className="contact-two__bg-shape-2"></div>
            <div className="contact-two__google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="contact-two__map"></iframe>
            </div> */}
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="contact-two__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <div className="section-title__tagline-shape">
                        <img
                          src="assets/images/shapes/section-title-tagline-shape.png"
                          alt="Laparoscopic Gynecologist in Jayanagar"
                        />
                      </div>
                      <span className="section-title__tagline">
                        Connect with Our Specialists Now
                      </span>
                    </div>
                    <h2 className="section-title__title">
                      Book an appointment now to experience advanced women’s
                      healthcare with dedicated support at every step.
                    </h2>
                  </div>
                  <form
                    className="contact-form-validated contact-two__form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const name = e.target.name.value;
                      const email = e.target.email.value;
                      const phone = e.target.Phone.value;
                      const subject = e.target.subject.value;

                      const message = `Hello, I would like to book an appointment.
                      Name: ${name}
                      Email: ${email}
                      Phone: ${phone}
                      Service: ${subject}`;

                      const whatsappNumber = "917899338662"; // Replace with your WhatsApp number
                      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        message
                      )}`;

                      window.open(url, "_blank");
                    }}
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="Phone"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-two__input-box">
                          <div className="select-box">
                            <select
                              className="selectmenu wide"
                              name="subject"
                              required
                            >
                              <option value="">Select Subject</option>
                              <option value="Obstetrics">Obstetrics</option>
                              <option value="Infertility">Infertility</option>
                              <option value="Gynaecology Care">
                                Gynaecology Care
                              </option>
                              <option value="Laparoscopy & Hysteroscopy">
                                Laparoscopy & Hysteroscopy
                              </option>
                              <option value="Ultrasonography">
                                Ultrasonography
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-two__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-two__btn"
                          >
                            Submit on WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="result"></div>
                  {/* <p className="contact-two__left-text">
                    * After sending request. We’ll contact you for more details
                    about charter.
                  </p> */}
                </div>
              </div>
              <div className="col-xl-5" style={{ marginTop: "30px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.221113664361!2d77.58939099999999!3d12.926115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a140eff81d%3A0xceaf71cbeec2c022!2s426%2F27-1%2C%2033rd%20Cross%20Rd%2C%204th%20T%20Block%20East%2C%20Pattabhirama%20Nagar%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041!5e1!3m2!1sen!2sin!4v1756901832500!5m2!1sen!2sin"
                  style={{ height: "400px", width: "100%", border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Two End*/}

        {/*CTA One Start*/}
        <Cta />
        {/*CTA One End*/}
      </Layout>
    </>
  );
}

"use client";
import Link from "next/link";

export default function Project() {
  return (
    <>
      {/*Project One Start*/}
      <section className="project-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape">
                <img
                  src="assets/images/shapes/section-title-tagline-shape.png"
                  alt=""
                />
              </div>
              <span className="section-title__tagline">Our Gallery</span>
            </div>
            <h2 className="section-title__title">
              Moments from Our Care & Services
            </h2>
          </div>

          <div className="row">
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img
                      src="https://img.freepik.com/free-photo/gynecologist-talking-with-young-female-patient-medical-consultation-modern-clinic-patient-with-gynecologist-consultation-gynecological-office_657921-141.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_incoming&w=740&q=80"
                      alt=""
                    />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Consultant Service</Link>
                    </h3>
                    <p className="project-one__sub-title">Digital Marketing</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img
                      src="https://img.freepik.com/premium-photo/gynecologist-conducting-thorough-consultation-with-patient-modern-clinic_1192423-4425.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_incoming&w=740&q=80"
                      alt=""
                    />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Business Strategy</Link>
                    </h3>
                    <p className="project-one__sub-title">Digital Marketing</p>
                  </div>
                </div> */}
              </div>
            </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="https://img.freepik.com/premium-photo/portrait-young-woman-sitting-bed-home_1048944-30401188.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_incoming&w=740&q=80" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Consultant Service</Link>
                    </h3>
                    <p className="project-one__sub-title">Managing Director</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="400ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="https://img.freepik.com/premium-photo/doctor-presenting-ultrasound-image-pregnant-woman_274689-34893.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_incoming&w=740&q=80" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">UI/UX Designing</Link>
                    </h3>
                    <p className="project-one__sub-title">Digital Marketing</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="https://img.freepik.com/free-photo/close-up-dentist-using-instruments_23-2151053276.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_incoming&w=740&q=80" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Webside Development</Link>
                    </h3>
                    <p className="project-one__sub-title">Managing Director</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
            {/*Project One Single Start*/}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="project-one__single">
                <div className="project-one__img-box">
                  <div className="project-one__img">
                    <img src="https://img.freepik.com/premium-photo/young-woman-using-digital-tablet-while-standing-against-white-background_1048944-4248802.jpg?uid=P172451948&ga=GA1.1.517022815.1751973251&semt=ais_incoming&w=740&q=80" alt="" />
                  </div>
                  {/* <div className="project-one__content">
                    <h3 className="project-one__title">
                      <Link href="project-details">Mobile Application</Link>
                    </h3>
                    <p className="project-one__sub-title">Managing Director</p>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Project One Single End*/}
          </div>
        </div>
      </section>
      {/*Project One End*/}
    </>
  );
}

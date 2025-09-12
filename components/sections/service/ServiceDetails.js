"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/utils/services";
import Layout from "@/components/layout/Layout";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const ServiceDetails = () => {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const detailSlug = parts[2];

  // Find the service object that matches the slug
  const pageData = Array.isArray(services)
    ? services.find(
        (service) => service.title && slugify(service.title) === detailSlug
      )
    : null;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Digital Marketing">
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <h3 className="service-details__title-1">
                  {pageData?.title || "Service"}
                </h3>
                {pageData?.introduction && (
                  <p className="service-details__text-1">
                    {pageData.introduction}
                  </p>
                )}
                <div className="service-details__img">
                  <img
                    src={
                      pageData?.image?.src ||
                      "assets/images/services/service-details-img-6.jpg"
                    }
                    alt={pageData?.image?.alt || "Service Details"}
                  />
                </div>

                {pageData?.sections?.map((section, idx) => (
                  <div key={idx} className="service-details__img-and-point-box">
                    {section?.image && (
                      <div className="service-details__point-img">
                        <img src={section.image} alt="" />
                      </div>
                    )}
                    <div className="service-details__points-box">
                      {section.heading && (
                        <h3 className="service-details__point-title">
                          {section.heading}
                        </h3>
                      )}
                      {section.description && (
                        <p className="service-details__point-text">
                          {section.description}
                        </p>
                      )}
                      {Array.isArray(section.points) &&
                        section.points.length > 0 && (
                          <ul className="service-details__point list-unstyled">
                            {section.points.map((point, pIdx) => (
                              <li key={pIdx}>
                                <div className="icon">
                                  <span className="icon-check"></span>
                                </div>
                                <p>{point}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                      {section.conclusion && (
                        <p className="service-details__text-2">
                          {section.conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="sidebar__single service-details__service-box">
                  <h3 className="sidebar__title">All Services</h3>
                  <ul className="service-details__service-list list-unstyled">
                    {pageData?.obstetricServices?.map((service) => (
                      <li key={service.title}>
                        <a href={service.link}>
                          {service.title}
                          <span className="fas fa-angle-right"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar__single service-details__need-help">
                  <div
                    className="service-details__need-help-bg"
                    style={{
                      backgroundImage: " url(/assets/home-image/bg-img.jpg)",
                    }}
                  ></div>
                  <h3 className="service-details__need-help-title">
                    Book an Appointment
                  </h3>
                  <p
                    className="service-details__need-help-text"
                    style={{ textAlign: "center" }}
                  >
                    Schedule your consultation with Dr. Madhuri M S today. Call
                    us to book an appointment at your convenience.
                  </p>

                  <div className="service-details__need-help-number">
                    <div className="icon">
                      <span className="icon-telephone"></span>
                    </div>
                    <a href="tel:+916361197107">+91 6361197107</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetails;

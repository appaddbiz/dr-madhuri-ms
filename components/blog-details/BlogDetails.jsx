import Layout from "@/components/layout/Layout";
import { blogData } from "@/utils/blogData";
import Link from "next/link";
import BlogFaq from "../BlogFaq";
import "./blogDetails.css";

export default function BlogDetails({ data }) {
  const currentBlog = data && data.length > 0 ? data[0] : null;

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
        <section className="blog-details-section">
          <div className="container">
            <div className="row">
              {/* Main Content Column */}
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details-main">
                  {data && data.length > 0 ? (
                    data.map((item, index) => (
                      <div key={index} className="blog-item-wrapper">

                        {/* Featured Image */}
                        <div className="blog-featured-img-container">
                          <img
                            src={item.image || "/assets/images/blog/blog-details-img-1.jpg"}
                            alt={item.altText || "Blog Featured Image"}
                          />
                        </div>

                        {/* Executive Summary / Key Takeaways Box */}
                        <div className="blog-key-takeaways">
                          <div className="blog-key-takeaways-title">
                            <i className="fas fa-lightbulb"></i> Key Medical Takeaways
                          </div>
                          <ul className="blog-key-takeaways-list">
                            <li>Early pregnancy signs occur due to rising hCG & progesterone levels after implantation.</li>
                            <li>A missed period paired with early symptoms is a key indicator, but requires a test for confirmation.</li>
                            <li>Consult an expert gynecologist for proper diagnosis, ultrasound, and personalized antenatal guidance.</li>
                          </ul>
                        </div>

                        {/* Article HTML Content */}
                        <div className="blog-article-body">
                          <div
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          ></div>
                        </div>

                        {/* In-Article Appointment CTA Banner */}
                        <div className="in-article-cta">
                          <div className="in-article-cta-content">
                            <h4>Expecting or Experiencing Early Pregnancy Symptoms?</h4>
                            <p>Get expert guidance and compassionate care from Dr. Madhuri MS in Jayanagar, Bangalore.</p>
                          </div>
                          <a href="/contact" className="in-article-cta-btn">
                            <i className="fas fa-calendar-check"></i> Book Consultation
                          </a>
                        </div>

                        {/* Author / Doctor Bio Card */}
                        <div className="doctor-author-card">
                          <div className="doctor-avatar">
                            <img
                              src="/assets/home-image/Doctor.jpg"
                              alt="Dr. Madhuri MS"
                              onError={(e) => {
                                e.target.src = "https://cdn-icons-png.flaticon.com/512/387/387561.png";
                              }}
                            />
                          </div>
                          <div className="doctor-author-info">
                            <h4>Dr. Madhuri MS</h4>
                            <div className="doctor-author-subtitle">
                              Senior Consultant Obstetrician & Gynecologist | Jayanagar, Bangalore
                            </div>
                            <p className="doctor-author-bio">
                              Dr. Madhuri MS is a highly trusted gynecologist in Jayanagar specializing in pregnancy care, high-risk obstetrics, laparoscopic surgeries, and women&apos;s wellness with over 12+ years of clinical experience.
                            </p>
                          </div>
                        </div>

                        {/* FAQs Section */}
                        {item.faqs && item.faqs.length > 0 && (
                          <div className="mt-5">
                            <BlogFaq data={item.faqs} />
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-5">
                      <h3>Article Not Found</h3>
                      <p>Please check back later or browse our latest articles.</p>
                      <Link href="/blog" className="btn btn-primary rounded-pill mt-3">
                        Back to Blogs
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar-sticky-wrapper">
                  {/* Doctor Consultation Booking Card */}
                  <div className="sidebar-doctor-widget">
                    <div className="sidebar-doctor-img">
                      <img
                        src="/assets/home-image/Doctor.jpg"
                        alt="Dr. Madhuri MS"
                        onError={(e) => {
                          e.target.src = "https://cdn-icons-png.flaticon.com/512/387/387561.png";
                        }}
                      />
                    </div>
                    <div className="sidebar-doctor-name">Dr. Madhuri MS</div>
                    <div className="sidebar-doctor-spec">
                      MBBS, MS (OBGYN) - Gynecologist & Obstetrician
                    </div>
                    <p className="sidebar-doctor-desc">
                      Need personalized medical advice or pregnancy consultation in Jayanagar, Bangalore?
                    </p>
                    <a href="/contact" className="sidebar-doctor-cta">
                      <i className="fas fa-user-md"></i> Book Consultation
                    </a>
                  </div>

                  {/* Recent / Latest Posts */}
                  <div className="sidebar-card">
                    <h3 className="sidebar-card-title">Latest Articles</h3>
                    <div className="sidebar-post-list">
                      {blogData.map((item) => (
                        <div className="sidebar-post-item" key={item.id}>
                          <div className="sidebar-post-thumb">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="sidebar-post-content">
                            <h5>
                              <Link href={item.link === "blog-details" ? "#" : `/${item.link}`}>
                                {item.title}
                              </Link>
                            </h5>
                            <span className="sidebar-post-date">
                              <i className="far fa-calendar-alt"></i> {item.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories / Health Topics */}
                  <div className="sidebar-card">
                    <h3 className="sidebar-card-title">Health Specialties</h3>
                    <div className="sidebar-tags">
                      <span className="sidebar-tag-pill">Pregnancy Care</span>
                      <span className="sidebar-tag-pill">Obstetrics</span>
                      <span className="sidebar-tag-pill">Gynecology</span>
                      <span className="sidebar-tag-pill">Infertility Care</span>
                      <span className="sidebar-tag-pill">PCOS Management</span>
                      <span className="sidebar-tag-pill">Normal Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

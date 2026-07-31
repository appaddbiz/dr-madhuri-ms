import Layout from "@/components/layout/Layout";
import { blogData } from "@/utils/blogData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
        <section className="blog-two">
          <div className="container">
            <div className="section-title text-center pt-5">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape">
                  <img
                    src="assets/images/shapes/section-title-tagline-shape.png"
                    alt=""
                  />
                </div>
                <span className="section-title__tagline">Blog & News</span>
              </div>
              <h2 className="section-title__title">Our Latest From The Blog</h2>
            </div>
            <div className="row">
              {
                blogData.map((item) => (
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInLeft"
                    data-wow-delay="100ms"
                  >
                    <div className=" blog-two__single" key={item.id}>
                      <div className="blog-two__img-box">
                        <div className="blog-two__img">
                          <img src={item.image} alt={item.altText} />
                        </div>
                        <div className="blog-two__arrow">
                          <Link href="#">
                            <span className="icon-right-arrow"></span>
                          </Link>
                        </div>
                        <div className="blog-two__tag">
                          <p>{item.category}</p>
                        </div>
                      </div>
                      <div className="blog-two__content">
                        <ul className="blog-two__meta list-unstyled">
                          <li>
                            <Link href="#">
                              <span className="fas fa-calendar-alt"></span>{item.date}
                            </Link>
                          </li>
                        </ul>
                        <div className="blog-two__title-box">
                          <div className="blog-two__content-shape">
                            <img
                              src="assets/images/shapes/blog-two-content-shape-1.png"
                              alt=""
                            />
                          </div>
                          <h3 className="blog-two__title">
                            <Link href={item.link}>
                              {item.title}
                            </Link>
                          </h3>
                          <p className="blog-two__text">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </Layout >
    </>
  );
}

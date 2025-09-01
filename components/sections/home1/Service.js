"use client";
import Layout from "@/components/layout/Layout";
import { subServices } from "@/utils/sub-services";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Service() {
  const pathname = usePathname();
  const name = pathname.split("/")[2];
  const [data, setData] = useState([]);

  console.log("anme", name);
  console.log("data", data);

  useEffect(() => {
    const update = subServices.filter((ele, i) => {
      console.log("update", subServices);
      return ele.link === name;
    });
    setData(update);
  }, [name]);

  return (
    <>
      {/*Services One Start*/}
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Digital Marketing"
      >
        <section className="services-one">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape"></div>
                <span className="section-title__tagline">Services List</span>
              </div>
              <h2 className="section-title__title">What We are offering</h2>
            </div>

            <div className="row">
              {data.map((service, index) => (
                <div
                  key={service.id}
                  className={`col-xl-4 col-lg-6 col-md-6 wow fadeIn${
                    index % 2 === 0 ? "Left" : "Right"
                  }`}
                  data-wow-delay={`${(index + 1) * 200}ms`}
                >
                  <div className="services-one__single">
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img src={service.img} alt={service.title} />
                      </div>
                    </div>
                    <div className="services-one__content-wrap">
                      <div className="services-one__icon">
                        <span className={service.icon}></span>
                      </div>
                      <div className="services-one__content">
                        <h3 className="services-one__title">
                          <Link href={service.link}>{service.title}</Link>
                        </h3>
                        <p className="services-one__text">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>

      {/*Services One End*/}
    </>
  );
}

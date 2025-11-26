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
  console.log("data", data);

  const h1Text =
    name === "obstetrics"
      ? "Best Obstetrician in Jayanagar"
      : name === "gynaecology"
      ? "Gynaecology Clinic in Jayanagar"
      : "";

  useEffect(() => {
    const update = subServices.filter((ele, i) => {
      return ele.link === name;
    });
    setData(update);
  }, [name]);

  return (
    <>
      {h1Text ? (
        <h1
          style={{
            position: "absolute",
            left: "-9999px",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          {h1Text}
        </h1>
      ) : null}
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
                <span className="section-title__tagline">
                  {data.length > 0 ? data[0].mainService : ""}
                </span>
              </div>
              <h2 className="section-title__title">
                {name === 'obstetrics'
                  ? 'Best Obstetrician in Jayanagar'
                  : name === 'gynaecology'
                  ? 'Gynaecology Clinic in Jayanagar'
                  : 'Caring for every stage of motherhood with compassion and expertise'}
              </h2>
            </div>
            <div className="row">
              {data.map((service, index) => (
                <div
                  key={`${service.link}-${(service.title || '').toLowerCase()}`}
                  className={`col-xl-4 col-lg-6 col-md-6 wow fadeIn${
                    index % 2 === 0 ? "Left" : "Right"
                  }`}
                  data-wow-delay={`${(index + 1) * 200}ms`}
                >
                  <div className="services-one__single">
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img
                          src={service.img}
                          style={{ aspectRatio: "3/2" }}
                          alt={service.title}
                        />
                      </div>
                    </div>
                    <div className="services-one__content-wrap">
                      <div className="services-one__icon">
                        <Link href="tel:+916361197107">
                          <span className="">
                            <img
                              src={service.icon}
                              style={{ height: "30px" }}
                            />
                          </span>
                        </Link>
                      </div>
                      <div className="services-one__content">
                        <h3 className="services-one__title">
                          <Link
                            href={`/our-services/${service.link}/${(
                              service.title || "detail"
                            )
                              .toLowerCase()
                              .replace(/[^a-z0-9\s-]/g, "")
                              .replace(/\s+/g, "-")
                              .replace(/-+/g, "-")}`}
                          >
                            {service.title}
                          </Link>
                        </h3>
                        <p className="services-one__text">
                          {service.description.slice(0, 100)}...
                        </p>
                        <Link
                          href={`/our-services/${service.link}/${(
                            service.title || "detail"
                          )
                            .toLowerCase()
                            .replace(/[^a-z0-9\s-]/g, "")
                            .replace(/\s+/g, "-")
                            .replace(/-+/g, "-")}`}
                        >
                          Read More
                        </Link>
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

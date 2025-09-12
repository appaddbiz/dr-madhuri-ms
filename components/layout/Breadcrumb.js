import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function slugToTitle(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function Breadcrumb({ breadcrumbTitle, heading }) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const dynamicHeading =
    heading || (parts.length > 0 ? slugToTitle(parts[parts.length - 1]) : "");

  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header" style={{ backgroundColor: "#C900C9" }}>
        {/* <div className="page-header__bg" style={{ backgroundImage: ' url(https://img.freepik.com/premium-photo/young-pregnant-woman-pink-background_728202-1373.jpg)' }} >
            </div> */}
        {/* <div className="page-header__shape-bg"
                style={{ backgroundImage: ' url(assets/images/shapes/page-header-shape-bg.png)' }} ></div>
            <div className="page-header__shape-1 float-bob-y">
                <img src="assets/images/shapes/page-header-shape-1.png" alt=""/>
            </div>
            <div className="page-header__shape-2 img-bounce">
                <img src="assets/images/shapes/page-header-shape-2.png" alt=""/>
            </div>
            <div className="page-header__shape-3 float-bob-x">
                <img src="assets/images/shapes/page-header-shape-3.png" alt=""/>
            </div> */}
        <div className="container">
          <div className="page-header__inner">
            <div className="thm-breadcrumb__box">
              {/* <div className="thm-breadcrumb__icon">
                <img
                  src="assets/images/shapes/section-title-tagline-shape.png"
                  alt=""
                />
              </div> */}
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</Link>
                </li>
                {parts.map((part, idx) => {
                  const href = "/" + parts.slice(0, idx + 1).join("/");
                  return (
                    <React.Fragment key={href}>
                      <li>
                        <span>-</span>
                      </li>
                      <li>
                        <a href={href}>{slugToTitle(part)}</Link>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
            {/* <h2>{breadcrumbTitle}</h2> */}
          </div>
        </div>
      </section>
      {/*Page Header End*/}
    </>
  );
}

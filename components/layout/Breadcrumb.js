import { services } from "@/utils/services";
import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, heading }) {

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
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>-</span>
                </li>
                <li>
                  <Link href={`/our-services`}>Our Services</Link>
                </li>
                <li>
                  <span>-</span>
                </li>
                <li>
                  <Link href={`/our-services/${heading.toLowerCase()}`}>
                    {heading}
                  </Link>
                </li>
                {/* <li>
                  <span>-</span>
                </li> */}
                {/* <li>{serv.title}</li> */}
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

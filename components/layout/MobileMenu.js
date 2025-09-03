"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="/assets/images/resources/logo-1.png"
                width="150"
                alt=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/">Home</Link>
                  {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="index-2">Home Two</Link></li>
                                        <li><Link href="index-3">Home Three</Link></li>
                                    </ul> */}
                  {/* <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button> */}
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="#">About Doctor</Link>
                  {/* <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="#">About Doctor</Link></li>
                                        <li><Link href="team">Team</Link></li>
                                        <li><Link href="team-details">Team Details</Link></li>
                                        <li><Link href="testimonials">Testimonials</Link></li>
                                        <li><Link href="pricing">Pricing</Link></li>
                                        <li><Link href="faq">Faq</Link></li>
                                        <li><Link href="404">404 Error</Link></li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button> */}
                </li>
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="#">Our Services</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="#">Obstetrics</Link>
                    </li>
                    <li>
                      <Link href="#">Infertility</Link>
                    </li>
                    <li>
                      <Link href="#">Gynaecology Care</Link>
                    </li>
                    <li>
                      <Link href="#">
                        Laparoscopy & Hysteroscopy
                      </Link>
                    </li>
                    <li>
                      <Link href="graphic-designing">Ultrasonography</Link>
                    </li>
                  </ul>
                  <button
                    className={isActive.key == 3 ? "expanded open" : ""}
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </button>
                </li>
                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="#">Testimonials</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    {/* <li>
                      <Link href="projects">Projects</Link>
                    </li>
                    <li>
                      <Link href="project-details">Project Details</Link>
                    </li> */}
                  </ul>
                  {/* <button
                    className={isActive.key == 4 ? "expanded open" : ""}
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </button> */}
                </li>
                <li
                  className={
                    isActive.key == 5 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Blogs</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 5 ? "block" : "none"}`,
                    }}
                  >
                    {/* <li>
                      <Link href="blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="blog-details">Blog Details</Link>
                    </li> */}
                  </ul>
                  {/* <button
                    className={isActive.key == 5 ? "expanded open" : ""}
                    onClick={() => handleToggle(5)}
                  >
                    <span className="fa fa-angle-right" />
                  </button> */}
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:drmadhuri.og@gmail.com">
                drmadhuri.og@gmail.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:+916361197107">+91 6361197107</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter"></Link>
              <Link href="#" className="fab fa-facebook-square"></Link>
              <Link href="#" className="fab fa-pinterest-p"></Link>
              <Link href="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;

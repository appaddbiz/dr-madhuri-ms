import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header2({
  scroll,
  handlePopup,
  handleSidebar,
  handleMobileMenu,
}) {
  return (
    <>
      <header className="main-header-two">
        <div className="main-header-two__wrapper">
          <div className="container">
            <div className="main-header-two__wrapper-inner">
              <div className="main-menu-two__logo">
                <a href="/">
                  <img src="/assets/images/resources/logo-1.png" alt="" />
                </a>
              </div>
              <div className="main-menu-two__top">
                <div className="main-menu-two__social">
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon-pinterest"></i>
                  </a>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </div>
                <ul className="list-unstyled main-menu-two__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-maps-and-flags"></i>
                    </div>
                    <div className="text">
                      <p>80 Broklyn Golden Street UK</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-mail"></i>
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:needhelp@company.com">
                          needhelp@company.com
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                  <div className="main-menu-two__wrapper-inner">
                    <div className="main-menu-two__left">
                      <div className="main-menu-two__main-menu-box">
                        <a
                          href="#"
                          className="mobile-nav__toggler"
                          onClick={handleMobileMenu}
                        >
                          <i className="fa fa-bars"></i>
                        </a>
                        <Menu />
                      </div>
                    </div>
                    <div className="main-menu-two__right">
                      <div className="main-menu-two__search-box">
                        <a
                          href="#"
                          className="main-menu-two__search search-toggler icon-magnifying-glass"
                          onClick={handlePopup}
                        ></a>
                      </div>
                      <div className="main-menu-two__btn-box">
                        <a
                          href="contact"
                          className="main-menu-two__btn thm-btn"
                        >
                          Get Free Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`stricky-header stricked-menu main-menu main-menu-two ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
          <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__main-menu-box">
                    <a
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={handleMobileMenu}
                    >
                      <i className="fa fa-bars"></i>
                    </a>
                    <Menu />
                  </div>
                </div>
                <div className="main-menu-two__right">
                  <div className="main-menu-two__search-box">
                    <a
                      href="#"
                      className="main-menu-two__search search-toggler icon-magnifying-glass"
                      onClick={handlePopup}
                    ></a>
                  </div>
                  <div className="main-menu-two__btn-box">
                    <a href="contact" className="main-menu-two__btn thm-btn">
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* /.sticky-header__content */}
      </div>
      {/* /.stricky-header */}
      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}

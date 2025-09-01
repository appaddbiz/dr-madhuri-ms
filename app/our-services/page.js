"use client";
import Layout from "@/components/layout/Layout";
import Features from "@/components/sections/home2/Feature";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Digital Marketing"
      >
        <Features />

        {/*CTA One Start*/}
        <section className="cta-one">
          <div
            className="cta-one__bg"
            style={{
              backgroundImage: " url(assets/images/backgrounds/cta-one-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="cta-one__inner">
                <h3 className="cta-one__title">
                  Let's discuss about how we can help
                  <br /> make your business better
                </h3>
                <div className="cta-one__btn-box">
                  <Link href="about" className="cta-one__btn thm-btn">
                    Let's Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*CTA One End*/}
      </Layout>
    </>
  );
}

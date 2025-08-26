import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home2/About";
import Testimonial from "@/components/sections/home3/Testimonial";
import Blog from "@/components/sections/home1/Blog";
import Cta from "@/components/sections/home1/Cta";
import Features from "@/components/sections/home2/Feature";
import Banner from "@/components/sections/home2/Banner";
import Company from "@/components/sections/home2/Company";

import Project from "@/components/sections/home2/Project";
import Service2 from "@/components/sections/home3/Service2";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        {/* <Features /> */}
        <About />
        <Cta />
        <Features />
        <Company />
        <Project />
        <Testimonial />
        <Blog />
      </Layout>
    </>
  );
}

"use client";
import Layout from "@/components/layout/Layout";
import Cta from "@/components/sections/home1/Cta";
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
        <Cta />
        {/*CTA One End*/}
      </Layout>
    </>
  );
}

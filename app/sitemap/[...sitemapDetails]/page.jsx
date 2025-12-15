"use client";

import Layout from "@/components/layout/Layout";
import Faq from "@/components/sitemap/FAQ";
import SiteContent from "@/components/sitemap/SiteContent";
import { siteData } from "@/utils/siteData";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SitemapDetails() {
  const path = usePathname();
  const name = path.split("/")[2];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = siteData.find((item) => item.link == `/${name}`);
    // console.log("fetchData",)
    setData(fetchData);
    // console.log("data",data)
  }, [name]);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Website Development"
      >
        <SiteContent data={data} />
        <Faq data={data} />
      </Layout>
    </>
  );
}

"use client";
import { seoMetaData } from "@/utils/seoData";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SEOSection = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;
  const [value, setValue] = useState();

  useEffect(() => {
    const update = seoMetaData.find(
      (elem) => elem.url == `https://www.drmadhurimsobgyn.com/${fullUrl}`
    );
    setValue(update);
  }, [fullUrl]);

  return (
    <>
      <title>{value?.title}</title>
      <meta name="description" content={value?.description} />
      <meta name="keywords" content={value?.keywords} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(value?.jsonScript) }}
      />
    </>
  );
};

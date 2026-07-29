"use client";
import { seoMetaData } from "@/utils/seoData";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BASE_URL = "https://www.drmadhurimsobgyn.com";

export const SEOSection = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;
  const [value, setValue] = useState();

  useEffect(() => {
    const update = seoMetaData.find(
      (elem) => elem.url == `${BASE_URL}${fullUrl}`,
    );
    console.log(
      "seoMetaData",
      seoMetaData.find((des) => des.description),
    );
    setValue(update);
  }, [fullUrl]);

  console.log("value", value);

  // Derive the canonical URL: prefer the matched entry's URL, fall back to current path
  const canonicalUrl = value?.url || `${BASE_URL}${pathname}`;

  // Keep the route's server-rendered Next.js metadata when this legacy
  // lookup has no entry. Still render canonical + robots tags even without a match.
  if (!value) {
    return (
      <>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </>
    );
  }

  return (
    <>
      <title>{value?.title}</title>
      <meta name="description" content={value?.description} />
      <meta name="keywords" content={value?.keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(value?.jsonScript) }}
      />
    </>
  );
};

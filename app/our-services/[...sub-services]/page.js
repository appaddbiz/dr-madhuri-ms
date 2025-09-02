"use client";
import React from "react";
import Service from "@/components/sections/home1/Service";
import ServiceDetails from "@/components/sections/service/ServiceDetails";
import { usePathname } from "next/navigation";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const subSegments = segments.slice(2);

  if (segments.length >= 3 && subSegments.length >= 1) {
    return <ServiceDetails />;
  }

  return <Service />;
}

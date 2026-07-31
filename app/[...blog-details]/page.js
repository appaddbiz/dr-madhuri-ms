"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { blogDetails } from "@/utils/blogDetailsData";
import BlogDetails from "@/components/blog-details/BlogDetails";

const Home = () => {
  const slug = usePathname();
  const [data, setData] = useState([]);

  useEffect(() => {
    const update = blogDetails.filter((elem) => elem.url == slug);
    setData(update);
  }, [slug]);


  return (
    <>
      <BlogDetails data={data} />
    </>
  );
};

export default Home;

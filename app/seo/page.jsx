import { SEOSection } from "@/components/seo/SEOSection";
import { Suspense } from "react";

const SEOPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SEOSection />
    </Suspense>
  );
};

export default SEOPage;

export async function generateMetadata({ params }) {
  const segs = Array.isArray(params?.["sub-services"]) ? params["sub-services"] : [];

  if (segs.length === 1) {
    const slug = segs[0];
    if (slug === "obstetrics") {
      return {
        title: "Best Obstetrician in Jayanagar",
        description:
          "Best Obstetrician in Jayanagar - Expert maternity care, personalized guidance, and advanced treatments to ensure a safe and healthy pregnancy journey.",
        alternates: {
          canonical: "https://www.drmadhurimsobgyn.com/our-services/obstetrics",
        },
      };
    }
    if (slug === "gynaecology") {
      return {
        title: "Gynaecology Clinic in Jayanagar",
        description:
          "Gynaecology Clinic in Jayanagar - Expert women's health care with advanced treatments, compassionate support, and personalized solutions for every stage of life.",
        alternates: {
          canonical: "https://www.drmadhurimsobgyn.com/our-services/gynaecology",
        },
      };
    }
  }

  return {};
}

export default function SubServicesLayout({ children }) {
  return children;
}


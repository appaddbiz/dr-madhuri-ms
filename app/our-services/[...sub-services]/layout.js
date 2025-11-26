const seoConfig = {
  obstetrics: {
    title: "Best Obstetrician in Jayanagar | Women Care Bangalore",
    description:
      "Experience trusted maternity and women's health services with the Best Obstetrician in Jayanagar, offering compassionate care, advanced treatments, and expert guidance.",
    canonical: "https://www.drmadhurimsobgyn.com/our-services/obstetrics",
  },
  gynaecology: {
    title: "Gynaecology Clinic in Jayanagar | Expert Women Care",
    description:
      "Find trusted women's healthcare at our Gynaecology Clinic in Jayanagar, offering advanced treatments, expert guidance, and compassionate care for every stage.",
    canonical: "https://www.drmadhurimsobgyn.com/our-services/gynaecology",
  },
  "obstetrics/antenatal-and-post-natal-care": {
    title: "Comprehensive Antenatal Care in Jayanagar | Expert Pregnancy Care",
    description:
      "Experience Comprehensive Antenatal Care in Jayanagar with expert monitoring, personalized pregnancy care, and support for a healthy and confident maternity journey.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/antenatal-and-post-natal-care",
  },
  "obstetrics/high-risk-pregnancy": {
    title: "High Risk Pregnancy Specialist in Jayanagar  | Bangalore",
    description:
      "Get specialized care for High Risk Pregnancy Specialist in Jayanagar with expert monitoring, advanced diagnostics, and personalized support for a safe and healthy delivery.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/high-risk-pregnancy",
  },
  "obstetrics/previous-cesarean-pregnancy-tolac": {
    title: "Pregnancy after C-section treatment in Jayanagar | Bangalore",
    description:
      "Get expert support for pregnancy after C-section treatment in Jayanagar with safe monitoring, personalized care, and guidance to ensure a healthy and confident birth journey.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/previous-cesarean-pregnancy-tolac",
  },
  "obstetrics/poor-obstetric-past": {
    title: "Best Obstetrician in Jayanagar | Expert Pregnancy Care",
    description:
      "Get trusted care from the best Obstetrician in Jayanagar, offering advanced pregnancy support, maternal health guidance, and compassionate care for every expectant mother.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/poor-obstetric-past",
  },
  "obstetrics/recurrent-loss-of-pregnancy": {
    title: "Recurrent Loss of Pregnancy treatment in Jayanagar | Bangalore",
    description:
      "Get specialized care for Recurrent Loss of Pregnancy treatment in Jayanagar with expert diagnosis, compassionate support, and advanced treatment for healthy future pregnancies.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/recurrent-loss-of-pregnancy",
  },
  "obstetrics/diabetes-in-pregnancy-gdm": {
    title: "Diabetes in Pregnancy  Treatment in Jayanagar 7th Block Care",
    description:
      "Get expert care for Diabetes in Pregnancy in Jayanagar 7th Block with specialized monitoring, guidance, and support to ensure a healthy and safe pregnancy.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/diabetes-in-pregnancy-gdm",
  },
  "obstetrics/hypertension-in-pregnancy-pih": {
    title: "Hypertension in Pregnancy treatment in Jayanagar",
    description:
      "Get expert care for Hypertension in Pregnancy treatment in Jayanagar with advanced monitoring, personalized treatment, and safe maternal health support throughout pregnancy.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/hypertension-in-pregnancy-pih",
  },
  "obstetrics/twin-triplet-quadruplet-pregnancy": {
    title: "Twin Pregnancy Specialist in Jayanagar 9th Block Care",
    description:
      "Get expert care from a twin pregnancy specialist in Jayanagar 9th Block, offering advanced monitoring, safe delivery planning, and personalized prenatal support.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/twin-triplet-quadruplet-pregnancy",
  },
  "obstetrics/multiple-pregnancies": {
    title: "Multiple Birth Pregnancy Doctor in Jayanagar Care",
    description:
      "Get expert care from a multiple birth pregnancy doctor in Jayanagar, offering advanced monitoring, safe delivery planning, and complete maternal support.",
    canonical:
      "https://www.drmadhurimsobgyn.com/our-services/obstetrics/multiple-pregnancies",
  },
};

export async function generateMetadata({ params }) {
  const segs = Array.isArray(params?.["sub-services"]) ? params["sub-services"] : [];
  const pathKey = segs.join("/");
  const seo = seoConfig[pathKey];

  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
      alternates: {
        canonical: seo.canonical,
      },
    };
  }

  return {};
}

export default function SubServicesLayout({ children }) {
  return children;
}


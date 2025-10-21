export default function Head() {
  const title = "Best Gynecologist in Jayanagar";
  const description =
    "Best Gynecologist in Jayanagar - Expert women's health care, offering advanced treatments, personalized consultations, and compassionate support for overall wellness.";
  const canonical = "https://www.drmadhurimsobgyn.com/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://www.drmadhurimsobgyn.com/#organization",
    name: "Dr. Madhuri M S - Obstetrics & Gynaecology",
    url: "https://www.drmadhurimsobgyn.com/",
    description:
      "Compassionate, evidence-based women's healthcare in Jayanagar, Bengaluru - covering antenatal and postnatal care, high-risk pregnancy, infertility evaluation, minimally invasive laparoscopic surgery, and advanced gynaecological ultrasonography.",
    logo: "https://www.drmadhurimsobgyn.com/assets/flat-icons/B1.webp",
    image: "https://www.drmadhurimsobgyn.com/assets/flat-icons/B1.webp",
    email: "mailto:drmadhuri.og@gmail.com",
    telephone: "+91-6361197107",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pattabhirama Nagar, Jayanagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560041",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9261622,
      longitude: 77.5894468,
    },
    hasMap:
      "https://www.google.com/maps/place/Vega+Health+Care+and+Diagnostics+%7C+Ultrasound,+Fetal+Imaging,+Gastroenterology,+ENT+%7C+Jayanagar,+Bangalore/@12.9261622,77.5894468,17z",
    sameAs: [
      "https://api.whatsapp.com/send?phone=916361197107",
      "https://www.google.com/maps/place/Vega+Health+Care+and+Diagnostics+%7C+Ultrasound,+Fetal+Imaging,+Gastroenterology,+ENT+%7C+Jayanagar,+Bangalore/@12.9261622,77.5894468,17z",
    ],
    knowsAbout: [
      "Obstetrics & Pregnancy Care",
      "High-Risk Pregnancy Management",
      "Infertility Evaluation and IUI",
      "Gynaecology Care (fibroids, endometriosis, ovarian cysts, menstrual disorders, menopausal care)",
      "Laparoscopy & Hysteroscopy (myomectomy, TLH, hysteroscopic procedures)",
      "Advanced Ultrasonography (transvaginal scan, saline sonography, 3D ultrasound)",
    ],
    keywords: [
      "Best Gynecologist in Jayanagar",
      "Women's Health Doctor in Jayanagar",
      "Laparoscopic Gynecologist in Jayanagar",
      "OBG Doctor in Jayanagar",
      "Pregnancy Doctor in Jayanagar",
    ],
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}


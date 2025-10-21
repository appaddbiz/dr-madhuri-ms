export default function Head() {
  const title = "VBAC Specialist in Jayanagar";
  const description =
    "VBAC Specialist in Jayanagar - Expert care for safe Vaginal Birth After Cesarean, personalized guidance, and advanced support for a healthy delivery journey.";
  const canonical = "https://www.drmadhurimsobgyn.com/about-doctor";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://www.drmadhurimsobgyn.com/about-doctor#dr-madhuri-ms",
    name: "Dr. Madhuri M S",
    url: canonical,
    image: "https://www.drmadhurimsobgyn.com/assets/flat-icons/B1.webp",
    jobTitle:
      "Consultant Obstetrician, Gynaecologist & Minimal Invasive Surgeon",
    description:
      "MBBS, MS (OBG), FMAS, Diploma in Gynaecological Ultrasound. Experienced in high-risk pregnancy, infertility management, VBAC, fibroid treatment, laparoscopy & hysteroscopy, and advanced gynaecological ultrasonography.",
    email: "mailto:drmadhuri.og@gmail.com",
    telephone: "+91-6361197107",
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Dr. Madhuri M S - Obstetrics & Gynaecology",
      url: "https://www.drmadhurimsobgyn.com/",
    },
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
      "https://maps.app.goo.gl/jo8ywP9BpgwnWcoL9",
      "https://wa.link/4vni1l",
    ],
    areaServed: "Jayanagar, Bengaluru",
    medicalSpecialty: [
      "Obstetrics",
      "Gynecology",
      "Infertility",
      "Minimally Invasive Gynecologic Surgery",
      "Ultrasonography",
    ],
    knowsAbout: [
      "High-Risk Pregnancy Management",
      "VBAC (Vaginal Birth After Caesarean)",
      "Fibroid and Endometriosis Treatment",
      "Infertility Evaluation, Ovulation Induction, IUI",
      "Laparoscopy & Hysteroscopy (Myomectomy, TLH, Septal Resection, Polypectomy)",
      "Transvaginal Scan, Saline Sonography, 3D Ultrasound",
    ],
    keywords: [
      "Best Obstetrician in Jayanagar",
      "Gynaecologist in Jayanagar",
      "Minimal invasive surgeon in Jayanagar",
      "Fibroid treatment in Jayanagar",
      "Pregnancy care in Jayanagar",
      "VBAC Specialist in Jayanagar",
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


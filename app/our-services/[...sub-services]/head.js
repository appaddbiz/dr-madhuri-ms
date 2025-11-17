export default function Head({ params }) {
  const segs = Array.isArray(params?.["sub-services"]) ? params["sub-services"] : [];
  if (segs.length !== 1) return null;
  const slug = segs[0];

    // Only output JSON-LD here; titles/descriptions are set via generateMetadata
  if (slug === "obstetrics") {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `https://www.drmadhurimsobgyn.com/our-services/obstetrics#obstetrics`,
      name: "Obstetrics Services - Dr. Madhuri M S",
      url: "https://www.drmadhurimsobgyn.com/our-services/obstetrics",
      description:
        "Comprehensive obstetric care in Jayanagar, Bengaluru by Dr. Madhuri M S - an experienced Obstetrician & Gynaecologist specializing in prenatal, antenatal, and postnatal care, high-risk pregnancy management, and safe delivery. Compassionate and personalized maternity support across Jayanagar, JP Nagar, Banashankari, and BTM Layout.",
      image: "https://www.drmadhurimsobgyn.com/assets/flat-icons/B1.webp",
      logo: "https://www.drmadhurimsobgyn.com/assets/flat-icons/B1.webp",
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
      geo: { "@type": "GeoCoordinates", latitude: 12.9261622, longitude: 77.5894468 },
      hasMap:
        "https://www.google.com/maps/place/Vega+Health+Care+and+Diagnostics+%7C+Ultrasound,+Fetal+Imaging,+Gastroenterology,+ENT+%7C+Jayanagar,+Bangalore/@12.9261622,77.5894468,17z",
      sameAs: ["https://maps.app.goo.gl/jo8ywP9BpgwnWcoL9", "https://wa.link/4vni1l"],
      medicalSpecialty: [
        "Obstetrics",
        "High-Risk Pregnancy Care",
        "Prenatal and Antenatal Care",
        "Labour and Delivery",
        "Postnatal Care",
        "VBAC (Vaginal Birth After Caesarean)",
      ],
      knowsAbout: [
        "Comprehensive Pregnancy Care",
        "Preconception Counseling",
        "High-Risk Pregnancy Management",
        "Normal and Caesarean Delivery",
        "VBAC Support",
        "Postnatal Recovery",
      ],
      keywords: [
        "Best Obstetrician in Jayanagar",
        "Best Obstetrician in Bangalore",
        "OBG Doctor in JP Nagar",
        "Best Obstetrician in Banashanakri",
        "Best Obstetrician in BTM Layout",
      ],
      areaServed: ["Jayanagar", "JP Nagar", "Banashankari", "BTM Layout", "Bangalore"],
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }

  if (slug === "gynaecology") {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `https://www.drmadhurimsobgyn.com/our-services/gynaecology#gynaecology`,
      name: "Gynaecology Services - Dr. Madhuri M S",
      url: "https://www.drmadhurimsobgyn.com/our-services/gynaecology",
      description:
        "Comprehensive gynaecology care in Jayanagar by Dr. Madhuri M S, covering adolescent health, menstrual disorders, PCOS, fibroids, endometriosis, cervical screening, menopause care, and minimally invasive procedures for safe, evidence-based treatment.",
      image: "https://www.drmadhurimsobgyn.com/assets/flat-icons/B1.webp",
      logo: "https://www.drmadhurimsobgyn.com/assets/flat-icons/B1.webp",
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
      geo: { "@type": "GeoCoordinates", latitude: 12.9261622, longitude: 77.5894468 },
      hasMap: "https://maps.app.goo.gl/jo8ywP9BpgwnWcoL9",
      sameAs: ["https://maps.app.goo.gl/jo8ywP9BpgwnWcoL9", "https://wa.link/4vni1l"],
      areaServed: ["Jayanagar", "JP Nagar", "Banashankari", "BTM Layout", "Bengaluru"],
      medicalSpecialty: ["Gynecology", "Minimally Invasive Gynecologic Surgery", "Ultrasonography"],
      knowsAbout: [
        "Adolescent gynaecology and counselling",
        "Menstrual disorders (dysmenorrhea, menorrhagia, irregular cycles)",
        "PCOS diagnosis and management",
        "Fibroids and endometriosis treatment",
        "Ovarian cyst evaluation and care",
        "Cervical screening (Pap smear, HPV testing) and colposcopy",
        "Premenstrual syndrome (PMS/PMDD) management",
        "Perimenopause and menopause care",
        "Pelvic pain evaluation",
        "Infections and vaginal health",
        "Contraception and family planning",
        "Laparoscopy & hysteroscopy (diagnostic and operative)",
      ],
      keywords: [
        "Gynaecology Clinic in Jayanagar",
        "Gynaecology Clinic in JP Nagar",
        "Gynaecology Clinic in Bangalore",
        "Gynaecology Clinic in BTM Layout",
        "Gynaecology Clinic in Banashankari",
      ],
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }

  return null;
}

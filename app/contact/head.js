export default function Head() {
  // Only output JSON-LD here; title/description set via route metadata
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.drmadhurimsobgyn.com/our-services/gynaecology#gynaecology",
    name: "Gynaecology Services - Dr. Madhuri M S",
    url: "https://www.drmadhurimsobgyn.com/contact",
    description:
      "Laparoscopic Gynecologist in Jayanagar - Expert in minimally invasive surgeries offering advanced treatment, faster recovery, and personalized women's health care.",
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
      "Laparoscopic Gynecologist in Jayanagar",
      "Laparoscopic Gynecologist in JP Nagar",
      "Laparoscopic Gynecologist in Bangalore",
      "Laparoscopic Gynecologist in BTM Layout",
      "Laparoscopic Gynecologist in Banashankari",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Head() {
  // Only output JSON-LD here; titles/descriptions are set via route metadata
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.drmadhurimsobgyn.com/#clinic",
    name: "Dr Madhuri M S OB-GYN Clinic",
    url: "https://www.drmadhurimsobgyn.com/",
    image:
      "https://www.drmadhurimsobgyn.com/assets/home-image/Dr%20Madhurilogo.png",
    logo: "https://www.drmadhurimsobgyn.com/assets/home-image/Dr%20Madhurilogo.png",
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
      latitude: "12.9300",
      longitude: "77.5800",
    },
    telephone: "+91 6361197107",
    email: "drmadhuri.og@gmail.com",
    keywords: [
      "Best maternity clinic in Jayanagar",
      "Best Gynecologist in Jayanagar 7th Block",
      "Diabetes in Pregnancy (GDM) Specialist  in Jayanagar 7th Block",
      "Best Gynecologist in Jayanagar 4th Block",
      "Best Gynecologist in Jayanagar 9th block",
    ],
    datePublished: "2025-11-20",
    sameAs: ["https://www.drmadhurimsobgyn.com/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

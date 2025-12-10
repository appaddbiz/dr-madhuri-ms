import { seoConfig } from "./layout";
import { schemaMap } from "./seo-schemas";

export default function Head({ params }) {
  const segs = Array.isArray(params?.["sub-services"]) ? params["sub-services"] : [];
  const pathKey = segs.join("/");
  const seo = seoConfig[pathKey];
  const jsonLd = schemaMap[pathKey];

  if (!seo && !jsonLd) return null;

  return (
    <>
      {seo && (
        <>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          {seo.canonical && <link rel="canonical" href={seo.canonical} />}
        </>
      )}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}

import Layout from "@/components/layout/Layout";
import React from "react";

const Sitemap = () => {
  const locations = [
    // {
    //   name: "Jayanagar",
    //   services: [
    //     {
    //       title: "Best Maternity Clinic in Jayanagar 7th Block",
    //       link: "/sitemap/best-maternity-clinic-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Best Gynecologist in Jayanagar 4th Block",
    //       link: "/sitemap/best-gynecologist-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "Best Gynecologist in Jayanagar 7th Block",
    //       link: "/sitemap/best-gynecologist-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Best Gynecologist in Jayanagar 9th Block",
    //       link: "/sitemap/best-gynecologist-in-jayanagar-9th-block",
    //     },
    //     {
    //       title: "Best Obstetrician in Jayanagar",
    //       link: "/sitemap/best-obstetrician-in-jayanagar",
    //     },
    //     {
    //       title: "Gynaecology Clinic in Jayanagar",
    //       link: "/sitemap/gynaecology-clinic-in-jayanagar",
    //     },
    //     {
    //       title: "Comprehensive Antenatal Care in Jayanagar",
    //       link: "/sitemap/comprehensive-antenatal-care-in-jayanagar",
    //     },
    //     {
    //       title: "High Risk Pregnancy Specialist in Jayanagar",
    //       link: "/sitemap/high-risk-pregnancy-specialist-in-jayanagar",
    //     },
    //     {
    //       title: "Pregnancy after C-section Treatment in Jayanagar",
    //       link: "/sitemap/pregnancy-after-c-section-treatment-in-jayanagar",
    //     },
    //     {
    //       title: "Recurrent Loss of Pregnancy Treatment in Jayanagar",
    //       link: "/sitemap/recurrent-loss-of-pregnancy-treatment-in-jayanagar",
    //     },
    //     {
    //       title: "Diabetes in Pregnancy Treatment in Jayanagar 7th Block",
    //       link: "/sitemap/diabetes-in-pregnancy-treatment-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Hypertension in Pregnancy Treatment in Jayanagar",
    //       link: "/sitemap/hypertension-in-pregnancy-treatment-in-jayanagar",
    //     },
    //     {
    //       title: "Twin Pregnancy Specialist in Jayanagar 9th Block",
    //       link: "/sitemap/twin-pregnancy-specialist-in-jayanagar-9th-block",
    //     },
    //     {
    //       title: "Multiple Birth Pregnancy Doctor in Jayanagar",
    //       link: "/sitemap/multiple-birth-pregnancy-doctor-in-jayanagar",
    //     },
    //     {
    //       title: "Infertility Specialist in Jayanagar 7th Block",
    //       link: "/sitemap/infertility-specialist-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Best Infertility Clinic in Jayanagar 4th Block",
    //       link: "/sitemap/best-infertility-clinic-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "Ovulation Induction Treatment in Jayanagar",
    //       link: "/sitemap/ovulation-induction-treatment-in-jayanagar",
    //     },
    //     {
    //       title: "Best Intra-Uterine Insemination Center in Jayanagar",
    //       link: "/sitemap/best-intra-uterine-insemination-center-in-jayanagar",
    //     },
    //     {
    //       title: "Uterine Fibroid Treatment in Jayanagar 9th Block",
    //       link: "/sitemap/uterine-fibroid-treatment-in-jayanagar-9th-block",
    //     },
    //     {
    //       title: "Fibroid Treatment in Jayanagar 7th Block",
    //       link: "/sitemap/fibroid-treatment-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Uterine Bleeding Treatment in Jayanagar",
    //       link: "/sitemap/uterine-bleeding-treatment-in-jayanagar",
    //     },
    //     {
    //       title: "Best Gynecologist for Endometriosis in Jayanagar",
    //       link: "/sitemap/best-gynecologist-for-endometriosis-in-jayanagar",
    //     },
    //     {
    //       title: "Best Hospital for Ovarian Cyst in Jayanagar 4th Block",
    //       link: "/sitemap/best-hospital-for-ovarian-cyst-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "Chocolate Cyst Treatment in Jayanagar 4th Block",
    //       link: "/sitemap/chocolate-cyst-treatment-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "Hormone Imbalance Treatment in Jayanagar",
    //       link: "/sitemap/hormone-imbalance-treatment-in-jayanagar",
    //     },
    //     {
    //       title: "Pelvic Pain Specialists in Jayanagar",
    //       link: "/sitemap/pelvic-pain-specialists-in-jayanagar",
    //     },
    //     {
    //       title: "Best Health Checkup Hospital in Jayanagar",
    //       link: "/sitemap/best-health-checkup-hospital-in-jayanagar",
    //     },
    //     {
    //       title: "Laparoscopy Surgery Hospital in Jayanagar 9th Block",
    //       link: "/sitemap/laparoscopy-surgery-hospital-in-jayanagar-9th-block",
    //     },
    //     {
    //       title: "Infertility Specialist in Jayanagar",
    //       link: "/sitemap/infertility-specialist-in-jayanagar",
    //     },
    //     {
    //       title: "Laparoscopy Surgery Hospital in Jayanagar 7th Block",
    //       link: "/sitemap/laparoscopy-surgery-hospital-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Best Myomectomy Specialist in Jayanagar 4th Block",
    //       link: "/sitemap/best-myomectomy-specialist-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "Diagnostic Hysteroscopy in Jayanagar",
    //       link: "/sitemap/diagnostic-hysteroscopy-in-jayanagar",
    //     },
    //     {
    //       title: "Hysteroscopy Hospital near Jayanagar",
    //       link: "/sitemap/hysteroscopy-hospital-near-jayanagar",
    //     },
    //     {
    //       title: "Best Gynecologist for Uterine Polyps in Jayanagar",
    //       link: "/sitemap/best-gynecologist-for-uterine-polyps-in-jayanagar",
    //     },
    //     {
    //       title: "Tubal Recanalisation in Jayanagar 7th Block",
    //       link: "/sitemap/tubal-recanalisation-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Ovarian Cyst Treatment in Jayanagar 4th Block",
    //       link: "/sitemap/ovarian-cyst-treatment-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "Tubal Clipping Treatment in Jayanagar 9th Block",
    //       link: "/sitemap/tubal-clipping-treatment-in-jayanagar-9th-block",
    //     },
    //     {
    //       title: "Laparoscopy Surgery Hospital in Jayanagar 4th Block",
    //       link: "/sitemap/laparoscopy-surgery-hospital-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "Ultrasound Scan Center in Jayanagar 7th Block",
    //       link: "/sitemap/ultrasound-scan-center-in-jayanagar-7th-block",
    //     },
    //     {
    //       title: "Best Ultrasound Scan Center in Jayanagar 4th Block",
    //       link: "/sitemap/best-ultrasound-scan-center-in-jayanagar-4th-block",
    //     },
    //     {
    //       title: "3D Ultrasound Scan Center in Jayanagar 9th Block",
    //       link: "/sitemap/3d-ultrasound-scan-center-in-jayanagar-9th-block",
    //     },
    //   ],
    // },
    {
      name: "Tavarekere main road",
      services: [
        {
          title: "Best maternity clinic in Tavarekere main road",
          link: "/sitemap/best-maternity-clinic-tavarekere-main-road",
        },
        {
          title: "Best Obstetrician in Tavarekere Main Road Clinic",
          link: "/sitemap/best-obstetrician-in-tavarekere-main-road",
        },
        {
          title: "Best Gynecologist in Tavarekere Main Road",
          link: "/sitemap/best-gynaecologist-in-tavarekere-main-road",
        },
        {
          title: "High Risk Pregnancy in Tavarekere main road",
          link: "/sitemap/high-risk-pregnancy-in-tavarekere-main-road",
        },
        {
          title: "Comprehensive Antenatal in Tavarekere main road",
          link: "/sitemap/comprehensive-antenatal-in-tavarekere-main-road",
        },
        {
          title:
            "Diabetes in Pregnancy (GDM) Treatment in Tavarekere main road",
          link: "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-tavarekere-main-road",
        },
        {
          title: "Hypertension in Pregnancy (PIH) in Tavarekere main road",
          link: "/sitemap/hypertension-in-pregnancy-pih-in-tavarekere-main-road",
        },
        {
          title: "Infertility in Tavarekere main road",
          link: "/sitemap/infertility-in-tavarekere-main-road",
        },
        {
          title: "Ovarian Cysts in Tavarekere main road",
          link: "/sitemap/ovarian-cysts-in-tavarekere-main-road",
        },
        {
          title: "Recurrent Loss of Pregnancy in Tavarekere main road",
          link: "/sitemap/recurrent-loss-of-pregnancy-in-tavarekere-main-road",
        },
        {
          title: "Labour and Postnatal Care in Tavarekere main road",
          link: "/sitemap/labour-and-postnatal-care-in-tavarekere-main-road",
        },
        {
          title: "Intra-Uterine Insemination (IUI) in Tavarekere main road",
          link: "/sitemap/intra-uterine-insemination-iui-in-tavarekere-main-road",
        },
        {
          title: "Ovulation Induction in Tavarekere main road",
          link: "/sitemap/ovulation-induction-in-tavarekere-main-road",
        },
        {
          title: "Laparoscopic Myomectomy in Tavarekere Main Road",
          link: "/sitemap/laparoscopic-myomectomy-in-tavarekere-main-road",
        },
        {
          title:
            "Total Laparoscopic Hysterectomy (TLH) in Tavarekere Main Road",
          link: "/sitemap/total-laparoscopic-hysterectomy-tlh-in-tavarekere-main-road",
        },
        {
          title: "Laparoscopy & Hysteroscopy in Tavarekere Main Road",
          link: "/sitemap/laparoscopy-hysteroscopy-in-tavarekere-main-road",
        },
        {
          title: "Fibroids / Leiomyoma of Uterus in Tavarekere main road",
          link: "/sitemap/fibroids-leiomyoma-of-uterus-in-tavarekere-main-road",
        },
        {
          title: "Endometriosis in Tavarekere main road",
          link: "/sitemap/endometriosis-in-tavarekere-main-road",
        },
      ],
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
      <section className="project-one" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape">
                <img
                  src="assets/images/shapes/section-title-tagline-shape.png"
                  alt="Fibroid Treatment in Jayanagar"
                />
              </div>
              <span className="section-title__tagline">Sitemap</span>
            </div>
          </div>

          <div className="row">
            {locations.map((location, index) => (
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
                <h2 className="mb-3">{location.name}</h2>
                <ul>
                  {location.services.map((service, i) => (
                    <li key={i}>
                      <a href={service.link}>{service.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;

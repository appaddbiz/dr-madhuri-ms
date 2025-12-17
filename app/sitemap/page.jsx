import Layout from "@/components/layout/Layout";
import { siteData } from "@/utils/siteData";
import React from "react";



const Sitemap = () => {
    const locations = [
    {
        "name": "Jayanagar 7th Block",
        "services": [
            {
                "title": "Best maternity clinic in Jayanagar 7th Block",
                "link": "/sitemap/best-maternity-clinic-in-jayanagar-7th-block"
            },
            {
                "title": "Best Obstetrician in Jayanagar 7th Block",
                "link": "/sitemap/best-obstetrician-in-jayanagar-7th-block"
            },
            {
                "title": "Best Gynecologist in Jayanagar 7th Block",
                "link": "/sitemap/best-gynecologist-in-jayanagar-7th-block"
            },
            {
                "title": "High Risk Pregnancy Specialist in Jayanagar 7th Block",
                "link": "/sitemap/high-risk-pregnancy-specialist-in-jayanagar-7th-block"
            },
            {
                "title": "Comprehensive Antenatal Care in Jayanagar 7th Block",
                "link": "/sitemap/comprehensive-antenatal-care-in-jayanagar-7th-block"
            },
            {
                "title": "Diabetes in Pregnancy (GDM) Treatment in Jayanagar 7th Block",
                "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-jayanagar-7th-block"
            },
            {
                "title": "Fibroids / Leiomyoma of Uterus in Jayanagar 7th Block",
                "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-jayanagar-7th-block"
            },
            {
                "title": "Infertility in Jayanagar 7th Block",
                "link": "/sitemap/infertility-in-jayanagar-7th-block"
            },
            {
                "title": "Intra-Uterine Insemination (IUI) in Jayanagar 7th Block",
                "link": "/sitemap/intra-uterine-insemination-iui-in-jayanagar-7th-block"
            },
            {
                "title": "Ovulation Induction in Jayanagar 7th Block",
                "link": "/sitemap/ovulation-induction-in-jayanagar-7th-block"
            },
            {
                "title": "Laparoscopic Myomectomy in Jayanagar 7th Block",
                "link": "/sitemap/laparoscopic-myomectomy-in-jayanagar-7th-block"
            },
            {
                "title": "Total Laparoscopic Hysterectomy (TLH) in Jayanagar 7th Block",
                "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-jayanagar-7th-block"
            },
            {
                "title": "Laparoscopy & Hysteroscopy in Jayanagar 7th Block",
                "link": "/sitemap/laparoscopy-hysteroscopy-in-jayanagar-7th-block"
            },
            {
                "title": "Endometriosis in Jayanagar 7th Block",
                "link": "/sitemap/endometriosis-in-jayanagar-7th-block"
            },
            {
                "title": "Ovarian Cysts in Jayanagar 7th Block",
                "link": "/sitemap/ovarian-cysts-in-jayanagar-7th-block"
            },
            {
                "title": "Recurrent Loss of Pregnancy in Jayanagar 7th Block",
                "link": "/sitemap/recurrent-loss-of-pregnancy-in-jayanagar-7th-block"
            },
            {
                "title": "Labour and Postnatal Care in Jayanagar 7th Block",
                "link": "/sitemap/labour-and-postnatal-care-in-jayanagar-7th-block"
            },
            {
                "title": "Hypertension in Pregnancy (PIH) in Jayanagar 7th Block",
                "link": "/sitemap/hypertension-in-pregnancy-pih-in-jayanagar-7th-block"
            }
        ]
    },
    {
        "name": "Tavarekere main road",
        "services": [
            {
                "title": "Best maternity clinic in Tavarekere main road",
                "link": "/sitemap/best-maternity-clinic-tavarekere-main-road"
            },
            {
                "title": "Best Obstetrician in Tavarekere main road",
                "link": "/sitemap/best-obstetrician-in-tavarekere-main-road"
            },
            {
                "title": "Best Gynecologist in Tavarekere main road",
                "link": "/sitemap/best-gynaecologist-in-tavarekere-main-road"
            },
            {
                "title": "High Risk Pregnancy in Tavarekere main road",
                "link": "/sitemap/high-risk-pregnancy-in-tavarekere-main-road"
            },
            {
                "title": "Comprehensive Antenatal in Tavarekere main road",
                "link": "/sitemap/comprehensive-antenatal-in-tavarekere-main-road"
            },
            {
                "title": "Diabetes in Pregnancy (GDM) Treatment in Tavarekere main road",
                "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-tavarekere-main-road"
            },
            {
                "title": "Fibroids / Leiomyoma of Uterus in Tavarekere main road",
                "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-tavarekere-main-road"
            },
            {
                "title": "Infertility in Tavarekere main road",
                "link": "/sitemap/infertility-in-tavarekere-main-road"
            },
            {
                "title": "Intra-Uterine Insemination (IUI) in Tavarekere main road",
                "link": "/sitemap/intra-uterine-insemination-iui-in-tavarekere-main-road"
            },
            {
                "title": "Ovulation Induction in Tavarekere main road",
                "link": "/sitemap/ovulation-induction-in-tavarekere-main-road"
            },
            {
                "title": "Laparoscopic Myomectomy in Tavarekere main road",
                "link": "/sitemap/laparoscopic-myomectomy-in-tavarekere-main-road"
            },
            {
                "title": "Total Laparoscopic Hysterectomy (TLH) in Tavarekere main road",
                "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-tavarekere-main-road"
            },
            {
                "title": "Laparoscopy & Hysteroscopy in Tavarekere main road",
                "link": "/sitemap/laparoscopy-hysteroscopy-in-tavarekere-main-road"
            },
            {
                "title": "Endometriosis in Tavarekere main road",
                "link": "/sitemap/endometriosis-in-tavarekere-main-road"
            },
            {
                "title": "Ovarian Cysts in Tavarekere main road",
                "link": "/sitemap/ovarian-cysts-in-tavarekere-main-road"
            },
            {
                "title": "Recurrent Loss of Pregnancy in Tavarekere main road",
                "link": "/sitemap/recurrent-loss-of-pregnancy-in-tavarekere-main-road"
            },
            {
                "title": "Labour and Postnatal Care in Tavarekere main road",
                "link": "/sitemap/labour-and-postnatal-care-in-tavarekere-main-road"
            },
            {
                "title": "Hypertension in Pregnancy (PIH) in Tavarekere main road",
                "link": "/sitemap/hypertension-in-pregnancy-pih-in-tavarekere-main-road"
            }
        ]
    },
    {
        "name": "Jayanagar",
        "services": [
            {
                "title": "Best maternity clinic in Jayanagar",
                "link": "/sitemap/best-maternity-clinic-in-jayanagar"
            },
            {
                "title": "Best Obstetrician in Jayanagar",
                "link": "/sitemap/best-obstetrician-in-jayanagar"
            },
            {
                "title": "Best Gynecologist in Jayanagar",
                "link": "/sitemap/best-gynecologist-in-jayanagar"
            },
            {
                "title": "High Risk Pregnancy Specialist in Jayanagar",
                "link": "/sitemap/high-risk-pregnancy-specialist-in-jayanagar"
            },
            {
                "title": "Comprehensive Antenatal Care in Jayanagar",
                "link": "/sitemap/comprehensive-antenatal-care-in-jayanagar"
            },
            {
                "title": "Diabetes in Pregnancy (GDM) Treatment in Jayanagar",
                "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-jayanagar"
            },
            {
                "title": "Fibroids / Leiomyoma of Uterus in Jayanagar",
                "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-jayanagar"
            },
            {
                "title": "Infertility in Jayanagar",
                "link": "/sitemap/infertility-in-jayanagar"
            },
            {
                "title": "Intra-Uterine Insemination (IUI) in Jayanagar",
                "link": "/sitemap/intra-uterine-insemination-iui-in-jayanagar"
            },
            {
                "title": "Ovulation Induction in Jayanagar",
                "link": "/sitemap/ovulation-induction-in-jayanagar"
            },
            {
                "title": "Laparoscopic Myomectomy in Jayanagar",
                "link": "/sitemap/laparoscopic-myomectomy-in-jayanagar"
            },
            {
                "title": "Total Laparoscopic Hysterectomy (TLH) in Jayanagar",
                "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-jayanagar"
            },
            {
                "title": "Laparoscopy & Hysteroscopy in Jayanagar",
                "link": "/sitemap/laparoscopy-hysteroscopy-in-jayanagar"
            },
            {
                "title": "Endometriosis in Jayanagar",
                "link": "/sitemap/endometriosis-in-jayanagar"
            },
            {
                "title": "Ovarian Cysts in Jayanagar",
                "link": "/sitemap/ovarian-cysts-in-jayanagar"
            },
            {
                "title": "Recurrent Loss of Pregnancy in Jayanagar",
                "link": "/sitemap/recurrent-loss-of-pregnancy-in-jayanagar"
            },
            {
                "title": "Labour and Postnatal Care in Jayanagar",
                "link": "/sitemap/labour-and-postnatal-care-in-jayanagar"
            },
            {
                "title": "Hypertension in Pregnancy (PIH) in Jayanagar",
                "link": "/sitemap/hypertension-in-pregnancy-pih-in-jayanagar"
            }
        ]
    },
    {
        "name": "Jayanagar 4th Block",
        "services": [
            {
                "title": "Best maternity clinic in Jayanagar 4th Block",
                "link": "/sitemap/best-maternity-clinic-in-jayanagar-4th-block"
            },
            {
                "title": "Best Obstetrician in Jayanagar 4th Block",
                "link": "/sitemap/best-obstetrician-in-jayanagar-4th-block"
            },
            {
                "title": "Best Gynecologist in Jayanagar 4th Block",
                "link": "/sitemap/best-gynecologist-in-jayanagar-4th-block"
            },
            {
                "title": "High Risk Pregnancy Specialist in Jayanagar 4th Block",
                "link": "/sitemap/high-risk-pregnancy-specialist-in-jayanagar-4th-block"
            },
            {
                "title": "Comprehensive Antenatal Care in Jayanagar 4th Block",
                "link": "/sitemap/comprehensive-antenatal-care-in-jayanagar-4th-block"
            },
            {
                "title": "Diabetes in Pregnancy (GDM) Treatment in Jayanagar 4th Block",
                "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-jayanagar-4th-block"
            },
            {
                "title": "Fibroids / Leiomyoma of Uterus in Jayanagar 4th Block",
                "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-jayanagar-4th-block"
            },
            {
                "title": "Infertility in Jayanagar 4th Block",
                "link": "/sitemap/infertility-in-jayanagar-4th-block"
            },
            {
                "title": "Intra-Uterine Insemination (IUI) in Jayanagar 4th Block",
                "link": "/sitemap/intra-uterine-insemination-iui-in-jayanagar-4th-block"
            },
            {
                "title": "Ovulation Induction in Jayanagar 4th Block",
                "link": "/sitemap/ovulation-induction-in-jayanagar-4th-block"
            },
            {
                "title": "Laparoscopic Myomectomy in Jayanagar 4th Block",
                "link": "/sitemap/laparoscopic-myomectomy-in-jayanagar-4th-block"
            },
            {
                "title": "Total Laparoscopic Hysterectomy (TLH) in Jayanagar 4th Block",
                "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-jayanagar-4th-block"
            },
            {
                "title": "Laparoscopy & Hysteroscopy in Jayanagar 4th Block",
                "link": "/sitemap/laparoscopy-hysteroscopy-in-jayanagar-4th-block"
            },
            {
                "title": "Endometriosis in Jayanagar 4th Block",
                "link": "/sitemap/endometriosis-in-jayanagar-4th-block"
            },
            {
                "title": "Ovarian Cysts in Jayanagar 4th Block",
                "link": "/sitemap/ovarian-cysts-in-jayanagar-4th-block"
            },
            {
                "title": "Recurrent Loss of Pregnancy in Jayanagar 4th Block",
                "link": "/sitemap/recurrent-loss-of-pregnancy-in-jayanagar-4th-block"
            },
            {
                "title": "Labour and Postnatal Care in Jayanagar 4th Block",
                "link": "/sitemap/labour-and-postnatal-care-in-jayanagar-4th-block"
            },
            {
                "title": "Hypertension in Pregnancy (PIH) in Jayanagar 4th Block",
                "link": "/sitemap/hypertension-in-pregnancy-pih-in-jayanagar-4th-block"
            }
        ]
    },
    {
        "name": "Jayanagar 9th Block",
        "services": [
            {
                "title": "Best maternity clinic in Jayanagar 9th Block",
                "link": "/sitemap/best-maternity-clinic-in-jayanagar-9th-block"
            },
            {
                "title": "Best Obstetrician in Jayanagar 9th Block",
                "link": "/sitemap/best-obstetrician-in-jayanagar-9th-block"
            },
            {
                "title": "Best Gynecologist in Jayanagar 9th Block",
                "link": "/sitemap/best-gynecologist-in-jayanagar-9th-block"
            },
            {
                "title": "High Risk Pregnancy Specialist in Jayanagar 9th Block",
                "link": "/sitemap/high-risk-pregnancy-specialist-in-jayanagar-9th-block"
            },
            {
                "title": "Comprehensive Antenatal Care in Jayanagar 9th Block",
                "link": "/sitemap/comprehensive-antenatal-care-in-jayanagar-9th-block"
            },
            {
                "title": "Diabetes in Pregnancy (GDM) Treatment in Jayanagar 9th Block",
                "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-jayanagar-9th-block"
            },
            {
                "title": "Fibroids / Leiomyoma of Uterus in Jayanagar 9th Block",
                "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-jayanagar-9th-block"
            },
            {
                "title": "Infertility in Jayanagar 9th Block",
                "link": "/sitemap/infertility-in-jayanagar-9th-block"
            },
            {
                "title": "Intra-Uterine Insemination (IUI) in Jayanagar 9th Block",
                "link": "/sitemap/intra-uterine-insemination-iui-in-jayanagar-9th-block"
            },
            {
                "title": "Ovulation Induction in Jayanagar 9th Block",
                "link": "/sitemap/ovulation-induction-in-jayanagar-9th-block"
            },
            {
                "title": "Laparoscopic Myomectomy in Jayanagar 9th Block",
                "link": "/sitemap/laparoscopic-myomectomy-in-jayanagar-9th-block"
            },
            {
                "title": "Total Laparoscopic Hysterectomy (TLH) in Jayanagar 9th Block",
                "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-jayanagar-9th-block"
            },
            {
                "title": "Laparoscopy & Hysteroscopy in Jayanagar 9th Block",
                "link": "/sitemap/laparoscopy-hysteroscopy-in-jayanagar-9th-block"
            },
            {
                "title": "Endometriosis in Jayanagar 9th Block",
                "link": "/sitemap/endometriosis-in-jayanagar-9th-block"
            },
            {
                "title": "Ovarian Cysts in Jayanagar 9th Block",
                "link": "/sitemap/ovarian-cysts-in-jayanagar-9th-block"
            },
            {
                "title": "Recurrent Loss of Pregnancy in Jayanagar 9th Block",
                "link": "/sitemap/recurrent-loss-of-pregnancy-in-jayanagar-9th-block"
            },
            {
                "title": "Labour and Postnatal Care in Jayanagar 9th Block",
                "link": "/sitemap/labour-and-postnatal-care-in-jayanagar-9th-block"
            },
            {
                "title": "Hypertension in Pregnancy (PIH) in Jayanagar 9th Block",
                "link": "/sitemap/hypertension-in-pregnancy-pih-in-jayanagar-9th-block"
            }
        ]
    },
    {
        "name": "SG Palya",
        "services": [
            {
                "title": "Best maternity clinic in sg palya",
                "link": "/sitemap/best-maternity-clinic-in-sg-palya"
            },
            {
                "title": "Best Obstetrician in sg palya",
                "link": "/sitemap/best-obstetrician-in-sg-palya"
            },
            {
                "title": "Best Gynecologist in sg palya",
                "link": "/sitemap/best-gynecologist-in-sg-palya"
            },
            {
                "title": "High Risk Pregnancy in sg palya",
                "link": "/sitemap/high-risk-pregnancy-in-sg-palya"
            },
            {
                "title": "Comprehensive Antenatal in sg palya",
                "link": "/sitemap/comprehensive-antenatal-in-sg-palya"
            },
            {
                "title": "Diabetes in Pregnancy (GDM) Treatment in sg palya",
                "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-sg-palya"
            },
            {
                "title": "Fibroids / Leiomyoma of Uterus in sg palya",
                "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-sg-palya"
            },
            {
                "title": "Infertility in sg palya",
                "link": "/sitemap/infertility-in-sg-palya"
            },
            {
                "title": "Intra-Uterine Insemination (IUI) in sg palya",
                "link": "/sitemap/intra-uterine-insemination-iui-in-sg-palya"
            },
            {
                "title": "Ovulation Induction in sg palya",
                "link": "/sitemap/ovulation-induction-in-sg-palya"
            },
            {
                "title": "Laparoscopic Myomectomy in sg palya",
                "link": "/sitemap/laparoscopic-myomectomy-in-sg-palya"
            },
            {
                "title": "Total Laparoscopic Hysterectomy (TLH) in sg palya",
                "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-sg-palya"
            },
            {
                "title": "Laparoscopy & Hysteroscopy in sg palya",
                "link": "/sitemap/laparoscopy-hysteroscopy-in-sg-palya"
            },
            {
                "title": "Endometriosis in sg palya",
                "link": "/sitemap/endometriosis-in-sg-palya"
            },
            {
                "title": "Ovarian Cysts in sg palya",
                "link": "/sitemap/ovarian-cysts-in-sg-palya"
            },
            {
                "title": "Recurrent Loss of Pregnancy in sg palya",
                "link": "/sitemap/recurrent-loss-of-pregnancy-in-sg-palya"
            },
            {
                "title": "Labour and Postnatal Care in sg palya",
                "link": "/sitemap/labour-and-postnatal-care-in-sg-palya"
            },
            {
                "title": "Hypertension in Pregnancy (PIH) in sg palya",
                "link": "/sitemap/hypertension-in-pregnancy-pih-in-sg-palya"
            }
        ]
    },
    {
        "name": "Tilak Nagar",
        "services": [
            {
                "title": "Best maternity clinic in Tilak Nagar",
                "link": "/sitemap/best-maternity-clinic-in-tilak-nagar"
            },
            {
                "title": "Best Obstetrician in Tilak Nagar",
                "link": "/sitemap/best-obstetrician-in-tilak-nagar"
            },
            {
                "title": "Best Gynecologist in Tilak Nagar",
                "link": "/sitemap/best-gynecologist-in-tilak-nagar"
            },
            {
                "title": "High Risk Pregnancy in Tilak Nagar",
                "link": "/sitemap/high-risk-pregnancy-in-tilak-nagar"
            },
            {
                "title": "Comprehensive Antenatal in Tilak Nagar",
                "link": "/sitemap/comprehensive-antenatal-in-tilak-nagar"
            },
            {
                "title": "Diabetes in Pregnancy (GDM) Treatment in Tilak Nagar",
                "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-tilak-nagar"
            },
            {
                "title": "Fibroids / Leiomyoma of Uterus in Tilak Nagar",
                "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-tilak-nagar"
            },
            {
                "title": "Infertility in Tilak Nagar",
                "link": "/sitemap/infertility-in-tilak-nagar"
            },
            {
                "title": "Intra-Uterine Insemination (IUI) in Tilak Nagar",
                "link": "/sitemap/intra-uterine-insemination-iui-in-tilak-nagar"
            },
            {
                "title": "Ovulation Induction in Tilak Nagar",
                "link": "/sitemap/ovulation-induction-in-tilak-nagar"
            },
            {
                "title": "Laparoscopic Myomectomy in Tilak Nagar",
                "link": "/sitemap/laparoscopic-myomectomy-in-tilak-nagar"
            },
            {
                "title": "Total Laparoscopic Hysterectomy (TLH) in Tilak Nagar",
                "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-tilak-nagar"
            },
            {
                "title": "Laparoscopy & Hysteroscopy in Tilak Nagar",
                "link": "/sitemap/laparoscopy-hysteroscopy-in-tilak-nagar"
            },
            {
                "title": "Endometriosis in Tilak Nagar",
                "link": "/sitemap/endometriosis-in-tilak-nagar"
            },
            {
                "title": "Ovarian Cysts in Tilak Nagar",
                "link": "/sitemap/ovarian-cysts-in-tilak-nagar"
            },
            {
                "title": "Recurrent Loss of Pregnancy in Tilak Nagar",
                "link": "/sitemap/recurrent-loss-of-pregnancy-in-tilak-nagar"
            },
            {
                "title": "Labour and Postnatal Care in Tilak Nagar",
                "link": "/sitemap/labour-and-postnatal-care-in-tilak-nagar"
            },
            {
                "title": "Hypertension in Pregnancy (PIH) in Tilak Nagar",
                "link": "/sitemap/hypertension-in-pregnancy-pih-in-tilak-nagar"
            }
        ]
    },
    // {
    //     "name": "Byrasandra",
    //     "services": [
    //         {
    //             "title": "Best maternity clinic in Byrasandra",
    //             "link": "/sitemap/best-maternity-clinic-in-byrasandra"
    //         },
    //         {
    //             "title": "Best Obstetrician in Byrasandra",
    //             "link": "/sitemap/best-obstetrician-in-byrasandra"
    //         },
    //         {
    //             "title": "Best Gynecologist in Byrasandra",
    //             "link": "/sitemap/best-gynecologist-in-byrasandra"
    //         },
    //         {
    //             "title": "High Risk Pregnancy in Byrasandra",
    //             "link": "/sitemap/high-risk-pregnancy-in-byrasandra"
    //         },
    //         {
    //             "title": "Comprehensive Antenatal in Byrasandra",
    //             "link": "/sitemap/comprehensive-antenatal-in-byrasandra"
    //         },
    //         {
    //             "title": "Diabetes in Pregnancy (GDM) Treatment in Byrasandra",
    //             "link": "/sitemap/diabetes-in-pregnancy-gdm-treatment-in-byrasandra"
    //         },
    //         {
    //             "title": "Fibroids / Leiomyoma of Uterus in Byrasandra",
    //             "link": "/sitemap/fibroids-leiomyoma-of-uterus-in-byrasandra"
    //         },
    //         {
    //             "title": "Infertility in Byrasandra",
    //             "link": "/sitemap/infertility-in-byrasandra"
    //         },
    //         {
    //             "title": "Intra-Uterine Insemination (IUI) in Byrasandra",
    //             "link": "/sitemap/intra-uterine-insemination-iui-in-byrasandra"
    //         },
    //         {
    //             "title": "Ovulation Induction in Byrasandra",
    //             "link": "/sitemap/ovulation-induction-in-byrasandra"
    //         },
    //         {
    //             "title": "Laparoscopic Myomectomy in Byrasandra",
    //             "link": "/sitemap/laparoscopic-myomectomy-in-byrasandra"
    //         },
    //         {
    //             "title": "Total Laparoscopic Hysterectomy (TLH) in Byrasandra",
    //             "link": "/sitemap/total-laparoscopic-hysterectomy-tlh-in-byrasandra"
    //         },
    //         {
    //             "title": "Laparoscopy & Hysteroscopy in Byrasandra",
    //             "link": "/sitemap/laparoscopy-hysteroscopy-in-byrasandra"
    //         },
    //         {
    //             "title": "Endometriosis in Byrasandra",
    //             "link": "/sitemap/endometriosis-in-byrasandra"
    //         },
    //         {
    //             "title": "Ovarian Cysts in Byrasandra",
    //             "link": "/sitemap/ovarian-cysts-in-byrasandra"
    //         },
    //         {
    //             "title": "Recurrent Loss of Pregnancy in Byrasandra",
    //             "link": "/sitemap/recurrent-loss-of-pregnancy-in-byrasandra"
    //         },
    //         {
    //             "title": "Labour and Postnatal Care in Byrasandra",
    //             "link": "/sitemap/labour-and-postnatal-care-in-byrasandra"
    //         },
    //         {
    //             "title": "Hypertension in Pregnancy (PIH) in Byrasandra",
    //             "link": "/sitemap/hypertension-in-pregnancy-pih-in-byrasandra"
    //         }
    //     ]
    // }
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
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <h2 className="mb-3">{location.name}</h2>
                <ol>
                  {location.services.map((service, i) => (
                    <li key={i}>
                      <a href={service.link}>{service.title}</a>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;

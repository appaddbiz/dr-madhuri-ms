"use client";
import { useMemo, useState } from "react";

const faqs = [
  {
    question: "How often should I visit a gynecologist?",
    answer:
      "It is recommended to visit once a year for routine check-ups, Pap smears, and preventive care. Pregnant women may require more frequent visits as advised by the doctor.",
  },
  {
    question: "What should I expect during my first prenatal visit?",
    answer:
      "During your first prenatal visit, your gynecologist will review your medical history, perform basic tests, and may recommend an ultrasound to confirm pregnancy and assess fetal health.",
  },
  {
    question: "How can I manage irregular periods?",
    answer:
      "Irregular periods can be caused by hormonal imbalance, PCOS, thyroid issues, or stress. Your gynecologist will run necessary tests and suggest lifestyle changes or medications if required.",
  },
  {
    question: "When should I consult for fertility issues?",
    answer:
      "If you are under 35 and have been trying to conceive for over a year (or 6 months if over 35), it's best to consult a gynecologist or fertility specialist for evaluation and guidance.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqIdPrefix = useMemo(() => `faq-${Math.random().toString(36).slice(2)}`, []);

  const toggle = (idx) => {
    setActiveIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <>
      <section className="faq-shell">
        <style jsx>{`
          .faq-shell {
            position: relative;
            padding: 60px 0;
            background: radial-gradient(120% 120% at 20% 20%, #ffe8f0 0%, #ffffff 45%, #eef6ff 100%);
            overflow: hidden;
          }
          .faq-shell::before,
          .faq-shell::after {
            content: "";
            position: absolute;
            width: 280px;
            height: 280px;
            background: radial-gradient(closest-side, rgba(245, 9, 99, 0.15), transparent);
            filter: blur(30px);
            z-index: 0;
          }
          .faq-shell::before {
            top: -120px;
            right: -80px;
          }
          .faq-shell::after {
            bottom: -140px;
            left: -60px;
          }
          .faq-card {
            border: 1px solid #e6e8ec;
            border-radius: 18px;
            background: #fff;
            box-shadow: 0 20px 40px rgba(18, 38, 63, 0.08);
            margin-bottom: 14px;
            overflow: hidden;
            transition: border-color 0.2s ease, transform 0.2s ease;
          }
          .faq-card.open {
            border-color: #f50963;
            transform: translateY(-2px);
          }
          .faq-trigger {
            width: 100%;
            background: transparent;
            border: none;
            padding: 18px 20px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 14px;
            cursor: pointer;
            text-align: left;
          }
          .faq-count {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            background: linear-gradient(135deg, #f50963, #ff7a18);
            color: #fff;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
          }
          .faq-question {
            font-size: 18px;
            line-height: 1.4;
            color: #0f172a;
            font-weight: 700;
          }
          .faq-icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #d7dbe7;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #0f172a;
            background: #f9f9fb;
            transition: transform 0.2s ease, background 0.2s ease;
          }
          .faq-card.open .faq-icon {
            transform: rotate(45deg);
            background: #fef0f6;
            border-color: #f50963;
            color: #f50963;
          }
          .faq-panel {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.25s ease;
          }
          .faq-card.open .faq-panel {
            max-height: 400px;
          }
          .faq-panel__inner {
            padding: 0 20px 18px 20px;
            color: #4b5563;
            line-height: 1.6;
          }
          .faq-subtitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #f50963;
            margin-bottom: 10px;
          }
          .faq-title {
            font-size: 32px;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: 24px;
          }
          @media (max-width: 768px) {
            .faq-shell {
              padding: 40px 0;
            }
            .faq-title {
              font-size: 26px;
            }
            .faq-trigger {
              grid-template-columns: auto 1fr auto;
              padding: 16px;
            }
          }
        `}</style>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <span className="faq-subtitle">Ask your questions</span>
              <h2 className="faq-title">Frequently Asked Questions</h2>
              {faqs.map((item, idx) => {
                const isOpen = idx === activeIndex;
                const questionId = `${faqIdPrefix}-q-${idx}`;
                const panelId = `${faqIdPrefix}-a-${idx}`;

                return (
                  <div
                    key={item.question}
                    className={`faq-card ${isOpen ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      id={questionId}
                      onClick={() => toggle(idx)}
                    >
                      <span className="faq-count">{idx + 1}</span>
                      <span className="faq-question">{item.question}</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={questionId}
                      className="faq-panel"
                    >
                      <div className="faq-panel__inner">{item.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

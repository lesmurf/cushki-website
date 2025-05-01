import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/FAQPage.css';

const faqData = {
  care: [
    { question: "Can I wash my Cover Set?", answer: "Yes! Remove the covers, zip them closed, and machine wash cold on the gentle cycle. Hang dry only — do not tumble dry to avoid shrinking." },
    { question: "What cleaning solution do you recommend?", answer: "Use a mild detergent with no bleach or fabric softeners. Spot clean stains with gentle soap and water if needed." },
    { question: "How do I wash my Liner Set?", answer: "Linings can be spot cleaned using mild soap and water. They are not machine washable." },
    { question: "How do I clean the foam?", answer: "Foam should not be machine washed. If needed, gently wipe the foam with a damp cloth and let air dry completely before reassembling." },
    { question: "Are Cushki™ products waterproof?", answer: "No, our products are not waterproof. While our fabrics are durable, spills should be cleaned up quickly to prevent damage." },
    { question: "What if pet hair is an issue at my house?", answer: "Our double-brushed microsuede helps minimize the appearance of pet hair. A lint roller or handheld vacuum works great for quick clean-ups!" },
    { question: "Can I take Cushki™ products outside?", answer: "Our products are designed for indoor use. Short outdoor use is okay, but avoid prolonged exposure to sun, moisture, or rough surfaces." }
  ],
  shipping: [
    { question: "When will I receive my order?", answer: "Orders typically ship out within 2-4 business days. Delivery times may vary slightly depending on your location in Singapore." },
    { question: "Is shipping really free?", answer: "Yes! We offer free standard shipping within Singapore on all orders over $100." },
    { question: "Where do you ship?", answer: "Currently, we ship only within Singapore. We do not offer international shipping at this time." },
    { question: "Can I change the shipping address on an order?", answer: "If your order hasn't shipped yet, please contact us immediately at support@cushki.co and we'll do our best to help!" },
    { question: "Can I have a delayed or expedited ship date?", answer: "We are unable to guarantee delayed or expedited shipping dates at this time, but we'll always ship your order as quickly as possible." },
    { question: "How long can I leave Cushki™ products in the box after they arrive?", answer: "We recommend unpacking your Cushki™ within 2 weeks of delivery to allow the foam to fully expand and breathe." }
  ],
  returns: [
    { question: "What's the return policy?", answer: "We accept returns within 30 days of delivery. Items must be in unused, original condition with packaging." },
    { question: "Are fabric sets eligible for return?", answer: "Yes, fabric sets can be returned if they are unused, unwashed, and in original condition within 30 days." },
    { question: "Is there a product guarantee?", answer: "Yes! We stand behind our products with a 1-year limited warranty covering manufacturing defects." },
    { question: "Is there a limit to the warranty?", answer: "Our warranty covers manufacturing defects but does not cover normal wear and tear, misuse, or damage from accidents." }
  ],
  safety: [
    { question: "Are there any rules for playing with Cushki™ products?", answer: "Yes — Cushki™ is made for play, but always supervise young children during use. No jumping from heights or rough horseplay." },
    { question: "What is the recommended age range for Cushki™ products?", answer: "Designed for children aged 1+ years and up. Adult supervision is recommended at all times, especially for younger children." },
    { question: "Is the foam safe?", answer: "Yes! Our foam is CertiPUR-US® certified, meaning it's free from harmful chemicals and made with safe, high-quality materials." },
    { question: "Do Cushki™ products have flame retardants?", answer: "No. Our products meet strict safety standards without the use of chemical flame retardants." }
  ]
};

const categories = [
  { key: "care", label: "Care" },
  { key: "shipping", label: "Shipping" },
  { key: "returns", label: "Returns & Warranty" },
  { key: "safety", label: "Use & Safety" }
];

const FAQPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const defaultTab = params.get('tab') || 'care';

  const [activeCategory, setActiveCategory] = useState(defaultTab);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  useEffect(() => {
    setActiveCategory(defaultTab);
  }, [defaultTab]);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="faq-page">
      <h1>Support & FAQs</h1>
      <p className="faq-subtext">Find the answers to our most common questions below!</p>

      <nav className="faq-categories">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              setOpenQuestionIndex(null);
            }}
            className={activeCategory === key ? 'active' : ''}
          >
            {label}
          </button>
        ))}
      </nav>

      <section className="faq-questions">
        {faqData[activeCategory]?.map(({ question, answer }, index) => (
          <div className="faq-question-item" key={index}>
            <div className="question" onClick={() => toggleQuestion(index)}>
              <span>{question}</span>
              <span className={`arrow ${openQuestionIndex === index ? 'open' : ''}`}>
                {openQuestionIndex === index ? '▲' : '▼'}
              </span>
            </div>
            {openQuestionIndex === index && (
              <div className="answer">{answer}</div>
            )}
          </div>
        ))}

      </section>

      <div className="contact-support">
        Still need help? <a href="/contact">Contact Us</a>
      </div>
    </main>
  );
};

export default FAQPage;

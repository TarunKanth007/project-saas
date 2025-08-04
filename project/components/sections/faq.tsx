"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  { question: "How does the 14-day free trial work?", answer: "Simply sign up and get instant access to all Pro features for 14 full days. No credit card required during the trial period. You can cancel anytime before the trial ends with no charges." },
  { question: "What makes ADmyBRAND AI different from other marketing tools?", answer: "Our platform combines advanced AI-powered analytics with predictive trend forecasting, giving you insights that competitors miss. We focus specifically on agency needs with collaboration tools, white-label options, and automated reporting that saves hours of manual work." },
  { question: "Can I integrate ADmyBRAND with my existing tools?", answer: "Yes! We offer integrations with 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, and more. Our API allows for custom integrations, and our team can help set up complex workflows." },
  { question: "Do you offer training and onboarding support?", answer: "Absolutely. All plans include comprehensive onboarding, video tutorials, and documentation. Pro and Enterprise customers get dedicated training sessions, and Enterprise clients receive personalized training programs." },
  { question: "What kind of support do you provide?", answer: "We offer email support for all plans, priority support for Pro customers, and dedicated phone support for Enterprise clients. Our average response time is under 2 hours, and we maintain a 99.9% uptime SLA." },
  { question: "Can I upgrade or downgrade my plan anytime?", answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle. We'll prorate any charges and provide credits for unused portions." }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState({ name: "", question: "" });

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSubmittedData({
      name: formData.get("name") as string,
      question: formData.get("question") as string,
    });
    setIsModalOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Left with Animation */}
        <motion.div 
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://i.ibb.co/v6cYQqw4/placeholder.jpg" 
            alt="FAQ" 
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* FAQ Right */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers. If you can't find what you're looking for, 
              feel free to reach out to our support team.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-white rounded-lg p-6 text-left hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
              Contact Support
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Support Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Support</h3>
              <p className="text-gray-600 mb-6">
                Submit your question and our team will get back to you within 24 hours.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea 
                  name="question"
                  placeholder="Your Question" 
                  rows={4}
                  required
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Button className="w-full" size="lg" type="submit">Submit</Button>
              </form>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence>
        {isSuccessOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Green Checkmark */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Congratulations!</h3>
              <p className="text-lg text-gray-700 mb-6">
                Thank you, <span className="font-semibold">{submittedData.name}</span>! <br />
                Your question has been submitted: 
              </p>
              <p className="italic text-gray-600 mb-6">"{submittedData.question}"</p>

              {/* Close Button */}
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-lg"
                onClick={() => setIsSuccessOpen(false)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

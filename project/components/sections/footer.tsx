"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, X } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

const footerLinks = {
  Product: [
    { name: "Features", content: "Explore our AI-powered features designed for marketing success." },
    { name: "Pricing", content: "Our pricing plans are flexible to suit agencies of all sizes." },
    { name: "API Documentation", content: "Detailed API documentation for integrating ADmyBRAND with your tools." },
    { name: "Integrations", content: "We support 100+ integrations to simplify your workflow." },
    { name: "Templates", content: "Pre-built campaign templates to save you time." },
    { name: "Analytics", content: "Advanced analytics to track and optimize your campaigns." }
  ],
  Company: [
    { name: "About Us", content: "Learn more about ADmyBRAND and our mission to transform marketing." },
    { name: "Blog", content: "Insights, tips, and industry news from our team." },
    { name: "Careers", content: "Join our team and help shape the future of AI-driven marketing." },
    { name: "Press Kit", content: "Access our brand assets and media resources." },
    { name: "Partners", content: "Collaborate with us to deliver more value to clients." },
    { name: "Investors", content: "Investor relations and business growth updates." }
  ],
  Support: [
    { name: "Help Center", content: "Find answers to frequently asked questions in our help center." },
    { name: "Contact Support", content: "Reach out to our dedicated support team for assistance." },
    { name: "System Status", content: "Check real-time system updates and uptime." },
    { name: "Security", content: "Learn about our commitment to data security." },
    { name: "Training", content: "Access tutorials and training sessions to maximize value." },
    { name: "Community", content: "Join our community of marketers and experts." }
  ],
  Legal: [
    { name: "Privacy Policy", content: "Understand how we protect and handle your data." },
    { name: "Terms of Service", content: "Read our terms and conditions for using ADmyBRAND." },
    { name: "Cookie Policy", content: "Details about how we use cookies and tracking technologies." },
    { name: "GDPR Compliance", content: "Our compliance with GDPR regulations." },
    { name: "Data Processing", content: "Information on how we process user data." },
    { name: "Acceptable Use", content: "Guidelines for using our platform responsibly." }
  ]
};

// Detailed legal contents
const legalContent: Record<string, string> = {
  "Privacy Policy": `
We value your privacy. ADmyBRAND AI Suite collects only the necessary data to provide services, including personal and business information you provide, and usage data for analytics. 
Your data is stored securely, and we do not sell your personal information to third parties. We use encryption, secure servers, and strict access controls to protect your data.
You can request data deletion, correction, or export at any time by contacting support@admybrand.com.
For EU/UK users, we comply with GDPR, and you have rights to access, correct, and erase your data.
`,
  "Terms of Service": `
By using ADmyBRAND AI Suite, you agree to our terms. You may use the platform only for lawful purposes. 
You are responsible for maintaining the confidentiality of your account. We reserve the right to suspend or terminate accounts that violate our policies.
Our services are provided “as is,” without warranties of any kind. We are not liable for indirect or consequential damages.
You may not copy, reverse-engineer, or redistribute our platform without written permission.
These terms are governed by the laws of the United States, and any disputes will be resolved in California courts.
`,
  "Cookie Settings": `
We use cookies to enhance your experience, analyze site traffic, and personalize content. 
Types of cookies we use:
- **Essential cookies**: Required for website functionality.
- **Analytics cookies**: Help us understand user behavior and improve features.
- **Advertising cookies**: Used to deliver personalized ads.
You can manage or disable cookies through your browser settings. For EU users, we request explicit consent for non-essential cookies in compliance with GDPR.
`
};

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ADmyBRAND AI Suite
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Transform your marketing campaigns with AI-powered insights and automation. 
                Built for modern agencies who demand results.
              </p>
            </div>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>hello@admybrand.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => openModal(link.name, link.content)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 ADmyBRAND AI Suite. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <button
                key={item}
                onClick={() => openModal(item, legalContent[item])}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button 
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{modalContent.title}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{modalContent.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

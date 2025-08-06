"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, X } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/YourPage", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/TarunKanth3223", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/movva-tarun-kanth-6b0b62307/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/_tarun_kanth_/", label: "Instagram" }
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

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<{ name: string; content: string } | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent, link: { name: string; content: string }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({ x: rect.left + rect.width / 2, y: rect.top - 10 });
    setHoveredLink(link);
  };

  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ADmyBRAND AI Suite
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Transform your marketing campaigns with AI-powered insights and automation. 
              Built for modern agencies who demand results.
            </p>
            <div className="space-y-3 text-sm text-gray-400 mt-6">
              <div className="flex items-center space-x-3"><Mail className="w-4 h-4" /><span>tarunkanthmovva007@gmail.com</span></div>
              <div className="flex items-center space-x-3"><Phone className="w-4 h-4" /><span>+91 9889886879</span></div>
              <div className="flex items-center space-x-3"><MapPin className="w-4 h-4" /><span>Andhra Pradesh, IND</span></div>
            </div>
            <div className="flex space-x-4 mt-6">
  {socialLinks.map((social, index) => (
    <motion.a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
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

          {/* Links with Hover Popups */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onMouseEnter={(e) => handleMouseEnter(e, link)}
                      onMouseLeave={handleMouseLeave}
                      className="text-gray-400 hover:text-white transition-colors text-sm relative"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Popup */}
      <AnimatePresence>
        {hoveredLink && (
          <motion.div
            className="fixed z-50 bg-white text-gray-900 rounded-lg shadow-lg p-4 max-w-xs text-sm"
            style={{ top: hoverPosition.y, left: hoverPosition.x, transform: "translate(-50%, -100%)" }}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-semibold text-gray-900 mb-2">{hoveredLink.name}</h3>
            <p className="text-gray-700">{hoveredLink.content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

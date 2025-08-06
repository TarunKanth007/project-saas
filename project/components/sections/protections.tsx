"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Globe, AlertTriangle } from "lucide-react";
import { useState } from "react";

const protectionsImage = "https://i.ibb.co/jNSXntG/Chat-GPT-Image-Aug-6-2025-08-27-59-AM.png"; // Replace with your image

const protections = [
  { 
    icon: Shield, 
    title: "Brand Reputation Protection", 
    description: "Continuous monitoring across digital channels to safeguard your brand from impersonation, misuse, and reputational risks.",
    details: "We monitor your brand across social platforms, websites, and forums to detect misuse, impersonation, and malicious campaigns before they impact your business.",
    advantages: [
      "Early detection of brand misuse",
      "Improved customer trust",
      "Reduced reputational damage"
    ],
    useCases: [
      "Monitoring fake social media accounts",
      "Detecting phishing campaigns using your brand",
      "Preventing reputation attacks"
    ]
  },
  { 
    icon: Lock, 
    title: "Data Privacy & Compliance", 
    description: "End-to-end encryption and compliance with GDPR, CCPA, and other global privacy standards to protect sensitive information.",
    details: "We ensure your data is encrypted at rest and in transit while maintaining compliance with major regulations (GDPR, CCPA, ISO 27001).",
    advantages: [
      "Avoid regulatory penalties",
      "Enhanced customer confidence",
      "Secure data storage & transmission"
    ],
    useCases: [
      "Protecting customer PII",
      "Compliance reporting for audits",
      "Safeguarding sensitive campaign data"
    ]
  },
  { 
    icon: Eye, 
    title: "Real-time Threat Detection", 
    description: "AI-driven detection systems to identify and neutralize threats before they impact your business.",
    details: "Our AI models continuously scan for suspicious activity and potential threats, delivering instant alerts and actionable steps.",
    advantages: [
      "Faster incident response",
      "Reduced business downtime",
      "Automated threat neutralization"
    ],
    useCases: [
      "Detecting unauthorized access",
      "Identifying malware attacks",
      "Mitigating DDoS threats"
    ]
  },
  { 
    icon: Database, 
    title: "Secure Infrastructure", 
    description: "Enterprise-grade servers and databases with layered security for maximum data integrity.",
    details: "Our infrastructure uses multi-layered security, including firewalls, intrusion detection, and regular security audits.",
    advantages: [
      "Data redundancy & reliability",
      "Protection from cyberattacks",
      "Continuous infrastructure monitoring"
    ],
    useCases: [
      "Hosting secure applications",
      "Protecting databases from breaches",
      "Maintaining uptime during attacks"
    ]
  },
  { 
    icon: Globe, 
    title: "Global Risk Monitoring", 
    description: "Track and mitigate risks across multiple regions with our advanced global threat intelligence.",
    details: "We provide a global view of risks, enabling proactive mitigation strategies across different geographies.",
    advantages: [
      "Broader threat visibility",
      "Faster regional response",
      "Strategic risk planning"
    ],
    useCases: [
      "Monitoring geopolitical risks",
      "Tracking international regulations",
      "Mitigating cross-border threats"
    ]
  },
  { 
    icon: AlertTriangle, 
    title: "Incident Response", 
    description: "Dedicated response team for quick mitigation and recovery from any security incidents.",
    details: "Our expert response team assists with fast incident analysis, mitigation strategies, and post-incident recovery.",
    advantages: [
      "Minimized impact of incidents",
      "Expert-guided mitigation",
      "Comprehensive recovery planning"
    ],
    useCases: [
      "Responding to security breaches",
      "Forensic investigation",
      "Disaster recovery execution"
    ]
  },
];

export function Protections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* IMAGE */}
        <motion.div 
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={protectionsImage} 
            alt="Protections" 
            className="w-full rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* TEXT + PROTECTIONS */}
        <motion.div 
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Protections for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We go beyond traditional security with proactive solutions designed to protect your data, reputation, and digital presence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {protections.map((protection, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-start space-x-4 bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <protection.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{protection.title}</h3>
                  <p className="text-gray-600 text-sm">{protection.description}</p>
                </div>

                {/* HOVER POPUP */}
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute z-20 top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg p-4 border border-gray-200"
                  >
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Details</h4>
                    <p className="text-gray-700 text-sm mb-3">{protection.details}</p>
                    <h4 className="font-bold text-gray-900 text-md mb-1">Advantages</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm mb-3">
                      {protection.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                    </ul>
                    <h4 className="font-bold text-gray-900 text-md mb-1">Use Cases</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      {protection.useCases.map((use, i) => <li key={i}>{use}</li>)}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


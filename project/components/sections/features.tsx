"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Brain, 
  Shield,
  Smartphone,
  Users
} from "lucide-react";

const featuresImage = "https://i.ibb.co/ynhsJBy2/17039-C41-449-D-4-B05-92-DF-09-ED823-A2-C3-B.jpg";

const features = [
  { 
    icon: Brain, 
    title: "AI-Powered Analytics", 
    description: "Advanced machine learning algorithms analyze your campaign data to provide actionable insights and predictions.",
    popup: "Our AI-powered analytics go beyond basic data crunching — they detect hidden patterns, predict future trends, and optimize decisions automatically. This empowers teams to make smarter choices in less time, boosting efficiency by up to 40%."
  },
  { 
    icon: TrendingUp, 
    title: "Trend Prediction", 
    description: "Stay ahead of the market with our proprietary trend forecasting that identifies opportunities before they peak.",
    popup: "Using predictive algorithms, we forecast market trends with high accuracy. This allows you to act on opportunities early, giving your agency a competitive edge and improving ROI by capitalizing on emerging demands."
  },
  { 
    icon: Target, 
    title: "Smart Targeting", 
    description: "Precision audience targeting using behavioral data and AI to maximize your campaign effectiveness.",
    popup: "Our smart targeting uses deep behavior analysis and segmentation, ensuring your campaigns reach the most responsive audiences. This improves conversion rates and reduces wasted ad spend."
  },
  { 
    icon: Zap, 
    title: "Automation Hub", 
    description: "Streamline repetitive tasks with intelligent automation that learns and adapts to your workflow.",
    popup: "Automation Hub takes over time-consuming tasks like reporting, scheduling, and optimization. It adapts to your processes, saving your team hours weekly and letting them focus on strategy and creativity."
  },
  { 
    icon: BarChart3, 
    title: "Real-time Reporting", 
    description: "Get instant insights with dynamic dashboards that update in real-time across all your campaigns.",
    popup: "Our real-time reporting tools provide live performance dashboards, so you always know how your campaigns are performing. This enables rapid decision-making and prevents costly delays."
  },
  { 
    icon: Shield, 
    title: "Brand Protection", 
    description: "Advanced monitoring and protection tools to safeguard your brand reputation across digital channels.",
    popup: "Brand Protection monitors the web for impersonations, infringements, and harmful content. It helps maintain trust, protect your brand identity, and quickly address potential threats before they escalate."
  },
  { 
    icon: Smartphone, 
    title: "Mobile-First Design", 
    description: "Fully responsive interface optimized for mobile devices, ensuring productivity anywhere, anytime.",
    popup: "Our mobile-first design guarantees seamless access across all devices. Work from anywhere without compromising performance — boosting team productivity on the go."
  },
  { 
    icon: Users, 
    title: "Team Collaboration", 
    description: "Seamless collaboration tools with role-based permissions and real-time communication features.",
    popup: "Collaboration features ensure smooth teamwork, allowing multiple users to work together securely. It reduces miscommunication and accelerates project completion by up to 30%."
  }
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative">
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
            src={featuresImage} 
            alt="Features" 
            className="w-full rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* TEXT + FEATURES */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Agencies
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to scale your agency, optimize campaigns, and deliver exceptional results for your clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-start space-x-4 bg-white rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>

                {/* Hover Popup */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 z-20 bg-white p-4 rounded-xl shadow-lg w-80 text-gray-700 text-sm"
                    >
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title} – Why it matters</h4>
                      <p>{feature.popup}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

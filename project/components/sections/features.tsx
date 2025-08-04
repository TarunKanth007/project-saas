"use client";

import { motion } from "framer-motion";
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

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your campaign data to provide actionable insights and predictions."
  },
  {
    icon: TrendingUp,
    title: "Trend Prediction",
    description: "Stay ahead of the market with our proprietary trend forecasting that identifies opportunities before they peak."
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Precision audience targeting using behavioral data and AI to maximize your campaign effectiveness."
  },
  {
    icon: Zap,
    title: "Automation Hub",
    description: "Streamline repetitive tasks with intelligent automation that learns and adapts to your workflow."
  },
  {
    icon: BarChart3,
    title: "Real-time Reporting",
    description: "Get instant insights with dynamic dashboards that update in real-time across all your campaigns."
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Advanced monitoring and protection tools to safeguard your brand reputation across digital channels."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Fully responsive interface optimized for mobile devices, ensuring productivity anywhere, anytime."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools with role-based permissions and real-time communication features."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Agencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to scale your agency, optimize campaigns, and deliver exceptional results for your clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Join over 10,000+ agencies already using ADmyBRAND AI Suite
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-semibold text-gray-500">Trusted by leading agencies worldwide</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
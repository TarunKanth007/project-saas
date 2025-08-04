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

const featuresImage = "https://i.ibb.co/ynhsJBy2/17039-C41-449-D-4-B05-92-DF-09-ED823-A2-C3-B.jpg";

const features = [
  { icon: Brain, title: "AI-Powered Analytics", description: "Advanced machine learning algorithms analyze your campaign data to provide actionable insights and predictions." },
  { icon: TrendingUp, title: "Trend Prediction", description: "Stay ahead of the market with our proprietary trend forecasting that identifies opportunities before they peak." },
  { icon: Target, title: "Smart Targeting", description: "Precision audience targeting using behavioral data and AI to maximize your campaign effectiveness." },
  { icon: Zap, title: "Automation Hub", description: "Streamline repetitive tasks with intelligent automation that learns and adapts to your workflow." },
  { icon: BarChart3, title: "Real-time Reporting", description: "Get instant insights with dynamic dashboards that update in real-time across all your campaigns." },
  { icon: Shield, title: "Brand Protection", description: "Advanced monitoring and protection tools to safeguard your brand reputation across digital channels." },
  { icon: Smartphone, title: "Mobile-First Design", description: "Fully responsive interface optimized for mobile devices, ensuring productivity anywhere, anytime." },
  { icon: Users, title: "Team Collaboration", description: "Seamless collaboration tools with role-based permissions and real-time communication features." }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4 bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }} // FAQ-style stagger
              >
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Sarah Johnson", company: "Digital Peak Agency", role: "CEO & Founder", image: "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "ADmyBRAND AI Suite transformed our agency completely. We've seen a 300% increase in campaign performance and our clients couldn't be happier. The AI insights are incredibly accurate." },
  { name: "Michael Chen", company: "Growth Marketing Co", role: "Marketing Director", image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "The automation features alone have saved us 20+ hours per week. The ROI we're seeing for our clients has improved dramatically since implementing this platform." },
  { name: "Emily Rodriguez", company: "Brand Boost Digital", role: "Creative Director", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "I was skeptical about AI tools, but ADmyBRAND proved me wrong. The trend predictions have helped us stay ahead of our competitors consistently." },
  { name: "David Thompson", company: "Scale Media Group", role: "Operations Manager", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "The team collaboration features are fantastic. Our remote team can work seamlessly together, and the real-time reporting keeps everyone aligned." },
  { name: "Jessica Miller", company: "Apex Solutions", role: "Product Manager", image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "As a product manager, I need to see data-driven results. ADmyBRAND's detailed analytics and A/B testing capabilities have been a game-changer for our product launches." },
  { name: "Kevin Lee", company: "Innovate Hub", role: "Growth Hacker", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "We're a startup with a small team, so efficiency is everything. The platform's ability to automate our ad campaigns has given us a massive competitive advantage." },
  { name: "Olivia Brown", company: "Creative Minds Collective", role: "Founder", image: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "The content creation tools are a lifesaver. I can generate high-quality ad copy and visuals in minutes, freeing me up to focus on strategy and client relationships." },
  { name: "Daniel Garcia", company: "TechForward Inc.", role: "Lead Developer", image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "I was tasked with integrating an AI marketing solution, and the documentation for ADmyBRAND was incredibly clear. The API access has allowed us to build custom dashboards that fit our workflow perfectly." },
  { name: "Chloe Wilson", company: "Evergreen Ventures", role: "Venture Partner", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "We recommend ADmyBRAND to all our portfolio companies. Its scalability and robust feature set make it a foundational tool for any business looking to grow rapidly and intelligently." },
  { name: "Robert Davies", company: "Future Innovations", role: "Marketing Analyst", image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400", quote: "The predictive analytics are mind-blowing. We've been able to allocate our budget more effectively and forecast campaign outcomes with a level of accuracy we've never had before." }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Left */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading Agencies
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See what our customers are saying about their experience with ADmyBRAND AI Suite.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg"
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-blue-500" />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-300">{testimonials[currentIndex].role}</div>
                <div className="text-blue-300 font-medium">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button variant="outline" size="sm" onClick={goToPrevious} className="rounded-full w-12 h-12 p-0">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="sm" onClick={goToNext} className="rounded-full w-12 h-12 p-0">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Image Right with Animation */}
        <motion.div 
          className="w-full lg:w-1/3 lg:ml-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://i.ibb.co/v6cYQqw4/placeholder.jpg" 
            alt="Testimonials" 
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

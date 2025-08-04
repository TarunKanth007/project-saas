"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  onStartTrial: () => void;
}

export function Hero({ onStartTrial }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const demoLink = "https://player.vimeo.com/video/45830194"; // Vimeo embed link

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                Transform Your Campaigns.{" "}
                <span className="block">Built with AI-Powered Clarity.</span>
              </motion.h1>
              
              {/* Spacer between heading & paragraph */}
              <div className="h-6"></div>

              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                ADmyBRAND AI Suite helps marketing agencies predict trends, optimize performance, 
                and automate tasks with cutting-edge artificial intelligence.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Button 
                variant="cta" 
                size="xl" 
                onClick={onStartTrial}
                className="group"
              >
                Start Your Free 14-Day Trial
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="group"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Setup in 5 minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mock with Video Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div 
              className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Video Preview Instead of Gradient */}
              <div className="rounded-lg overflow-hidden h-64 relative">
                <iframe
                  src={`${demoLink}?autoplay=1&muted=1&loop=1&controls=0&background=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                />
                {/* Overlay Play Button */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="mt-4 space-y-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">ADmyBRAND AI Suite</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inline Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4">
            <button
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`${demoLink}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

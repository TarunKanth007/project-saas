"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calculator as CalculatorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Calculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [budget, setBudget] = useState(5000);
  const [teamSize, setTeamSize] = useState(5);
  const [duration, setDuration] = useState("3");
  const [features, setFeatures] = useState({
    analytics: true,
    automation: true,
    integrations: false,
    reporting: false,
  });

  const toggleFeature = (key: string) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const calculateCost = () => {
    let base = teamSize * 20 + parseInt(duration) * 50 + Object.values(features).filter(Boolean).length * 100;
    base = Math.round(base);

    // Cap monthly cost so total doesn't exceed budget
    const maxMonthly = Math.floor(budget / parseInt(duration));
    return Math.min(base, maxMonthly);
  };

  const selectedFeatures = Object.keys(features).filter((f) => features[f as keyof typeof features]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <CalculatorIcon className="w-6 h-6" />
      </motion.button>

      {/* Calculator Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Campaign Cost Calculator
              </h2>

              {/* Budget Slider */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Total Budget: ${budget}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Team Size */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Team Size: {teamSize}
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Duration Dropdown */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Campaign Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="1">1 Month</option>
                  <option value="3">3 Months</option>
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                </select>
              </div>

              {/* Features Selection */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Features
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(features).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => toggleFeature(key)}
                      />
                      <span className="capitalize">{key}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Calculated Cost */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-center mb-4">
                <p className="text-lg">Estimated Monthly Cost:</p>
                <p className="text-3xl font-bold">${calculateCost()}</p>
                <p className="text-sm mt-1 opacity-80">Total: ${calculateCost() * parseInt(duration)} (capped to budget)</p>
              </div>

              {/* Submit */}
              <Button
                onClick={() => setShowEstimate(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              >
                Get a Detailed Estimate
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Estimate Popup */}
      <AnimatePresence>
        {showEstimate && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowEstimate(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Detailed Campaign Estimate
              </h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Total Budget:</strong> ${budget}</p>
                <p><strong>Team Size:</strong> {teamSize} members</p>
                <p><strong>Duration:</strong> {duration} Month(s)</p>
                <p><strong>Selected Features:</strong> {selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "None"}</p>
                <div className="bg-gray-100 p-3 rounded-lg mt-4">
                  <p className="text-lg font-semibold">Monthly Cost: ${calculateCost()}</p>
                  <p className="text-sm text-gray-500">
                    Total for {duration} month(s): ${calculateCost() * parseInt(duration)} (within budget)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

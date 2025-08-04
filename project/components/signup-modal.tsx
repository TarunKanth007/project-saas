"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, X } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "trial" | "sales";
}

export function SignupModal({ isOpen, onClose, mode = "trial" }: SignupModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ firstName: "", lastName: "", email: "", company: "", phone: "" });
      onClose();
    }, 3000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div
        drag
        dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
        dragElastic={0.2}
        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative cursor-move"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {mode === "sales" ? "Thank You!" : "Welcome Aboard!"}
            </h3>
            <p className="text-gray-600 mb-4">
              {mode === "sales"
                ? "Our sales team will reach out to you shortly."
                : "Your free trial has been activated. Check your email for login details."}
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                🎉{" "}
                {mode === "sales"
                  ? "We’ll customize a solution for your agency."
                  : "You now have access to all Pro features for 14 days!"}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {mode === "sales" ? "Contact Our Sales Team" : "Start Your Free Trial"}
              </h3>
              <p className="text-gray-600">
                {mode === "sales"
                  ? "Tell us about your agency, and our team will reach out to discuss enterprise solutions."
                  : "Get full access to ADmyBRAND AI Suite for 14 days. No credit card required."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Agency Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full" loading={isLoading}>
                {mode === "sales" ? "Submit Inquiry" : "Start Free Trial"}
              </Button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  {mode === "sales"
                    ? "Our team will contact you soon after submission."
                    : "By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required during trial."}
                </p>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </Modal>
  );
}

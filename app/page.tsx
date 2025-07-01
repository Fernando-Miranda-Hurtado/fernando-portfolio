import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white shadow-md">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fernando Miranda
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl mb-6 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Business Analyst & Sales Strategist
        </motion.h2>
        <button className="text-lg px-6 py-3 bg-blue-600 text-white rounded">
      Download Resume
        </button>
      </section>
    </div>
  );
}

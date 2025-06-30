import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
        <Button className="text-lg px-6 py-3">Download Resume</Button>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          I am a trilingual business analyst and sales manager based in Vancouver, also working remotely from Bogotá and Mexico City.
          Fluent in Spanish, Portuguese, and English. I have experience leading teams across multiple time zones,
          participating in global trade fairs in China, and driving data-informed decisions across LATAM and North America.
          Skilled in Salesforce, SAP, Power BI, EDI integrations, Python, SQL, and digital transformation. Currently focused on remote job opportunities.
        </p>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16 px-4 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Experience</h3>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">Joy Metals</h4>
                <p className="text-gray-600">Sales Manager | LATAM & Canada</p>
                <p>Opened the Latin American market, driving a 300% sales increase in under 12 months and earning recognition as the top global sales performer in 2024. Led multi-regional teams and crafted B2B strategies tailored to diverse customer profiles.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">ACT Logix</h4>
                <p className="text-gray-600">Supply Chain Analyst | BMW Project</p>
                <p>Supported the BMW SRD project through data analysis and operational streamlining. Recognized with the “Most Improved BMW SRD Worldwide” award for performance and innovation in logistics execution.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">Johnson & Johnson</h4>
                <p className="text-gray-600">Platform Owner | SAP, Salesforce</p>
                <p>Implemented SAP FSCM module in Finance, reducing overdue accounts by 40%. Led EDI integration for the Consumer Division, streamlining communication across 20+ major clients. Contributed to the migration of operations for 9 countries to Bogotá without disruption, achieving 25% operational efficiency gains. Recognized with multiple awards including EDI Implementation, Data Discipline LATAM, and Adaptation to the Mexican Market.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">ITOS</h4>
                <p className="text-gray-600">Payroll & Key Accounts Manager</p>
                <p>Managed end-to-end payroll for clients such as General Electric, Pandora, and Subway. Expanded portfolio from Colombia and Peru to all of Latin America, managing over 10,000 employee records monthly and maintaining 99.9% payroll accuracy.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg">Tagua Logistics</h4>
                <p className="text-gray-600">International Trade Analyst</p>
                <p>Oversaw import and export operations across LATAM. Acted as Subject Matter Expert (SME) for the company's quality certification process, supporting compliance with international trade regulations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

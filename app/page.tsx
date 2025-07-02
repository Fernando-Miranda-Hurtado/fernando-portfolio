'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Dark Mode Toggle */}
        <div className="text-right">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 border rounded"
          >
            {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
          </button>
        </div>

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">Fernando Miranda</h1>
          <p className="text-xl mt-2">Business Analyst & Sales Strategist</p>
          <p className="text-md mt-1 italic">Analista de negocios y estratega comercial</p>
          <a
            href="/fernando_resume.pdf"
            download
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Resume / Descargar CV
          </a>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me / Sobre mí</h2>
          <p>
            I am a trilingual professional based in Vancouver, experienced in business analysis,
            sales management, and strategic planning across LATAM and North America.
          </p>
          <p className="mt-2">
            Soy un profesional trilingüe con sede en Vancouver, con experiencia en análisis de
            negocios, gestión comercial y planificación estratégica en América Latina y América del
            Norte.
          </p>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Experience / Experiencia</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Johnson & Johnson</strong> – Implemented Salesforce and SAP integration, led
              cross-functional teams, achieved 98% OTIF delivery.
            </li>
            <li>
              <strong>Joy Metals</strong> – Drove B2B sales growth, managed LATAM clients, led
              automation of reports.
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Projects / Proyectos</h2>
          <p>Power BI dashboards, Excel automation, and client CRM improvements.</p>
          <p>Dashboards en Power BI, automatización en Excel y mejoras en CRM para clientes.</p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact / Contacto</h2>
          <p>
            📧 Email: <a href="mailto:fernando@email.com">fernando@email.com</a>
          </p>
          <p>
            🔗 LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/fernando-miranda"
              target="_blank"
              className="text-blue-600 underline"
            >
              linkedin.com/in/fernando-miranda
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}

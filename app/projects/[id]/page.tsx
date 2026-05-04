import React from 'react';
import Link from 'next/link';

// Di Next.js 15, params adalah sebuah Promise, jadi kita harus menggunakan async/await
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  // Menunggu data params tersedia
  const { id } = await params;

  // Database data proyek Anda
  const projects: any = {
    "finalproject": {
      title: "IoT Gas Leak Detection",
      period: "Dec 2024 - Jul 2025",
      role: "IoT Engineer & Fullstack Developer",
      overview: "A complete IoT system delivered for gas leak detection, utilizing an ESP32 microcontroller and an MQ-6 sensor for real-time data acquisition. Precise gas concentration readings were achieved by implementing sophisticated data calibration through regression modeling.",
      tech: ['NODE-RED', 'MQTT', 'ESP-32', 'TELEGRAM-BOT', 'MySQL', 'Laravel'],
      images: ["/images/project/final-project/fp1.jpg", "/images/project/final-project/fp2.jpg"],
      features: [
        "Real-time gas concentration monitoring via Laravel dashboard.",
        "Automated Telegram Bot alerts for immediate leak notifications.",
        "Data calibration with polynomial regression for high-precision sensing.",
        "Historical data logging for safety audit and analysis."
      ]
    },
    "simonairproject": {
      title: "SIMONAIR 3.0",
      period: "Jan 2024 - Jul 2024",
      role: "IoT Engineer & Front End Developer",
      overview: "An advanced monitoring tool measuring pH, temperature, turbidity, and ammonia, tailored for freshwater fish species like Red Tilapia, Silver Arowana, and Discus. This version integrates IoT technology with a buzzer alarm for real-time alerts.",
      tech: ['Tailwind CSS', 'ESP-32', 'Arduino IDE', 'MySQL', 'Sensors Integration'],
      images: ["/images/project/simonair-project/s1.jpg", "/images/project/simonair-project/s2.jpg"],
      features: [
        "Multi-parameter water quality sensing (pH, Temp, Ammonia).",
        "Reduction of manual monitoring time by up to 60%.",
        "Integration with buzzer and keypad for manual alert control.",
        "Responsive UI/UX for production transparency."
      ]
    },
    "curugproject": {
      title: "Welcome to Curug Cikoneng",
      period: "Aug 2023 - Dec 2023",
      role: "Embedded System Engineer",
      overview: "An automatic notification system aimed at enhancing customer service efficiency at Curug Cikoneng. The tool provides notifications through lights and sound when customers arrive, signaling cashiers to promptly serve them.",
      tech: ['ARDUINO IDE', 'ESP-32', 'Blynk', 'Motion Sensors', 'QR Code Integration'],
      images: ["/images/project/curug-project/c1.jpg", "/images/project/curug-project/c2.jpg"],
      features: [
        "Motion-based automatic lighting and voice recording alerts.",
        "Integration with 'Foodie Fare' menu website via QR code.",
        "Blynk-based monitoring for real-time notification status.",
        "Optimized customer-to-cashier communication flow."
      ]
    }
  };

  // Mencari data berdasarkan ID yang ada di URL
  const project = projects[id];

  // Tampilan jika ID tidak ditemukan dalam objek projects
  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-slate-50 font-sans">
        <h1 className="text-2xl font-black uppercase italic text-slate-900">Project Not Found</h1>
        <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest">ID: {id}</p>
        <Link href="/" className="text-blue-600 font-bold mt-6 flex items-center gap-2 hover:underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pb-20">
      {/* Navigation Detail */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-all">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 max-w-5xl mx-auto px-6">
        {/* Header Detail */}
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">{project.period}</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none">
            {project.title}
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest mt-4 text-sm">{project.role}</p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {project.images.map((img: string, idx: number) => (
            <div key={idx} className="h-[400px] bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
              <img 
                src={img} 
                className="w-full h-full object-cover hover:scale-105 transition duration-700" 
                alt={`${project.title} Preview`} 
              />
            </div>
          ))}
        </div>

        {/* Description & Tech Stack */}
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-12 text-justify">
            <section>
              <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 block"></span> Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 block"></span> Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex gap-4 text-slate-600 text-sm md:text-base">
                    <span className="text-blue-600 font-black">0{idx + 1}.</span> {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 text-[10px] font-bold rounded-lg uppercase italic tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-3xl text-white">
              <h3 className="font-black uppercase text-xs tracking-widest mb-4">Project Discussion</h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-6">Interested in the technical implementation? Let's discuss it further.</p>
              <Link href="/#contact" className="block text-center py-3 bg-white text-blue-600 text-[10px] font-black uppercase rounded-xl hover:bg-slate-100 transition">
                Contact Me
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
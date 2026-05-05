import React from 'react';
import Link from 'next/link';
export default function PortfolioPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 scroll-smooth">


      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold text-xl tracking-tighter text-blue-600 uppercase">
            Ghani Ramadhani <span className="text-black text-md ml-2 font-black">| PORTFOLIO</span>
          </span>
          <div className="hidden md:flex gap-8 text-xs font-bold text-slate-900 uppercase tracking-widest">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- HERO / PROFILE SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-64 md:w-64 md:h-64 relative flex-shrink">
            <div className="w-full h-full bg-blue-100 rounded-3xl rotate-3 absolute inset-0 -z-10 border-2 border-blue-200"></div>
            <div className="w-full h-full bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-xl">
              <img 
                src="/images/profile/profile.JPG" 
                alt="Ghani Trie Aqeela Ramadhani" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase leading-tight">
              Ghani Trie Aqeela Ramadhani
            </h1>
            <p className="text-lg font-bold text-slate-500 uppercase tracking-widest mt-2">
              <span className="text-blue-600 italic">IoT & IT Enthusiast |</span> <br className="md:hidden" /> Computer Engineering Graduate
            </p>
            <div className="mt-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-sm font-black text-blue-600 uppercase mb-2">Professional Summary</h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                Computer Engineering graduate from IPB University with a 3.76 GPA, currently excelling as an <strong>
                  IoT Developer Intern at PT Mitra Integrasi Informatika.</strong> Proficient in the <strong>PTC ThingWorx ecosystem,</strong>  where I actively engineer server-side Services using JavaScript, design interactive Mashups, and manage database integrity with 
                  PostgreSQL to enhance industrial monitoring. Previously, at <strong>PT IoT Kreasi Indonesia,</strong> I demonstrated technical 
                  precision by conducting quality assurance on 1,000+ sensor units and optimizing LoRa gateway protocols.
                   I am skilled at bridging the gap between client operational needs and technical execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKING EXPERIENCE SECTION --- */}
      <section id="experience" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Working Experience</h2>
          <div className="space-y-20">
            
            {/* Experience 1: MII */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 overflow-hidden">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Dashboard Preview 1</span>
                </div>
                <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 overflow-hidden">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Mashup Logic</span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-blue-600 font-bold text-xs">DEC 2025 - PRESENT</span>
                <h3 className="text-2xl font-black mt-1 uppercase">PT Mitra Integrasi Informatika</h3>
                <p className="font-bold text-slate-500 mb-6 uppercase text-sm tracking-widest">IoT Developer Intern</p>
                <ul className="text-sm text-slate-600 space-y-3 list-disc ml-5 text-justify">
                  <li>Engineered Services, Mashups, and logical Functions to ensure seamless user interaction and data flow.</li>
                  <li>Designed and executed SQL queries in PostgreSQL for complex data aggregation, enabling historical data visualization.</li>
                  <li>Developed server-side logic using JavaScript (ThingWorx Services).</li>
                  <li>Collaborated with mentors to translate business needs into technical solutions during client meetings.</li>
                </ul>
              </div>
            </div>

            {/* Experience 2: IKI */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">AUG 2024 - DEC 2024</span>
                <h3 className="text-2xl font-black mt-1 uppercase">PT IoT Kreasi Indonesia</h3>
                <p className="font-bold text-slate-500 mb-6 uppercase text-sm tracking-widest">R&D Intern</p>
                <ul className="text-sm text-slate-600 space-y-3 list-disc ml-5 text-justify">
                  <li>Executed quality assurance testing on 1,000+ Cyble Non-Magnetic sensor units, identifying critical defects.</li>
                  <li>Configured and optimized LoRa Kerlink Gateway protocols for industrial IoT applications.</li>
                  <li>Designed and prototyped an end-to-end gas leak detection system using MQ-6 sensors and ESP32.</li>
                  <li>Documented technical specifications and troubleshooting guides for IoT integration.</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-lg">
                  <img src="/images/work/iki/iki1.JPG" alt="QA Testing" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden border-2 border-white shadow-lg">
                  <img src="/images/work/iki/iki2.JPG" alt="Team IoT Kreasi" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (GRID CARD STYLE) --- */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-16 uppercase tracking-tighter  w-fit">Project Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">

          {/* FINAL PROJECT */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[500px]">
            <div className="h-56 w-full overflow-hidden relative flex-shrink">
              <img src="/images/project/final-project/fp1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Dec 2024 - Jul 2025</div>
            </div>
            <div className="p-8 flex flex-col flex-grow text-justify">
              <h3 className="text-xl font-black uppercase leading-tight min-h-[3rem]">IoT Gas Leak Detection</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 mb-4 line-clamp-3">Development of IoT-Based Gas Leak Detection with MQ-6 Sensor and Telegram Notification</p>
              <div className="mt-auto space-y-6 text-left">
                <div className="flex flex-wrap gap-2">
                  {['NODE-RED', 'MQTT', 'ESP-32', 'MySQL'].map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold rounded border border-slate-100 uppercase">{t}</span>
                  ))}
                </div>
                <Link href="/projects/finalproject">                  
                <button className="w-full py-3 bg-slate-900 text-white text-xs font-black uppercase rounded-xl hover:bg-blue-600 transition shadow-lg shadow-slate-100">
                  View Project Details
               </button>
                </Link>        
                </div>
            </div>
          </div>

          {/* SIMONAIR */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[500px]">
            <div className="h-56 w-full overflow-hidden relative flex-shrink-0">
              <img src="/images/project/simonair-project/s1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Jan 2024 - Jul 2024</div>
            </div>
            <div className="p-8 flex flex-col flex-grow text-justify">
              <h3 className="text-xl font-black uppercase leading-tight min-h-[3rem]">SIMONAIR 3.0 – Water Quality</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 mb-4 line-clamp-3">IoT Based Multi-monitoring water quality for Red Tilapia, Silver Arowana, and Discus</p>
              <div className="mt-auto space-y-6 text-left">
                <div className="flex flex-wrap gap-2">
                  {['Tailwind', 'ESP-32', 'Arduino IDE', 'MySQL'].map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold rounded border border-slate-100 uppercase">{t}</span>
                  ))}
                </div>
                <Link href="/projects/simonairproject">
                <button className="w-full py-3 bg-slate-900 text-white text-xs font-black uppercase rounded-xl hover:bg-blue-600 transition shadow-lg shadow-slate-100">View Details</button>
              </Link>
              </div>
            </div>
          </div>

          {/* CURUG PROJECT */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[500px]">
            <div className="h-56 w-full overflow-hidden relative flex-shrink-0">
              <img src="/images/project/curug-project/c1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Aug 2023 - Dec 2023</div>
            </div>
            <div className="p-8 flex flex-col flex-grow text-justify">
              <h3 className="text-xl font-black uppercase leading-tight min-h-[3rem]">Automatic Lighting & Voice</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 mb-4 line-clamp-3">Voice Recording and Motion-Based Automatic Lighting for Curug Cikoneng</p>
              <div className="mt-auto space-y-6 text-left">
                <div className="flex flex-wrap gap-2">
                  {['ARDUINO IDE', 'ESP-32', 'Blynk'].map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold rounded border border-slate-100 uppercase">{t}</span>
                  ))}
                </div>
                <Link href="/projects/curugproject">
                <button className="w-full py-3 bg-slate-900 text-white text-xs font-black uppercase rounded-xl hover:bg-blue-600 transition shadow-lg shadow-slate-100">View Details</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

        {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter text-center">Skills Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* IoT & Industrial Automation */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all group flex flex-col items-center text-center">
              {/* Kontainer Ikon - justify-center & items-center untuk memusatkan SVG */}
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-blue-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                </svg>
              </div>
              <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest">IoT & Industrial</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['PTC ThingWorx', 'ESP32', 'Node-RED', 'MQTT', 'Arduino IDE'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-900/50 text-[9px] text-slate-400 border border-slate-700 rounded font-bold uppercase italic tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web & Backend Development */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-blue-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest">Web Development</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Laravel', 'JavaScript', 'Node.js', 'PostgreSQL', 'MySQL', 'PHP', 'RESTful API','HTML CSS','Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-900/50 text-[9px] text-slate-400 border border-slate-700 rounded font-bold uppercase italic tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design & Tools */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors text-blue-400 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.5 1.5" />
                  <path d="M14 11l7-7" />
                </svg>
              </div>
              <h3 className="text-white font-black uppercase text-xs mb-4 tracking-widest">Design</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Figma', 'Canva', 'MS Office'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-slate-900/50 text-[9px] text-slate-400 border border-slate-700 rounded font-bold uppercase italic tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

            {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-white px-6 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Contact Me</h2>
          <p className="text-slate-500 mb-12 font-medium">
            I'm Always Available for any Open Collaboration or Discussion in IoT Projects, Development, or any other Technologies.
            <br /> Feel Free to contact Me
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Email Card */}
            <a href="mailto:ghanitrie1211@gmail.com" className="shadow-md group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-600 transition-all duration-300">
              <div className="flex justify-center mb-4 text-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="uppercase font-black text-xs text-slate-900 group-hover:text-white transition-colors">Google Mail</div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/ghani-ramadhani/" target="_blank" className="shadow-md group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-700 transition-all duration-300">
              <div className="flex justify-center mb-4 text-blue-700 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="uppercase font-black text-xs text-slate-900 group-hover:text-white transition-colors">LinkedIn</div>
            </a>

            {/* WhatsApp Card */}
            <a href="https://wa.me/6285179843562" target="_blank" className="shadow-md group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-green-600 transition-all duration-300">
              <div className="flex justify-center mb-4 text-green-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.883 1.027 4.009 1.57 6.173 1.57h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="uppercase font-black text-xs text-slate-900 group-hover:text-white transition-colors">WhatsApp</div>
            </a>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 bg-slate-900 text-white border-t border-slate-800 text-center">
        <p className="px-48 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
          © 2026 Ghani Ramadhani Portofolio
        </p>
      </footer>
      
    </div>
  );
}
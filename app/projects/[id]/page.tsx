import React from 'react';
import Link from 'next/link';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const projects: any = {
    "finalproject": {
      title: "Development of IoT-Based Gas Leak Detection Tool with MQ-6 Sensor and Telegram Notification for Security",
      period: "Dec 2024 - Jul 2025",
      duration: "7 Months",
      role: "IoT Engineer & Fullstack Developer",
      overview: "A complete IoT system delivered for gas leak detection, utilizing an ESP32 microcontroller and an MQ-6 sensor for real-time data acquisition. Precise gas concentration readings were achieved by implementing sophisticated data calibration through regression modeling. Furthermore, a responsive Laravel-based web dashboard was established, paired with a crucial Telegram notification system to ensure immediate user alerts.",
      objective: [
        "Designed an IoT prototype for LPG leak detection in residential and commercial settings using MQ-6 sensors.",
        "Optimized sensor sensitivity and detection range through precise Automeris.io calibration.",
        "Evaluated system reliability in delivering early alerts via web-based monitoring and hardware-integrated buzzers."
      ],
      hardware: ['ESP32 Microcontroller', 'MQ-6 Gas Sensor', 'LM2596 Step-Down', 'Buzzer', 'OLED 1.3" I2C','ADS1115','DHT22 Humidity Sensor','Breadboard & PCB'],
      summary: "Successfully developed an IoT gas leak detection system achieving 93.04% measurement accuracy with an optimal detection range of 60 cm. The system delivers reliable real-time alerts via buzzer, Telegram, and a Laravel-based dashboard within a 10-15 second response time once gas concentrations exceed the 1000 ppm threshold",
      recommendation: "While the system meets its design goals, performance can be enhanced by addressing the 10-15 second notification latency and sensor sensitivity to environmental factors like temperature and humidity. Future improvements include integrating professional-grade sensors (e.g., TGS series) for higher precision, implementing a battery-based power source for portability, and deploying the monitoring dashboard to a public hosting server for broader, global accessibility.",
      tech: ['NODE-RED', 'MQTT', 'ESP-32', 'TELEGRAM-BOT', 'MySQL', 'Laravel', 'Internet Of Things (IoT)','Sensor MQ-6','Dashboard Monitoring','Gas Leak Detection'],
      landscapeImage: "/images/project/final-project/fp3.png",
      images: ["/images/project/final-project/fp1.jpg", "/images/project/final-project/fp2.jpg"],
      pdfLink: "/documents/gas-leak-report.pdf", 
      features: [
        "Real-time gas concentration monitoring via Laravel dashboard.",
        "Automated Telegram Bot alerts for immediate leak notifications.",
        "Data calibration with polynomial regression for high-precision sensing.",
        "Historical data logging for safety audit and analysis."
      ],
      challenges: "Maintaining a stable voltage supply was a significant hurdle, as direct power fluctuations caused the MQ-6 sensor to produce highly unstable and inaccurate readings.",
      solutions: "Integrated a step-down voltage regulator to ensure a consistent and stable power supply, significantly reducing sensor noise and improving reading accuracy."
    },

    
        "simonairproject": {
      title: "MULTI-MONITORING WATER QUALITY FOR FRESHWATER FISH (RED TILAPIA, SILVER AROWANA, AND DISCUS) BASED ON IoT IN SIMONAIR 3.0",
      period: "Jan 2024 – Jun 2024",
      duration: "6 Months",
      role: "IoT Engineer & Front-End Developer",
      overview: "Indonesia's freshwater aquaculture potential reaches 2.23 million hectares, yet underutilization persists due to water quality issues. Essential for fish farming, water quality parameters like temperature, pH, ammonia, and nitrate influence fish productivity and survival. Popular species include Red Tilapia, Silver Arowana, and Discus. To address water quality, our research developed an advanced monitoring tool measuring pH, temperature, turbidity, and ammonia, tailored for these species. This new version, SIMONAIR 3.0, surpasses previous models by integrating IoT technology with a keypad and buzzer alarm for real-time alerts on poor water conditions.",
      objective: [
                "Strategic Water Quality Identification: Developed a specialized strategy to identify and maintain optimal water quality standards for three distinct fish species.",
        "Remote Monitoring Implementation: Designed and deployed a real-time monitoring system to enable remote oversight of water parameters, eliminating the need for physical on-site presence.",
        "System Reliability Evaluation: Conducted a comprehensive evaluation of transducer alarm efficiency to determine its reliability as an automated alert solution within the water monitoring framework.",
      ],
      hardware: ['ESP32 Microcontroller','Ph Sensor', 'Turbidity Sensor', 'Temperature Sensor','Buzzer','ADS1115', 'LCD I2C 20x4','Keypad'],
      summary: "SIMONAIR 3.0 is an IoT-based water quality monitoring system designed for freshwater aquaculture, specifically for Red Tilapia, Silver Arowana, and Discus fish. Developed through a Research and Development (R&D) approach, the tool provides continuous data on critical parameters like pH, turbidity, temperature, and ammonia levels. By facilitating remote oversight and automated alerts, the project aims to improve productivity while reducing the time and cost associated with manual water management.",
      recommendation: "It is highly recommended to perform regular sensor calibration using standard buffer solutions and implement a dual-analysis approach using KNN and Logistic Regression to ensure maximum data precision and reliable automated alerts for each fish species",
      tech: ['HTTP', 'ESP-32', 'PH Sensor', 'Temperature Sensor', 'Laravel', 'Internet Of Things (IoT)',,'Dashboard Monitoring','Water Quality Monitoring'],
      landscapeImage: "/images/project/simonair-project/s3.png",
      images: ["/images/project/simonair-project/s1.jpg", "/images/project/simonair-project/s2.jpg"],
      pdfLink: "https://www.instagram.com/reels/C8tClvAxwRD/", 
      features: [
        "The system utilizes an ESP32 microcontroller to aggregate data from pH (PH-4502C), water temperature (DS18B20), turbidity (DFRobot), and ammonia (MQ-137) sensors",
        "Leveraging the ESP32’s built-in Wi-Fi, the system enables real-time data transmission, allowing users to monitor water parameters remotely without being physically present at the site.",
        "An integrated transducer alarm (buzzer) serves as a local notification system, triggering an immediate sound alert if any water parameter falls outside the safety threshold.",
      ],
      challenges:"Involved the inherent inconsistency of raw analog pH sensor signals and the need for a dynamic system that could accommodate various fish species with different environmental requirements.",
      solutions: "Calibrated the pH sensor using standardized buffer solutions to map analog data points, then implemented a linear regression formula to ensure accurate real-time pH readings. Additionally, integrated a button-based interface allowing users to select specific fish profiles, automatically adjusting the system's monitoring thresholds to suit the selected species."
    },


      "curugproject": {
      title: "'Welcome to Curug Cikoneng' Voice Recording and Motion-Based Automatic Lighting",
      period: "Aug 2023 – Dec 2023",
      duration: "6 Months",
      role: "Embbeded Engineer",
      overview: "The primary focus is on building a solution that can provide quick and accurate information to cashiers without disrupting customers. The tool generated from this project works by providing notifications through lights and sound when customers arrive and sit in the food court area. Subsequently, the device signals the cashier to promptly serve the customer. Additionally, the project also provides a website called Foodie Fare, which contains food and beverage menus accessible to customers by scanning the QR code available at each table.",
      objective: [
                "To create a warm welcoming atmosphere through automated audio messages and provide a seamless way to call for assistance via notification buttons.",
        "To replace manual switches with motion sensors to control lighting effectively only when the area is occupied, supporting environmental sustainability",
        "To provide a monitoring system via the Blynk app and website to manage arrival data and customer order activities quickly and accurately.",
      ],
      hardware: ['ESP32 Microcontroller','Blynk','PIR Sensor','DF-Player Mini','Trafo Step-Down','Relay Optocupler','SD Card','LED Strip','Speaker'],
      summary: "This project developed an automated notification and lighting system based on the ESP32 for the food court area at the Curug Cikoneng tourist destination. By utilizing PIR sensors calibrated to a sensitivity range of ±2.3 meters, the system welcomes visitors through automated audio playbacks and instant table lighting upon arrival. Beyond enhancing the interactive experience, integration with the FoodieFare website allows administrators to monitor order history and visitor traffic through digital activity logs.",
      recommendation: "t is recommended to upgrade to more advanced motion sensors for higher precision and to expand the website's functionality by adding an online menu ordering system to further streamline the customer transaction process.",
      tech: ['ESP-32','Blynk','Motion Sensor'],
      landscapeImage: "/images/project/curug-project/c1.jpg",
      images: ["/images/project/curug-project/c2.jpg", "/images/project/curug-project/c3.jpg"],
      pdfLink: "https://pdfs.semanticscholar.org/18de/a3a572d79fef628148a690b9ba08b2ed7fe3.pdf", 
      features: [
        "The device is equipped with a DFPlayer Mini for automated greeting playbacks and a push button that triggers LED notifications at the cashier's station, allowing staff to respond to customers immediately",
        "The implementation features an ESP32 microcontroller as a Wi-Fi module, connecting the visitor's table unit to the service area while integrating with the Blynk application for real-time activity monitoring.",
        "The system utilizes PIR sensors as motion gestures to activate lights and audio automatically, replacing manual switches to improve efficiency and user hygiene.",
      ],
      challenges:"The main objective was to establish a reliable communication link between two ESP32 nodes where only one device had direct access to an external Wi-Fi network, requiring a bridge for the second device to transmit data.",
      solutions: "Configured the primary ESP32 to operate in dual-mode (Access Point + Station), allowing it to maintain a Wi-Fi connection while simultaneously hosting a local hotspot. This enabled the secondary ESP32 to connect to the primary node's hotspot, creating a seamless data bridge for real-time communication between both devices."
    },
  };

  const project = projects[id];

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
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-all">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:w-2/3 space-y-20">
            {/* Minimalist Landscape Image */}
            <div className="w-full h-[250px] md:h-[350px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 relative group">
                <img 
                    src={project.landscapeImage} 
                    className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-105 transition duration-700" 
                    alt={`${project.title} Landscape`} 
                />
            </div>

            {/* Title & Overview */}
            <section className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">Project Overview</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg text-justify">{project.overview}</p>
            </section>

            {/* Gallery Mini Grid */}
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((img: string, idx: number) => (
                <div key={idx} className="h-48 md:h-64 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                  <img src={img} className="w-full h-full object-cover" alt="Detail View" />
                </div>
              ))}
            </div>

            {/* Project Objective Section */}
            <section className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">Project Objectives</h2>
              </div>
              
              <ul className="space-y-4">
                {project.objective.map((obj: string, idx: number) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    {/* Bullet Icon Khusus Objective */}
                    <div className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-150 transition-transform flex-shrink-0"></div>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify italic font-medium">
                      {obj}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hardware List */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">Hardware Infrastructure</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.hardware.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation Details */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">System Implementation</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-600 leading-snug">
                    <span className="font-black text-blue-600">0{idx + 1}</span> {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenge & Solution */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-16">
               <div className="space-y-4">
                  <div className="flex items-center gap-2 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                    <h3 className="text-[10px] font-black uppercase tracking-widest">The Challenge</h3>
                  </div>
                  <p className="text-sm text-slate-500 italic leading-relaxed">{project.challenges}</p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                    <h3 className="text-[10px] font-black uppercase tracking-widest">The Solution</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.solutions}</p>
               </div>
            </section>

            {/* Summary & Recommendation */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  <h2 className="text-xs font-black uppercase tracking-[0.3em]">Project Summary</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed text-justify">{project.summary}</p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9.01 19 3.27-3.27a2.12 2.12 0 0 1 3 0L18.55 19"/></svg>
                  <h2 className="text-xs font-black uppercase tracking-[0.3em]">Recommendation</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed text-justify">{project.recommendation}</p>
              </section>
            </div>

          {/* RIGHT CONTENT: Sticky Sidebar */}
          <aside className="lg:w-1/3 w-full lg:sticky lg:top-32 space-y-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Duration</h4>
                  <p className="text-[11px] font-bold">{project.duration}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Role</h4>
                  <p className="text-[11px] font-bold">{project.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-2 py-1 bg-white border border-slate-200 text-slate-500 text-[9px] font-bold rounded uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a 
                  href={project.pdfLink} 
                  download 
                  className="w-full flex items-center justify-center gap-3 py-3 bg-slate-900 text-white text-[10px] font-black uppercase rounded-xl hover:bg-blue-600 transition shadow-lg shadow-slate-200"
                >
                  Documentation
                </a>
                
                <Link 
                  href="/#contact" 
                  className="w-full block text-center py-3 border-2 border-slate-200 text-slate-400 text-[10px] font-black uppercase rounded-xl hover:border-blue-600 hover:text-blue-600 transition"
                >
                  Discuss Project
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
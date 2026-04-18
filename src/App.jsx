import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaFilePdf, FaRaspberryPi, FaMicrochip } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FiExternalLink, FiArrowRight, FiCode, FiLayers, FiCpu, FiGithub, FiSettings } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      
      {/* NAVBAR - Home, Chi Sono, Progetti, Contatti */}
      <nav className="fixed w-full backdrop-blur-md bg-white/80 border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#home" className="font-black text-2xl tracking-tighter text-blue-600">MG.</a>
          <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-gray-500">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Chi Sono</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Progetti</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contatti</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (ID: home) */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              LOREM IPSUM DOLOR
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Mirko <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Galbasini</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="flex flex-wrap gap-5 mb-10">
              <a href="#" className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-all duration-300 shadow-sm">
                <FaGithub size={24} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:mirko@mirkogalbasini.it" className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                <IoMail size={24} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                Lorem Ipsum <FiArrowRight size={20} />
              </a>
              <a href="/tuo-cv.pdf" target="_blank" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all">
                <FaFilePdf size={18} /> Scarica CV
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gray-100 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                <div className="flex items-center justify-center h-full text-gray-400 font-medium italic text-center px-10">
                  [ Immagine Profilo ]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE CHI SONO (ID: about) */}
      <section id="about" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter text-blue-600">Chi Sono</h2>
              <p className="text-xl text-gray-900 font-bold mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <FiCode className="text-blue-600 mb-4" size={24} />
                  <h4 className="font-bold mb-1">Lorem Ipsum</h4>
                  <p className="text-sm text-gray-500">React, Tailwind, Node.js</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <FiSettings className="text-indigo-600 mb-4" size={24} />
                  <h4 className="font-bold mb-1">Lorem Ipsum</h4>
                  <p className="text-sm text-gray-500">Linux, Raspberry Pi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-8 italic text-blue-400">Lorem Ipsum Dolor</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-blue-600 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg">Lorem Ipsum Title</h4>
                  <p className="text-blue-400 text-sm font-semibold">2023 - Presente</p>
                  <p className="text-gray-400 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-6 relative">
                   <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg">Lorem Ipsum Title</h4>
                  <p className="text-gray-500 text-sm font-semibold">2020 - 2023</p>
                  <p className="text-gray-400 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE PROGETTI SOFTWARE (ID: projects) */}
      <section id="projects" className="py-32 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Progetti</h2>
            <p className="text-gray-500 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="group">
                <div className="aspect-video bg-gray-200 rounded-3xl mb-6 overflow-hidden relative shadow-sm border border-gray-100">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-all duration-500"></div>
                  <div className="absolute top-6 right-6 flex gap-3">
                    <a href="#" className="p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:text-blue-600">
                      <FiExternalLink size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:text-gray-700 delay-75">
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Lorem Ipsum {i}</h3>
                <div className="flex gap-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">React</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tailwind</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE ALTRI PROGETTI / LAB (ID: lab) - Senza link in Navbar */}
      <section id="lab" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-indigo-600">Altri Progetti</h2>
              <p className="text-gray-500 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] hover:border-indigo-300 transition-colors group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaMicrochip size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 italic text-gray-800 tracking-tight text-center">Lorem Ipsum</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Raspberry Pi</span>
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Python</span>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] hover:border-indigo-300 transition-colors group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiSettings size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 italic text-gray-800 tracking-tight text-center">Lorem Ipsum</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Linux</span>
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">IoT</span>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center text-center opacity-50">
              <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">+</span>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTATTI (ID: contact) */}
      <footer id="contact" className="bg-gray-50 py-32 border-t border-gray-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-none">
            Lorem ipsum dolor? <br />
            <span className="text-blue-600">Parliamone.</span>
          </h2>
          <a href="mailto:mirko@mirkogalbasini.it" className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-black transition-colors underline decoration-blue-600 underline-offset-8 decoration-4">
            mirko@mirkogalbasini.it
          </a>
          
          <div className="mt-32 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">© 2026 Mirko Galbasini</p>
            <div className="flex flex-wrap justify-center gap-8">
               <a href="#" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-widest">Linkedin</a>
               <a href="#" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-widest">Github</a>
               <a href="/tuo-cv.pdf" target="_blank" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-widest">Scarica CV (PDF)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
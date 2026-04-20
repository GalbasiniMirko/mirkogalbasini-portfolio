import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaFilePdf, FaRaspberryPi, FaMicrochip } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FiExternalLink, FiArrowRight, FiCode, FiLayers, FiCpu, FiGithub, FiSettings, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import fotoProfilo from './assets/FotoProfiloGithub.jpg';

function App() {
  const [projects, setProjects] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch('https://api.github.com/users/galbasinimirko/repos?sort=updated&per_page=10')
      .then(response => response.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork && repo.name !== 'mirkogalbasini-portfolio')
          .slice(0, 3);
        setProjects(filtered);
      })
      .catch(error => console.error('Errore nel caricamento da GitHub:', error));
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 32;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans selection:bg-blue-100">
      
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="fixed w-full top-6 z-50 px-4">
        <nav className="max-w-7xl w-full mx-auto backdrop-blur-xl bg-white/80 border border-gray-200/80 shadow-xl shadow-gray-200/50 rounded-[2rem] h-20 flex justify-between items-center px-8 transition-all">
          <a href="#home" className="font-black text-3xl tracking-tighter text-gray-900">
            MG<span className="text-blue-600">.</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Chi Sono</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Progetti</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contatti</a>
          </div>
        </nav>
      </div>

      <section id="home" className="pt-32 pb-20 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold mb-6 border border-blue-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                PRONTO PER LA PROSSIMA SFIDA!
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                Ciao, sono <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Mirko Galbasini</span>
              </h1>
              
              <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <div className="flex flex-wrap gap-5 mb-10">
                <a href="https://github.com/galbasinimirko" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-black hover:text-white transition-all duration-300 shadow-sm">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mirko-galbasini-b96768272" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:info@mirkogalbasini.com" className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                  <IoMail size={24} />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  Contattami <FiArrowRight size={20} />
                </a>
                <a href="/PrimaBozzaCV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">
                  <FaFilePdf size={18} /> Scarica CV
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none bg-white rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-300">
                  <img src={fotoProfilo} alt="Foto Profilo Mirko" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-white border-y border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-blue-600">Chi Sono</h2>
            <p className="text-gray-500 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-gray-900 font-bold mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <FiCode className="text-blue-600 mb-4" size={24} />
                  <h4 className="font-bold mb-1">Software</h4>
                  <p className="text-sm text-gray-500">React, Tailwind, Node.js</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <FiSettings className="text-indigo-600 mb-4" size={24} />
                  <h4 className="font-bold mb-1">Hardware</h4>
                  <p className="text-sm text-gray-500">Linux, Raspberry Pi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-[3rem] p-8 sm:p-10 text-white relative overflow-hidden shadow-xl w-full max-w-[500px] mx-auto lg:max-w-none h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-8 italic text-blue-400">Percorso di studi</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-blue-600 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg">Università degli Studi di Milano</h4>
                  <p className="text-blue-400 text-sm font-semibold">2023 - Presente</p>
                  <p className="text-gray-400 text-sm mt-2">Studente di informatica</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-6 relative">
                   <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-lg">I.I.S. Lorenzo Cobianchi</h4>
                  <p className="text-gray-500 text-sm font-semibold">2018 - 2023</p>
                  <p className="text-gray-400 text-sm mt-2">Diplomato in informatica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-gray-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-blue-600 mb-4 uppercase tracking-tighter">Progetti</h2>
              <p className="text-gray-500 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scorri per visualizzare.</p>
            </div>
            
            <div className="hidden md:flex gap-4">
              <button 
                onClick={() => scrollCarousel('left')} 
                className="p-4 bg-white border border-gray-200 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100" 
                aria-label="Scorri a sinistra"
              >
                <FiChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scrollCarousel('right')} 
                className="p-4 bg-white border border-gray-200 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100" 
                aria-label="Scorri a destra"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Su mobile flex-col (verticale), su schermi medi in poi ripristina il flex-row col carosello */}
          <div 
            ref={carouselRef}
            className="flex flex-col md:flex-row md:overflow-x-auto gap-8 md:pb-8 md:snap-x md:snap-mandatory hide-scrollbar items-stretch"
          >
            {projects.length > 0 ? (
              projects.map((repo) => (
                // Su mobile la card occupa il 100% della larghezza (w-full), su desktop ha una larghezza fissa (md:w-[400px] lg:w-[480px])
                <div key={repo.id} className="group w-full md:flex-none md:w-[400px] lg:w-[480px] md:snap-start flex flex-col h-auto">
                  <div className="aspect-[4/3] bg-white rounded-[2rem] mb-8 overflow-hidden relative shadow-sm border border-gray-200 shrink-0">
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-all duration-500"></div>
                    
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-300">
                      <FiCode size={64} className="mb-4" />
                      <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Preview</span>
                    </div>

                    <div className="absolute top-6 right-6 flex gap-3">
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noreferrer" className="p-4 bg-white border border-gray-100 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:text-blue-600">
                          <FiExternalLink size={24} />
                        </a>
                      )}
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="p-4 bg-white border border-gray-100 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:text-gray-700 delay-75">
                        <FiGithub size={24} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-3 group-hover:text-blue-600 transition-colors capitalize tracking-tight">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>
                  <p className="text-gray-500 mb-6 text-lg line-clamp-2">
                    {repo.description || "Nessuna descrizione fornita per questo progetto."}
                  </p>
                  <div className="mt-auto pt-4"></div>
                </div>
              ))
            ) : (
              [1, 2, 3].map((i) => (
                <div key={i} className="group w-full md:flex-none md:w-[400px] lg:w-[480px] md:snap-start animate-pulse flex flex-col h-auto">
                  <div className="aspect-[4/3] bg-gray-200 rounded-[2rem] mb-8 shadow-sm border border-gray-100 shrink-0"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-full mb-6"></div>
                  <div className="flex gap-4 mt-auto">
                    <div className="h-5 bg-gray-200 rounded w-20"></div>
                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              ))
            )}

            {projects.length > 0 && (
              <div className="w-full md:flex-none md:w-[400px] lg:w-[480px] md:snap-start flex flex-col h-auto">
                <a href="https://github.com/galbasinimirko" target="_blank" rel="noreferrer" className="relative flex flex-col items-center justify-center w-full h-full min-h-[350px] rounded-[2rem] bg-blue-50 border border-blue-100 overflow-hidden group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-300 rounded-full blur-[3rem] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-300 rounded-full blur-[3rem] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 p-8">
                    <div className="p-6 bg-white text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm group-hover:shadow-md group-hover:scale-110">
                      <FaGithub size={48} />
                    </div>
                    <span className="text-2xl font-black uppercase tracking-widest leading-tight text-center mb-6 text-gray-800">
                      Scopri gli altri <br/>Progetti
                    </span>
                    <span className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-widest bg-white px-5 py-3 rounded-full shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      Vai al profilo <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="lab" className="py-32 bg-white scroll-mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-blue-600">Altri Progetti</h2>
            <p className="text-gray-500 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] hover:border-indigo-300 transition-colors group bg-gray-50">
              <div className="w-14 h-14 bg-indigo-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaMicrochip size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 italic text-gray-800 tracking-tight text-center">Lorem Ipsum</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Raspberry Pi</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Python</span>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] hover:border-indigo-300 transition-colors group bg-gray-50">
              <div className="w-14 h-14 bg-indigo-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiSettings size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 italic text-gray-800 tracking-tight text-center">Lorem Ipsum</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Linux</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase">IoT</span>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center text-center opacity-70 bg-gray-50/50">
              <div className="w-12 h-12 bg-white border border-gray-200 text-gray-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">+</span>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-800 py-32 border-t border-gray-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-none text-white">
            Lorem ipsum dolor? <br />
            <span className="text-blue-500">Parliamone.</span>
          </h2>
          <a href="mailto:info@mirkogalbasini.com" className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-white transition-colors underline decoration-blue-600 underline-offset-8 decoration-4">
            info@mirkogalbasini.com
          </a>
          
          <div className="mt-32 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">© 2026 Mirko Galbasini</p>
            <div className="flex flex-wrap justify-center gap-8">
               <a href="https://www.linkedin.com/in/mirko-galbasini-b96768272" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-400 hover:text-blue-400 transition-colors uppercase tracking-widest">Linkedin</a>
               <a href="https://github.com/galbasinimirko" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-400 hover:text-blue-400 transition-colors uppercase tracking-widest">Github</a>
               <a href="/PrimaBozzaCV.pdf" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest">Scarica CV (PDF)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
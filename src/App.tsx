import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database,
  LayoutTemplate,
  Tv,
  ArrowUpRight,
  Sparkles,
  MousePointer2,
  Copy,
  Check,
  MessageCircle, 
  Bot         
} from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import ColorBends from './components/Background/ColorBends';
import SpotlightCard from './components/UI/SpotlightCard';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('kontakt@jczerniak.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills = [
    { name: "Next.js", icon: <Code2 size={16} /> },
    { name: "TypeScript", icon: <Terminal size={16} /> },
    { name: "Tailwind CSS", icon: <Globe size={16} /> },
    { name: "Supabase", icon: <Database size={16} /> },
    { name: "Framer Motion", icon: <LayoutTemplate size={16} /> },
    { name: "React", icon: <Code2 size={16} /> },
    { name: "Node.js", icon: <Cpu size={16} /> },
    { name: "Git", icon: <Github size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0f1116] text-[#e4e4e7] font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden w-full">
      <Analytics />
      
      {/* ziarno na tlo zeby nie bylo tak plasko */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06]"></div>
      </div>

      {/* nawigacja plywajaca */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <nav className={`flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${scrolled ? 'bg-[#18181b]/80 border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/50 scale-95' : 'bg-transparent border-transparent backdrop-blur-sm'}`}>
            {['Home', 'Projekty', 'O mnie', 'Kontakt'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                {item}
              </button>
            ))}
        </nav>
      </div>

      {/* sekcja heri */}
      <section id="home" className="relative w-full pt-40 pb-20 md:pt-60 md:pb-40 min-h-[95vh] flex flex-col justify-center overflow-hidden">
        
        {/* plywajace kolory w tle */}
        <div className="absolute inset-0 z-0">
            <ColorBends 
                colors={['#4338ca', '#6366f1', '#1e1b4b', '#0f1116']} 
                speed={0.2} 
                noise={0.15}
                scale={1.2}
                transparent={false}
                className="opacity-80 saturate-150" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f1116]/20 via-[#0f1116]/60 to-[#0f1116]"></div>
        </div>

        {/* glowny tekst */}
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-950/30 text-indigo-300 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 animate-fade-in-up backdrop-blur-md shadow-lg shadow-indigo-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for work
          </div>
          
          <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter mb-8 leading-[0.85] drop-shadow-2xl mix-blend-overlay text-white opacity-90">
            FRONTEND <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">DEVELOPER.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12 md:text-left mx-auto md:mx-0 font-medium">
            Nazywam się <span className="text-white">Jakub Czerniak</span>. <br/>
            Tworzę interaktywne doświadczenia, które łączą design z technologią.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center">
            <button onClick={() => scrollTo('projekty')} className="group px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              Zobacz projekty <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </button>
            <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors">
               <Github className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110 duration-300" size={22} onClick={() => window.open('https://github.com/czvrnyy', '_blank')} />
               <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:scale-110 duration-300" size={22} onClick={() => window.open('https://www.linkedin.com/in/jakub-czerniak-60075525a/', '_blank')} />
               
               <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

               <button 
                 onClick={copyEmail}
                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group relative"
               >
                 {copied ? <Check size={20} className="text-green-400" /> : <Mail size={20} className="group-hover:scale-110 duration-300" />}
                 <span className="text-sm font-mono tracking-wide hidden sm:inline">
                    {copied ? "Skopiowano!" : "kontakt@jczerniak.dev"}
                 </span>
                 <span className="sm:hidden">
                    <Copy size={16} />
                 </span>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* karuzela z technologiami */}
      <section className="py-12 border-y border-white/5 bg-[#0f1116] overflow-hidden relative z-20 w-full">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0f1116] to-transparent z-10"></div>
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f1116] to-transparent z-10"></div>
         
         <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-500">
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 text-lg font-bold text-gray-400 uppercase tracking-widest">
                    {skill.icon}
                    {skill.name}
                </div>
            ))}
         </div>
      </section>

      {/* moje projekty, uklad bento */}
      <section id="projekty" className="relative z-10 py-32 w-full">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">CODE & CRAFT</h2>
                    <p className="text-gray-400 text-lg max-w-xl">
                        Projekty, w których łączę <span className="text-white font-medium">zaawansowany frontend</span> z unikalnym designem. 
                        Nowoczesny stack (Next.js, TS) i dbałość o każdy detal.
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-indigo-400 font-mono text-sm border border-indigo-500/20 px-4 py-2 rounded-full bg-indigo-500/10">
                    <MousePointer2 size={14} />
                    <span>Hover cards to reveal</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">
                
                {/* 1. najwiekszy projekt */}
                <SpotlightCard className="md:col-span-2 group cursor-pointer relative overflow-hidden bg-[#09090b]/5" onClick={() => window.open('https://www.sigmatask.app/', '_blank')}>
                    {/* kratka w tle */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                    
                    <div className="absolute top-6 right-6 z-30">
                        <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300 shadow-lg">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                    
                    {/* interfejs apki */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-8 md:translate-y-0 group-hover:scale-[1.02] transition-transform duration-700">
                        <div className="w-[90%] md:w-[80%] h-[70%] bg-[#0f1116]/80 rounded-t-xl md:rounded-xl border border-white/10 shadow-2xl flex flex-col relative overflow-hidden">
                            
                            {/* udawany header */}
                            <div className="w-full h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                                    <div className="w-10 h-2 bg-white/5 rounded-full"></div>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-[#0f1116]"></div>
                                    <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-[#0f1116]"></div>
                                </div>
                            </div>

                            {/* srodek z kolumnami */}
                            <div className="flex-1 p-4 flex gap-4 overflow-hidden">
                                {/* kolumna todo */}
                                <div className="flex-1 flex flex-col gap-3 opacity-50">
                                    <div className="w-16 h-2 bg-white/10 rounded-full mb-1"></div>
                                    <div className="w-full h-16 bg-white/5 rounded border border-white/5"></div>
                                    <div className="w-full h-16 bg-white/5 rounded border border-white/5"></div>
                                </div>

                               
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="w-20 h-2 bg-indigo-500/50 rounded-full mb-1"></div>
                                    {/* kafelka z taskiem */}
                                    <div className="w-full h-24 bg-indigo-500/10 rounded border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.15)] relative group-hover:-translate-y-2 transition-transform duration-500 flex flex-col p-3 gap-2">
                                        <div className="w-3/4 h-2 bg-indigo-200/20 rounded"></div>
                                        <div className="w-1/2 h-2 bg-indigo-200/10 rounded"></div>
                                        <div className="mt-auto flex justify-between items-center">
                                            <div className="w-4 h-4 rounded bg-indigo-500/20"></div>
                                            <div className="w-8 h-3 rounded-full bg-indigo-500/20"></div>
                                        </div>
                                    </div>
                                    <div className="w-full h-12 bg-white/5 rounded border border-white/5"></div>
                                </div>

                                
                                <div className="flex-1 hidden sm:flex flex-col gap-3 opacity-30">
                                    <div className="w-12 h-2 bg-white/10 rounded-full mb-1"></div>
                                    <div className="w-full h-16 bg-white/5 rounded border border-white/5"></div>
                                </div>
                            </div>
                            
                            {/* fade out na dole */}
                            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0f1116] to-transparent z-10"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-500/20 tracking-wider backdrop-blur-md">FEATURED</span>
                        </div>
                        <h3 className="text-4xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors drop-shadow-lg">.sigmaTask</h3>
                        <p className="text-gray-400 max-w-lg mb-6 leading-relaxed">System zarządzania zadaniami. Realtime updates, shadery WebGL i płynne animacje.</p>
                        <div className="flex gap-2 flex-wrap">
                            {['Next.js', 'Supabase', 'WebGL', 'Tailwind'].map(tag => (
                                <span key={tag} className="text-xs text-gray-400 font-mono bg-[#0f1116]/80 px-2 py-1 rounded border border-white/10">{tag}</span>
                            ))}
                        </div>
                    </div>
                </SpotlightCard>

               {/* 2. wyszukiwarka filmow */}
                <SpotlightCard className="md:col-span-1 group cursor-pointer overflow-hidden border-white/5" onClick={() => window.open('https://czvrnyy.github.io/tv-app/', '_blank')}>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1116] via-[#0f1116]/80 to-red-950/10 z-10"></div>
                    
                    {/* zdjecie w tle */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"></div>
                    
                    {/* paski na overlayu */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px]"></div>

                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                        
                        <div className="flex items-center gap-2 mb-4">
                             <span className="px-2 py-0.5 bg-red-600 text-[10px] font-black text-white rounded uppercase tracking-tighter">Live API</span>
                             <span className="text-[10px] font-mono text-gray-400">TMDB Database</span>
                        </div>

                        <div className="w-12 h-12 bg-red-600/20 border border-red-500/30 rounded-xl flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                            <Tv size={24} />
                        </div>

                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:translate-x-1 transition-transform">TV Show Finder</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                            SPA do przeglądania bazy filmów. Czysty JS i asynchroniczne pobieranie danych z TMDB.
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group/link">
                            <span className="border-b border-white/30 group-hover/link:border-red-500 transition-colors">Zobacz projekt</span>
                            <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform text-red-500" />
                        </div>
                    </div>
                </SpotlightCard>
                {/* 3. bot do zaczepek na fb */}
                <SpotlightCard className="md:col-span-1 group cursor-pointer overflow-hidden" onClick={() => window.open('https://github.com/czvrnyy/fb-pokes-autoresponder', '_blank')}>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* ikonka w tle */}
                    <div className="absolute -right-6 -top-6 text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-500 rotate-12">
                        <MessageCircle size={180} />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <Bot className="text-gray-400 group-hover:text-blue-300 w-20 h-20 transition-all duration-300 group-hover:-translate-y-2" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                        <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-[10px] font-mono text-green-400 tracking-widest uppercase">Script Active</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-white group-hover:text-blue-200 transition-colors">FB Autoresponder</h3>
                        <p className="text-gray-500 text-sm">Automatyzacja zaczepek. JS + DOM manipulation.</p>
                    </div>
                </SpotlightCard>
                {/* 4. soruce-code portfolio */}
                <SpotlightCard className="md:col-span-2 group cursor-pointer relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-transparent to-transparent" onClick={() => window.open('https://github.com/czvrnyy/portfolio', '_blank')}>
                    
                    {/* bloby w tle, animowane css */}
                    <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-[2500ms] ease-out pointer-events-none"></div>
                    <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] delay-100 ease-out pointer-events-none"></div>
                    
                    {/* nakladka gridu */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

                    {/* ikona */}
                    <div className="absolute -right-10 -top-10 opacity-[0.05] rotate-12 pointer-events-none group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-700 ease-out">
                          <Code2 size={400} />
                    </div>
                    
                    <div className="absolute top-6 right-6 z-30">
                         <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
                             <Github size={20} />
                         </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8  group-hover:opacity-50 group-hover:scale-110 transition-all duration-700">
                         {/* paski imitujace kod */}
                         <div className="w-full max-w-md space-y-3 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                             <div className="flex gap-2 mb-4">
                                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                             </div>
                             {/* animowane linie */}
                             <div className="space-y-3 font-mono text-xs text-purple-300/50">
                                 <div className="h-2 w-1/3 bg-purple-500/40 rounded animate-pulse"></div>
                                 <div className="h-2 w-2/3 bg-purple-500/30 rounded pl-4 delay-75"></div>
                                 <div className="h-2 w-1/2 bg-purple-500/30 rounded pl-4 delay-150"></div>
                                 <div className="h-2 w-3/4 bg-purple-500/30 rounded pl-8 delay-200"></div>
                                 <div className="h-2 w-1/4 bg-purple-500/40 rounded delay-300"></div>
                             </div>
                          </div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                          <div className="flex items-center gap-3 mb-4">
                              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/20 tracking-wider backdrop-blur-md">OPEN SOURCE</span>
                          </div>
                          <h3 className="text-4xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors drop-shadow-md">Portfolio Source</h3>
                          <p className="text-gray-400 max-w-lg mb-6 leading-relaxed">
                            Sprawdź kod źródłowy tej strony. React, shadery Three.js, Tailwind i pełna responsywność.
                          </p>
                          <div className="flex gap-2 flex-wrap">
                              {['React', 'Three.js', 'Vite', 'Lucide'].map(tag => (
                                  <span key={tag} className="text-xs text-gray-400 font-mono bg-[#0f1116]/60 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">{tag}</span>
                              ))}
                          </div>
                    </div>
                </SpotlightCard>



               {/* 5a. O mnie */}
                <SpotlightCard id="o-mnie" className="md:col-span-2 p-8 md:p-12 relative overflow-hidden scroll-mt-32 border-white/5 flex flex-col justify-center">
                    
                    {/* efekty w tle */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="relative z-10 w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-6">
                            <Sparkles size={14} />
                            <span>Level 22 • Frontend Class</span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                            Więcej niż <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">tylko kod.</span>
                        </h3>
                        
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                            Studiuję informatykę, ale to frontend jest moją zajawką. Nie lubię nudy. 
                            Szukam miejsc, gdzie liczy się <span className="text-white font-medium">pixel-perfect</span> i dbałość o detale. 
                            Obecnie wkręcam się w shadery i WebGL.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                            {['React', 'TypeScript', 'Next.js', 'WebGL', 'Node.js', 'Tailwind'].map((tech) => (
                                <div key={tech} className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/40 to-purple-600/30 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-200"></div>
                                    <span className="relative block px-4 py-2 bg-[#09090b]/30 border border-white/10 rounded-lg text-xs font-mono text-gray-300 group-hover:text-white transition-colors">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </SpotlightCard>

                {/* 5b. edytor kodu */}
                <SpotlightCard className="md:col-span-1 p-0 relative overflow-hidden border-white/5 flex items-center justify-center">
                    
                    {/* to samo tlo co obok */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                    {/* okienko */}
                    <div className="w-full h-full min-h-[400px] flex items-center justify-center p-6 relative z-10">
                        <div className="w-full bg-[#0a0a0c]/5 border border-white/10 rounded-lg shadow-2xl overflow-hidden group hover:border-white/20 duration-300 group-hover:scale-110 transition-all duration-700 scale-[95%] hover:scale-100 ease-out">
                            
                            {/* pasek gorny */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.05]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-[10px] font-mono text-gray-400 flex items-center gap-2">
                                    <Terminal size={10} />
                                    <span>developer.tsx</span>
                                </div>
                            </div>

                            <div className="flex bg-[#0a0a0c]/5">
                                {/* numerki */}
                                <div className="px-4 py-6 border-r border-white/5 bg-white/[0.02] text-right font-mono text-xs text-gray-600 select-none leading-relaxed">
                                    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p>
                                </div>
                      
                                {/* wlasciwy kod */}
                                <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-gray-300 w-full overflow-x-hidden">
                                    <p><span className="text-purple-400">const</span> <span className="text-yellow-200">Jakub</span> = <span className="text-purple-400">new</span> <span className="text-blue-300">Developer</span>({'{'}</p>
                                    <div className="pl-4 space-y-1">
                                        <p>origin: <span className="text-green-400">'Poland'</span>,</p>
                                        <p>passion: <span className="text-green-400">['Code', 'Design', '3D']</span>,</p>
                                        <p>status: <span className="text-blue-400">AVAILABLE</span>,</p>
                                        <p>drink: <span className="text-green-400">'Yerba Mate'</span>,</p>
                                    </div>
                                    <p>{'})'};</p>
                                    <br/>
                                    <p><span className="text-gray-500">// TODO: Build the future</span></p>
                                    <p><span className="text-purple-400">await</span> <span className="text-yellow-200">Jakub</span>.<span className="text-blue-300">deploy</span>();<span className="animate-pulse w-2 h-4 bg-indigo-500 inline-block align-middle ml-1"></span></p>
                                </div>
                            </div> 

                            {/* status bar na dole */}
                            <div className="px-3 py-1.5 border-t border-white/10 bg-white/[0.01] flex items-center justify-between text-[10px] font-mono text-gray-600 select-none">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div> main
                                </div>
                                <span className="text-blue-400">TypeScript</span>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
                
                                  
            </div>
        </div>
      </section>

     {/* sekcja kontaktu na dole */}
      <section id="kontakt" className="py-40 relative overflow-hidden w-full border-t border-white/5">
          
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-16 leading-[0.8] select-none">
              <span className="text-gray-500 block text-4xl md:text-6xl mb-4 font-bold tracking-normal">LET'S WORK</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                TOGETHER
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 w-full max-w-lg mx-auto">
                {/* przycisk mail */}
                <button 
                  onClick={copyEmail}
                  className="w-full md:w-auto flex-1 group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full flex items-center justify-center gap-4 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  
                  <div className={`relative z-10 p-2 rounded-full transition-colors ${copied ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-indigo-300 group-hover:text-white'}`}>
                    {copied ? <Check size={18} /> : <Mail size={18} />}
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-start text-left">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">
                         {copied ? "Skopiowano!" : "Wyślij maila"}
                      </span>
                      <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                        kontakt@jczerniak.dev
                      </span>
                  </div>
                </button>

                {/* github */}
                <a 
                  href="https://github.com/czvrnyy" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full md:w-auto flex-1 group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full flex items-center justify-center gap-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div className="relative z-10 p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                    <Github size={18} />
                  </div>
                  <div className="relative z-10 flex flex-col items-start text-left">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Sprawdź kod</span>
                      <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">GitHub Profile</span>
                  </div>
                </a>
            </div>

            <footer className="mt-40 flex flex-col items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <div className="flex flex-col items-center gap-4 text-gray-500 text-sm font-mono uppercase tracking-[0.2em]">
                <p>&copy; {new Date().getFullYear()} — Jakub Czerniak</p>
              </div>
              
              <a 
                href="https://github.com/czvrnyy/portfolio" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-2 text-xs text-gray-600 hover:text-indigo-400 transition-colors"
              >
                <Terminal size={12} />
                <span className="font-mono border-b border-transparent group-hover:border-indigo-400/50 transition-colors">source_code.git</span>
              </a>
            </footer>
          </div>
      </section>
      
      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
      `}</style>

    </div>
  );
  
};

export default App;
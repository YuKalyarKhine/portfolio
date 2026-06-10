import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'portfolio', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] selection:bg-[#ffcc0d]/30 selection:text-zinc-900 dark:selection:text-white transition-colors duration-300 relative font-sans text-zinc-900 dark:text-zinc-300 overflow-x-hidden">
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-[#0a0a0a] border-b border-zinc-200 dark:border-white/5 z-50 flex items-center justify-between px-6">
        <h1 className="text-xl font-display font-bold text-zinc-900 dark:text-white">
          Yu Kalyar<span className="text-[#ffcc0d]">.</span>
        </h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-zinc-900 dark:text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-[#0a0a0a] z-40 p-6 flex flex-col">
          <nav className="flex-1 mt-10">
             <ul className="space-y-6 text-2xl font-medium">
               {['home', 'experience', 'portfolio', 'skills', 'contact'].map(id => (
                 <li key={id}>
                   <a 
                     href={`#${id}`} 
                     onClick={() => setMobileMenuOpen(false)}
                     className={`capitalize ${activeSection === id ? 'text-[#ffcc0d]' : 'text-zinc-500 dark:text-zinc-400'}`}
                   >
                     {id === 'experience' ? 'Biography' : id}
                   </a>
                 </li>
               ))}
             </ul>
          </nav>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex w-full">
        <Sidebar activeSection={activeSection} />
        
        {/* Desktop Theme Toggle */}
        <div className="hidden lg:block fixed top-6 right-6 z-50">
           <button
            onClick={() => setIsDark(!isDark)}
            className="w-12 h-12 rounded-full bg-[#ffcc0d] flex items-center justify-center text-zinc-900 hover:bg-[#e6b80c] transition-colors shadow-lg"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <main className="w-full lg:ml-[380px] p-6 pt-24 lg:p-16 xl:p-24 pb-20">
          <div className="max-w-[900px] mx-auto space-y-32">
            <div id="home"><Hero /></div>
            <div id="experience"><Experience /></div>
            <div id="skills"><Skills /></div>
            <div id="portfolio"><Certifications /></div>
            <div id="contact"><Contact /></div>
            
            <footer className="py-8 text-left text-zinc-500 dark:text-zinc-600 font-mono text-sm border-t border-zinc-200 dark:border-white/5 mt-10 transition-colors duration-300">
              <p>© {new Date().getFullYear()} Yu Kalyar Khine. All rights reserved.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

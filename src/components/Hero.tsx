import { motion } from 'motion/react';
import { Mail, MapPin, Download, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';
import profileImg from '../assets/images/yu-professional.jpeg';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-20">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl flex-1 text-left pt-12 md:pt-0"
        >
          <h2 className="text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 mb-4 font-mono transition-colors duration-300">
            {personalInfo.title}
          </h2>

          <h1 className="text-5xl sm:text-7xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight leading-none transition-colors duration-300 uppercase">
             {personalInfo.name}
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10 transition-colors duration-300">
            {personalInfo.about}
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-start text-sm font-mono">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-6 py-4 bg-[#ffcc0d] text-zinc-900 hover:bg-[#e6b80c] transition-colors font-bold uppercase tracking-wider">
              Get in Touch <Mail className="w-4 h-4 ml-2" />
            </a>
            <div className="flex items-center gap-4 px-5 py-4 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
              {personalInfo.location}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-[280px] md:max-w-[400px] w-full shrink-0"
        >
          <div className="aspect-[3/4] overflow-hidden bg-zinc-200 dark:bg-zinc-900 border-8 border-white dark:border-[#1a1a1a] shadow-xl transition-all duration-300 relative">
             <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

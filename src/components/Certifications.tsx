import { motion, useInView } from 'motion/react';
import { education, certifications } from '../data';
import { useRef } from 'react';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={`py-20 border-t border-zinc-200 dark:border-white/10 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
      id="education"
    >
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wide">
          Education &<br /> Credentials<span className="text-[#ffcc0d]">.</span>
        </h2>
        <div className="w-16 h-1 bg-[#ffcc0d] mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Education Sub-section */}
        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 border-b-2 border-[#ffcc0d] pb-2 inline-block">Education</h3>

          <div className="space-y-8 mt-4">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <span className="block text-sm font-mono text-zinc-500 uppercase tracking-widest mb-1">{edu.date}</span>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{edu.degree}</h4>
                <p className="text-zinc-600 dark:text-zinc-400">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Sub-section */}
        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 border-b-2 border-[#ffcc0d] pb-2 inline-block">Certifications</h3>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 mt-4"
          >
            {certifications.map((cert, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-[#ffcc0d]"
              >
                <span className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed block">{cert}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  );
}

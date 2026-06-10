import { motion, useInView } from 'motion/react';
import { experience } from '../data';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={`py-20 border-t border-zinc-200 dark:border-white/10 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
      id="experience"
    >
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wide">
          Biography &<br /> Experience<span className="text-[#ffcc0d]">.</span>
        </h2>
        <div className="w-16 h-1 bg-[#ffcc0d] mt-6"></div>
      </div>

      <div className="space-y-12">
        {experience.map((job, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-8 items-start group relative bg-zinc-50 dark:bg-zinc-900/50 p-8 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors"
          >
            {/* Date Block */}
            <div className="md:w-1/3 shrink-0">
               <span className="inline-block px-4 py-2 bg-zinc-200 dark:bg-[#1a1a1a] text-zinc-700 dark:text-zinc-400 font-medium text-sm font-mono uppercase tracking-wider">
                 {job.date}
               </span>
            </div>

            {/* Content Block */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-[#ffcc0d] transition-colors duration-300">
                  {job.role}
              </h3>
              <p className="text-zinc-500 font-medium mb-6 text-sm uppercase tracking-widest">{job.company}</p>
              
              <ul className="space-y-3">
                {job.points.map((achievement, i) => (
                  <li key={i} className="text-zinc-600 dark:text-zinc-400 flex items-start flex-col gap-1">
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion, useInView } from 'motion/react';
import { skills } from '../data';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      ref={ref}
      className={`py-20 border-t border-zinc-200 dark:border-white/10 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
      id="skills"
    >
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wide">
          Capabilities &<br /> Services<span className="text-[#ffcc0d]">.</span>
        </h2>
        <div className="w-16 h-1 bg-[#ffcc0d] mt-6"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors group relative"
          >
            <div className={`w-14 h-14 bg-zinc-200 dark:bg-[#1a1a1a] flex items-center justify-center mb-6 text-zinc-900 dark:text-white group-hover:text-[#ffcc0d] group-hover:bg-zinc-900 dark:group-hover:bg-[#ffcc0d]/10 transition-colors`}>
              <skillGroup.icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">
              {skillGroup.category}
            </h3>
            
            <ul className="flex flex-col gap-3">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

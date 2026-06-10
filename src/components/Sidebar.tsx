import { motion } from 'motion/react';

export default function Sidebar({ activeSection }: { activeSection: string }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'biography', label: 'Biography' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-[380px] bg-white dark:bg-[#0a0a0a] border-r border-zinc-200 dark:border-white/5 z-50 flex flex-col justify-between hidden lg:flex py-12">
      <div className="px-16 flex flex-col items-start h-full justify-center">
        {/* Logo / Name */}
        <div className="mb-20">
          <h1 className="text-3xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
            Yu Kalyar<span className="text-[#ffcc0d]">.</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="w-full">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`text-lg transition-colors duration-300 font-medium ${
                    activeSection === item.id 
                      ? 'text-[#ffcc0d]' 
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer / Copyright */}
      <div className="px-16 pb-0">
        <p className="text-sm font-mono text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Yu Kalyar Khine.
          <br />All rights reserved.
        </p>
      </div>
    </aside>
  );
}

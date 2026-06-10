import { Mail, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 border-t border-zinc-200 dark:border-white/10" id="contact">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wide">
          Get in<br /> Touch<span className="text-[#ffcc0d]">.</span>
        </h2>
        <div className="w-16 h-1 bg-[#ffcc0d] mt-6"></div>
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors">
        <div className="md:grid md:grid-cols-2 gap-12">
          <div className="mb-10 md:mb-0">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Let's build reliable systems.</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              Currently available for new opportunities. If you're looking for a QA Engineer who understands that quality is a feature, not just a phase, let's talk.
            </p>
            
            <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
              <div className="w-12 h-12 bg-[#ffcc0d] flex items-center justify-center text-zinc-900 font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <a href="mailto:hello@example.com" className="hover:text-[#ffcc0d] font-bold text-lg transition-colors">hello@example.com</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-5 py-4 bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 focus:border-[#ffcc0d] dark:focus:border-[#ffcc0d] focus:outline-none focus:ring-1 focus:ring-[#ffcc0d] dark:text-white transition-all placeholder:text-zinc-400"
                placeholder="Name *"
              />
            </div>
            
            <div>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-5 py-4 bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 focus:border-[#ffcc0d] dark:focus:border-[#ffcc0d] focus:outline-none focus:ring-1 focus:ring-[#ffcc0d] dark:text-white transition-all placeholder:text-zinc-400"
                placeholder="Email *"
              />
            </div>

            <div>
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full px-5 py-4 bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/5 focus:border-[#ffcc0d] dark:focus:border-[#ffcc0d] focus:outline-none focus:ring-1 focus:ring-[#ffcc0d] dark:text-white transition-all resize-none placeholder:text-zinc-400"
                placeholder="Message *"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full flex items-center justify-center gap-2 px-8 py-5 bg-[#ffcc0d] text-zinc-900 hover:bg-[#e6b80c] focus:outline-none focus:ring-2 focus:ring-[#ffcc0d] focus:ring-offset-2 dark:focus:ring-offset-zinc-900 disabled:opacity-70 transition-all font-bold uppercase tracking-widest text-sm"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-zinc-900/20 border-t-zinc-900 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>Sent Successfully</>
              ) : (
                <>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const githubUrl = SOCIAL_LINKS.find(link => link.platform === 'GitHub')?.url;

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-mono mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Open to work
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">
                {PERSONAL_INFO.role}
              </h2>
              
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                {PERSONAL_INFO.about}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-all shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] flex items-center"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                onClick={scrollToContact}
                className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            <div className="pt-8 flex items-center gap-4 text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                Dehradun, India
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                DevOps
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                Cloud
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative rings around image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900">
                <img 
                  src="arman.jpg.png" 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#experience" className="p-2 text-slate-500 hover:text-primary-400 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
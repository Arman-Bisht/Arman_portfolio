import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-slate-900 border-4 border-primary-500 -translate-x-1/2 z-10 hidden md:block shadow-[0_0_15px_-3px_rgba(14,165,233,0.6)]"></div>

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className={`p-6 bg-slate-950 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-colors group ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {exp.company}
                        </h3>
                      </div>
                      <span className="flex items-center text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar className="w-3 h-3 mr-2" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-slate-300 font-medium mb-4 border-b border-slate-900 pb-2">
                      {exp.role}
                    </h4>
                    
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-slate-400 text-sm leading-relaxed">
                          <span className="mt-1.5 mr-3 min-w-[6px] h-1.5 rounded-full bg-primary-500/50"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side of timeline */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
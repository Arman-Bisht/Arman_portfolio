import React from 'react';
import { ExternalLink, GitBranch, Calendar } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mb-4"></div>
            <p className="text-slate-400 max-w-2xl">
              Real-world implementations of cloud architecture, automation, and full-stack development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary-500/50 hover:shadow-[0_0_30px_-10px_rgba(14,165,233,0.3)] transition-all duration-300 flex flex-col"
            >
              {/* Card Header (Simulating a window header or simple banner) */}
              <div className="h-2 bg-gradient-to-r from-primary-600 to-indigo-600"></div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-2 bg-slate-800 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                     <GitBranch className="w-6 h-6" />
                   </div>
                   <span className="text-xs font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded bg-slate-950 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> {project.date}
                   </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                   {/* Tech Stack Tags */}
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.map((tech, i) => (
                       <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                         {tech}
                       </span>
                     ))}
                   </div>
                   
                   {/* Divider */}
                   <div className="h-px bg-slate-800 w-full"></div>

                   {/* Key features/bullets - condensed */}
                   <ul className="space-y-2">
                      {project.bullets.slice(0, 2).map((bullet, i) => (
                        <li key={i} className="text-xs text-slate-500 line-clamp-2 list-disc list-inside">
                          {bullet}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
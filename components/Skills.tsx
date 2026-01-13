import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS_DATA, CHART_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Skills List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
              <p className="text-slate-400">
                A comprehensive toolkit for building scalable, resilient, and automated infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS_DATA.map((skillGroup, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <skillGroup.icon className="w-6 h-6 text-primary-500" />
                    <h3 className="font-semibold text-lg text-white">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-primary-500/50 hover:text-primary-400 transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Radar Chart */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center bg-slate-900/30 rounded-2xl border border-slate-800 p-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none"></div>
             <h3 className="text-xl font-bold text-white mb-6 z-10">Core Competencies</h3>
             
             <div className="w-full h-[300px] z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CHART_DATA}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Proficiency"
                      dataKey="A"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      fill="#0ea5e9"
                      fillOpacity={0.3}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                      itemStyle={{ color: '#38bdf8' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
             
             <p className="text-xs text-slate-500 mt-4 text-center">
               * Visualization of relative strength in key DevOps domains
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
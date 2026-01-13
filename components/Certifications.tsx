import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="flex items-center p-4 bg-slate-950 border border-slate-800 rounded-lg hover:border-primary-500/30 transition-colors">
              <div className="flex-shrink-0 mr-4">
                <div className="p-2 rounded-full bg-green-500/10 text-green-500">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-200">{cert.name}</h3>
                <p className="text-sm text-slate-500 flex items-center mt-1">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Issued by {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
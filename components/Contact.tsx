import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, CERTIFICATIONS } from '../constants';

const Contact: React.FC = () => {
  const handleDownloadResume = () => {
    const resumeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${PERSONAL_INFO.name} - Resume</title>
        <style>
          body { 
            font-family: 'Times New Roman', serif; 
            line-height: 1.5; 
            color: #000; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px; 
          }
          h1 { 
            font-size: 28px; 
            font-weight: bold; 
            margin-bottom: 5px; 
            text-transform: uppercase; 
            text-align: center;
          }
          .header { 
            text-align: center; 
            margin-bottom: 20px; 
            padding-bottom: 10px; 
            border-bottom: 2px solid #000;
          }
          .contact-info { 
            font-size: 14px; 
            margin-bottom: 15px; 
            text-align: center; 
          }
          .contact-info a {
            color: #000;
            text-decoration: none;
          }
          h2 { 
            font-size: 16px; 
            font-weight: bold; 
            text-transform: uppercase; 
            border-bottom: 1px solid #000; 
            padding-bottom: 3px; 
            margin-top: 20px; 
            margin-bottom: 10px; 
          }
          h3 { 
            font-size: 14px; 
            font-weight: bold; 
            margin: 0; 
          }
          .section { 
            margin-bottom: 15px; 
          }
          .job-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: baseline;
            margin-bottom: 2px; 
          }
          .job-title { 
            font-weight: bold; 
            font-style: italic;
            font-size: 14px;
            margin-bottom: 2px;
          }
          .date { 
            font-style: italic; 
            font-size: 14px;
          }
          ul { 
            margin: 5px 0 10px 0; 
            padding-left: 20px; 
          }
          li { 
            font-size: 14px; 
            margin-bottom: 3px; 
          }
          .skills-grid { 
            display: grid; 
            grid-template-columns: 1fr; 
            gap: 5px; 
            font-size: 14px; 
          }
          .education-item {
            margin-bottom: 8px;
            font-size: 14px;
          }
          @media print {
            body { padding: 0; }
            button { display: none; }
            @page { margin: 0.5in; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${PERSONAL_INFO.name}</h1>
          <div class="contact-info">
            <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a> &bull; 
            <a href="tel:${PERSONAL_INFO.phone}">${PERSONAL_INFO.phone}</a> &bull; 
            ${PERSONAL_INFO.location} <br/>
            ${SOCIAL_LINKS.map(l => `<a href="${l.url}">${l.label}</a>`).join(' &bull; ')}
          </div>
        </div>

        <div class="section">
          <h2>Summary</h2>
          <p style="font-size: 14px; margin: 0; text-align: justify;">${PERSONAL_INFO.about}</p>
        </div>

        <div class="section">
          <h2>Experience</h2>
          ${EXPERIENCE_DATA.map(exp => `
            <div>
              <div class="job-header">
                <h3>${exp.company}</h3>
                <span class="date">${exp.period}</span>
              </div>
              <div class="job-title">${exp.role}</div>
              <ul>
                ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>Education</h2>
          <div class="education-item">
            <div class="job-header">
              <h3>${PERSONAL_INFO.education.degree}</h3>
              <span class="date">${PERSONAL_INFO.education.year}</span>
            </div>
            <div>${PERSONAL_INFO.education.school}</div>
            <div>Major: ${PERSONAL_INFO.education.major} | Minor: ${PERSONAL_INFO.education.minor}</div>
            <div>CGPA: ${PERSONAL_INFO.education.cgpa}</div>
          </div>
          
          <!-- High School Data from Resume -->
          <div class="education-item" style="margin-top: 10px;">
             <div class="job-header">
               <h3>Class XII (CBSE), PCM</h3>
               <span class="date">2021</span>
             </div>
             <div>Doon International School, Dehradun</div>
             <div>Score: 90%</div>
          </div>

          <div class="education-item">
             <div class="job-header">
               <h3>Class X (CBSE)</h3>
               <span class="date">2019</span>
             </div>
             <div>Doon International School, Dehradun</div>
             <div>Score: 86%</div>
          </div>
        </div>

        <div class="section">
          <h2>Projects</h2>
          ${PROJECTS_DATA.map(proj => `
            <div>
              <div class="job-header">
                <h3>${proj.title}</h3>
                <span class="date">${proj.date}</span>
              </div>
              <div style="font-size: 14px; margin-bottom: 2px;">${proj.description}</div>
              <div style="font-size: 14px; font-style: italic; margin-bottom: 2px;">Technologies: ${proj.technologies.join(', ')}</div>
              <ul>
                ${proj.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>Skills</h2>
          <div class="skills-grid">
            ${SKILLS_DATA.map(cat => `
              <div><strong>${cat.category}:</strong> ${cat.items.join(', ')}</div>
            `).join('')}
          </div>
        </div>
        
        <div class="section">
          <h2>Certifications</h2>
          <ul>
            ${CERTIFICATIONS.map(c => `<li>${c.name} &mdash; ${c.issuer}</li>`).join('')}
          </ul>
        </div>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(resumeContent);
      printWindow.document.close();
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            <p className="text-slate-400 max-w-md">
              Currently seeking new opportunities in DevOps and Cloud Engineering. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-300 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5 mr-3 text-slate-500" />
                {PERSONAL_INFO.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center text-slate-300 hover:text-primary-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-slate-500" />
                {PERSONAL_INFO.phone}
              </a>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-slate-500" />
                {PERSONAL_INFO.location}
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input type="text" id="name" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input type="email" id="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-primary-500/20">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Arman Bisht. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
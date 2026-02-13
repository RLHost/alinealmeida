
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              Muito prazer, sou <span className="text-sky-600">Aline Almeida</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Neuropsicopedagoga apaixonada por desvendar os mistérios do aprendizado humano. Acredito que não existem alunos "difíceis", apenas mentes que ainda não encontraram a estratégia certa para aprender.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No meu espaço em Cotia, dedico-me a oferecer um olhar clínico sensível e embasado, ajudando crianças, jovens e adultos a superarem bloqueios, recuperarem a autoestima e redescobrirem o prazer de evoluir.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Especialista em Neuroaprendizagem",
                "Foco em Desenvolvimento Cognitivo",
                "Avaliação Psicoeducacional",
                "Intervenção em Transtornos (TDAH/TEA)",
                "Planejamento Estratégico de Estudos",
                "Apoio Psicopedagógico Individual"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-sky-500 w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Conhecer meu Método
            </a>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-sky-200 rounded-2xl transform rotate-3 scale-95 group-hover:rotate-0 transition-transform"></div>
              <img 
                src="https://picsum.photos/seed/aline/600/700" 
                alt="Aline Almeida - Neuropsicopedagoga" 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
                 <p className="text-slate-900 font-bold text-lg">Aline Almeida</p>
                 <p className="text-sky-600 font-medium">Neuropsicopedagoga Clínica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

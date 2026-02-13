
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-soft">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-100/50 rounded-l-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold tracking-wide uppercase mb-6 animate-bounce">
              Neuropsicopedagogia em Cotia
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
              Desperte o <span className="text-sky-600">Potencial</span> de Aprender sem Barreiras
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              No Espaço de Aprendizagem, transformamos dificuldades em degraus para o sucesso. Sob a orientação de <strong>Aline Almeida</strong>, oferecemos um suporte especializado para que cada mente encontre seu próprio caminho para brilhar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Começar Jornada Agora <ChevronRight size={20} />
              </a>
              <a 
                href="#services"
                className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
              >
                Conhecer Serviços
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-75">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500 italic">
                +200 famílias transformadas em Cotia e região
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://picsum.photos/800/600?nature=learning" 
                alt="Ambiente de Aprendizado" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-float">
               <div className="flex items-center gap-4 mb-3">
                 <div className="bg-green-100 p-2 rounded-full">
                   <ArrowDown className="text-green-600 w-5 h-5" />
                 </div>
                 <span className="font-bold text-slate-800">Crescimento Focado</span>
               </div>
               <p className="text-sm text-slate-500">Metodologia lúdica e científica que acelera o desenvolvimento cognitivo em até 3x.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

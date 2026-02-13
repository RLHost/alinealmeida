
import React from 'react';
import { SERVICES, CONTACT_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Como podemos <span className="text-sky-600">ajudar?</span></h2>
          <p className="text-lg text-slate-600">
            Oferecemos um leque completo de intervenções para garantir que o desenvolvimento humano aconteça em sua plenitude, respeitando o tempo e a individualidade de cada ser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-sky-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href={CONTACT_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Saiba mais <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-sky-600 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Precisa de uma avaliação detalhada?</h3>
            <p className="text-sky-100 text-lg mb-8">
              A identificação precoce de dificuldades é o primeiro passo para o sucesso. Vamos conversar e entender o melhor caminho para você ou seu filho.
            </p>
            <a 
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-50 transition-colors shadow-lg"
            >
              Agendar Avaliação Inicial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

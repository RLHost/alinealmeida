
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/kids1/400/500" alt="Learning" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                <img src="https://picsum.photos/seed/kids2/400/400" alt="Learning" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/kids3/400/400" alt="Learning" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                <img src="https://picsum.photos/seed/kids4/400/500" alt="Learning" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8">
              Por que escolher o <span className="text-sky-600">Espaço de Aprendizagem?</span>
            </h2>
            
            <div className="space-y-8">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="bg-sky-100 text-sky-600 w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

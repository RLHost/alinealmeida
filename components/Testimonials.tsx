
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      text: "A evolução do meu filho após começar com a Aline foi nítida em poucos meses. O carinho e a técnica que ela usa são admiráveis.",
      role: "Mãe do Pedro (8 anos)"
    },
    {
      name: "Ricardo Oliveira",
      text: "Eu tinha muita dificuldade em me organizar para os estudos na faculdade. As sessões me ajudaram a entender como meu cérebro funciona.",
      role: "Estudante Universitário"
    },
    {
      name: "Ana Beatriz",
      text: "Um ambiente onde nos sentimos acolhidos. Minha filha adora ir às consultas e as notas na escola melhoraram absurdamente.",
      role: "Mãe da Luiza (11 anos)"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">O que dizem as <span className="text-sky-600">famílias</span></h2>
          <p className="text-slate-600 text-lg">Histórias reais de superação e conquista.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600">
                  {rev.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{rev.name}</p>
                  <p className="text-sm text-slate-500">{rev.role}</p>
                </div>
              </div>
              {/* Quote mark icon absolute positioned */}
              <div className="absolute top-8 right-8 text-sky-100">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M10 25h5l3-8h-8v-8h8v8l-3 8h-5zM25 25h5l3-8h-8v-8h8v8l-3 8h-5z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

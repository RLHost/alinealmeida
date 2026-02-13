
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-sky-600 p-1 rounded">
                <span className="text-white font-bold text-lg">EA</span>
              </div>
              <span className="text-white font-bold text-xl">Espaço de Aprendizagem</span>
            </div>
            <p className="max-w-md mb-6">
              Aline Almeida - Neuropsicopedagoga Clínica. Dedicada a transformar vidas através do conhecimento e do desenvolvimento humano em Cotia, SP.
            </p>
            <div className="flex gap-4">
               <a href={CONTACT_INFO.instagramUrl} className="bg-slate-800 p-2.5 rounded-full hover:bg-sky-600 hover:text-white transition-all">
                 <Instagram size={20} />
               </a>
               <a href={CONTACT_INFO.mapsUrl} className="bg-slate-800 p-2.5 rounded-full hover:bg-sky-600 hover:text-white transition-all">
                 <MapPin size={20} />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-sky-500 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-sky-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-sky-500 transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-sky-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Horário</h4>
            <ul className="space-y-4">
              <li>Segunda a Sexta: 08:00 - 19:00</li>
              <li>Sábado: Sob Agendamento</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart size={14} className="text-red-500 fill-current" /> para o seu desenvolvimento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

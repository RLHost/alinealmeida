
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Vamos conversar?</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Estamos prontos para ouvir sua história e caminhar ao seu lado. Entre em contato ou faça-nos uma visita.
            </p>

            <div className="space-y-8">
              <a 
                href={CONTACT_INFO.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Nosso Endereço</p>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">WhatsApp / Telefone</p>
                  <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="bg-pink-100 p-3 rounded-xl text-pink-600">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Siga-nos no Instagram</p>
                  <p className="text-slate-600">@espaco_de_aprendizagem_e_desen</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 h-[500px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.745464169729!2d-46.920239!3d-23.5772322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf06f89066497d%3A0xc3f1f7d544838612!2sR.%20Padre%20Luiz%20Martini%2C%2075%20-%20Vila%20Sao%20Joaquim%2C%20Cotia%20-%20SP%2C%2006700-467!5e0!3m2!1spt-BR!2sbr!4v1715632124531!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

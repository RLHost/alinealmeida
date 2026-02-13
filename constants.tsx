
import React from 'react';
import { Brain, Heart, BookOpen, Star, UserPlus, MapPin, Phone, Instagram, Target } from 'lucide-react';

export const CONTACT_INFO = {
  name: "Espaço de Aprendizagem e Desenvolvimento Humano",
  professional: "Aline Almeida",
  role: "Neuropsicopedagoga",
  address: "R. Padre Luiz Martini, 75 - Vila Sao Joaquim, Cotia - SP, 06700-467",
  phone: "(11) 94949-4368",
  whatsappUrl: "https://wa.me/5511949494368",
  instagramUrl: "https://www.instagram.com/espaco_de_aprendizagem_e_desen?igsh=ZzUza2s1dGJob2w2",
  mapsUrl: "https://maps.app.goo.gl/7TCULuwgKj2kBXZu8"
};

export const SERVICES = [
  {
    title: "Neuropsicopedagogia Clínica",
    description: "Avaliação e intervenção focada nos processos de aprendizagem, considerando o funcionamento do sistema nervoso.",
    icon: <Brain className="w-8 h-8 text-sky-600" />
  },
  {
    title: "Dificuldades de Aprendizagem",
    description: "Apoio especializado para superação de obstáculos escolares, TDAH, Dislexia e outros transtornos.",
    icon: <BookOpen className="w-8 h-8 text-sky-600" />
  },
  {
    title: "Desenvolvimento Humano",
    description: "Estratégias para potencializar habilidades socioemocionais e cognitivas em diferentes fases da vida.",
    icon: <Heart className="w-8 h-8 text-sky-600" />
  },
  {
    title: "Orientação Familiar",
    description: "Suporte e direcionamento para pais e responsáveis, criando uma rede de apoio sólida para o aprendiz.",
    icon: <UserPlus className="w-8 h-8 text-sky-600" />
  }
];

export const BENEFITS = [
  {
    title: "Abordagem Personalizada",
    text: "Cada mente é única. Criamos planos de desenvolvimento sob medida para as necessidades específicas de cada paciente.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Ambiente Acolhedor",
    text: "Um espaço seguro e estimulante, preparado para que o aprendizado aconteça de forma leve e eficaz.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Foco em Resultados",
    text: "Metodologia baseada em evidências científicas para garantir evolução real e duradoura.",
    icon: <Brain className="w-6 h-6" />
  }
];

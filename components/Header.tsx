
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-sky-600 p-1.5 rounded-lg">
             <span className="text-white font-bold text-xl">EA</span>
          </div>
          <span className={`font-bold text-lg hidden sm:block ${isScrolled ? 'text-slate-900' : 'text-slate-800'}`}>
            Espaço de Aprendizagem
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-sky-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t shadow-xl py-6 px-4 animate-fade-in-down">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 text-white text-center px-5 py-3 rounded-xl font-bold mt-2"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

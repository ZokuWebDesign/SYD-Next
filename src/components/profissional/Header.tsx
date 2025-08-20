"use client";
import { useState } from "react";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AUTH_LINKS } from "@/constants/links";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isVisible = useScrollDirection();

  return (
    <header className={`bg-white py-4 shadow-sm border-b border-primary sticky top-0 z-50 font-[var(--heading)] transition-transform duration-300 ${
      !isVisible ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logos/logo-full.svg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-[hsl(var(--black))] font-medium">
            <a href="#inicio" className="hover:text-secondary transition-colors p-3">Início</a>
            <a href="#como-funciona" className="hover:text-secondary transition-colors p-3">Como funciona</a>
            <a href="#beneficios" className="hover:text-secondary transition-colors p-3">Benefícios</a>
            <a href="#faq" className="hover:text-secondary transition-colors p-3">FAQ</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            <Button variant="outline" className="rounded-2xl px-4 py-3 text-secondary border-secondary hover:bg-secondary hover:text-white text-xl h-auto">
              <a
                href={AUTH_LINKS.PROFESSIONAL.LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full gap-1.5"
              >
                <span className="pl-0.5 pr-0.5">Entrar</span>
              </a>
            </Button>
            
            <Button className="rounded-2xl w-[224px] p-0 border border-white bg-secondary hover:bg-secondary/90 h-auto">
              <a
                href={AUTH_LINKS.PROFESSIONAL.SIGNUP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-5 gap-1.5 text-lg text-white font-semibold"
              >
                
                <span className="pl-0.5 pr-0.5">Cadastre-se</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-6 h-6"
            >
              {isMenuOpen ? <X className="text-gray-500"/> : <Menu className="text-secondary"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 text-[hsl(var(--black))] font-medium">
            <div className="flex flex-col">
              <a href="#inicio" className="py-2 px-2">Início</a>
              <a href="#como-funciona" className="py-2 px-2">Como funciona</a>
              <a href="#beneficios" className="py-2 px-2">Benefícios</a>
              <a href="#faq" className="py-2 px-2">FAQ</a>
              <div className="flex flex-col space-y-2 pt-4">

                <Button className="py-3 gap-1.5 border border-white bg-secondary hover:bg-secondary/90 text-white font-semibold h-auto">
                  <a 
                    href={AUTH_LINKS.PROFESSIONAL.SIGNUP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    
                    <span className="pl-0.5 pr-0.5">Cadastre-se</span>
                  </a>
                </Button>

                <Button variant="outline" className="py-3 gap-1.5 text-secondary border-secondary hover:bg-secondary hover:text-white font-semibold h-auto">
                  <a
                    href={AUTH_LINKS.PROFESSIONAL.LOGIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <span className="pl-0.5 pr-0.5">Entrar</span>
                  </a>
                </Button>

              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

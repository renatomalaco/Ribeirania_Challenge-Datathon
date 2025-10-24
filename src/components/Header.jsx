import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Importando ícones
import logoImage from '../../public/bull.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#E4D7C9] p-4 sm:px-8 md:px-20 flex justify-between items-center relative">
      {/* Logo e Título */}
      <Link to="/" className="flex items-center space-x-2 z-20">
        <img src={logoImage} alt="DuoCrypto Logo" className="h-8 w-auto" />
        <h1 className="font-bold text-lg">DuoCrypto</h1>
      </Link>

      {/* Navegação para Desktop */}
      <nav className="hidden md:flex space-x-8">
        <Link to="/quiz" className="text-lg hover:text-primary transition-colors">Quiz</Link>
        <Link to="/graphs" className="text-lg hover:text-primary transition-colors">Gráficos</Link>
      </nav>

      {/* Botão do Menu Hambúrguer para Mobile */}
      <div className="md:hidden z-20">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isMenuOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-[#E4D7C9] flex flex-col items-center justify-center md:hidden z-10"
        >
          <nav className="flex flex-col items-center space-y-8">
            <Link
              to="/quiz"
              className="text-2xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >Quiz</Link>
            <Link
              to="/graphs"
              className="text-2xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >Gráficos</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
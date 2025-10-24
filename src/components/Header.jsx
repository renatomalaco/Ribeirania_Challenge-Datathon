import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../public/bull.png'; 

function Header() {
  return (
    <div className="bg-[#E4D7C9] p-4 pl-20 pr-20 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logoImage} alt="DuoCrypto Logo" className="h-8" />
        <h1 className="font-bold text-lg">DuoCrypto</h1>
      </div>
      <nav className="space-x-15">
        {/* <Link to="/">Home</Link> */}
        <Link to="/modules">Modules</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
    </div>
  );
}

export default Header;
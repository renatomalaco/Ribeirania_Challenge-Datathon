import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bullImage from '../../public/bull.png';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Quiz');
    }, 3000); // 3000 milissegundos = 3 segundos

    // Limpa o temporizador se o componente for desmontado antes do tempo
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center bg-[#E4D7C9]">
      <img
        src={bullImage}
        alt="Bull"
        className="h-auto w-full max-w-[312px] max-h-[312px]"
      />
    </div>
  );
}

export default Loading;
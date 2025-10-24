import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Loading from './pages/Loading';
import Graphs from './pages/Graphs'; // 1. Importe a nova página
import Header from './components/Header'; // Importe o componente Header

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milissegundos = 3 segundos

    // Limpa o temporizador se o componente for desmontado antes do tempo
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header /> {/* Renderiza o Header após o carregamento */}
          <Routes>
            <Route path="/" element={<Quiz />} /> {/* A rota raiz agora exibe o Quiz */}
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/graphs" element={<Graphs />} /> {/* 2. Adicione a nova rota */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
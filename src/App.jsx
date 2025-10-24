import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Quiz from './pages/Quiz';
import Loading from './pages/Loading';
import Questions from './pages/Questions';
import PageLayout from './components/PageLayout'; // Importa o novo componente de layout

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        {/* Todas as rotas abaixo usarão o PageLayout, que inclui o Header e o padding */}
        <Route element={<PageLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/questions" element={<Questions />} />
        </Route>
        {/* Rota para páginas não encontradas, também pode usar o layout se desejar */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
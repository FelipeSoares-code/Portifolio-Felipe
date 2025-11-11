import './App.css'
import Cabecalho from './componentes/Cabecalho.jsx'
import Rodape from './componentes/Rodape.jsx'
import Apresentacao from './telas/Apresentacao.jsx'
import LemonCoin from './telas/LemonCoin.jsx'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="flex flex-col flex-grow min-h-screen">
      <Router>
        <main>
          <Routes>
            <Route path="/Portifolio-Felipe" element={<Apresentacao />} />
            <Route path="/lemoncoin" element={<LemonCoin />} />
          </Routes>
        </main>
        <Rodape />
      </Router>
    </div>
  )
}

export default App

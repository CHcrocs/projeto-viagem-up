import React from "react";
import VooListar from "./components/pages/voo/voo-listar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import VooCadastrar from "./components/pages/voo/Voo-cadastrar";
import VooAlterar from "./components/pages/voo/Voo-alterar";
import TripulacaoListar from "./components/pages/tripulacao/tripulacao-listar";
import TripulacaoCadastrar from "./components/pages/tripulacao/tripulacao-cadastrar";
import TripulacaoAlterar from "./components/pages/tripulacao/tripulacao-alterar";
import PassageiroListar from "./components/pages/passageiro/passageiro-listar";
import PassageiroCadastrar from "./components/pages/passageiro/passageiro-cadastrar";
import PassageiroAlterar from "./components/pages/passageiro/passageiro-alterar";
import ClimaListar from "./components/pages/clima/clima-listar";
import ClimaCadastrar from "./components/pages/clima/clima-cadastrar";
import ClimaAtualizar from "./components/pages/clima/clima-atualizar";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/voo/listar">Listar voos</Link>
            </li>
            <li>
              <Link to="/pages/voo/cadastrar">Cadastrar voos</Link>
            </li>
            <li>
              <Link to="/pages/tripulacao/listar">Listar tripulacao</Link>
            </li>
            <li>
              <Link to="/pages/tripulacao/cadastrar">Cadastrar tripulacao</Link>
            </li>
            <li>
              <Link to="/pages/passageiro/listar">Listar passageiros</Link>
            </li>
            <li>
              <Link to="/pages/passageiro/cadastrar">Cadastrar passageiros</Link>
            </li>
            <li>
              <Link to="/pages/clima/listar">Listar climas</Link>
            </li>
            <li>
              <Link to="/pages/clima/cadastrar">Cadastrar climas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<VooListar />} />
          {/* Crud Voo */}
          <Route path="/pages/voo/listar" element={<VooListar />} />
          <Route path="/pages/voo/cadastrar" element={<VooCadastrar />} />
          <Route path="/pages/voo/alterar/:id" element={<VooAlterar />} />
          {/* Crud Tripulação */}
          <Route path="/pages/tripulacao/listar" element={<TripulacaoListar />} />
          <Route path="/pages/tripulacao/cadastrar" element={<TripulacaoCadastrar />} />
          <Route path="/pages/tripulacao/alterar/:id" element={<TripulacaoAlterar />} />
          {/* Crud Passageiro */}
          <Route path="/pages/passageiro/listar" element={<PassageiroListar />} />
          <Route path="/pages/passageiro/cadastrar" element={<PassageiroCadastrar />} />
          <Route path="/pages/passageiro/alterar/:id" element={<PassageiroAlterar />} />
          {/* Crud Clima */}
          <Route path="/pages/clima/listar" element={<ClimaListar />} />
          <Route path="/pages/clima/cadastrar" element={<ClimaCadastrar />} />
          <Route path="/pages/clima/alterar/:id" element={<ClimaAtualizar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

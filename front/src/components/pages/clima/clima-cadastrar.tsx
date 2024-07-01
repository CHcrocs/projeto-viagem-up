import { useState } from "react";
import { Clima } from "../../../models/Clima";
import { useNavigate } from "react-router-dom";
import "../../../styles.css";

function ClimaCadastrar() {
    const navigate = useNavigate();
    const [condicoesMeteorologicas, setCondicoesMeteorologicas] = useState("");
    const [previsaoTempo, setPrevisaoTempo] = useState("");
    const [alertasTempestades, setAlertasTempestades] = useState("");
    const [condicoesAdversas, setCondicoesAdversas] = useState("");
    const [vooId, setVooId] = useState(0);

    function cadastrarClima(e: any) {
        const clima: Clima = {
            id: 0,
            condicoesMeteorologicas: condicoesMeteorologicas,
            previsaoTempo: previsaoTempo,
            alertasTempestades: alertasTempestades,
            condicoesAdversas: condicoesAdversas,
            vooId: vooId,
        };

        fetch("http://localhost:5281/api/verificacaoclimatica/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(clima),
        })
            .then((resposta) => resposta.json())
            .then((clima: Clima) => {
                navigate("/pages/clima/listar");
            });
        e.preventDefault();
    }

    return (
        <div className="container">
            <h1>Cadastrar Clima</h1>
            <form onSubmit={cadastrarClima}>
                <label>Condições Meteorológicas:</label>
                <input
                    type="text"
                    placeholder="Digite as condições meteorológicas"
                    onChange={(e) => setCondicoesMeteorologicas(e.target.value)}
                    required
                />
                <label>Previsão do Tempo:</label>
                <input
                    type="text"
                    placeholder="Digite a previsão do tempo"
                    onChange={(e) => setPrevisaoTempo(e.target.value)}
                    required
                />
                <label>Alertas de Tempestades:</label>
                <input
                    type="text"
                    placeholder="Digite os alertas de tempestades"
                    onChange={(e) => setAlertasTempestades(e.target.value)}
                    required
                />
                <label>Condições Adversas:</label>
                <input
                    type="text"
                    placeholder="Digite as condições adversas"
                    onChange={(e) => setCondicoesAdversas(e.target.value)}
                    required
                />
                <label>ID do Voo:</label>
                <input
                    type="number"
                    placeholder="Digite o ID do voo"
                    onChange={(e) => setVooId(parseInt(e.target.value))}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default ClimaCadastrar;

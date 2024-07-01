import { useEffect, useState } from "react";
import { Clima } from "../../../models/Clima";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles.css";

function ClimaAtualizar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [condicoesMeteorologicas, setCondicoesMeteorologicas] = useState("");
    const [previsaoTempo, setPrevisaoTempo] = useState("");
    const [alertasTempestades, setAlertasTempestades] = useState("");
    const [condicoesAdversas, setCondicoesAdversas] = useState("");
    const [vooId, setVooId] = useState(0);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5281/api/clima/buscar/${id}`)
                .then((resposta) => {
                    if (!resposta.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return resposta.json();
                })
                .then((clima: Clima) => {
                    setCondicoesMeteorologicas(clima.condicoesMeteorologicas ?? "");
                    setPrevisaoTempo(clima.previsaoTempo ?? "");
                    setAlertasTempestades(clima.alertasTempestades ?? "");
                    setCondicoesAdversas(clima.condicoesAdversas ?? "");
                    setVooId(clima.vooId);
                })
                .catch((error) => {
                    console.error('Houve um problema com a solicitação:', error);
                });
        }
    }, [id]);

    function atualizarClima(e: any) {
        e.preventDefault();
        
        const clima: Clima = {
            id: 0,
            condicoesMeteorologicas: condicoesMeteorologicas,
            previsaoTempo: previsaoTempo,
            alertasTempestades: alertasTempestades,
            condicoesAdversas: condicoesAdversas,
            vooId: 0,
        };
        
        fetch(`http://localhost:5281/api/verificacaoclimatica/atualizar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(clima),
        })
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Network response was not ok');
                }
                return resposta.json();
            })
            .then((data) => {
                console.log("Resposta da API:", data);
                navigate("/pages/clima/listar");
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação:', error);
            });
    }

    return (
        <div>
            <h1>Atualizar Clima</h1>
            <form onSubmit={atualizarClima}>
                <label>Condições Meteorológicas:</label>
                <input
                    type="text"
                    placeholder="Digite as condições meteorológicas"
                    value={condicoesMeteorologicas}
                    onChange={(e: any) => setCondicoesMeteorologicas(e.target.value)}
                    required
                />
                <br />
                <label>Previsão do Tempo:</label>
                <input
                    type="text"
                    placeholder="Digite a previsão do tempo"
                    value={previsaoTempo}
                    onChange={(e: any) => setPrevisaoTempo(e.target.value)}
                    required
                />
                <br />
                <label>Alertas de Tempestades:</label>
                <input
                    type="text"
                    placeholder="Digite os alertas de tempestades"
                    value={alertasTempestades}
                    onChange={(e: any) => setAlertasTempestades(e.target.value)}
                    required
                />
                <br />
                <label>Condições Adversas:</label>
                <input
                    type="text"
                    placeholder="Digite as condições adversas"
                    value={condicoesAdversas}
                    onChange={(e: any) => setCondicoesAdversas(e.target.value)}
                    required
                />
                <br />
                <label>ID do Voo:</label>
                <input
                    type="number"
                    placeholder="Digite o ID do voo"
                    value={vooId}
                    onChange={(e: any) => setVooId(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default ClimaAtualizar;

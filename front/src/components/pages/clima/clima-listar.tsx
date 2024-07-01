import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles.css";

export interface Clima {
    id: number;
    condicoesMeteorologicas?: string;
    previsaoTempo?: string;
    alertasTempestades?: string;
    condicoesAdversas?: string;
    vooId: number;
}

function ClimaListar() {
    const [climas, setClimas] = useState<Clima[]>([]);

    useEffect(() => {
        carregarClimas();
    }, []);

    function carregarClimas() {
        fetch("http://localhost:5281/api/verificacaoclimatica/listar")
            .then((resposta) => resposta.json())
            .then((clima: Clima[]) => {
                console.table(clima);
                setClimas(clima);
            });
    }

    function deletar(id: string) {
        console.log(`Id: ${id}`);
        fetch(`http://localhost:5281/api/verificacaoclimatica/deletar/${id}`, {
            method: "DELETE",
        })
            .then((resposta) => resposta.json())
            .then((dados) => {
                console.log(dados);
                carregarClimas();
            });
    }

    return (
        <div>
            <h1>Listar Climas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Condições Meteorológicas</th>
                        <th>Previsão do Tempo</th>
                        <th>Alertas de Tempestades</th>
                        <th>Condições Adversas</th>
                        <th>ID do Voo</th>
                        <th>Deletar</th>
                        <th>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {climas.map((clima) => (
                        <tr key={clima.id}>
                            <td>{clima.id}</td>
                            <td>{clima.condicoesMeteorologicas}</td>
                            <td>{clima.previsaoTempo}</td>
                            <td>{clima.alertasTempestades}</td>
                            <td>{clima.condicoesAdversas}</td>
                            <td>{clima.vooId}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        deletar(String(clima.id));
                                    }}
                                >
                                    Deletar
                                </button>
                            </td>
                            <td>
                                <Link to={`/pages/Clima/alterar/${clima.id}`}>Alterar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClimaListar;

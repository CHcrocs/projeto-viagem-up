import { useEffect, useState } from "react";
import { Tripulacao } from "../../../models/Tripulacao";
import { Link } from "react-router-dom";
import "../../../styles.css";


function TripulacaoListar() {
    const [tripulacao, setTripulacoes] = useState<Tripulacao[]>([]);

    useEffect(() => {
        carregarTripulacoes();
    }, []);

    function carregarTripulacoes() {
        //FETCH ou AXIOS
        fetch("http://localhost:5281/api/registro_tripulacao/listar")
            .then((resposta) => resposta.json())
            .then((tripulacao: Tripulacao[]) => {
                console.table(tripulacao);
                setTripulacoes(tripulacao);
            });
    }

    function deletar(id: number) {
        console.log(`Id: ${id}`);
        fetch(`http://localhost:5281/api/registro_tripulacao/deletar/${id}`, {
            method: "DELETE",
        })
            .then((resposta) => resposta.json())
            .then((dados) => {
                console.log(dados);
                carregarTripulacoes();
            });
    }

    return (
        <div>
            <h1>Listar Tripulação</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Função</th>
                        <th>Qualificações</th>
                        <th>Horário de Trabalho</th>
                        <th>Idiomas Falados</th>
                        <th>Voo Id</th>
                        <th>Deletar</th>
                        <th>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {tripulacao.map((tripulacao) => (
                        <tr key={tripulacao.id}>
                            <td>{tripulacao.id}</td>
                            <td>{tripulacao.nome}</td>
                            <td>{tripulacao.cargo}</td>
                            <td>{tripulacao.funcao}</td>
                            <td>{tripulacao.qualificacoes}</td>
                            <td>{tripulacao.horarioTrabalho}</td>
                            <td>{tripulacao.idiomasFalados}</td>
                            <td>{tripulacao.vooId}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        deletar(tripulacao.id!);
                                    }}
                                >
                                    Deletar
                                </button>
                            </td>
                            <td>
                                <Link to={`/pages/Tripulacao/alterar/${tripulacao.id}`}>
                                    Alterar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TripulacaoListar;
import { useEffect, useState } from "react";
import { Passageiro } from "../../../models/Passageiro";
import { Link } from "react-router-dom";
import "../../../styles.css";

function PassageiroListar() {
    const [passageiros, setPassageiros] = useState<Passageiro[]>([]);

    useEffect(() => {
        carregarPassageiros();
    }, []);

    function carregarPassageiros() {
        fetch("http://localhost:5281/api/registro_passageiro/listar")
            .then((resposta) => resposta.json())
            .then((passageiros: Passageiro[]) => {
                console.table(passageiros);
                setPassageiros(passageiros);
            });
    }

    function deletar(id: number) {
        console.log(`Id: ${id}`);
        fetch(`http://localhost:5281/api/registro_passageiro/deletar/${id}`, {
            method: "DELETE",
        })
            .then((resposta) => resposta.json())
            .then((dados) => {
                console.log(dados);
                carregarPassageiros();
            });
    }

    return (
        <div>
            <h1>Listar Passageiros</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Número Documento</th>
                        <th>Data Nascimento</th>
                        <th>Nacionalidade</th>
                        <th>Informações Contato</th>
                        <th>Sobrenome</th>
                        <th>Passaporte</th>
                        <th>Voo ID</th>
                        <th>Deletar</th>
                        <th>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {passageiros.map((passageiro) => (
                        <tr key={passageiro.id}>
                            <td>{passageiro.id}</td>
                            <td>{passageiro.nome}</td>
                            <td>{passageiro.numeroDocumento}</td>
                            <td>{passageiro.dataNascimento}</td>
                            <td>{passageiro.nacionalidade}</td>
                            <td>{passageiro.informacoesContato}</td>
                            <td>{passageiro.sobrenome}</td>
                            <td>{passageiro.passaporte}</td>
                            <td>{passageiro.vooId}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        deletar(passageiro.id);
                                    }}
                                >
                                    Deletar
                                </button>
                            </td>
                            <td>
                                <Link to={`/pages/Passageiro/alterar/${passageiro.id}`}>
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

export default PassageiroListar;
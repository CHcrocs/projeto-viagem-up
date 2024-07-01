import { useEffect, useState } from "react";
import { Passageiro } from "../../../models/Passageiro";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles.css";


function PassageiroAlterar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [passageiro, setpassageiro] = useState<Passageiro>({
        id: 0,
        nome: "",
        numeroDocumento: "",
        dataNascimento: "",
        nacionalidade: "",
        informacoesContato: "",
        sobrenome: "",
        passaporte: "",
        vooId: 0,
    });

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5281/api/passageiro/buscar/${id}`)
                .then((resposta) => {
                    if (!resposta.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return resposta.json();
                })
                .then((passageiro: Passageiro) => {
                    setpassageiro(passageiro);
                })
                .catch((error) => {
                    console.error('Houve um problema com a solicitação:', error);
                });
        }
    }, [id]);

    function alterarpassageiro(e: any) {
        e.preventDefault();

        fetch(`http://localhost:5281/api/registro_passageiro/atualizar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(passageiro),
        })
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Network response was not ok');
                }
                return resposta.json();
            })
            .then((data) => {
                console.log("Resposta da API:", data);
                navigate("/pages/passageiro/listar");
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação:', error);
            });
    }

    return (
        <div>
            <h1>Alterar Passageiro</h1>
            <form onSubmit={alterarpassageiro}>
                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Digite o nome"
                    value={passageiro.nome}
                    onChange={(e: any) => setpassageiro({ ...passageiro, nome: e.target.value })}
                    required
                />
                <br />
                <label>Número Documento:</label>
                <input
                    type="text"
                    placeholder="Digite o número do documento"
                    value={passageiro.numeroDocumento}
                    onChange={(e: any) => setpassageiro({ ...passageiro, numeroDocumento: e.target.value })}
                    required
                />
                <br />
                <label>Data de Nascimento:</label>
                <input
                    type="date"
                    placeholder="Digite a data de nascimento"
                    value={passageiro.dataNascimento}
                    onChange={(e: any) => setpassageiro({ ...passageiro, dataNascimento: e.target.value })}
                    required
                />
                <br />
                <label>Nacionalidade:</label>
                <input
                    type="text"
                    placeholder="Digite a nacionalidade"
                    value={passageiro.nacionalidade}
                    onChange={(e: any) => setpassageiro({ ...passageiro, nacionalidade: e.target.value })}
                    required
                />
                <br />
                <label>Informações de Contato:</label>
                <input
                    type="text"
                    placeholder="Digite as informações de contato"
                    value={passageiro.informacoesContato}
                    onChange={(e: any) => setpassageiro({ ...passageiro, informacoesContato: e.target.value })}
                    required
                />
                <br />
                <label>Sobrenome:</label>
                <input
                    type="text"
                    placeholder="Digite o sobrenome"
                    value={passageiro.sobrenome}
                    onChange={(e: any) => setpassageiro({ ...passageiro, sobrenome: e.target.value })}
                    required
                />
                <br />
                <label>Passaporte:</label>
                <input
                    type="text"
                    placeholder="Digite o passaporte"
                    value={passageiro.passaporte}
                    onChange={(e: any) => setpassageiro({ ...passageiro, passaporte: e.target.value })}
                    required
                />
                <br />
                <label>ID do Voo:</label>
                <input
                    type="number"
                    placeholder="Digite o ID do voo"
                    value={passageiro.vooId}
                    onChange={(e: any) => setpassageiro({ ...passageiro, vooId: e.target.value })}
                    required
                />
                <br />
                <button type="submit">Alterar</button>
            </form>
        </div>
    );
}

export default PassageiroAlterar;
import { useEffect, useState } from "react";
import { Tripulacao } from "../../../models/Tripulacao";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles.css";


function TripulacaoAlterar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tripulacao, setTripulacao] = useState<Tripulacao>({
        id: 0,
        nome: "",
        cargo: "",
        funcao: "",
        qualificacoes: "",
        horarioTrabalho: "",
        idiomasFalados: "",
        vooId: 0
    });

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5281/api/tripulacao/buscar/${id}`)
                .then((resposta) => {
                    if (!resposta.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return resposta.json();
                })
                .then((tripulacao: Tripulacao) => {
                    setTripulacao(tripulacao);
                })
                .catch((error) => {
                    console.error('Houve um problema com a solicitação:', error);
                });
        }
    }, [id]);

    function alterarTripulacao(e: any) {
        e.preventDefault();

        fetch(`http://localhost:5281/api/registro_tripulacao/atualizar/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tripulacao),
        })
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Network response was not ok');
                }
                return resposta.json();
            })
            .then((data) => {
                console.log("Resposta da API:", data);
                navigate("/pages/tripulacao/listar");
            })
            .catch((error) => {
                console.error('Houve um problema com a solicitação:', error);
            });
    }

    return (
        <div>
            <h1>Alterar Tripulação</h1>
            <form onSubmit={alterarTripulacao}>
                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Digite o nome"
                    value={tripulacao.nome}
                    onChange={(e: any) => setTripulacao({ ...tripulacao, nome: e.target.value })}
                    required
                />
                <br />
                <label>Cargo:</label>
                <input
                    type="text"
                    placeholder="Digite o cargo"
                    value={tripulacao.cargo}
                    onChange={(e: any) => setTripulacao({ ...tripulacao, cargo: e.target.value })}
                    required
                />
                <br />
                <label>Função:</label>
                <input
                    type="text"
                    placeholder="Digite a função"
                    value={tripulacao.funcao}
                    onChange={(e: any) => setTripulacao({ ...tripulacao, funcao: e.target.value })}
                    required
                />
                <br />
                <label>Qualificações:</label>
                <input
                    type="text"
                    placeholder="Digite as qualificações"
                    value={tripulacao.qualificacoes}
                    onChange={(e: any) => setTripulacao({ ...tripulacao, qualificacoes: e.target.value })}
                    required
                />
                <br />
                <label>Horário de Trabalho:</label>
                <input
                    type="text"
                    placeholder="Digite o horário de trabalho"
                    value={tripulacao.horarioTrabalho}
                    onChange={(e: any) => setTripulacao({ ...tripulacao, horarioTrabalho: e.target.value })}
                    required
                />
                <br />
                <label>Idiomas Falados:</label>
                <input
                    type="text"
                    placeholder="Digite os idiomas falados"
                    value={tripulacao.idiomasFalados}
                    onChange={(e: any) => setTripulacao({ ...tripulacao, idiomasFalados: e.target.value })}
                    required
                />
                <br />
                <label>Voo ID:</label>
                <input
                    type="number"
                    placeholder="Digite o ID do voo"
                    value={tripulacao.vooId}
                    onChange={(e: any) => setTripulacao({ ...tripulacao, vooId: e.target.value })}
                    required
                />
                <br />
                <button type="submit">Alterar</button>
            </form>
        </div>
    );
}

export default TripulacaoAlterar;
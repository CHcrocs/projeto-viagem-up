import { useState } from "react";
import { Tripulacao } from "../../../models/Tripulacao";
import { useNavigate } from "react-router-dom";
import "../../../styles.css";

function TripulacaoCadastrar() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [funcao, setFuncao] = useState("");
    const [qualificacoes, setQualificacoes] = useState("");
    const [horarioTrabalho, setHorarioTrabalho] = useState("");
    const [idiomasFalados, setIdiomasFalados] = useState("");
    const [vooId, setVooId] = useState(0);

    function cadastrarTripulacao(e: any) {
        const tripulacao: Tripulacao = {
            id: 0,
            nome: nome,
            cargo: cargo,
            funcao: funcao,
            qualificacoes: qualificacoes,
            horarioTrabalho: horarioTrabalho,
            idiomasFalados: idiomasFalados,
            vooId: vooId,
        };

        fetch("http://localhost:5281/api/registro_tripulacao/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tripulacao),
        })
            .then((resposta) => resposta.json())
            .then((tripulacao: Tripulacao) => {
                navigate("/pages/tripulacao/listar");
            });
        e.preventDefault();
    }

    return (
        <div className="container">
            <h1>Cadastrar Tripulação</h1>
            <form onSubmit={cadastrarTripulacao}>
                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Digite o nome"
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <label>Cargo:</label>
                <input
                    type="text"
                    placeholder="Digite o cargo"
                    onChange={(e) => setCargo(e.target.value)}
                    required
                />
                <label>Função:</label>
                <input
                    type="text"
                    placeholder="Digite a função"
                    onChange={(e) => setFuncao(e.target.value)}
                    required
                />
                <label>Qualificações:</label>
                <input
                    type="text"
                    placeholder="Digite as qualificações"
                    onChange={(e) => setQualificacoes(e.target.value)}
                    required
                />
                <label>Horário de Trabalho:</label>
                <input
                    type="text"
                    placeholder="Digite o horário de trabalho"
                    onChange={(e) => setHorarioTrabalho(e.target.value)}
                    required
                />
                <label>Idiomas Falados:</label>
                <input
                    type="text"
                    placeholder="Digite os idiomas falados"
                    onChange={(e) => setIdiomasFalados(e.target.value)}
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

export default TripulacaoCadastrar;
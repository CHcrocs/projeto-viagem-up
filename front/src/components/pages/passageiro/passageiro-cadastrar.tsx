import { useState } from "react";
import { Passageiro } from "../../../models/Passageiro";
import { useNavigate } from "react-router-dom";
import "../../../styles.css";

function PassageiroCadastrar() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [informacoesContato, setInformacoesContato] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [passaporte, setPassaporte] = useState("");
    const [vooId, setVooId] = useState(0);

    function cadastrarPassageiro(e: any) {
        const passageiro: Passageiro = {
            id: 0,
            nome: nome,
            numeroDocumento: numeroDocumento,
            dataNascimento: dataNascimento,
            nacionalidade: nacionalidade,
            informacoesContato: informacoesContato,
            sobrenome: sobrenome,
            passaporte: passaporte,
            vooId: vooId,
        };

        fetch("http://localhost:5281/api/registro_passageiro/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(passageiro),
        })
            .then((resposta) => resposta.json())
            .then((passageiro: Passageiro) => {
                navigate("/pages/passageiro/listar");
            });
        e.preventDefault();
    }

    return (
        <div className="container">
            <h1>Cadastrar Passageiro</h1>
            <form onSubmit={cadastrarPassageiro}>
                <label>Nome:</label>
                <input
                    type="text"
                    placeholder="Digite o nome"
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <label>Número do Documento:</label>
                <input
                    type="text"
                    placeholder="Digite o número do documento"
                    onChange={(e) => setNumeroDocumento(e.target.value)}
                    required
                />
                <label>Data de Nascimento:</label>
                <input
                    type="text"
                    placeholder="Digite a data de nascimento"
                    onChange={(e) => setDataNascimento(e.target.value)}
                    required
                />
                <label>Nacionalidade:</label>
                <input
                    type="text"
                    placeholder="Digite a nacionalidade"
                    onChange={(e) => setNacionalidade(e.target.value)}
                    required
                />
                <label>Informações de Contato:</label>
                <input
                    type="text"
                    placeholder="Digite as informações de contato"
                    onChange={(e) => setInformacoesContato(e.target.value)}
                    required
                />
                <label>Sobrenome:</label>
                <input
                    type="text"
                    placeholder="Digite o sobrenome"
                    onChange={(e) => setSobrenome(e.target.value)}
                />
                <label>Passaporte:</label>
                <input
                    type="text"
                    placeholder="Digite o número do passaporte"
                    onChange={(e) => setPassaporte(e.target.value)}
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

export default PassageiroCadastrar;
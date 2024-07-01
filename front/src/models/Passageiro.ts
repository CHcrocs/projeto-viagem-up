export interface Passageiro {
    id: number;
    nome: string;
    numeroDocumento: string;
    dataNascimento: string;
    nacionalidade: string;
    informacoesContato: string;
    sobrenome?: string;
    passaporte?: string;
    vooId: number;
}
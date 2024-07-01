export interface Passageiro {
    id: number;
    nome: string;
    numeroDocumento: string;
    dataNascimento: Date;
    nacionalidade: string;
    informacoesContato: string;
    sobrenome?: string;
    passaporte?: string;
    vooId: number;
}
import { Biblioteca } from "./Biblioteca";

class Secao extends Biblioteca {
    visitantes: number;
    constructor(nome: string, totalVisitantes: number = 0, visitantes: number = 0){
        super(nome, totalVisitantes);
        this.visitantes = visitantes;
    }
    registrarVisitaSeção(){
        this.visitantes++;
    }
    obterVisitantesSeção(){
        return this.visitantes;
    }

}

const bibliotecaSenai = new Secao("Ficção", 10);
const resposta = bibliotecaSenai.obterTotalVisitantes();
console.log(resposta);
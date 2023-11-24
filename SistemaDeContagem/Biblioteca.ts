export class Biblioteca {
    nome: string;
    totalVisitantes: number;
    constructor(nome: string = '', totalVisitantes: number = 0){
        this.nome = nome;
        this.totalVisitantes = totalVisitantes;
    }
    registrarVisita() {
        this.totalVisitantes++;
    }
    obterTotalVisitantes() {
        return this.totalVisitantes;
    }
    
}


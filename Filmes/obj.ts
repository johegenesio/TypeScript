export class Filme {
    titulo: string;
    ano: number;
    genero: string
    constructor(titulo: string, ano: number, genero: string) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }
    exibirDetalhes(): void {
        console.log(`Titulo: ${this.titulo}, ano: ${this.ano}, genero: ${this.genero}`)
    }
}

export class Acao extends Filme {
    genero: string = 'Ação';
}

export class Romance extends Filme {
    genero: string = 'Romance';
}

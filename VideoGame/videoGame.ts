class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: [string];
    preco: number;
  
    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: [string], preco: number) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }
  
    exibirDetalhes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Número de Jogadores: ${this.numeroJogadores}`);
        console.log(`Plataforma(s): ${this.plataforma}`);
        console.log(`Preço: $${this.preco}`);
    }
  
    aplicarDesconto(): void {     
        this.preco -= this.preco * 10 / 100;
    }
  
    adicionarPlataforma(novaPlataforma: string): void {
        this.plataforma.push(novaPlataforma);
    }
  
    estimarTempoJogo(): string {
        switch (this.genero) {
            case 'Ação':
                return 'Cerca de 12 horas';
            case 'Aventura':
                return 'Cerca de 20 horas';
            case 'Esportes':
                return 'Indeterminado';
            case 'Estratégia':
                return 'Cerca de 40 horas';
            default:
                return 'Tempo estimado desconhecido';
        }
    }
}
  
const meuJogo = new VideoGame('Meu Jogo', 'Ação', 1, ['PlayStation'], 100);
meuJogo.exibirDetalhes();
meuJogo.aplicarDesconto();
console.log(`Novo preço: $${meuJogo.preco.toFixed(2)}`);
meuJogo.adicionarPlataforma('Xbox');
console.log(`Plataformas: ${meuJogo.plataforma}`);
console.log(`Tempo estimado para terminar o jogo: ${meuJogo.estimarTempoJogo()}`);
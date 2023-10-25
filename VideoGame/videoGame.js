var VideoGame = /** @class */ (function () {
    function VideoGame(nome, genero, numeroJogadores, plataforma, preco) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }
    VideoGame.prototype.exibirDetalhes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("G\u00EAnero: ".concat(this.genero));
        console.log("N\u00FAmero de Jogadores: ".concat(this.numeroJogadores));
        console.log("Plataforma(s): ".concat(this.plataforma));
        console.log("Pre\u00E7o: $".concat(this.preco));
    };
    VideoGame.prototype.aplicarDesconto = function () {
        this.preco -= this.preco * 10 / 100;
    };
    VideoGame.prototype.adicionarPlataforma = function (novaPlataforma) {
        this.plataforma.push(novaPlataforma);
    };
    VideoGame.prototype.estimarTempoJogo = function () {
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
    };
    return VideoGame;
}());
var meuJogo = new VideoGame('Meu Jogo', 'Ação', 1, ['PlayStation'], 100);
meuJogo.exibirDetalhes();
meuJogo.aplicarDesconto();
console.log("Novo pre\u00E7o: $".concat(meuJogo.preco.toFixed(2)));
meuJogo.adicionarPlataforma('Xbox');
console.log("Plataformas: ".concat(meuJogo.plataforma));
console.log("Tempo estimado para terminar o jogo: ".concat(meuJogo.estimarTempoJogo()));

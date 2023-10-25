import { LivroCategoria } from "./obj2";

const listaDeLivros : LivroCategoria[] = [
    new LivroCategoria('A Biblioteca da Meia-Noite', 'Matt Haig', 2020, 'Mistério'),
    new LivroCategoria('É Assim que Acaba: 1', 'Colleen Hoover', 2016, 'Romance')
];

listaDeLivros.forEach((livro) => {
    livro.exibirDetalhes();
    if (livro.antigo()) {
        console.log(`É antigo`)
    } else {
        console.log(`Não é antigo`)
    }
})
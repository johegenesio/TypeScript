"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj2_1 = require("./obj2");
var listaDeLivros = [
    new obj2_1.LivroCategoria('A Biblioteca da Meia-Noite', 'Matt Haig', 2020, 'Mistério'),
    new obj2_1.LivroCategoria('É Assim que Acaba: 1', 'Colleen Hoover', 2016, 'Romance')
];
listaDeLivros.forEach(function (livro) {
    livro.exibirDetalhes();
    if (livro.antigo()) {
        console.log("\u00C9 antigo");
    }
    else {
        console.log("N\u00E3o \u00E9 antigo");
    }
});

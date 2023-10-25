"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj_1 = require("./obj");
var obj_2 = require("./obj");
var listaDeFilmes = [
    new obj_2.Romance('Titanic', 1988, 'Romance'),
    new obj_1.Acao('Maverick', 2022, 'Ação')
];
var recomendar = function (genero) {
    var resultado = listaDeFilmes.filter(function (filme) { return filme.genero === genero; });
    console.log(resultado);
};
listaDeFilmes.forEach(function (listaDeFilmes) {
    listaDeFilmes.exibirDetalhes();
});
recomendar("Romance");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca(nome, totalVisitantes) {
        if (nome === void 0) { nome = ''; }
        if (totalVisitantes === void 0) { totalVisitantes = 0; }
        this.nome = nome;
        this.totalVisitantes = totalVisitantes;
    }
    Biblioteca.prototype.registrarVisita = function () {
        this.totalVisitantes++;
    };
    Biblioteca.prototype.obterTotalVisitantes = function () {
        return this.totalVisitantes;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;

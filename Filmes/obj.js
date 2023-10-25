"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Romance = exports.Acao = exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(titulo, ano, genero) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }
    Filme.prototype.exibirDetalhes = function () {
        console.log("Titulo: ".concat(this.titulo, ", ano: ").concat(this.ano, ", genero: ").concat(this.genero));
    };
    return Filme;
}());
exports.Filme = Filme;
var Acao = /** @class */ (function (_super) {
    __extends(Acao, _super);
    function Acao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.genero = 'Ação';
        return _this;
    }
    return Acao;
}(Filme));
exports.Acao = Acao;
var Romance = /** @class */ (function (_super) {
    __extends(Romance, _super);
    function Romance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.genero = 'Romance';
        return _this;
    }
    return Romance;
}(Filme));
exports.Romance = Romance;

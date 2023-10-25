"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoquinhoDigital = void 0;
var PoquinhoDigital = /** @class */ (function () {
    function PoquinhoDigital(saldo, objetivo) {
        this.saldo = saldo;
        this.objetivo = objetivo;
    }
    PoquinhoDigital.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    PoquinhoDigital.prototype.retirar = function (valor) {
        if (valor > this.saldo) {
            console.log("saldo insuficiente");
        }
        else {
            console.log("retirado com sucesso");
        }
    };
    PoquinhoDigital.prototype.definir = function (valor) {
        this.objetivo = valor;
    };
    PoquinhoDigital.prototype.verificarProgresso = function () {
        var resultado = (this.saldo / this.objetivo) * 100;
        console.log("Porcentagem de progresso: ".concat(resultado));
    };
    return PoquinhoDigital;
}());
exports.PoquinhoDigital = PoquinhoDigital;
var conta = new PoquinhoDigital(0, 100);
console.log("o saldo \u00E9: ".concat(conta.saldo));
console.log("o objetivo \u00E9: ".concat(conta.objetivo));
conta.verificarProgresso();
conta.definir(200);
conta.depositar(400);
conta.retirar(100);
conta.verificarProgresso();

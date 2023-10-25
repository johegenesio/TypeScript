export class PoquinhoDigital {
    saldo: number;
    objetivo: number;

    constructor(saldo: number, objetivo: number) {
        this.saldo = saldo;
        this.objetivo = objetivo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    retirar(valor: number) {
        if (valor > this.saldo) {
            console.log(`saldo insuficiente`);
        } else {
            console.log(`retirado com sucesso`);
        }
    }

    definir(valor: number) {
        this.objetivo = valor;
    }

    verificarProgresso() {
        const resultado = (this.saldo / this.objetivo) * 100;
        console.log(`Porcentagem de progresso: ${resultado}`)
    }
}

const conta = new PoquinhoDigital(0, 100);
console.log(`o saldo é: ${conta.saldo}`);
console.log(`o objetivo é: ${conta.objetivo}`);
conta.verificarProgresso();
conta.definir(200);
conta.depositar(400);
conta.retirar(100);
conta.verificarProgresso();


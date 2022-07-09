
 export class GeradorCPF {
    constructor() {

    }

    cria() {
        const cpfParcial = this.randNumeros(100000000, 999999999);
        const digito1 = this.criaDigito(String(cpfParcial));
        const digito2 = this.criaDigito(String(cpfParcial) + digito1)
        const cpfCompleto = String(cpfParcial) + digito1 + digito2
        return cpfCompleto;

    }

    randNumeros(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    criaDigito(cpfParcial) {
        const cpfArray = [... cpfParcial]
        let multiplicador = cpfParcial.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (multiplicador * Number(val));
            multiplicador--;
            return ac;
        }, 0)
        const digito = (11 - (total % 11));
        return digito;
    }

}

//const novoCpf = new CeradorCPF();
//novoCpf.cria();
// Class criada para validar CPF

export class ValidadorCPF {
    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
    }

    valida() {
        if(this.cpfLimpo.length != 11) return false;
        if(this.cpfLimpo == '') return false;
        if(this.isSequencial(this.cpfLimpo)) return false;

        const cpfParcial = this.cpfLimpo.slice(0, 9);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const cpfCompleto = cpfParcial + digito1 + digito2;

        if(cpfCompleto === this.cpfLimpo) return true;
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

    isSequencial(cpf) {
        const sequencia = cpf[0].repeat(cpf.length)
        if(sequencia == cpf) return true;
    }
}

//const validadorCpf = new ValidadorCPF('');
//console.log(validadorCpf.valida());
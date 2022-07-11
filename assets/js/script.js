import {ValidadorCPF} from "./modules/ValidadorCPF.js";
import {GeradorCPF} from './modules/GeradorCPF.js'


function validaCampoCPF() {
    return {
        campo: document.querySelector('.campo-cpf'),
        campoError: document.querySelector('.txt-error'),
        validar: document.querySelector('.validar'),

        evento: function() {
            this.validar.addEventListener('click', () => {
                
                for(let mensagem of document.querySelectorAll('.msg-txt')) {
                    mensagem.remove();
                }

                if(!this.campo.value) {
                    this.status(false, 'Campo está vazio.')
                }

                this.validaCpf();
            })
        },

        validaCpf: function() {
            const cpf = new ValidadorCPF(this.campo.value);
            cpf.valida();
            console.log(cpf.valida())
            if(cpf.valida()) {
                this.status(true, 'CPF válido!')
            } else {               
                this.status(false, 'CPF inválido!')
            }
        },

        status: function(sit, msg) {
            const div = document.createElement('div')
            div.innerText = msg;
            if(sit == true) {
                div.style.backgroundColor = 'rgb(71, 218, 145)';
                div.style.border = '0.5px solid rgb(11, 133, 82)';
                div.classList.add('msg-txt');
                this.validar.insertAdjacentElement('afterend', div);
            } else if (sit == false) {
                div.style.backgroundColor = 'rgb(223, 102, 102)';
                div.style.border = '0.5px solid red';
                div.classList.add('msg-txt');
                this.validar.insertAdjacentElement('afterend', div);
            }
        }
    }
}
const CampoCPF = validaCampoCPF();
CampoCPF.evento();







function GeraCPF() {
    return {
        gera: document.querySelector('.gera'),
        campo: document.querySelector('.gera-cpf'),

        evento: function() {
            this.gera.addEventListener('click', () => {
                this.geraCpf();
            })
        },

        geraCpf: function() {
            const cpf = new GeradorCPF();
            this.adicionaCPF(cpf.cria())
        },

        adicionaCPF: function(cpf) {
            this.campo.value = this.cpfFormatado(cpf)
        },

        cpfFormatado: function(cpf) {
            return (cpf.slice(0, 3) + '.' +
                    cpf.slice(3, 6) + '.' +
                    cpf.slice(6, 9) + '-' +
                    cpf.slice(9, 12)
                    );
        }
    }
}
const gera = GeraCPF();
gera.evento()
import { calculaImc } from './oms.js';
import { Conta } from './models/conta.js'

// configurate object
// O configuration object é passado como um parâmetro apenas para funções, métodos e construtores de classe.
const imc = calculaImc({ altura: 1.71, peso: 68 });
console.log(imc);

const conta = new Conta({
    titular: 'Flavio',
    banco: '123',
    agencia: '456',
    numero: '789'
});

console.log(conta);

const object1 = { nome: 'Flávio' }
const object2 = { peso: 78 }

Object.assign(object1, object2);
console.log(object1);

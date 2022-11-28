export class Conta {

    constructor({ titular, banco, agencia, numero }) {
        // adicioma
        
        Object.assign(this, { titular, banco, agencia, numero });
    }
}


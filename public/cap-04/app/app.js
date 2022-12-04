import { memoizer } from './infra/memoizer.js'

function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
};

const somaDoisNumerosM = memoizer(somaDoisNumeros);
console.log(somaDoisNumerosM(5, 5))
console.log(somaDoisNumerosM(10, 10))
console.log(somaDoisNumerosM(5, 5));

// função recursiva
const fatorial = memoizer(n =>  {
    if (n <= 1) return 1;
    return n * fatorial(--n)
});


// const fatorialM = memoizer(factorial);
const f1 = fatorial(4);
const f2 = fatorial(3);
console.log(f1)
console.log(f2)

const fetchHandler = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);

const getNotaFromId = id => 
    fetch(`http://localhost:3000/notas/${id}`)
        .then(fetchHandler);
// getNotaFromId(1)
//     .then(console.log);
const getNotaFromIdM = memoizer(getNotaFromId);
getNotaFromIdM(1)
    .then(console.log)
    .then(getNotaFromIdM(1))
export function memoizer(fn) {
    const cache = new Map();
    // rest operators
    return (...args) => {
        // transforma numa string
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log(`Buscou do cache ${args}`);
            return cache.get(key);
        } else {
            console.log(key);
            // spread operators
            const result = fn(...args);
            console.log(`Não encontrou no cache ${key}. Adicionando no cache`);
            cache.set(key, result)
            return result;
        }
    }
}
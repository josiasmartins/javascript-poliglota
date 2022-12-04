export function memoizer(fn) {
    // rest operators
    return (...args) => {
        // spread operators
        const result = fn(...args);
        return result;
    }
}
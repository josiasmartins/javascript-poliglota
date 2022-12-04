export const decorate = (clazz, handler) => {
    // retorna um array com todas as propriedades
    Object.keys(handler).forEach(property => {
        const decorators = handler[property];
        decorators.forEach(decorator => {
            const method = clazz.prototype[property];
            clazz.prototype[property] = function(...args) {
                return decorator(method.bind(this), property, args)
            }
        });
    });
}
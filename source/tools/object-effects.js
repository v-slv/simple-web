
/**
 * The object effect is a simple tool, that allows you to set an automatic synchronous operations execution on a given object whenever its properties change
 * It uses a Proxy object to trap all of the changes of the original data object that will trigger the operations execution in the given order
 * @param {*} data any object
 * @param {*} operations an array of functions with a unique parameter representing the current state of the processed data object, that could implement a specific logic
 * and could return a processed data object that could be furtherly processed by the next operation
 * @returns 
 */
export function objectEffects(data, effects) {
    return new Proxy(data, {
        set: function(t, p, n, r) {
            t[p] = n;
            executeEffects(t, effects, 0);
            return true;
        }
    });
}

function executeEffects(data, effects, index) {
    if (index < effects.length) {
        executeEffects(effects[index](data), effects, index + 1);
    }
}



/**
 * A pipeline is a simple, working in isolation, scope that allows you to automatically perform synchronous operations on a given object whenever its properties change
 * It uses a Proxy object to trap all of the changes of the original data object that will trigger the operations execution in the given order
 * @param {*} data any object
 * @param {*} operations an array of functions with a unique parameter representing the current state of the processed data object, that could implement a specific logic
 * and could return a processed data object that could be furtherly processed by the next operation
 * @returns 
 */
export function pipeline(data, operations) {

    return new Proxy(data, {
        set: function(t, p, n, r) {
            executePipes(t, operations, 0);
            t[p] = n;
            return true;
        }
    });
}

function executeOperations(data, operations, index) {
    if (index < operations.length) {
        executeOperations(operations[index](data), operations, index + 1);
    }
}

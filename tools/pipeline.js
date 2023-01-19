
/**
 * A pipeline is a simple, working in isolation, function that allows you to automatically perform synchronous operations on an object whenever its properties change
 * It uses a Proxy object that traps all of the changes on the original data object that will trigger the operations execetion in the given order
 * @param {*} data 
 * @param {*} operations 
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

function executePipes(data, operations, index) {

}

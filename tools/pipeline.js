
/**
 * A pipeline is a simple tool that allows you to execute different pipes representing behaviours of a given data object
 * Could be compared with data binding state-machine but in a very simple way using JS Proxy
 * The Proxy set a trap on the initial data object, every time a property change the pipes are reexecuted in the given order
 * @param {*} data 
 * @param {*} pipes 
 * @returns 
 */
export function pipeline(data, pipes) {

    return new Proxy(data, {
        set: function(t, p, n, r) {
            executePipes(t, pipes, 0);
            t[p] = n;
            return true;
        }
    });
}

function executePipes(data, pipes, index) {

}
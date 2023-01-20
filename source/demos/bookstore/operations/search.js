export function search(collection, prop, query) {
    collection.filter(x => {
        if (!query) {
            return true;
        }
        return query.toUpperCase().indexOf(x[prop].toUpperCase()) > -1;
    })
}
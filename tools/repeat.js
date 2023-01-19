export function repeat(host, collection, itemRenderCallback) {
    if (!(host instanceof HTMLElement)) {
        return;
    }

    if (!Array.isArray(collection)) {
        return;
    }

    let template = '';
    for(let i = 0; i < collection.length; i++) {
        const itemTemplate = itemRenderCallback(collection[i], i);
        template += itemTemplate;
    }
    host.innerHTML = template;
}
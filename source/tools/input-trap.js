export function inputTrap(inputEl, callback) {
    if (!(inputEl instanceof HTMLInputElement)) {
        return;
    }

    inputEl.addEventListener('input', (e) => {
        callback(e.target.value)
    });
}
function setStorage(name, item) {
    let jsonString = JSON.stringify(item);
    localStorage.setItem(name, jsonString);
}

function getStorage(name) {
    let jsonString = localStorage.getItem(name);
    let item = JSON.parse(jsonString);

    return item;
}
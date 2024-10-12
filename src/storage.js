function setStorage(name, item) {
    let jsonString = JSON.stringify(item);
    localStorage.setItem(name, jsonString);
}

function getStorage(name) {
    let jsonString = localStorage.getItem(name);

    if (jsonString) {
        return JSON.parse(jsonString);
    }
    return null;
}
function setStorage(name, item) {
    let jsonString = JSON.stringify(item);
    localStorage.setItem(name, jsonString);
}

function getStorage(name) {
    let jsonString = localStorage.getItem(name);
    let item = JSON.parse(jsonString);

    return item;
}

function addCard(numbers) {
    const newId = cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 0;

    const newCard = {
        id: newId,
        numbers: numbers
    };

    cards.push(newCard);

    setStorage('cards', cards);

    render_cards_container();
}

function removeCard(id) {
    cards = cards.filter(card => card.id !== id);
    setStorage('cards', cards);

    render_cards_container();
}

let new_card_selected_numbers = [];
let cards = [];

render_creater_card();
render_cards_container();
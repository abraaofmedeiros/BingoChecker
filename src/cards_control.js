function addCard(numbers) {
    const newId = cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 0;

    const newCard = {
        id: newId,
        numbers: numbers
    };

    cards.push(newCard);
    setStorage('cards', cards);

    let card_node = generate_card_node(newCard);
    card_nodes.push(card_node);

    render_cards_container();
}

function removeCard(id) {
    cards = cards.filter(card => card.id !== id);
    setStorage('cards', cards);

    index = getCardNodesIndexOf(id)
    card_nodes.splice(index, 1)

    render_cards_container();
}

function putCard(new_version_card) {
    let index = cards.findIndex(card => card.id === new_version_card.id);

    if (index !== -1) {
        cards[index] = new_version_card;
    }

    setStorage('cards', cards);

    let card_node = generate_card_node(new_version_card);
    updateCardNode(new_version_card.id, card_node);

    render_cards_container();
}

function getCard(id) {
    let index = cards.findIndex(card => card.id == id);

    let card = cards[index];
    return card;
}
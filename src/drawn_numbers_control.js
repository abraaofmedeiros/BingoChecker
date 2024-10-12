function setDrawnNumbers() {
    setStorage('drawn_numbers', drawn_numbers);

    render_game_card();
    generate_card_nodes();
    render_cards_container();
}

function getDrawnNumbers() {
    let storedNumbers = getStorage('drawn_numbers');

    if (storedNumbers) {
        return storedNumbers.map(number => parseInt(number));
    }
    return [];
}
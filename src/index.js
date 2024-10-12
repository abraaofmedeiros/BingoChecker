const game_dimension = 60;
const card_size = 9;

/*let cards = [
    {
        id: 0,
        numbers: [10, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        id: 1,
        numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1]
    }
];*/

let cards = getCards();

const card_nodes = cards.map(card => {
    return generate_card_node(card)
    
})

let new_card_selected_numbers = [];

render_creater_card();
render_cards_container();
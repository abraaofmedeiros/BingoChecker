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
let drawn_numbers = getDrawnNumbers();
let new_card_selected_numbers = [];

let card_nodes = []; 
generate_card_nodes();

render_game_card();
render_creater_card();
render_cards_container();
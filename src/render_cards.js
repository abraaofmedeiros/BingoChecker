const cards_container = document.getElementById("cards_container");

function generate_card_node(card) {
    let card_container = document.createElement('div');
    card_container.classList.add('card-container');
    card_container.setAttribute('data-card-id', card.id);

    bingo_card_element = document.createElement('div');
    bingo_card_element.classList.add('bingo-card');

    numbers = card.numbers.sort((a, b) => a - b);

    numbers.forEach(number => {
        const element = document.createElement('div');
        element.classList.add('bingo-number');
        element.textContent = number;

        bingo_card_element.appendChild(element);
    });

    card_container.appendChild(bingo_card_element);

    // Botão para editar
    editBtn = document.createElement("button");
    editBtn.textContent = "editar";

    editBtn.addEventListener("click", () => {
        edit_card_node = generate_edit_card_node(card);

        updateCardNode(card.id, edit_card_node);
        render_cards_container();
    })

    card_container.appendChild(editBtn);
    
    // Botão para excluir
    deleteBtn = document.createElement("button");
    deleteBtn.textContent = "excluir";

    deleteBtn.addEventListener("click", () => {
        removeCard(card.id)
    })
    
    card_container.appendChild(deleteBtn);

    return card_container;
}

function render_cards_container(){
    cards_container.innerHTML = "";

    card_nodes.forEach(node => {
        cards_container.appendChild(node)
    });
}
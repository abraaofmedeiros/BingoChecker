const cards_container = document.getElementById("cards_container");

function render_card(card) {
    const card_container = document.createElement('div');
    card_container.classList.add('card-container');

    bingo_card_element = document.createElement('div');
    bingo_card_element.classList.add('bingo-card');

    card.numbers.forEach(number => {
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
        // implementar
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

    cards.forEach(card => {
        card_element = render_card(card);

        cards_container.appendChild(card_element)
    });
}


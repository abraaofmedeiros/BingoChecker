function generate_edit_card_node(card) {
    numbers = [...card.numbers];
    let n_selected = numbers.length;

    const newCard = {
        id: card.id,
        numbers: numbers
    }

    const container = document.createElement("div");
    container.classList.add("edit-card-container")
    container.setAttribute("data-card-id", card.id);

    // Cartela com botões selecionáveis
    const board_element = render_selectable_card(numbers, () => {

        edit_card_node = generate_edit_card_node(newCard);
        updateCardNode(newCard.id, edit_card_node);

        render_cards_container();
    })
    container.appendChild(board_element)

    // Botão para salvar alteração
    if (n_selected == card_size) {
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "salvar";

        saveBtn.addEventListener('click', () => {
            putCard(newCard)
        });

        container.appendChild(saveBtn);
    }


    // Botão para descartar alteração
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "cancelar";

    cancelBtn.addEventListener('click', () => {
        let old_card = getCard(card.id);
        let node = generate_card_node(old_card);

        updateCardNode(old_card.id, node);
        render_cards_container();
    })

    container.appendChild(cancelBtn);

    return container;
}
const card_creater_element = document.getElementById("creater_card");

function render_creater_card() {
    card_creater_element.innerHTML = "";
    n_selected = new_card_selected_numbers.length;

    card_container = render_selectable_card(new_card_selected_numbers, render_creater_card);
    
    card_creater_element.appendChild(card_container);

    // Botão de limpar a seleção
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "limpar";

    resetBtn.addEventListener('click', () => {
        new_card_selected_numbers = [];
        render_creater_card();
    });
    card_creater_element.appendChild(resetBtn);

    // Botão de enviar
    if (n_selected == card_size) {
        const submitBtn = document.createElement('button');
        submitBtn.textContent = "adicionar";

        submitBtn.addEventListener('click', () => {
            addCard(new_card_selected_numbers);
            new_card_selected_numbers = [];
            render_creater_card();
        });

        card_creater_element.appendChild(submitBtn);
    }

}
const card_creater_element = document.getElementById("creater_card");

function render_creater_card() {
    card_creater_element.innerHTML = "";
    n_selected = new_card_selected_numbers.length;
    max_selected = 9;

    // Container
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('bingo-card');

    // Renderizando o container com botões
    container.innerHTML = "";

    for (let i = 1; i <= 60; i++) {
        const btn = document.createElement('button');

        btn.classList.add('bingo-number');
        btn.setAttribute('data-value', i);
        btn.textContent = i;

        if (new_card_selected_numbers.includes(i)) {
            btn.classList.add('selected');

            btn.addEventListener('click', () => {
                let index = new_card_selected_numbers.indexOf(i);
                new_card_selected_numbers.splice(index, 1);

                render_creater_card();
            });

        } else {
            if (n_selected < max_selected) {
                btn.addEventListener('click', () => {
                    new_card_selected_numbers.push(i);
                    render_creater_card();
                })
            } else {
                btn.classList.add('inactive');
            }
        }

        container.appendChild(btn);
    }
    card_creater_element.appendChild(container);

    // Botão de limpar a seleção
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "limpar";

    resetBtn.addEventListener('click', () => {
        new_card_selected_numbers = [];
        render_creater_card();
    });
    card_creater_element.appendChild(resetBtn);

    // Botão de enviar
    if (n_selected == max_selected) {
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


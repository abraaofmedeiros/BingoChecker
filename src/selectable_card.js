function render_selectable_card(selected_numbers, render_method) {
    let n_selected = selected_numbers.length;

    // Container
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('bingo-card');

    // Renderizando o container com botões
    container.innerHTML = "";

    for (let i = 1; i <= game_dimension; i++) {
        const btn = document.createElement('button');

        btn.classList.add('bingo-number');
        btn.setAttribute('data-value', i);
        btn.textContent = i;

        if (selected_numbers.includes(i)) {
            btn.classList.add('selected');
            
            // Desmarcar item
            btn.addEventListener('click', () => {
                let index = selected_numbers.indexOf(i);
                selected_numbers.splice(index, 1);

                render_method();
            });

        } else {
            if (n_selected < card_size) {
                // Marcar item
                btn.addEventListener('click', () => {
                    selected_numbers.push(i);
                    render_method();
                })
            } else {
                btn.classList.add('inactive');
            }
        }

        container.appendChild(btn);
    }

    return container;
}
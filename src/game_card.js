const game_card_element = document.getElementById("game_card");

function render_game_card() {
    drawn_numbers = getDrawnNumbers();
    game_card_element.innerHTML = "";

    card_container = render_selectable_card(drawn_numbers, setDrawnNumbers);
    game_card_element.appendChild(card_container);

    // Botão para limpar
    clearBtn = document.createElement("button");
    clearBtn.textContent = "limpar";

    clearBtn.addEventListener("click", () => {
        drawn_numbers = [];

        setDrawnNumbers();
    });

    game_card_element.appendChild(clearBtn);
}
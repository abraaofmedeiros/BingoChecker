class Card {
    constructor({ id, numbers }) {
        this.id = id;
        this.numbers = numbers

        this.container = document.createElement('div');
        this.container.classList.add('card_container');

        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('bingo-card');

        this.editBtn = document.createElement('button');
        this.editBtn.textContent = "editar";
        this.editBtn.addEventListener('click', this.renderEditCard.bind(this));

        this.deleteBtn = document.createElement('button');
        this.deleteBtn.textContent = "deletar";
        this.deleteBtn.addEventListener('click', () => {
            cardManager.deleteCard(this);
        });

        this.renderCard();
    }

    renderCard() {
        this.container.innerHTML = "";
        this.container.appendChild(this.cardContainer);
        this.container.appendChild(this.editBtn);
        this.container.appendChild(this.deleteBtn);


        this.cardContainer.innerHTML = "";
        this.numbers.sort((a, b) => a - b);

        this.numbers.forEach(number => {
            const numberBtn = document.createElement("div");
            numberBtn.classList.add('bingo-number');
            numberBtn.textContent = number;

            /*if (this.selectedNumbers.has(i)) {
                numberBtn.classList.add('selected');
            }*/

            this.cardContainer.appendChild(numberBtn);
        });
    };

    renderEditCard() {
        this.container.innerHTML = "";

        let editCard = new EditCard(this);
        this.container.appendChild(editCard.container);
    }

    getContainer() {
        let drawn_numbers = application.getDrawnNumbers();

        [...this.cardContainer.children].forEach(numberElement => {
            let i = parseInt(numberElement.textContent);

            if (drawn_numbers.has(i)) {
                numberElement.classList.add('drawn');
            } else {
                numberElement.classList.remove('drawn');
            }
        });
        return this.container;
    }


}

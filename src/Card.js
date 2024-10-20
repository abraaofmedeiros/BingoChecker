class Card {
    constructor({ id, numbers }) {
        this.id = id;
        this.numbers = new Set([...numbers].sort((a, b) => a - b));

        this.container = document.createElement('div');
        this.container.classList.add('card-container', 'card');

        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('bingo-card');

        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add('buttons-container')
        
        this.editBtn = document.createElement('button');
        this.editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        this.editBtn.classList.add('edit-btn');
        this.editBtn.addEventListener('click', this.renderEditCard.bind(this));
        this.buttonsContainer.appendChild(this.editBtn);
        
        this.deleteBtn = document.createElement('button');
        this.deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        this.deleteBtn.classList.add('delete-btn')
        this.deleteBtn.addEventListener('click', () => {
            cardManager.deleteCard(this);
        });
        this.buttonsContainer.appendChild(this.deleteBtn);
        
        this.renderCard();
    }
    
    renderCard() {
        this.container.innerHTML = "";
        this.container.appendChild(this.cardContainer);
        this.container.appendChild(this.buttonsContainer);

        this.cardContainer.innerHTML = "";

        this.numbers.forEach(number => {
            const numberBtn = document.createElement("div");
            numberBtn.classList.add('bingo-number');
            numberBtn.textContent = number;

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


        let isWinner = [...this.numbers].every(num => drawn_numbers.has(num))

        if (isWinner) {
            this.container.classList.add('winner-card');
        } else {
            this.container.classList.remove('winner-card');
        }

        return this.container;
    }


}

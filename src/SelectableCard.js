class SelectableCard {
    constructor(numbers=[]) {
        this.selectedNumbers = new Set(numbers);

        this.container = document.createElement('div');
        this.container.classList.add('selectable-card', 'card-container')

        this.cardContainer = document.createElement('div');
        this.cardContainer.className = 'bingo-card';
        this.container.appendChild(this.cardContainer);

        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add('buttons-container');
        this.container.appendChild(this.buttonsContainer);

        this.clearBtn = document.createElement('button');
        this.clearBtn.innerHTML = 'Desmarcar Todos';
        this.clearBtn.classList.add('clear-btn');
        this.clearBtn.addEventListener('click', this.clearCard.bind(this));

        this.buttonsContainer.appendChild(this.clearBtn); 

        this.renderCard();
    }

    renderCard() {
        this.cardContainer.innerHTML = "";

        for (let i = 1; i <= 60; i++) {
            const numberBtn = document.createElement("div");
            numberBtn.classList.add('bingo-number');
            numberBtn.textContent = i;
            numberBtn.addEventListener('click', () => this.markNumber(i));

            if (this.selectedNumbers.has(i)) {
                numberBtn.classList.add('selected');
            }

            this.cardContainer.appendChild(numberBtn);
        }
    }

    markNumber(number) {
        if (this.selectedNumbers.has(number)) {
            this.selectedNumbers.delete(number);
        } else {
            this.selectedNumbers.add(number);
        }

        this.renderCard();
    }

    getSelectedNumbers() {
        return this.selectedNumbers;
    }

    clearCard() {
        this.selectedNumbers.clear();

        this.renderCard();
    }

}
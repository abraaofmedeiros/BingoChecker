class CreaterCard extends SelectableCard {
    constructor(numbers) {
        super(numbers);

        this.container.classList.add('creater-card');

        this.saveBtn = document.createElement('button');
        this.saveBtn.innerHTML = 'Adicionar Cartela';
        this.saveBtn.classList.add('save-btn')
        this.saveBtn.addEventListener("click", this.save.bind(this))

        this.buttonsContainer.appendChild(this.saveBtn);

        this.render();
    }

    render() {
        this.renderCard()

        let completeBoard = this.selectedNumbers.size === 10;

        if (completeBoard) {
            this.container.classList.add('complete-board');
        } else {
            this.container.classList.remove('complete-board');
        }

        this.saveBtn.disabled = !completeBoard;
    }

    markNumber(number) {
        if (this.selectedNumbers.has(number)) {
            this.selectedNumbers.delete(number);
        } else {
            if (this.selectedNumbers.size < 10) {
                this.selectedNumbers.add(number);
            }
        }

        this.render();
    }

    save() {
        let numbers = this.getSelectedNumbers();
        cardManager.addCard(numbers);

        this.clearCard();
    }

    clearCard() {
        this.selectedNumbers.clear();

        this.render();
    }
}
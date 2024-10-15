class CreaterCard extends SelectableCard {
    constructor(numbers) {
        super(numbers);

        this.saveBtn = document.createElement('button');
        this.saveBtn.textContent = "salvar";
        this.saveBtn.addEventListener("click", this.save.bind(this))

        this.container.appendChild(this.saveBtn);

        this.render();
    }

    render() {
        this.renderCard()
        this.saveBtn.disabled = this.selectedNumbers.size !== 10;
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
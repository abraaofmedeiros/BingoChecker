class MainCard extends SelectableCard {
    markNumber(number) {
        if (this.selectedNumbers.has(number)) {
            this.selectedNumbers.delete(number);
        } else {
            this.selectedNumbers.add(number);
        }

        application.setDrawnNumbers(this.selectedNumbers);
        this.renderCard();
    }

    renderCard() {
        this.selectedNumbers = application.getDrawnNumbers();
        super.renderCard();
    }

    clearCard() {
        this.selectedNumbers.clear();
        application.clearDrawnNumbers();

        this.renderCard();
    }
}
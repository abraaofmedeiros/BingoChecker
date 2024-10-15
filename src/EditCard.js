class EditCard extends CreaterCard {
    constructor({ id, numbers }) {
        super(numbers);

        this.id = id
    }

    save() {
        let card = {
            id: this.id,
            numbers: new Set(this.getSelectedNumbers())
        };

        cardManager.putCard(card);
    }
}
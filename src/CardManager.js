class CardManager {
    constructor() {
        this.container = document.createElement('div');
        this.cards = this.renderCards();
        this.render();
    }

    render() {
        this.container.innerHTML = "";

        this.cards.forEach(card => {
            this.container.appendChild(card.getContainer());
        });
    }

    getCards() {
        let cards = getStorage('cards') || [];

        cards = cards.map(card => {
            let numbers = card.numbers.map(number => parseInt(number));

            return {
                id: card.id,
                numbers: new Set(numbers)
            }
        });

        return cards;
    }

    setCards() {
        let cards = this.cards.map(({ id, numbers }) => {
            return { id, numbers: [...numbers] }
        })

        setStorage('cards', cards);
    }

    addCard(numbers) {
        let id = this.cards.length > 0 ? Math.max(...this.cards.map(card => card.id)) + 1 : 0;
        let card = new Card({ id, numbers });

        this.cards.push(card);
        this.setCards();
        this.render();
    }

    deleteCard({ id }) {
        this.cards = this.cards.filter(card => card.id !== id);
        this.setCards();
        this.render();
    }

    putCard({ id, numbers }) {
        let card = this.cards.find(card => card.id === id);

        if (card) {
            card.numbers = numbers;
            card.renderCard();
            this.setCards();
            this.render();
        }

    }

    renderCards() {
        let cards = this.getCards();

        return cards.map(card => {
            let cardObject = new Card(card);
            return cardObject;
        });
    }
}
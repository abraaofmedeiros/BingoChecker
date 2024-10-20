const application = {
    getDrawnNumbers() {
        let data = getStorage('drawn_numbers') || [];

        return new Set(data);
    },

    setDrawnNumbers(numbers) {
        let data = new Set(numbers);
        setStorage('drawn_numbers', [...data]);
        cardManager.render();
    },

    clearDrawnNumbers() {
        this.setDrawnNumbers([])
    }
}
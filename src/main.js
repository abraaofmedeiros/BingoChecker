let cardManager = new CardManager();

// Inicialização cartela principal
let gameCard = new MainCard();
document.getElementById('game_card_board').appendChild(gameCard.container);

// Inicialização cartela de cadastro
let createrCard = new CreaterCard();
document.getElementById('creater_card_board').appendChild(createrCard.container);

// Inicialização das cartelas cadastradas
document.getElementById('cards').appendChild(cardManager.container);
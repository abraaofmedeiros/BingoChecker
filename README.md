# Projeto de Cartelas de Bingo

Esta é uma aplicação para checar cartelas de bingo desenvolvido utilizando HTML, CSS e JavaScript. Ele permite cadastrar cartelas de bingo, marcar números sorteados e atualizar automaticamente todas as cartelas.

## Funcionalidades

- **Cadastro de Cartelas**: Adicione novas cartelas de bingo.
- **Edição e Exclusão de Cartelas**: Edite ou exclua cartelas cadastradas.
- **Salvamento de Dados**: Os dados das cartelas e dos números sorteados são armazenados no localStorage.
- **Marcação Automática**: Marque automaticamente todos os números sorteados nas cartelas cadastradas.
- **Orientação a Objetos e Componentização**: Utilização de conceitos de orientação a objetos e componentização para um código mais modular e reutilizável.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do Projeto

- **index.html**: Estrutura HTML da aplicação.
- **README.md**: Documentação do projeto, incluindo descrição e instruções de uso.
- **src**
  - **SelectableCard.js**: Componente que cria uma cartela com os botões selecionais.
  - **CreaterCard.js**: Componente que herda a classe SelectableCard própria para a criação de novas cartelas.
  - **EditCard.js**: Componente para a edição de cartelas existentes.
  - **MainCard.js**: Componente de cartela selecionável para selecionar os números sorteados.
  - **Card.js**: Componente para representar uma cartela criada.
  - **CardManager.js**: Gerenciador das cartelas, incluindo funções para adicionar, editar e excluir cartelas.
  - **application.js**: Coordena os números sorteados.
  - **main.js**: Ponto de entrada principal da aplicação.
  - **storage.js**: Função para salvar e ler dados do localStorage.
- **style.css**: Estilos aplicados aos componentes da aplicação.

## Como Executar o Projeto

1. Acesse https://abraaofmedeiros.github.io/BingoChecker/.

2. Abra o arquivo index.html no seu navegador preferido.

3. Na seção "Cadastro de Novas Cartelas", selecione os números que compoẽm a cartela e em seguida clique em "Adicionar Cartela" e visualize a nova cartela

4. Na seção "Cartela Principal", selecione os números sorteados no bingo e veja os números sendo marcados nas cartelas cadastradas.


### Contribuição
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso, faça um fork do repositório, crie um branch e envie um pull request.
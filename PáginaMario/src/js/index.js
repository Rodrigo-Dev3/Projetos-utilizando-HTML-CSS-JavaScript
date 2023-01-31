/* 
Objetivo 1 - quando o usuário clicar no botão 'vja o trailer', deve-se abrir o modal com o vídeo do trailer
Objetivo 2 - quando o usuario clicar no ' X ' localizado acima da tela do modal 'veja o trailer', deve-se fechar o modal
*/

// Preciso selecionar o elemento da página html e trazê-lo para o javascript para poder manipulá-lo
const button = document.querySelector('.button-trailer')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const video = document.querySelector('#video')
// Seleciona a propriedade do video 'src' - captura o link e o adiciona em uma variável
const linkVideo = video.src

function alternarModal(){
    //toggle ele verifica e faz a 'troca' das classes - nesse caso ele irá verificar se há a classe aberto - se tiver ele irá retirar ou se NÃO tiver ele irá colocar
    //Como essa ação é realizada duas vezes, para não repeti-la, cria-se essa função para executar a ação e depois retorna a execução do código normalmente
    //Caso essa ação necessitar ser modificada no futuro, basta modificar aqui e ela será implementada no restante do código
    modal.classList.toggle('aberto')
}

// () => representa uma função
button.addEventListener('click', () => {
    // classList possibilita modificar uma lista de classes, excluir, adicionar - .add é para adicionar uma classe nova - nesse caso a classe 'modal-aberto' para exibir a modal na tela quando clicar no botão
    alternarModal()
    video.setAttribute('src', linkVideo)
});

closeModal.addEventListener('click', () => {
    alternarModal()
    // Seta um atributo de um elemento - o primeiro parâmetro indica qual atributo deve ser 'setado' e o segundo indica o valor que será setado no atributo
    video.setAttribute('src', "")
});


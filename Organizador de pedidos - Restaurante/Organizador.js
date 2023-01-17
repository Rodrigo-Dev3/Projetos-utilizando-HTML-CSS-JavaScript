let comida = document.querySelector('#comida')
let bebida = document.querySelector('#bebida')
let botao = document.querySelector('.botao')


let resultadoPedidoC = document.querySelector('.resultadoPedidoComida')
let resultadoPedidoB = document.querySelector('.resultadoPedidoBebida')


botao.addEventListener('click', capturaComida)
botao.addEventListener('click', capturaBebida)
botao.addEventListener('click', adicionaPedido)
'oi'

function capturaComida(){
    resultadoPedidoC.textContent = comida.value
}

function capturaBebida(){
    resultadoPedidoB.textContent = bebida.value
}


let celula = document.querySelector('.tabela')

function adicionaPedido(){
    let linha = document.createElement('tr')
    let coluna = document.createElement('td')
    let coluna2 = document.createElement('td')
    
    let comi = resultadoPedidoC.textContent
    let bebi = resultadoPedidoB.textContent

    coluna.textContent = comi
    coluna2.textContent = bebi

    linha.appendChild(coluna)
    linha.appendChild(coluna2)

    let tabelaC = document.querySelector('.tabela')

    tabelaC.appendChild(linha)

}
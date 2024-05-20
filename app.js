// function muda_cor() {
//     var butao = document.getElementById("botao")
//     butao.style.backgroundColor = "red"
// }

// function retorna_cor() {
//     var butao = document.getElementById("botao")
//     butao.style.backgroundColor = "yellow"
// }

function mostra_elementos() {
    var classes = document.getElementsByClassName("oculto")

    for (i = 0; i < classes.length; i++) {
        classes[i].style.display = "flex"
    }
}
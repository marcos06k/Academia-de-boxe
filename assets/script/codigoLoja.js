
let arrayRecebidoNomeString = localStorage.getItem('arrayNome');
let arrayRecebidoNome= JSON.parse(arrayRecebidoNomeString);

console.log(arrayRecebidoNome);

let arrayRecebidoValorString = localStorage.getItem('arrayValor');
let arrayRecebidoValor= JSON.parse(arrayRecebidoValorString);

console.log(arrayRecebidoValor);

    let tabela = document.getElementById("tabela_produto")
    let pedidoMin = 10000000
    let pedidoMax = 99000000

    for (let i = 0; i < arrayRecebidoNome.length; i++) {
        tabela.innerHTML += "<tr> <td>"+ arrayRecebidoNome[i] + "</td> <td> R$ "+ parseFloat(arrayRecebidoValor[i]).toFixed(2) + "</td> <td> N° "+ Math.floor(Math.random() * (pedidoMax - pedidoMin + 1) + pedidoMin) + "</td> </tr>"
        console.log("t");
        
    }

  



let arrayRecebidoNomeString = localStorage.getItem('arrayNome');
let arrayRecebidoNome= JSON.parse(arrayRecebidoNomeString);

console.log(arrayRecebidoNome);

let arrayRecebidoValorString = localStorage.getItem('arrayValor');
let arrayRecebidoValor= JSON.parse(arrayRecebidoValorString);

console.log(arrayRecebidoValor);

    let tabela = document.getElementById("tabela_produto")
    let pedidoMin = 10000000
    let pedidoMax = 99000000
    let valorTotalPedido = 0

    for (let i = 0; i < arrayRecebidoNome.length; i++) {
     
        tabela.innerHTML += "<tr> <td>"+ arrayRecebidoNome[i] + "</td> <td> R$ "+ parseFloat(arrayRecebidoValor[i]).toFixed(2) + "</td>  <td>  <button onclick='removerItem("+i +")'> Remover</button></td> </tr>"
        valorTotalPedido += parseFloat(arrayRecebidoValor[i])
    }
    
    tabela.innerHTML += "<tr> <td> Total: </td> <td> R$ "+ valorTotalPedido.toFixed(2) + "</td> <td></td> </tr>"
    
    let valor = 0
    function removerItem(item){
        tabela.innerHTML = ""

        valorTotalPedido -= parseFloat(arrayRecebidoValor[item])

        arrayRecebidoNome.splice(parseInt(item),1)
        arrayRecebidoValor.splice(parseInt(item),1)

        for (let i = 0; i < arrayRecebidoNome.length; i++) {
            tabela.innerHTML += "<tr> <td>"+ arrayRecebidoNome[i] + "</td> <td> R$ "+ parseFloat(arrayRecebidoValor[i]).toFixed(2) + "</td>  <td>  <button onclick='removerItem("+i +")' style='width: 100px;height: 35px;border: none;color: white;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); background-color: black;'> Remover</button></td> </tr>"
        }
        tabela.innerHTML += "<tr> <td> Total: </td> <td> R$ "+ (valorTotalPedido) + "</td> <td></td> </tr>"
    }




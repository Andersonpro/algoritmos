//Refazer com novo array, pg 61 do livro

function encontraMenor(lista) {
  let menor = lista[0]
  let posicao = 0;
  for (j = 1; j < lista.length; j++) {
    if (lista[j] < menor) {
      menor = lista[j];
      posicao = j;
    }
  }
  return posicao;
}

function selectionSortSimplificado(lista) {
  let listaOrdenada = [];
  let tamanhoLista = lista.length;
  for (let i = 0; i < tamanhoLista; i++) {
    let indiceNovo = encontraMenor(lista);
    listaOrdenada.push(lista[indiceNovo]);
    lista.splice(indiceNovo, 1);
  }
  return listaOrdenada;
}

listaA = [0,1,0,1,0,1,0,1];
console.log(selectionSortSimplificado(listaA));
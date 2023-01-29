//Refazer com novo array, pg 61 do livro
function selectionSort(lista) {
  let menor;
  let indice;
  let aux;

  for (let i = 0; i < lista.length - 1; i++) {
    menor = lista[i];
    let mudou = false;
    for (let j = i + 1; j < lista.length; j++) {
      if (lista[j] < menor) {
        menor = lista[j];
        indice = j;
        mudou = true;
      }
    }
    if (mudou) {
      aux = lista[i];
      lista[i] = menor;
      lista[indice] = aux;
      console.log(lista);
    }
  }
}

listaA = [7, 2, 43, 1, 5, 25, 99, 8, 9, 45, 3];
console.log(listaA);
selectionSort(listaA);
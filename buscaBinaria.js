function buscaBinaria(lista, num) {

  let baixo = 0;
  let alto = lista.length - 1;
  while (baixo <= alto) {
    let meio = Math.trunc((alto + baixo) / 2) + (alto + baixo) % 2;
    let chute = lista[meio];
    if (chute == num) {
      return meio;
    }
    if (chute > num) {
      alto = meio - 1;
    }
    else {
      baixo = meio + 1;
    }

  }
  return NaN;
}

let numeros = [-34, -20, 9, 25, 27, 45, 51, 59, 68];
let num = 27;
let resultado = buscaBinaria(numeros, num);
console.log(`Número ${num} encontrado no índice ${resultado}.`);
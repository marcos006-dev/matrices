const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const fill2DimensionsArray = (rows, columns) => {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([0]);
    for (let j = 0; j < columns; j++) {
      arr[i][j] = randomInteger(1, 100);
    }
  }

  return arr;
};
const rows = randomInteger(1, 10);
const columns = randomInteger(1, 10);

const matriz1 = fill2DimensionsArray(rows, columns);
const matriz2 = fill2DimensionsArray(columns, rows);
console.table(matriz1);
console.table('------------------------------------------------');
console.table(matriz2);

let matriz3 = [0];

for (let i = 0; i < matriz1.length; i++) {
  matriz3[i] = [0];
  // recorrer las filas de la matriz 2
  for (let j = 0; j < matriz2[0].length; j++) {
    matriz3[i][j] = 0;
    // multiplicar cada fila de la matriz 1 por cada columna de la matriz 2
    for (let k = 0; k < matriz1[0].length; k++) {
      // console.log(
      //   `${matriz1[i][k]} * ${matriz2[k][j]} = ${matriz1[i][k] * matriz2[k][j]}`
      // );
      matriz3[i][j] += matriz1[i][k] * matriz2[k][j];
    }
  }
}

console.table(matriz3);

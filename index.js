const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function fill2DimensionsArray(rows, columns) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([0]);
    for (let j = 0; j < columns; j++) {
      arr[i][j] = randomInteger(1, 3);
    }
  }

  return arr;
}
// matriz 1
const rows = randomInteger(1, 2);
const columns = randomInteger(1, 2);

const matriz1 = fill2DimensionsArray(rows, columns);
const matriz2 = fill2DimensionsArray(columns, rows);
console.table(matriz1);
console.table('------------------------------------------------');
console.table(matriz2);

const matri3 = [...matriz1];
for (let i = 0; i < rows; i++) {
  matri3[i].map((item, index) => {
    // let result = item + matriz2[index][];
    // console.log(item);
    // console.log(index);

    for (let j = 0; j < matriz2[index].length; j++) {
      //   console.log(matriz2[index][j] * item);

      console.log(index);
    }
  });

  //   for (let j = 0; j < columns; j++) {
  //     console.log(`matriz 1 = ${matriz1[i][j]}`);
  //     console.log(`matriz 2 = ${matriz2[j][i]}`);

  //     matri3[i][j] = matriz1[i][j] * matriz2[j][i];
  //   }
}
// console.table('------------------------------------------------');

// console.table(matri3);

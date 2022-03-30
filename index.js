const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function fill2DimensionsArray(rows, columns) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([0]);
    for (let j = 0; j < columns; j++) {
      arr[i][j] = randomInteger(1, 5);
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

const matriz3 = [];

let suma;

// console.log(matriz1.length);
for (let i = 0; i < matriz1.length; i++) {
  suma = 0;
  for (let j = 0; j < matriz2.length; j++) {
    //   for (let z = 0; z < matriz1[i].length; z++) {
    // }
    // console.log(matriz1[i]);
    // console.log(matriz2[j][i]);

    for (let z = 0; z < matriz2[j].length; z++) {
      // suma = matriz1[i][z] * matriz2[j][z];
      console.log(matriz2[j][z] * matriz1[i][z]);
    }

    // console.log(suma);
  }
  //   console.log(
  //     `${matriz1[i][j]} * ${matriz2[j][i]} = ${matriz1[i][j] * matriz2[j][i]}`
  //   );
  //   // suma += matriz1[i][j] * matriz2[j][i];
  //   console.log(matriz1[i][j] * matriz2[j][i]);
  // matriz3.push(suma);

  // suma = 0;
  // console.log(matriz3);
}

// console.table('------------------------------------------------');

// console.table(matri3);

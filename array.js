// bodlogo 1
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
// bodlogo 1-1
console.log("ehnii elementrvv handah:", fruits[0]);
// bodlogo 1-2
console.log("svvliin  elementrvv handah:", fruits[4]);
// bodlogo 1-3
console.log("3 dahi  elementrvv handah:", fruits[2]);
// bodlogo 2
// array: [5, 6, 4, 12, 19, 121, 1, 7,  9, 63]
// Хэдэн ширхэг сондгой тоо байгаа вэ?
// Хэдэн ширхэг тэгш тоо байгаа вэ?
let numbers = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let evenN = 0;
let output = 0;
let oddN = 0;
for (let i = 0; i < numbers.length; i++) {
  output = numbers[i];
  if (output % 2 === 0) {
    evenN = evenN + 1;
  } else {
    oddN = oddN + 1;
  }
}
console.log("tegsh toonuud:", evenN, "sondgoi toonuud: ", oddN);
// bodlogo 3
// arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
// Array iin length iin oloh
// Array доторх тоонуудын нийлбэрийг ол.
// Array доторх тоонуудын average ол.
// Array доторх тоонуудын нийлбэрийг ол.
// Array доторх тэгш тоонуудын нийлбэрийг ол.
// Array доторх сондгой тоонуудын үржвэрийг ол.
// Хамгийн их тоог ол.
// Хамгийн бага тоог ол.
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
// bodlogo 3-1
console.log("array iin length", arrayOfNumbers.length);
// bodlogo 3-2
let sum3 = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum3 = sum3 + arrayOfNumbers[i];
}
console.log("Array доторх тоонуудын нийлбэр:", sum3);
// bodlogo 3-3
let sum4 = 0;
let average = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum4 = sum4 + arrayOfNumbers[i];
  average = sum4 / arrayOfNumbers.length;
}
console.log("Array доторх тоонуудын dundaj:", average);
// bodlogo 3 - 4 - 5
let evensum = 0;
let oddsum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 === 0) {
    evensum = evensum + arrayOfNumbers[i];
  } else {
    oddsum = oddsum + arrayOfNumbers[i];
  }
}
console.log(
  "tegsh toonii niilber:",
  evensum,
  "sondgoi toonii niilber:",
  oddsum
);
// bodlogo 3-6 -7
// let ihtoo = 0;
// let bagatoo = 0;
let max = arrayOfNumbers[0];
let min = arrayOfNumbers[0];
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > max) {
    max = arrayOfNumbers[i];
  } else if (arrayOfNumbers[i] < min) {
    min = arrayOfNumbers[i];
  }
}
console.log("ih:", max);
console.log("ih:", min);

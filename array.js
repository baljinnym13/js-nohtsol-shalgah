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
let sum = 0;
for (let i = numbers[0]; i < numbers.length; i++) {
  if (i % 2 == 0) {
    sum = sum + 1;
  } else {
    console.log("sondgoi toonuud:", sum);
  }
}
console.log("tegsh toonuud:", sum);
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
for (let i = arrayOfNumbers[0]; i < arrayOfNumbers.length; i++) {
  sum3 = sum3 + i;
}
console.log("Array доторх тоонуудын нийлбэр:", sum3);

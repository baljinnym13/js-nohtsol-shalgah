// // bodlogo1 10 хүртэлх натурал тоог хэвлэх программ бич
for (let i = 1; i <= 10; i++) {
  console.log("10 hvrtel nat too :", i);
}

// //  bodlogo 2 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
// console.log("Odd Numbers:");
// for (let j = 1; j <= 10; j += 2) {
//   console.log(j);
// }
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log("sondgoi too:", i);
  }
}

// // bodlogo 3 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
// console.log("even numbers");
for (let k = 2; k <= 10; k++) {
  if (k % 2 == 0) {
    console.log("tegsh too:", k);
  }
}

// // 4 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
let sum4 = 0;
for (let l = 1; l <= 100; l++) {
  sum4 += l;
}
console.log("The sum of natural numbers from 1 to 100 is:", sum4);

// // 5 N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич jishee ni: input: 101 output: 5151
let sum5 = 0;
let s = Number(prompt("duriin too oruul"));
for (let i = 1; i <= s; i++) {
  sum5 += i;
}
console.log("The sum of the natural numbers is:", sum5);

// // 6 N тооны факториал олох программ бич jishee ni: input: 4 output: 24
// let fact = 1;
// while (n > 1) {
//   fact *= n;
//   n--;
// }
// console.log("The factorial is:", fact);
let d = Number(prompt("toogoo oruul !!"));
let fac = 1;
while (d > 0) {
  fac = fac * d;
  d--;
}
console.log("facteriol too", fac);

//  bodlogo 7
let number = 12323423423769679;
let digit = 0;
let sum7 = 0;
while (number !== 0) {
  digit = number % 10;
  number = number - digit;
  number = number / 10;
  sum7 = sum7 + digit;
}
console.log("dijit sum", sum7);
// 8 Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол jishee ni: input: 1234 output: 6
let num = 1234;
let sum8 = 0;
while (num > 0) {
  let dig = num % 10;
  if (dig % 2 === 0) {
    sum8 += dig;
  }
  num = (num - dig) / 10;
}
console.log("dijit sum", sum8);
// 9 N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
let n = Number(prompt("ta 1-7 hoorond too songoj oruulna uu !!"));
let sum1 = 0;
while (n > 0) {
  if (n % 2 !== 0) {
    sum1 += n;
  }
  n--;
}
console.log("sondgoi toonii niilber", sum1);
// 10 N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
let m = Number(prompt("toogoo oruul !!"));
let sum2 = 0;
while (m > 0) {
  if (m % 2 === 0) {
    sum2 += m;
  }
  m--;
}
console.log("tegsh toonii niilber", sum2);
// 11 Өгөгдсөн эерэг тооны урвууг хэвлэх программ бич jishee ni: input: 123 output: 321
let a = Number(prompt("toogoo oruul !!"));
let rev = 0;
let dig = 0;
while (a > 0) {
  dig = a % 10;
  rev = rev * 10 + dig;
  a = a - dig;
  a = a / 10;
}
console.log("uruu too", rev);

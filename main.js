// prompt("ta 1-7 hoorond too songoj oruulna uu !!");
// let weeknumber = Number(prompt("ta 1-7 hoorond too songoj oruulna uu !!"));
// let garigiin_ner;
// if (weeknumber === 1) {
//   //   console.log("dawaa");
//   garigiin_ner = "dawaa";
// } else if (weeknumber === 2) {
//   //   console.log("mygmar");
//   garigiin_ner = "mygmar";
// } else if (weeknumber === 3) {
//   //   console.log("lhagwa");
//   garigiin_ner = "lhagwa";
// } else if (weeknumber === 4) {
//   //   console.log("pvrew");
//   garigiin_ner = "pvrew";
// } else if (weeknumber === 5) {
//   //   console.log("baasan");
//   garigiin_ner = "baasan";
// } else if (weeknumber === 6) {
//   //   console.log("bymba");
//   garigiin_ner = "bymba";
// } else if (weeknumber === 7) {
//   //   console.log("nym");
//   garigiin_ner = "nym";
// } else {
//   //   console.log("tanii oruulsan toond tohiroh ner oldsongv");
//   garigiin_ner = "oldsongvi";
// }
// console.log("tanii oruulsan toolbar:", weeknumber);
// console.log("tanii oruulsan toond tohiroh utga:", garigiin_ner);
// let age = 20;
// let gender = "er";

// if (age >= 18 && gender === "er") {
//   console.log(" ta nasand hvrsen eregtei bn");
// } else {
//   console.log("ta nasand hvrregvvi eswel emegtei bn");
// }

// if (age >= 18 || gender === "er") {
//   console.log(" ta nasand hvrsen  eswel eregtei bn");
// } else {
//   console.log("ta nasand hvrregvvi bolon emegtei bn");
// }

// let weeknumber = Number(prompt("ta 1-7 hoorond too songoj oruulna uu !!"));
// let garigiin_ner;
// if (weeknumber === 1) {
//   //   console.log("dawaa");
//   garigiin_ner = "dawaa";
// } else if (weeknumber === 2) {
//   //   console.log("mygmar");
//   garigiin_ner = "mygmar";
// } else if (weeknumber === 3) {
//   //   console.log("lhagwa");
//   garigiin_ner = "lhagwa";
// } else if (weeknumber === 4) {
//   //   console.log("pvrew");
//   garigiin_ner = "pvrew";
// } else if (weeknumber === 5) {
//   //   console.log("baasan");
//   garigiin_ner = "baasan";
// } else if (weeknumber === 6) {
//   //   console.log("bymba");
//   garigiin_ner = "bymba";
// } else if (weeknumber === 7) {
//   //   console.log("nym");
//   garigiin_ner = "nym";
// } else {
//   //   console.log("tanii oruulsan toond tohiroh ner oldsongv");
//   garigiin_ner = "oldsongvi";
// }
// console.log("tanii oruulsan toolbar:", weeknumber);
// console.log("tanii oruulsan toond tohiroh utga:", garigiin_ner);
// switch (weeknumber) {
//   case 1: {
//     gariin_ner = "dawaa";
//     break;
//   }
//   case 2: {
//     gariin_ner = "mygmar";
//     break;
//   }
//   case 3: {
//     gariin_ner = "lhagwaa";
//     break;
//   }
//   case 4: {
//     gariin_ner = "pvrew";
//     break;
//   }
//   case 5: {
//     gariin_ner = "baasan";
//     break;
//   }
//   case 6: {
//     gariin_ner = "bymba";
//     break;
//   }
//   case 7: {
//     gariin_ner = "nym";
//     break;
//   }
// }
// console.log("tanii oruulsan toolbar:", weeknumber);
// console.log("tanii oruulsan toond tohiroh utga:", garigiin_ner);

// bodlogo 1
let myage = 20;
if (myage >= 25) {
  console.log("above 25");
} else {
  console.log("below 25");
}
// bodlogo 2
let n = Number(prompt("ta 1-7 hoorond too songoj oruulna uu !!"));
if (n % 2 === 0) {
  console.log("tegsh too", n);
} else {
  console.log("sondgoi too", n);
}
// bodlogo 3
let a = 12,
  b = 45,
  c = 10;

if (a <= b <= c) {
  console.log("hamgiin ih too", c);
} else if (c <= a <= b) {
  console.log("hamgiin ih too", b);
} else if (b <= c <= a) {
  console.log("hamgiin ih too", a);
}
// bodlogo 4

let z = 12,
  x = 30,
  v = 45;
if (z < x < v) {
  console.log("hamgiin baga too", z);
}
// bodlogo 5
let mount = Number(prompt("ta 1-12 hoorond too songoj oruulna uu !!"));
let uliral;
switch (mount) {
  case 2:
  case 3:
  case 4: {
    uliral = "spring";
    break;
  }
  case 5:
  case 6:
  case 7: {
    uliral = "summer";
    break;
  }
  case 11:
  case 12:
  case 1: {
    uliral = "winter";
    break;
  }
  case 8:
  case 9:
  case 10: {
    uliral = "autumn";
    break;
  }
  default: {
    uliral = "oldsongve";
  }
}
console.log("tanii oruulsan sar:", mount);
console.log("tanii oruulsan sard tohiroh uiliral:", uliral);
// bodlogo 6
let x1 = 85;
let x2 = 75;
let x3 = 96;
let x4 = 69;
let x5 = x1 + x2 + x3 + x4;
if (x1 >= 80) {
  console.log("80-s ih toonii niilber", x5);
} else if (x2 >= 80) {
  console.log("80-s ih toonii niilber", x5);
} else if (x3 >= 80) {
  console.log("80-s ih toonii niilber", x5);
} else if (x4 >= 80) {
  console.log("80-s ih toonii niilber", x5);
}

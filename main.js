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
let a = 1,
  b = 5,
  c = 10;

if (a < b && c < b) {
  console.log("hamgiin ih too", b);
} else if (a < c && b < c) {
  console.log("hamgiin ih too", c);
} else if (b < a && c < a) {
  console.log("hamgiin ih too", a);
}
// bodlogo 4

let z = 12,
  x = 30,
  v = 45;
if (z > x && v > x) {
  console.log("hamgiin baga too", x);
} else if (z > v && x > v) {
  console.log("hamgiin baga too", v);
} else if (v > z && x > z) {
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
let sum = 0;

if (x1 > 80) {
  sum = sum + x1;
}
if (x2 > 80) {
  sum = sum + x2;
}
if (x3 > 80) {
  sum = sum + x3;
} else if (x4 > 80) {
  sum = sum + x4;
}
console.log("80-s ih toonii niilber", sum);
// bodlogo 7 > 4 н хувьсагч зарлан 3, 7, 2, 4 гэсэн тоон утга өгөх.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоонуудын үржвэр - 24
let z1 = 3;
let z2 = 7;
let z3 = 2;
let z4 = 4;
let z5 = 1;

if (z1 < 5) {
  z5 = z5 * z1;
}
if (z2 < 5) {
  z5 = z5 * z2;
}
if (z3 < 5) {
  z5 = z5 * z3;
}
if (z4 < 5) {
  z5 = z5 * z4;
}
console.log("5-аас бага тоонуудын үржвэр", z5);
// bodlogo 8 Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// Бат - 67 оноо, Очир - 59 оноо авчээ
// Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
// a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
// b. Хэрвээ оноо 60 - 70 хооронд байвал - Хангалттай
// c. Хэрвээ оноо 70 - 80 хооронд байвал - Дунд
// d. Хэрвээ оноо 80 - 90 хооронд байвал - Сайн
// e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм
// Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.
let bat = 67;
let ochir = 59;
if (bat < 60) {
  console.log("bat", "awsan onoo:", bat, "mash muu");
}
if (bat < 70 && 60 <= bat) {
  console.log("bat", "awsan onoo:", bat, "hangalttai");
}
if (bat < 80 && 70 <= bat) {
  console.log("bat", "awsan onoo:", bat, "dund");
}
if (bat < 90 && 80 <= bat) {
  console.log("bat", "awsan onoo:", bat, "sain");
}
if (bat < 100 && 90 <= bat) {
  console.log("bat", "awsan onoo:", bat, "mash sain");
}

if (ochir < 60) {
  console.log("ochir", "awsan onoo:", ochir, "mash muu");
}
if (ochir < 70 && 60 <= ochir) {
  console.log("ochir", "awsan onoo:", ochir, "hangalttai");
}
if (ochir < 80 && 70 <= ochir) {
  console.log("ochir", "awsan onoo:", ochir, "dund");
}
if (ochir < 90 && 80 <= ochir) {
  console.log("ochir", "awsan onoo:", ochir, "sain");
}
if (ochir <= 100 && 90 <= ochir) {
  console.log("ochir", "awsan onoo:", ochir, "mash sain");
}

// bodlog 9 Tухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү. Input: 120, 33, 10, 12 output: 10
let c1 = 120;
let c2 = 33;
let c3 = 10;
let c4 = 12;
if (c1 < c2 && c1 < c3 && c1 < c4) {
  console.log("hamgiin baga utga:", c1);
}
if (c2 < c1 && c2 < c3 && c2 < c4) {
  console.log("hamgiin baga utga:", c2);
}
if (c3 < c1 && c3 < c2 && c3 < c4) {
  console.log("hamgiin baga utga:", c3);
}
if (c4 < c2 && c4 < c3 && c4 < c1) {
  console.log("hamgiin baga utga:", c4);
}
// bodlogo 10 Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
// Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү. Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.
let at1 = 96;
let at2 = 108;
let at3 = 89;
let ateam = (at1 + at2 + at3) / 3;
console.log(ateam);

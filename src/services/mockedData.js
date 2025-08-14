
import img1 from "../assets/images/products/1.jpg";
import img5 from "../assets/images/products/5.jpg";
import img9 from "../assets/images/products/9.png";
import fiolet from "../assets/images/products/fiolet.jpg";
import lew from "../assets/images/products/LEW.png";
import lewpl from "../assets/images/products/LEW+.png";
import orzech from "../assets/images/products/orzech.jpg";
import pantera from "../assets/images/products/PANTERA.png";
import plk from "../assets/images/products/plk.jpg";
import premium from "../assets/images/products/premium.jpg";
import ruf from "../assets/images/products/ruf.png";
import sobianekpellet from "../assets/images/products/sobianekpellet.png";
import solar from "../assets/images/products/solar.png";
import sylva from "../assets/images/products/sylva.png";
// import solar from "../assets/images/products/solar.png";
import tygrys from "../assets/images/products/TYGRYS.png";
import tytan from "../assets/images/products/TYTAN.png";
import wegielorzech from "../assets/images/products/wegielorzech.png";

export const products = [
  {
    image: premium,
    name: "Groszek PLUS",
    price: "1619 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "23-27 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "4-6%" },
      { name: "Zawartość siarki", value: "maks. 0,5%" },
      { name: "Spiekalność", value: "RI=0" }
    ]
  },
  {
    image: fiolet,
    name: "Groszek PLUS",
    price: "1619 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "27-29 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "3-5%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" },
      { name: "Spiekalność", value: "RI=0" }
    ]
  },
  {
    image: orzech,
    name: "ORZECH PREMIUM PLUS",
    price: "1619 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "30 MJ/kg" },
      { name: "Granulacja", value: "40-80mm" },
      { name: "Zawartość popiołu", value: "3%" },
      { name: "Zawartość siarki", value: "maks. 0,5%" }
    ]
  },
  {
    image: plk,
    name: "Groszek PLUS",
    price: "1499 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "26-28 MJ/kg" },
      { name: "Granulacja", value: "6-25mm" },
      { name: "Zawartość popiołu", value: "maks 7%" },
      { name: "Zawartość siarki", value: "maks. 0,5%" },
      { name: "Spiekalność", value: "RI=0" }
    ]
  },
  {
    image: solar,
    name: "Groszek PLUS",
    price: "1569 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "26 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "4-10%" },
      { name: "Zawartość siarki", value: "maks. 0,8%" },
      { name: "Spiekalność", value: "RI=0" }
    ]
  },
  {
    image: img5,
    name: "Ekogroszek GOLD",
    price: "1649 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "27-29 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "3-5%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" }
    ]
  },
  {
    image: img9,
    name: "PELET drzewny FABICH",
    price: "",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "5-19 MJ/kg" },
      { name: "Średnica", value: "6mm" },
      { name: "Zawartość popiołu", value: "0.5%" },
      { name: "Wilgotność", value: "poniżej 6%" }
    ]
  },
  {
    image: sylva,
    name: "PELLET SYLVA",
    price: "",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "19 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 0,7%" },
      { name: "Wilgotność", value: "max. 10%" }
    ]
  },
  {
    image: ruf,
    name: "BRYKIET RUF",
    price: "1100 ZŁ / paleta 960 kg",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "18 MJ" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 0,3-1,6%" },
      { name: "Wilgotność", value: "max. 5-7%" }
    ]
  },
  {
    image: lewpl,
    name: "Ekogroszek SOBIANEK LEW PLUS",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "29-27 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 5%" },
      { name: "Wilgotność", value: "max. 12%" },
      { name: "Zawartość siarki", value: "max 0,6%" }
    ]
  },
  {
    image: sobianekpellet,
    name: "PELLET SOBIANEK",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "18 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 0,7%" },
      { name: "Wilgotność", value: "max. 10%" }
    ]
  },
  {
    image: lew,
    name: "Ekogroszek SOBIANEK LEW",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "29-27 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 5%" },
      { name: "Wilgotność", value: "max. 12%" },
      { name: "Zawartość siarki", value: "max 0,6%" }
    ]
  },
  {
    image: pantera,
    name: "Ekogroszek SOBIANEK PANTERA",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "27-25 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 6%" },
      { name: "Wilgotność", value: "max. 12%" },
      { name: "Zawartość siarki", value: "max 0,6%" }
    ]
  },
  {
    image: tygrys,
    name: "Ekogroszek SOBIANEK TYGRYS",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "26-24 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 9%" },
      { name: "Wilgotność", value: "max. 12%" },
      { name: "Zawartość siarki", value: "max 0,4%" }
    ]
  },
  {
    image: tytan,
    name: "Orzech SOBIANEK TYTAN",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "26-24 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 9%" },
      { name: "Wilgotność", value: "max. 12%" },
      { name: "Zawartość siarki", value: "max 0,4%" }
    ]
  },
  {
    image: img1,
    name: "Ekogroszek PLATINUM",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "29 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "3-6%" },
      { name: "Wilgotność", value: "wilgoć całkowita ok. 2-12%" },
      { name: "Zawartość siarki", value: "0,4-0,8%" }
    ]
  },
  {
    image: wegielorzech,
    name: "Orzech PRESTIGE",
    price: "CHWILOWY BRAK TOWARU",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "28 MJ/kg" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "3-9%" },
      { name: "Wilgotność", value: "wilgoć całkowita ok. 2-12%" },
      { name: "Zawartość siarki", value: "0,4-0,8%" }
    ]
  },
//   {
//     image: img2,
//     name: "Ekogroszek STABEK",
//     price: "",
//     descr: [
//       { name: "Wartość opałowa", value: "24 MJ/kg" },
//       { name: "Zastosowanie", value: "Do większości kotłów" },
//       { name: "Granulacja", value: "10-25mm" },
//       { name: "Spiekalność", value: "RI: 0-1" },
//       { name: "Wilgotność", value: "wilgoć całkowita ok. 10-15%" },
//       { name: "Zawartość siarki", value: "maks. 0,4%" }
//     ]
//   },
//   {
//     image: img3,
//     name: "Ekogroszek CZARNA PERŁA",
//     price: "",
//     descr: [
//       { name: "Wartość opałowa", value: "22-24 MJ/kg" },
//       { name: "Zastosowanie", value: "Do większości kotłów" },
//       { name: "Granulacja", value: "5-25mm" },
//       { name: "Spiekalność", value: "RI: 0-1" },
//       { name: "Wilgotność", value: "wilgoć całkowita ok. 12-14%" },
//       { name: "Zawartość siarki", value: "maks. 0,4%" }
//     ]
//   },
//   {
//     image: 4,
//     name: "Ekogroszek MIG 24",
//     price: "",
//     descr: [
//       { name: "Wartość opałowa", value: "24 MJ/kg" },
//       { name: "Zastosowanie", value: "Do większości kotłów" },
//       { name: "Granulacja", value: "10-25mm" },
//       { name: "Spiekalność", value: "RI: 0-1" },
//       { name: "Zawartość siarki", value: "maks. 0,4%" }
//     ]
//   }
];

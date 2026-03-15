import img1 from "../assets/images/products/1.jpg";
import img5 from "../assets/images/products/5.jpg";
import img9 from "../assets/images/products/9.png";
import fiolet from "../assets/images/products/fiolet.jpg";
import heros from "../assets/images/products/heros.jpg";
import hades from "../assets/images/products/hades.png";
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
import pellpine from "../assets/images/products/pellpine.jpeg";
import katrina from "../assets/images/products/katrina.jpg";
import bizon from "../assets/images/products/bizon.jpg";
import tygrys from "../assets/images/products/TYGRYS.png";
import tytan from "../assets/images/products/TYTAN.png";
import wegielorzech from "../assets/images/products/wegielorzech.png";
import haos from "../assets/images/products/haos.webp";
import excellent from "../assets/images/products/excellent.jpg";
import premiumselection from "../assets/images/products/premiumselection.jpg";
import wilk from "../assets/images/products/wilk.jpg";

export const products = [
   {
    image: fiolet,
    name: "Groszek PLUS",
    price: "1689 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "27-29 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "3-5%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" },
      { name: "Spiekalność", value: "RI=0" },
    ],
  },  {
    image: wilk,
    name: "Groszek WILK",
    price: "1579 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "26-29 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "2-4%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" },
      { name: "Spiekalność", value: "RI=0-3" },
    ],
  },  {
    image: heros,
    name: "Węgiel Groszek HEROS",
    price: "1649 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "27-29 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "WORKI", value: "20 kg" },
      { name: "Zawartość popiołu", value: "3-5%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" },
      { name: "Spiekalność", value: "RI=0" },
    ],
  },  {
    image: hades,
    name: "Węgiel Groszek HADES",
    price: "1689 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "26-28 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "WORKI", value: "20 kg" },
      { name: "Zawartość popiołu", value: "5-8%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" },
      { name: "Spiekalność", value: "RI=0" },
    ],
  },  {
    image: haos,
    name: "Węgiel ORZECH HAOS",
    price: "1549 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "29-26 MJ/kg" },
      { name: "Granulacja", value: "35-50mm" },
      { name: "WORKI", value: "20 kg" },
      { name: "Zawartość popiołu", value: "<10%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" },
      { name: "Spiekalność", value: "RI=0" },
    ],
  },{
    image: premium,
    name: "Groszek PLUS",
    price: "1639 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "23-27 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "4-6%" },
      { name: "Zawartość siarki", value: "maks. 0,5%" },
      { name: "Spiekalność", value: "RI=0" },
    ],
  },

  {
    image: orzech,
    name: "ORZECH PREMIUM PLUS",
    price: "1689 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "30 MJ/kg" },
      { name: "Granulacja", value: "40-80mm" },
      { name: "Zawartość popiołu", value: "3%" },
      { name: "Zawartość siarki", value: "maks. 0,5%" },
    ],
  },
  {
    image: plk,
    name: "Groszek PLUS",
    price: "1599 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "26-28 MJ/kg" },
      { name: "Granulacja", value: "6-25mm" },
      { name: "Zawartość popiołu", value: "maks 7%" },
      { name: "Zawartość siarki", value: "maks. 0,5%" },
      { name: "Spiekalność", value: "RI=0" },
    ],
  },
  {
    image: solar,
    name: "Groszek PLUS",
    price: "1519 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "26 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "4-10%" },
      { name: "Zawartość siarki", value: "maks. 0,8%" },
      { name: "Spiekalność", value: "RI=0" },
    ],
  },
  {
    image: img5,
    name: "Ekogroszek GOLD",
    price: "1669 ZŁ",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: "27-29 MJ/kg" },
      { name: "Granulacja", value: "5-25mm" },
      { name: "Zawartość popiołu", value: "3-5%" },
      { name: "Zawartość siarki", value: "maks. 0,4-0,6%" },
    ],
  },
  {
    image: excellent,
    name: "PELLET drzewny EXCELLENT SELECTION",
    price: "1719 zł/paleta",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: ">18 MJ/kg" },
      { name: "Średnica", value: "6mm" },
      { name: "Zawartość popiołu", value: "<0.35%" },
      { name: "Wilgotność", value: "poniżej 6%" },
    ],
  }, {
    image: premiumselection,
    name: "PELLET drzewny PREMIUM SELECTION",
    price: "1699 zł/paleta",
    isAvailable: true,
    descr: [
      { name: "Wartość opałowa", value: ">17,5 MJ/kg" },
      { name: "Średnica", value: "6mm" },
      { name: "Zawartość popiołu", value: "0.55%" },
      { name: "Wilgotność", value: "poniżej 6%" },
    ],
  }, {
    image: img9,
    name: "PELET drzewny FABICH",
    price: "1599 zł/paleta",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: ">16 MJ/kg" },
      { name: "Średnica", value: "6mm" },
      { name: "Zawartość popiołu", value: "0.5%" },
      { name: "Wilgotność", value: "poniżej 6%" },
    ],
  },
  {
    image: pellpine,
    name: "PELLET drzewny PELLPINE",
    price: "1399 zł/paleta",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "> 16,5 MJ/kg" },
      { name: "Średnica", value: "6mm" },
      { name: "Zawartość popiołu", value: "0.7%" },
      { name: "Wilgotność", value: "poniżej 10%" },
    ],
  },
{
    image: bizon,
    name: "PELLET drzewny BIZON",
    price: "1579 zł/paleta",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "> 16,5 MJ/kg" },
      { name: "Średnica", value: "6mm" },
      { name: "Zawartość popiołu", value: "<0.7%" },
      { name: "Wilgotność", value: "poniżej 10%" },
    ],
  },
{
    image: katrina,
    name: "PELLET drzewny KATRINA",
    price: "1589 zł/paleta",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "> 16,5 MJ/kg" },
      { name: "Średnica", value: "6mm" },
      { name: "Zawartość popiołu", value: "0.7%" },
      { name: "Wilgotność", value: "poniżej 10%" },
    ],
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
      { name: "Wilgotność", value: "max. 10%" },
    ],
  },
  {
    image: ruf,
    name: "BRYKIET RUF",
    price: "1100 ZŁ",
    price2: " / paleta 960 kg",
    isAvailable: false,
    descr: [
      { name: "Wartość opałowa", value: "18 MJ" },
      { name: "Zastosowanie", value: "Do większości kotłów" },
      { name: "Zawartość popiołu", value: "max 0,3-1,6%" },
      { name: "Wilgotność", value: "max. 5-7%" },
    ],
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
      { name: "Zawartość siarki", value: "max 0,6%" },
    ],
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
      { name: "Wilgotność", value: "max. 10%" },
    ],
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
      { name: "Zawartość siarki", value: "max 0,6%" },
    ],
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
      { name: "Zawartość siarki", value: "max 0,6%" },
    ],
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
      { name: "Zawartość siarki", value: "max 0,4%" },
    ],
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
      { name: "Zawartość siarki", value: "max 0,4%" },
    ],
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
      { name: "Zawartość siarki", value: "0,4-0,8%" },
    ],
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
      { name: "Zawartość siarki", value: "0,4-0,8%" },
    ],
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

import { toast } from "react-toastify";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const mayusLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
];

const generatePass = (props) => {
  var arryMerge = letters;
  var passGenerated = "";

  if (props.usingMayus) arryMerge = [...arryMerge, ...mayusLetters];

  if (props.usingNumbers) arryMerge = [...arryMerge, ...numbers];

  if (props.usingSymbols) arryMerge = [...arryMerge, ...symbols];

  for (let i = 0; i < props.range; i++) {
    const randomPosition = Math.floor(Math.random() * arryMerge.length);
    passGenerated += arryMerge[randomPosition];
  }

  document.getElementById("main-generated-pass").value = passGenerated;
};

const copyPassword = () => {
  const passGenerated = document.getElementById("main-generated-pass").value;
  if (passGenerated) {
    navigator.clipboard
      .writeText(passGenerated)
      .then(() => {
        toast.success("Su contraseña se ha copiado");
      })
      .catch(() => {
        toast.error("No hemos podido copiar su contraseña :(");
      });
  } else {
    toast.error("Primero debe generar una contraseña");
  }
};

export { generatePass, copyPassword };

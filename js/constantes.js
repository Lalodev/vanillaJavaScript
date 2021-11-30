export const PI = Math.PI;

export let usuario = "Jon";
const password = "qwerty";
//export default password;

const hello = () => console.log("Hola");

export default function saludar() {
  console.log("Hola módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}

//Error - solo se puede tener un default
/*export default function saludar2() {
  console.log("Hola módulos +ES6");
}*/

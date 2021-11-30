import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calc } from "./aritmetica.js";

console.log("Archivo modulos.js");

console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calc.restar(3, 4));

saludar();

let saludo = new Saludar();
saludo;

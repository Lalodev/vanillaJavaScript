/*console.log(window);
console.log(document);

let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);*/

// 61. DOM Introducción

/*console.log("Elementos del DOM");
console.log(window.document);
console.log(document);

console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
        console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola Mundo desde el DOM</h2>");*/



// 62. DOM - Nodos, Elementos y Selectores

// Ya no
/*onsole.log(document.getElementsByTagName("li")); 
console.log(document.getElementsByClassName("card")); 
console.log(document.getElementsByName("nombre")); 
//Este si se sigue utilizando, es más rapido
console.log(document.getElementById("menu"));*/

//Reemplazados por querySelector
/*console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));*/



// 63. DOM - Atributos y Data-Attributes
/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const  $linkDOM = document.querySelector(".link-dom"); 

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener"); //importante (evita hackeo -  no hay dependencia entre la pagina y la página que se abre)
$linkDOM.setAttribute("href","https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);

$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));*/



// 64. DOM - Estilos y Varaibles CSS
/*const  $linkDOM = document.querySelector(".link-dom"); 

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);*/



// 65. DOM: Clases CSS
/*const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); //Si no tiene la clase se la agrega
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); //Si no tiene la clase se la agrega
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); 
$card.classList.replace("rotate-45","rotate-135"); 
$card.classList.add("opacity-80","sepia");
console.log($card.className);
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");*/



// 66. Texto y HTML
/*const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
        El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML
    </p>
    <p>
        Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
    </p>
    <p>
        <mark>El DOM no es de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

//$whatIsDOM.innerText = text; //No estandar
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text; //soporta código HTML, se puede inyectar
$whatIsDOM.outerHTML = text;*/



// 67. DOM Traversing: Recorriendo el DOM
/*$cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
//console.log($cards.childNodes);
console.log($cards.children[2]);
console.log($cards.parentElement);
//console.log($cards.firstChild);
console.log($cards.firstElementChild);
//console.log($cards.lastChild);
console.log($cards.lastElementChild);

//console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
//console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div")); //busca al padre mas cercano del tipo de selector que le digamos
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));*/



// 68. DOM: Creando Elementos y Fragmentos
/*const $figure = document.createElement("figure"),
$img = document.createElement("img");
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Otra forma, no tan correcta, pero funciona
$figure2 = document.createElement("figure");
$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

//Agregar dinamicamente
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

//Otra técnica correcta, pero no se crea un nodo
const continentes = ["África", "América", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

//Fragmentos para aumentar el rendimiento
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);*/
   


// 69. DOM: Templates HTML
/*const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
    ];

    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment);*/



// 70. DOM: Modificando Elementos (Old Style)
/*const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true); //false: clona solo la plantilla - true: clona todo, hasta el contenido - sí queda vacio, toma el valor de false

//Por practicidad del video se hará lo siguiente 
$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");
//fin

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//$cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards);*/



// 71. DOM: Modificando Elementos (Cool Style)
/*
    insertAdjacent
        insertAdjacentElement(position, el)
        insertAdjacentHTML(position, html)
        insertAdjacentText(position, text)

    Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afterend(hermano siguiente)
*/

/*const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

//Por practicidad del video se hará lo siguiente 
let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");
//fin

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard); //Se comenta, para ver el siguiente ejemplo
//$cards.insertAdjacentElement("beforeend", $newCard);
//$cards.insertAdjacentElement("afterend", $newCard);

//Other methods
//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
$cards.after($newCard);*/



// 72. DOM: Manejadores de Eventos
// 73. DOM: Eventos con Parámetros y Remover Eventos

// Como atributo del HTML *
/*function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
}

//Como manejador semantico (forma más correcta) *
const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo; //sin parentesis
//Ojo -  Con los eventos semanticos, sólo se puede asignar una función

//tambien se puede con una función anónima
$eventoSemantico.onclick = function (e) {
    alert("Hola Mundo Manejador de Eventos Semántico");
    console.log(e);
    console.log(event);
}

//Como manejador multiple *
$eventoMultiple.addEventListener("click", holaMundo);

$eventoMultiple.addEventListener("click", (e)=> {
    alert("Hola Mundo Manejador de Eventos Múltiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});


// 73. *
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Jon");
});


const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);*/



// 74. DOM: Flujo de Eventos (Burbuja y Captura)
// 75. DOM: stopPropagation & preventDefault
// 76. DOM: Delegación de Eventos
/*const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");*/

/*function flujoEventos(e) { //76
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`); //${this.className}
    //e.stopPropagation(); se quita, porque ya no es necesario, porque se pasa al document y ya no tiene predecesor
}

//console.log($divsEventos);
// 76. - clave
document.addEventListener("click", (e) => {
    console.log("Click en", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
        e.preventDefault();
    }
});*/
// ...


//$divsEventos.forEach(div => {
    // fase de burbuja -> el flujo de los eventos se propaga del más interno al más externo
    //div.addEventListener("click", flujoEventos, false); //puede omitirse flase, es el valor por defecto

    // fase de captura -> el flujo de los eventos se propaga del más externo al más interno
    //div.addEventListener("click", flujoEventos, true);

    //tambien se puede pasar un objeto
    /*div.addEventListener("click", flujoEventos, {
        capture: false,
        once: true,
    })*/

    /*div.addEventListener("click", flujoEventos);

});*/

// 75. 
//e.stopPropagation(); *

/*$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();
    e.stopPropagation();
});*/

//console.log(window.document);

//Clave final -----
/*function flujoEventos(e) { //76
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`); /
}

document.addEventListener("click", (e) => {
    console.log("Click en", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
        e.preventDefault();
    }
});*/
//Clave final -----



// 77. BOM: Propiedades y Eventos 
// BOM: Browser Object Model
/*window.addEventListener("resize", (e) => {
    console.clear();
    console.log("******** Evento Resize ********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("******** Evento Scroll ********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => {
    //console.clear();
    console.log("******** Evento Load ********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

// Es mejor usar este *****
document.addEventListener("DOMContentLoaded", (e) => {
    //console.clear();
    console.log("******** Evento DOMContentLoaded ********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});*/



// 78. BOM: Metodos
//window.alert("Alerta");
//window.comfirm("Confirmación");
//window.prompt("Aviso");
//alert("Alerta");
//comfirm("Confirmación");
//prompt("Aviso");
//Ref: video 30

/*const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click", e => {
    //window.close();
    ventana.close();
});

$btnImprimir.addEventListener("click", e => {
    window.print();
});*/



// 79. BOM: Objetos: URL, Historial y Navegador
/*console.log(" ********** Objeto URL (Location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search/*);
console.log(location.pathname);*/
//location.reload();

/*console.log(" ********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.back(2);
//history.forward(1);
//history.go(1); //numeros positivos, hacia adelante | numeros negativos, hacia atras

console.log(" ********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);*/





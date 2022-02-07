import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js"; 
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown(
        "countdown", 
        "January 26, 2022 10:09:01", 
        "Feliz Cumpleaños amigo y docente digital 🤓"
        );
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=F55LNTW3GE0" target="_blank">Ver Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/F55LNTW3GE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
     responsiveMedia(
         "gmaps", 
         "(min-width: 1024px)", 
          `<a href="https://goo.gl/maps/uggYW6wFFWydRJs69" target="_blank">Ver Video</a>`,  
         `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121979.89140729379!2d-89.70601167214733!3d17.1764557339592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5fa6cb0262c673%3A0xdec9c33cf23e1155!2sParque%20Nacional%20Tikal!5e0!3m2!1ses!2sgt!4v1643395608283!5m2!1ses!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
         );
        responsiveTester("responsive-tester");
        userDeviceInfo("user-device");
        webCam("webcam");
        getGeolocation("geolocation");
        searchFilters(".card-filter", ".card");
        draw("#winner-btn", ".player ");
        slider();
        scrollSpy();
        smartVideo();
        contactFormValidations();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();

speechReader();
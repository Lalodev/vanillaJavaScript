/* ***** JavaScript: 106 - AJAX - XMLHttpRequest ***** */
(() => {
    const xhr = new XMLHttpRequest(), //1 - instancia
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    //console.log(xhr);

    //xhr.onreadystatechange = //antes
    //estandarizado 
    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4) return;
        
        //console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            //console.log("error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        //console.log("Este mensaje cargará de cualquier forma");
    }); //2 - manejo de eventos

    xhr.open("GET","https://jsonplaceholder.typicode.com/users"); //3 - apertura y dirección (recurso)
    //xhr.open("GET","assets/users.json");
    
    xhr.send(); //4 - envio
})();

/* ***** JavaScript: 107 - AJAX - API Fetch ***** */
(()=> {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")   
    //assets/users.json 
    //https://jsonplaceholder.typicode.com/users
    /*.then((res) => {
        console.log(res);
        return res.ok ? res.json() : Promise.reject(res);
        //res.text();
        //res.html();
        //res.xml();
        //res.blob();
    })*/
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        //console.log(json);
        //$fetch.innerHTML = json; //de res.text()
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch((err) => {
        //console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
        //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch");
    });        
})();

/* ***** JavaScript: 108 - AJAX - API Fetch + Async-Await ***** */
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();    

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();       
                
            //console.log(res, json);

            /*if(!res.ok) {
                throw new Error("Ocurrio un Error al solicitar los Datos"); //Solo acepta cadenas de texto, no puede recibir un objeto
            }*/
            if(!res.ok) throw { status:res.status, statusText: res.statusText };

            json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
                
        } catch (err) {
            //console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            //console.log("Esto se ejecutará independientemente del try... catch");
        }
    }   
    
    getData();
})();

/* ***** JavaScript: 109 - AJAX - Libreria Axios ***** */
(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();
        
    axios.get("https://jsonplaceholder.typicode.com/users")
    //https://jsonplaceholder.typicode.com/users
    //assets/users.json
    .then((res) => {
        //console.log(res);
        let json = res.data;

        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);
    })
    .catch((err) => {
        //console.log(err.response);
        let message = err.statusText || "Ocurrió un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
        //console.log("Esto se ejecutará independientemente del resultado Axios");
    });

})();

/* ***** JavaScript: 106 - AJAX - Libreria Axios + Async-Await ***** */
(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();
    
    async function getData() {
        try {
             let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;       
                
            //console.log(res, json);

            json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);

        }catch(err) {
            //console.log(err.response);
            let message = err.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        }finally {
            //console.log("Esto se ejecutará independientemente del try... catch");
        }
    }

    getData();
})();
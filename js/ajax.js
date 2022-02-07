(() => {
    const xhr = new XMLHttpRequest(), //1 - instancia
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    //console.log(xhr);

    //xhr.onreadystatechange = //antes
    //estandarizado 
    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4) return;
        
        console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300) {
            console.log("éxito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText);
            console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            console.log("error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        console.log("Este mensaje cargará de cualquier forma");
    }); //2 - manejo de eventos

    xhr.open("GET","https://jsonplaceholder.typicode.com/users"); //3 - apertura y dirección (recurso)
    //xhr.open("GET","assets/users.json");
    
    xhr.send(); //4 - envio
})();
let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2';
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let agregar = document.querySelector(".cajaPadre")

fetch()
.then (function(response){
    return response.json()

}).then (function(data){
    console.log(data.results)
    agregar.innerHTML += `<article class="cajaHija">
                <a href="./detalle-peli.html"><img class="peliculas" src="${data.results.poster_path}" alt=""></a>
                <h3 class="tituloPelicula"><strong>${data.results.title}</strong></h3>
            </article> `
    
}).catch (function(error){
    console.log(error)
})
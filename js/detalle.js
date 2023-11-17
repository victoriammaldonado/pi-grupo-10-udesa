let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id')
let name = queryStringObj.get('name')
console.log(id, name);
let url1 = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${id}` 
let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${id}`
let detalle = document.querySelector('#cajaPadre')
let titulo = document.querySelector('.generos')


fetch(url1)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data);
        let detalle = document.querySelector ("#cajaPadre")
        let contenido= "";
        for (let index = 0; index < 5; index++) {
            titulo.innerText = `${name}`
            contenido += `<article class="cajaHija">
            <a href="./detalle-peli.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].title}"></a>
             <h3 class="tituloPelicula"><strong>${data.results[index].title}</strong></h3>
            </article>`    
        }
        detalle.innerHTML+=contenido;
    })
    .catch (function(error){
        console.log(error);
    })

    fetch(url2)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data);
        let detalle = document.querySelector ("#cajaPadre")
        let contenido= "";
        for (let index = 0; index < 5; index++) {
            titulo.innerText = `${name}`
            contenido += `<article class="cajaHija">
            <a href="./series.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].name}"></a>
             <h3 class="tituloPelicula"><strong>${data.results[index].name}</strong></h3>
            </article>`    
        }
        detalle.innerHTML+=contenido;
    })
    .catch (function(error){
        console.log(error);
    })

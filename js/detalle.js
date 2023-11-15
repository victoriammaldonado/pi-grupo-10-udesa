let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://api.themoviedb.org/3/genre/movie/list${id}?api_key=${acaVaLaAPIKey}`


fetch(url)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data);
        let contenido= "";
        for (let index = 0; index < 5; index++) {
            contenido += `<article class="cajaHija">
            <a href="./detalle-peli.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].title}"></a>
             <h3 class="tituloPelicula"><strong>${data.results[index].title}</strong></h3>
            </article>`    
        }
        contenido.innerHTML=contenido;
    })
    .catch (function(error){
        console.log(error)
    })

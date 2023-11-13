let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let buscador = queryStringObj.get('buscador');
let busqueda = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${buscador}`
let documento = document.querySelector(".cajaPadre")
let error = document.querySelector(".sinBusqueda")

fetch(busqueda)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
      console.log(data.results);
       if (data.results.length==0) {
        documento.innerHTML = `No hay resultado para: ${buscador}`
       }else{
        documento.innerHTML = `Resultado para: ${buscador}`
        for (let index = 0; index < 5; index++) {
           
            documento.innerHTML += `<article class="cajaHija">
            <a href="./detalle-peli.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].title}" ></a>
              <h3 class="tituloPelicula"><strong>${data.results[index].title}</strong></h3>
        </article>`
        }
       }
        
        
        
    })
    .catch(function (error) {
        
        console.log(error);
    })
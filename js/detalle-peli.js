let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2';
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${acaVaLaAPIKey}`;
let portada = document.querySelector('.portada');
let titulo = document.querySelector('.titulo');
let parrafo1 = document.querySelector('.parrafo1');
let parrafo2 = document.querySelector('.parrafo2');
let parrafo3 = document.querySelector('.parrafo3');
let parrafo4 = document.querySelector('.parrafo4');
let parrafo5 = document.querySelector('.linkcruzados');
let seccionvideo = document.querySelector('.trailer');
let video = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${acaVaLaAPIKey}`;

fetch(video)
.then (function(response){
    return response.json()
})
.then(function(data){
    console.log(data.results);
    seccionvideo.innerHTML= `<iframe class = "trailers" width="560" height="315" src="https://www.youtube.com/embed/${data.results[0].key}?si=xOwmvX8g3mpcwA9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    if (video == null){
        return 'No hay trailers disponibles'
    }else{
        for (let index = 0; index < 5; index++) {
            seccionvideo.innerHTML += `${data.results[index].name}`
        }
    }

})
.catch(function(error){
    console.log(error)
})


let conteiner = document.querySelector(".conteiner-reco");
let boton= document.querySelector(".recomendaciones");
let recomendacionesDisplay= document.querySelector(".recomenda")
boton.addEventListener("click", function (e) {
    let recomendaciones = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${acaVaLaAPIKey}`;
    fetch(recomendaciones)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data);
        conteiner.style.display="block";
        let contenido= "";
        for (let index = 0; index < 5; index++) {
            contenido+= `<article class="cajaHija">
                <a href="./detalle-peli.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].title}"></a>
                <h3 class="tituloPelicula"><strong>${data.results[index].title}</strong></h3><h4 class="tituloPelicula">${data.results[index].release_date}</h4>
            </article>`
            
        }
        recomendacionesDisplay.innerHTML=contenido;
    })
    .catch (function(error){
        console.log(error)
    })
})      


fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {     
        console.log(data)
        let generos = "";
        for (let index = 0; index < data.genres.length; index++) {
            generos += `<li><a class="linkcruzados" href="./generos.html">${data.genres[index].name}</a></li>`

        }
        portada.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        titulo.innerText = data.title;
        parrafo1.innerText += " " + data.vote_average;
        parrafo2.innerText += " " + data.release_date;
        parrafo3.innerText += " Tiene " + data.runtime + " minutos";
        parrafo4.innerText +=" " +  data.overview;
        parrafo5.innerHTML += " " + generos;

    })
    .catch(function (error) {
        console.log(error)
    });


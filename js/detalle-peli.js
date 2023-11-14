let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${acaVaLaAPIKey}`
let portada = document.querySelector('.portada')
let titulo = document.querySelector('.titulo')
let parrafo1 = document.querySelector('.parrafo1')
let parrafo2 = document.querySelector('.parrafo2')
let parrafo3 = document.querySelector('.parrafo3')
let parrafo4 = document.querySelector('.parrafo4')
let parrafo5 = document.querySelector('.linkcruzados')


let conteiner = document.querySelector(".conteiner-reco")
let boton= document.querySelector(".recomendaciones")
let recomedacionesDisplay= document.querySelector(".recomenda")
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
        recomedacionesDisplay.innerHTML=contenido;
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
            generos += `${data.genres[index].name}`

        }
        portada.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        titulo.innerText = data.title;
        parrafo1.innerText += " " + data.vote_average;
        parrafo2.innerText += " " + data.release_date;
        parrafo3.innerText += " Tiene " + data.runtime + " minutos";
        parrafo4.innerText +=" " +  data.overview;
        parrafo5.innerText += " " + generos;

    })
    .catch(function (error) {
        console.log(error)
    });


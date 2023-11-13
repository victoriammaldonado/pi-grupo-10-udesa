let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${acaVaLaAPIKey}`
let url2 = `https://api.themoviedb.org/3/tv/${id}?api_key=${acaVaLaAPIKey}`
let portada = document.querySelector('.portada')
let titulo = document.querySelector('.titulo')
let parrafo1 = document.querySelector('.parrafo1')
let parrafo2 = document.querySelector('.parrafo2')
let parrafo3 = document.querySelector('.parrafo3')
let parrafo4 = document.querySelector('.parrafo4')
let parrafo5 = document.querySelector('.parrafo5')


let recomendaciones= `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${acaVaLaAPIKey}`;
console.log(recomendaciones);
fetch(recomendaciones)
.then (function(response){
    return response.json()
})
.then (function(data) {
    console.log(data);
    recomendacionesDisplay.style.display="block";
    let reco= data.results;
    let contenido= "";
    for (let index = 0; index < array.length; index++) {
        contenido+= `<article class="cajaHija">
            <a href="./series.html?id=${reco[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${reco[index].poster_path}" alt="${reco[index].name}"></a>
            <h3 class="tituloPelicula"><strong>${reco[index].name}</strong></h3><h4 class="tituloPelicula">${reco[index].first_air_date}</h4>
        </article>`
        
    }
    recoDisplay.innerHTML=contenido;
    return data
})
.catch (function(error){
    console.log(error)
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
        portada.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        titulo.innerText = data.title;
        parrafo1.innerText += " " + data.vote_average;
        parrafo2.innerText += " " + data.release_date;
        parrafo3.innerText += " " + data.runtime;
        parrafo4.innerText +=" " +  data.overview;
        parrafo5.innerText +=" " + generos;

    })
    .catch(function (error) {
        console.log(error)
    });





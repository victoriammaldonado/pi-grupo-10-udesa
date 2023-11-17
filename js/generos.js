let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`
let url2= `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`
let lista_series = document.querySelector('#lista_series')
let lista_pelis = document.querySelector('.lista_pelis')


fetch(url)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data.genres);

        let contenido = "";
        for (let index = 0; index < 5; index++) {
            contenido +=  `<section class="lista_pelis">
                                            <ul class="lista_generos">
                                                <a class="lista_generos" href="./detalle.html?id=${data.genres[index].id}&name=${data.genres[index].name}"><li class="lista_generos">${data.genres[index].name} </li> </a> 
                                            </ul>
                                        
                                    </section>`
        }

        lista_pelis.innerHTML = contenido;
    })
    .catch (function(error){
        console.log(error)
    })


    fetch(url2)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data.genres);

        let contenido = "";
        for (let index = 0; index < 5; index++) {
            contenido +=   `<section class="lista_series">
                                <ul class="lista_generos">
                                    <a class="lista_generos" href="./detalle.html?id=${data.genres[index].id}&name=${data.genres[index].name}"><li class="lista_generos">${data.genres[index].name} </li> </a> 
                                </ul>
        
                            </section>`
        }

        lista_series.innerHTML = contenido;
    })
    .catch (function(error){
        console.log(error)
    })

let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`
let url2= `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`
let lista_series = document.querySelector('#lista_series')
let lista_pelis = document.querySelector('.lista_pelis')

// terminar eli y hacer series
fetch(url)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data.genres);

        let contenido = "";
        for (let index = 0; index < 5; index++) {
            contenido +=  `<section class="cajaPadre">
                                        <article class="cajaHija">
                                            <ul class="lista_generos">
                                                <li class="lista_generos"> <a class="lista_generos" href="./genero.html"></a>${data.genres[index].name} </li>
                                            </ul>
                                        </article>
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
            contenido +=  `<section class="cajaPadre">
                                        <article class="cajaHija">
                                            <ul class="lista_generos">
                                                <li class="lista_generos"> <a class="lista_generos" href="./genero.html"></a>${data.genres[index].name} </li>
                                            </ul>
                                        </article>
                                    </section>`
        }

        lista_series.innerHTML = contenido;
    })
    .catch (function(error){
        console.log(error)
    })

let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://api.themoviedb.org/3/genre/movie/list${id}?api_key=${acaVaLaAPIKey}`
let detalle = document.querySelector('.cajaPadre')


fetch(url)
    .then (function(response){
        return response.json()
    })
    .then (function(data) {
        console.log(data);
        for (let index = 0; index < 5; index++) {
            detalle.innerHTML +=  `
            <ul class="lista_generos">
                    <li class="lista_generos"> <a class="lista_generos" href="./genero.html?id=${data.results[index].id}"> ${data.results[index].title}</a> </li>
            </ul>
            `
        }
    })
    .catch (function(error){
        console.log(error)
    })



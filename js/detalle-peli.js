let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${acaVaLaAPIKey}`
let url2 = `https://api.themoviedb.org/3/tv/${id}?api_key=${acaVaLaAPIKey}`

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {     
        console.log(data)
        let documento = document.querySelector('.detallepelicula')
        let generos = ""
        for (let index = 0; index < data.genres.length; index++) {
            generos += `
            <a class="linkcruzados" href="./genero.html?id=${data.genres[index].id}">${data.genres[index].name}</a>`

        }
        documento.innerHTML = `<img class="portada" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
    <form action="./fav.html" method="get">
                <div>
                    <button type="otro" class="fav">Favoritos ❤️</button>
                </div>
            </form>
    <h1 class="titulo">${data.title}</h1>
    <ul class="listaDesordenada">
        <li class="parrafo"><strong>Calificación:</strong> ${data.vote_average} </li> 
        <li class="parrafo"><strong>Estreno:</strong> La fecha de estreno es ${data.release_date} </li>
        <li class="parrafo"><strong>Duración:</strong> La pelicula dura ${data.runtime} minutos </li>
        <li class="parrafo"><strong>Sinopsis:</strong>${data.overview}</li>
        <li class="parrafo"><strong>Género:</strong> ${generos} </li>
    </ul>`

    })
    .catch(function (error) {
        console.log(error)
    });




fetch(url2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let documento = document.querySelector('.detallepelicula')
        documento.innerHTML = `<img class="portada" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
    <form action="./fav.html" method="get">
                <div>
                    <button type="otro" class="fav">Favoritos ❤️</button>
                </div>
            </form>
    <h1 class="titulo">${data.name}</h1>
    <ul class="listaDesordenada">
        <li class="parrafo"><strong>Calificación:</strong>  </li> 
        <li class="parrafo"><strong>Estreno:</strong> La fecha de estreno es ${data.first_air_date} </li>
        <li class="parrafo"><strong>Duración:</strong> La serie tiene  ${data.number_of_seasons} temporadas y ${data.number_of_episodes} episodios </li>
        <li class="parrafo"><strong>Sinopsis:</strong>${data.overview}</li>
        <li class="parrafo"><strong>Género:</strong> <a class="linkcruzados" href="./genero.html"> ${data.genres[0].name}</a></li>
    </ul>`

    })
    .catch(function (error) {
        console.log(error)
    });
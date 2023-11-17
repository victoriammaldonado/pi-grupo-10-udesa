let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'

let pelicula = document.querySelector('#carruselPeliculas');
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);

    let contenido = "";
    for (let index = 0; index < 10; index++) {
        contenido += `<li class=""> 
        <a href="./detalle-peli.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].title}"></a>
          <h3 class="tituloPelicula"><strong>${data.results[index].title}</strong></h3> <h4 class="tituloPelicula">${data.results[index].release_date}</h4>
    </li>`
    }
    pelicula.innerHTML = contenido;
    
})

.catch(function(error){
    return ;
});

let serie = document.querySelector('#carruselPeliculas2')

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let contenido = "";
    for (let index = 0; index < 10; index++){
        contenido += `<li class="">
            <a href="./series.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].name}"></a>
            <h3 class="tituloPelicula"><strong>${data.results[index].name}</strong></h3><h4 class="tituloPelicula">${data.results[index].first_air_date}</h4>
        </li>`
    }

    serie.innerHTML = contenido;
})
.catch(function(error){
    return ;
});

let populares = document.querySelector('#carruselPeliculas3')

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let contenido = "";
    for (let index = 0; index < 10; index++){
        contenido += `<li class="">
        <a href="./detalle-peli.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].title}"></a>
        <h3 class="tituloPelicula"><strong>${data.results[index].title}</strong></h3><h4 class="tituloPelicula">${data.results[index].release_date}</h4>
        </li>`
    }

    populares.innerHTML = contenido;
})
.catch(function(error){
    return ;
});

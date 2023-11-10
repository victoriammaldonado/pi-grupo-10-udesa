let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'

let pelicula = document.querySelector('.cajaPadre');
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);

    let contenido = "";
    for (let index = 0; index < 5; index++) {
        contenido += `<article class="cajaHija"> 
        <a href="./detalle-peli.html?id=${data.results[index].id}"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].title}"></a>
          <h3 class="tituloPelicula"><strong>${data.results[index].title}</strong></h3>
    </article>`
    }
    pelicula.innerHTML = contenido;
    
})
.catch(function(error){
    return ;
});

let serie = document.querySelector('.cajaPadre2')

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let contenido = "";
    for (let index = 0; index < 5; index++){
        contenido += `<article class="cajaHija">
            <a href="./series.html"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].name}"></a>
            <h3 class="tituloPelicula"><strong>${data.results[index].name}</strong></h3>
        </article>`
    }

    serie.innerHTML = contenido;
})
.catch(function(error){
    return ;
});

let populares = document.querySelector('.cajaPadre3')

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let contenido = "";
    for (let index = 0; index < 5; index++){
        contenido += `<article class="cajaHija">
        <a href="./detalle-peli.html"><img class="peliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.results[index].name}"></a>
        <h3 class="tituloPelicula"><strong>${data.results[index].name}</strong></h3>
        </article>`
    }

    populares.innerHTML = contenido;
})
.catch(function(error){
    return ;
});

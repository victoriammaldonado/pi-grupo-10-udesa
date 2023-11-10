let acaVaLaAPIKey = '73bbcaff8fd928767c5142a00f422fa2'
//recupero la query string
let id = document.getElementById('.cajaPadre')

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${acaVaLaAPIKey}`

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results)
    for (let index = 0; index < array.length; index++) {
        
        
    }
})
.catch(function(error){
    console.log(error)
});
let formulario             = document.querySelector(".buscar");
let resultadoBusqueda      = document.querySelector(".busqueda");
function resultado(formulario){
    return  ` para: ${formulario} `
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let resultadoBusqueda= new
resultadoBusqueda.innerHTML+= resultado
});


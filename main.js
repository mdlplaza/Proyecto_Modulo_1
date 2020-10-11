


function myFunction(){
    let url = "https://api.themoviedb.org/3/search/movie?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US&page=1&include_adult=false&query=titanic"


fetch (url)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (datos) {
   
console.log(datos)    });

}


let filmsContent = document.getElementById("films");

searchMovies(null);

function searchMovies(event) {
    let valueToSearch = event ? event.target.value : "";

    if (valueToSearch) {
        url = "https://api.themoviedb.org/3/search/movie?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US&page=1&include_adult=false&query=" + valueToSearch;
    } else {
        url = "https://api.themoviedb.org/3/discover/movie?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    }

    filmsContent.innerHTML = "";
    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (peliculas) {
            for (let i = 0; i < peliculas.results.length; i++) {
                filmsContent.innerHTML += generateFilmCard(peliculas.results[i]);
            }
        })
}



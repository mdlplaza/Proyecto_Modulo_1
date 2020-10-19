let favoritedFilms = JSON.parse(localStorage.getItem("favoriteFilms"))|| [];

for (let i = 0; i < favoritedFilms.length; i++) {
    let noResults = document.getElementById("no_results");
    noResults.classList.add("no_visible");
    let favorites = document.getElementById("favorites");
    favorites.classList.add("films");

    fetch(`https://api.themoviedb.org/3/movie/${favoritedFilms[i]}?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datosPelicula) {
            document.getElementById("favorites").innerHTML += generateFilmCard(datosPelicula);
        })
    }

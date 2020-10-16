

let filmsContent = document.getElementById("films");
let favoritedFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];

searchMovies(null, true);

function searchMovies(event, discover) {
    discover = discover || false;
    let url = "";
    if (!discover) {
        let valueToSearch = event.target.value;
        url = "https://api.themoviedb.org/3/search/movie?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US&page=1&include_adult=false&query=" + valueToSearch;
    } else {
        url = "https://api.themoviedb.org/3/discover/movie?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    }

    filmsContent.innerHTML = "";
    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            for (let i = 0; i < datos.results.length; i++) {
                filmsContent.innerHTML += `<article class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${datos.results[i].backdrop_path ? `<img src="//image.tmdb.org/t/p/w300_and_h450_bestv2/${datos.results[i].backdrop_path}" />` : `<img src="https://plchldr.co/i/300x450?bg=111111&text=no%20image" />`}
                    </div>
                    <div class="flip-card-back">
                        <h1>${datos.results[i].title}</h1>
                        <p>${datos.results[i].overview}</p>
                        <p>${datos.results[i].release_date}</p>
                        <i class="${favoritedFilms.includes(datos.results[i].id) ? "fas" : "far"} fa-star" onclick="favoriteFilms(this, ${datos.results[i].id})"></i>
                    </div>
                </div>
            </article>`;
            }
        })
}

function favoriteFilms(element, id) {
    if (!favoritedFilms.includes(id)) {
        addItemToFavoriteFilms(id);
        element.classList.remove("far");
        element.classList.add("fas");
    } else {
        removeItemFromFavoriteFilms(id);
        element.classList.remove("fas");
        element.classList.add("far");
    }
    localStorage.setItem("favoriteFilms", JSON.stringify(favoritedFilms));
}

function removeItemFromFavoriteFilms(id) {
    let index = favoritedFilms.indexOf(id);
    favoritedFilms.splice(index, 1);
}

function addItemToFavoriteFilms(id) {
    favoritedFilms.push(id);
}




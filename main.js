

let filmsContent= document.getElementById("films");
let favoritedFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];

function myFunction(event) {
    let valueTosSearch = event.target.value;
    let url = "https://api.themoviedb.org/3/search/movie?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US&page=1&include_adult=false&query=" + valueTosSearch;

    filmsContent.innerHTML = "";
    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            for (let i = 0; i < datos.results.length; i++) {
                filmsContent.innerHTML += `<article class="films_items">
                <div class="films_img">
                    <img src="//image.tmdb.org/t/p/w300_and_h450_bestv2/${datos.results[i].backdrop_path}"   />
                </div>
                <div class="films_description">
                    <h1>${datos.results[i].title}</h1>
                    <p>${datos.results[i].overview}</p>
                    <i class="${favoritedFilms.find(film => film.id === datos.results[i].id) ? "fas" : "far"} fa-star" onclick="favoriteFilms(${datos.results[i].id},'${datos.results[i].original_title}')"></i>
                </div>
            </article>`;
            }
        })
}

function favoriteFilms(id, name) {
    if (!favoritedFilms.includes(id)){
        favoritedFilms.push({"id": id, "name": name});
    }
    localStorage.setItem("favoriteFilms", JSON.stringify(favoritedFilms));
}

function searchInFavorites(id) {
    for(let i=0; i< favoritedFilms.length; i++) {
        if (favoritedFilms[i].id === id) {
            return true;
        }
    }

    return false;
}



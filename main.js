

let filmsContent= document.getElementById("films");

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
                    <button onclick="favoriteFilms(${datos.results[i].id})"><img src = "images/estrella.jpeg"/</button>
                </div>
            </article>`;
            }
        })
}

function favoriteFilms(id) {
    let favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms") || []);
    console.log(favoriteFilms);
    if (!favoriteFilms.includes(id)){
        favoriteFilms.push(id);
    }
    localStorage.setItem("favoriteFilms", JSON.stringify(favoriteFilms));
}


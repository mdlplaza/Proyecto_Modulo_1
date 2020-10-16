let favoriteFilms = JSON.parse(localStorage.getItem("favoriteFilms"))|| [];
for (let i = 0; i < favoriteFilms.length; i++) {
    let noResults = document.getElementById("no_results");
    noResults.style.display = "none";
    let favorites = document.getElementById("favorites");
    favorites.style.display = "block";

    fetch(`https://api.themoviedb.org/3/movie/${favoriteFilms[i]}?api_key=8c98db99e092e8bc99a6bb341fad6201&language=en-US`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            console.log(datos)
            document.getElementById("favorites").innerHTML +=`<article class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    ${datos.backdrop_path ? `<img src="//image.tmdb.org/t/p/w300_and_h450_bestv2/${datos.backdrop_path}" />` : `<img src="https://plchldr.co/i/300x450?bg=111111&text=no%20image" />`}
                </div>
                <div class="flip-card-back">
                    <h1>${datos.title}</h1>
                    <p>${datos.overview}</p>
                    <p>${datos.release_date}</p>
                    <i class="${favoriteFilms.includes(datos.results) ? "fas" : "far"} fa-star" onclick="favoriteFilms(this, ${datos.results}"></i>
                </div>
            </div>
        </article>`;
        })
    }

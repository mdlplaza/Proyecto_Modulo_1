let favoritedFilms = JSON.parse(localStorage.getItem("favoriteFilms")) || [];

function generateFilmCard(film) {
    return `<article class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${film.backdrop_path ? `<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${film.backdrop_path}" />` : `<img src="https://plchldr.co/i/300x450?bg=111111&text=no%20image" />`}
                    </div>
                    <div class="flip-card-back">
                        <h1>${film.title}</h1>
                        <p>${film.overview}</p>
                        <p>${film.release_date}</p>
                        <i class="${favoritedFilms.includes(film.id) ? "fas" : "far"} fa-star" onclick="favoriteFilms(this, ${film.id})"></i>
                    </div>
                </div>
            </article>`
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

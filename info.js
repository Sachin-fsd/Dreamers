let movie = localStorage.getItem("clicked") || "Iron man 3";
// console.log(movie);

async function get_movie(movie){
    let a = await fetch(`http://www.omdbapi.com/?apikey=85fb5fc6&t=${movie}`);
    let result = await a.json();
    // console.log(result);
    update(result);
    download(result);
}

get_movie(movie);

function update(r){
    document.querySelector("#title h1").innerText = r.Title
    document.querySelector("#year h3").innerText = `Year : ${r.Year}`;
    document.querySelector("#rated h3").innerText = `Rated : ${r.Rated}`;
    document.querySelector("#released h3").innerText = `Released : ${r.Released}`;
    document.querySelector("#runtime h3").innerText = `Runtime : ${r.Runtime}`;
    document.querySelector("#genre h3").innerText = `Genre : ${r.Genre}`;
    document.querySelector("#director h3").innerText = `Director : ${r.Director}`;
    document.querySelector("#writer h3").innerText = `Writer : ${r.Writer}`;
    document.querySelector("#actors h3").innerText = `Actors : ${r.Actors}`;
    document.querySelector("#plot h3").innerText = `Genre : ${r.Plot}`;
    document.querySelector("#language h3").innerText = `Language : ${r.Language}`;
    document.querySelector("#country h3").innerText = `Country : ${r.Country}`;
    document.querySelector("#awards h3").innerText = `Awards : ${r.Awards}`;
    document.querySelector("#metascore h3").innerText = `Metascore : ${r.Metascore}`;
    document.querySelector("#imdbRating h3").innerText = `imdbRating : ${r.imdbRating}`;
    document.querySelector("#type h3").innerText = `Type : ${r.Type}`;
    document.querySelector("#boxoffice h3").innerText = `BoxOffice : ${r.BoxOffice}`;
    document.querySelector("#poster img").src = r.Poster;
}

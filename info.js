// get movie name from local storage
let movie = localStorage.getItem("clicked") || "Iron man 3";

let p1080 = document.querySelector("#p1080");
p1080.addEventListener("click", () => download(movie, "1080"));

let p720 = document.querySelector("#p720");
p720.addEventListener("click", () => download(movie, "720"));

async function download(movie, quality) {
  let a = await fetch(
    `https://65654cdaeb8bb4b70ef164fb.mockapi.io/movies?name=${movie}`
  );
  let b = await a.json();
  if(b.length!==0){
    console.log(b);
    movie_download = b[0]["name"];

  if (quality == "1080") {
    movie_link = b[0]["1080p"];
  }else{
    movie_link = b[0]["720p"];
  }

  let link = document.createElement("a");
  link.href = movie_link;
  link.download = movie_download;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert(`Wait ${movie_download} Download is in progress..`);
  }
  else{
    alert(`We are currently facing some issues.`)
  }
}

async function get_movie(movie) {
  let a = await fetch(`http://www.omdbapi.com/?apikey=85fb5fc6&t=${movie}`);
  let result = await a.json();
  update(result);
}

get_movie(movie);

function update(r) {
  document.querySelector("#title h1").innerText = r.Title;
  document.querySelector("#year h3").innerText = `Year : ${r.Year}`;
  document.querySelector("#rated h3").innerText = `Rated : ${r.Rated}`;
  document.querySelector("#released h3").innerText = `Released : ${r.Released}`;
  document.querySelector("#runtime h3").innerText = `Runtime : ${r.Runtime}`;
  document.querySelector("#genre h3").innerText = `Genre : ${r.Genre}`;
  document.querySelector("#director h3").innerText = `Director : ${r.Director}`;
  document.querySelector("#writer h3").innerText = `Writer : ${r.Writer}`;
  document.querySelector("#actors h3").innerText = `Actors : ${r.Actors}`;
  document.querySelector("#plot h3").innerText = `Plot : ${r.Plot}`;
  document.querySelector("#language h3").innerText = `Language : ${r.Language}`;
  document.querySelector("#country h3").innerText = `Country : ${r.Country}`;
  document.querySelector("#awards h3").innerText = `Awards : ${r.Awards}`;
  document.querySelector(
    "#metascore h3"
  ).innerText = `Metascore : ${r.Metascore}`;
  document.querySelector(
    "#imdbRating h3"
  ).innerText = `imdbRating : ${r.imdbRating}`;
  document.querySelector("#type h3").innerText = `Type : ${r.Type}`;
  document.querySelector(
    "#boxoffice h3"
  ).innerText = `BoxOffice : ${r.BoxOffice}`;
  document.querySelector("#poster img").src = r.Poster;
}

async function get_movie(movie_name) {
  let a = await fetch(
    `http://www.omdbapi.com/?apikey=85fb5fc6&s=${movie_name}`
  );
  let b = await a.json();
  // console.log(b.Search);
  let mo = b.Search;
  show(mo);
}

function search() {
  let movie_name = document.querySelector("#search").value;
  get_movie(movie_name);
}

function create(movi) {
  // console.log(movi);
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = movi.Poster;
  let title = document.createElement("h2");
  title.innerText = movi.Title;
  div.addEventListener("click", () => information(movi.Title));
  div.append(img, title);
  document.querySelector("#result").append(div);
  document
    .querySelector("#result")
    .setAttribute("style", "height:max-content;");
}

function show(movies) {
  document.querySelector("#result").innerHTML = "";
  for (let x of movies) {
    create(x);
  }
}

let allImages = document.querySelectorAll("img");

allImages.forEach((img) => {
  img.addEventListener("click", () => information(img.name));
});

function information(title) {
  localStorage.setItem("clicked", title);
  window.location.href = "info.html";
}

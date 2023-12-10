async function get_movie(movie_name, p) {
  let a = await fetch(
    // `http://www.omdbapi.com/?apikey=85fb5fc6&s=${movie_name}&page=${p}`
    `http://www.omdbapi.com/?apikey=da82bbd0&s=${movie_name}&page=${p}`
  );
  let b = await a.json();
  // console.log(b.Search);
  let mo = b.Search;
  show(mo);
}

function search(e) {
  if (e.key === "Enter") {
    let movie_name = document.querySelector("#search").value;
    get_all_movie(movie_name);
  }
}

async function get_all_movie(movie_name) {
  let a = await fetch(
    // `http://www.omdbapi.com/?apikey=85fb5fc6&s=${movie_name}`
    `http://www.omdbapi.com/?apikey=da82bbd0&s=${movie_name}`
  );
  let b = await a.json();
  // console.log(b.totalResults);
  let pages = Math.ceil(b.totalResults / 10);
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#searched").innerHTML = "";

  // console.log(arr);
  for (let i = 1; i <= pages; i++) {
    await get_movie(movie_name, i);
  }
}

function create(movi) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.onerror = function() {
    this.src = "images/Poster.png";
  }
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
  for (let x of movies) {
    create(x);
  }
}

function information(title) {
  localStorage.setItem("clicked", title);
  window.location.href = "info.html";
}

function clear_search() {
  document.querySelector("#search").value = "";
  document.querySelector("#search").focus();
}

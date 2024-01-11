let allImages = document.querySelectorAll("img");

allImages.forEach((img) => {
  img.addEventListener("click", () => information(img.name));
});

function information(title) {
  localStorage.setItem("clicked", title);
  window.location.href = "info.html";
}

async function get_movie(movie_name, p) {
  let a = await fetch(
    // `http://www.omdbapi.com/?apikey=85fb5fc6&s=${movie_name}&page=${p}`
    `http://www.omdbapi.com/?apikey=da82bbd0&s=${movie_name}&page=${p}&limit=12`
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
  console.log("hello1");
  console.log(b);
  console.log("hello1");
  get_movie(movie_name, 1);

  // console.log(b.totalResults);
  let pages = Math.ceil(b.totalResults / 10);
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = `
  <div class="pagination_buttons button">
  ${create_button(pages)
    .map((item) => {
      return `<button data-id=${item}>${item}</button>`;
    })
    .join(" ")}
  
  </div>

  `;
  let pre = document.querySelector("#pagination button");
  pre.classList.add("active");
  let buttons = document.querySelectorAll("#pagination button");
  for (let x of buttons) {
    x.addEventListener("click", (e) => {
      let pageNo = e.target.dataset.id;
      // console.log(pageNo);
      pre.classList.remove("active");
      e.target.classList.add("active");
      get_movie(movie_name, pageNo);

      pre = x;
    });
  }
}

function create_button(total) {
  let arr = [];
  for (let i = 1; i <= total; i++) {
    arr.push(i);
  }
  return arr;
}

function create(movi) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.onerror = function () {
    this.src = "images/Poster.png";
  };
  img.src = movi.Poster;
  let title = document.createElement("h2");
  title.innerText = movi.Title;
  div.addEventListener("click", () => information(movi.Title));
  div.append(img, title);
  document.querySelector("#result").append(div);
}
let cont = document.querySelector("#content");
function topFunction() {
  cont.scrollIntoView({ behavior: "smooth" });
}
function show(movies) {
  topFunction();
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#searched").innerHTML = "";
  for (let x of movies) {
    create(x);
  }
}

function information(title) {
  localStorage.setItem("clicked", title);
  window.location.href = "info.html";
}

function clear_search() {
  // document.querySelector("#search").value = "";
  let movie_name = document.querySelector("#search").value;
  movie_name ? get_all_movie(movie_name) : null;
  
  document.querySelector("#search").focus();
}

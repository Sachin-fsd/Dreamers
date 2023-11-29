let c = document.querySelectorAll("#big img");
let left = 100,
  x,
  y;

function loadimg() {
  let images = [];

  const ur = document.querySelectorAll("#top img");
  for (x of ur) {
    images.push(x.src);
  }

  var loaded = 0;

  function preloadImage(src) {
    var img = new Image();
    img.src = src;
    img.onload = function () {
      loaded++;
      if (loaded == images.length) {
        x = setInterval(myfun, 4000);
      }
    };
  }

  for (var i = 0; i < images.length; i++) {
    preloadImage(images[i]);
  }
}

loadimg();

window.onload = () => {
  let top = document.getElementById("top");
  var big1 = document.getElementById("big");
  let im = document.querySelectorAll("#big>div>img");
  top.style.height = `${top.clientWidth / 2}px`;
  big1.setAttribute("style", `height:${big1.clientWidth / 2}px`);
  for (let i of im) {
    i.style.height = `${big1.clientWidth / 2}px`;
  }

  let latest = document.querySelectorAll("#big2 img");
  for (let x of latest) {
    x.style.width = `${top.clientWidth / 6.5}px`;
    x.style.height = `${(top.clientWidth / 6.5) * 1.5}px`;
  }
};

let dots = document.getElementsByClassName("dot");
dots[0].setAttribute("style", "transform: scale(1.5)");

function myfun() {
  if (left >= c.length * 100) {
    left -= 200;
    let div = document.getElementById("big");
    div.setAttribute("style", `transition:translate 2s; translate:-${left}%`);
    dots[left / 100].setAttribute("style", "transform: scale(1.5)");
    for (let d = 0; d < 4; d++) {
      if (d !== left / 100) {
        dots[d].removeAttribute("style");
      }
    }
    left = left - 100;
    y = setInterval(myfun2, 4000);
    clearInterval(x);
    return;
  }
  let div = document.getElementById("big");

  div.setAttribute("style", `transition:translate 2s; translate:-${left}%`);
  dots[left / 100].setAttribute("style", "transform: scale(1.5)");
  for (let d = 0; d < 4; d++) {
    if (d !== left / 100) {
      dots[d].removeAttribute("style");
    }
  }
  left = left + 100;
}

function myfun2() {
  if (left <= 0) {
    let div = document.getElementById("big");
    div.setAttribute("style", `transition:translate 2s; translate:-${left}%`);
    dots[left / 100].setAttribute("style", "transform: scale(1.5)");
    for (let d = 0; d < 4; d++) {
      if (d !== left / 100) {
        dots[d].removeAttribute("style");
      }
    }
    left = left + 100;
    x = setInterval(myfun, 4000);
    clearInterval(y);
    return;
  }

  let div = document.getElementById("big");
  div.setAttribute("style", `transition:translate 2s; translate:-${left}%`);
  dots[left / 100].setAttribute("style", "transform: scale(1.5)");

  for (let d = 0; d < 4; d++) {
    if (d !== left / 100) {
      dots[d].removeAttribute("style");
    }
  }

  left = left - 100;
}

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
  for (x of movies) {
    create(x);
  }
}

function dot(e) {
  clearInterval(x);
  clearInterval(y);
  let div = document.getElementById("big");
  for (let d = 0; d < 4; d++) {
    dots[d].removeAttribute("style");
  }

  if (e.id == "1") {
    e.setAttribute("style", "transform: scale(1.5)");
    div.setAttribute("style", `transition:translate 2s; translate:0%`);
  } else if (e.id == "2") {
    e.setAttribute("style", "transform: scale(1.5)");
    div.setAttribute("style", `transition:translate 2s; translate:-100%`);
  } else if (e.id == "3") {
    e.setAttribute("style", "transform: scale(1.5)");
    div.setAttribute("style", `transition:translate 2s; translate:-200%`);
  } else {
    e.setAttribute("style", "transform: scale(1.5)");
    div.setAttribute("style", `transition:translate 2s; translate:-300%`);
  }
}

window.onresize = () => {
  left = 100;
  clearInterval(x);
  clearInterval(y);
  loadimg();
  let top = document.getElementById("top");
  var big1 = document.getElementById("big");
  let im = document.querySelectorAll("#big>div>img");
  top.style.height = `${top.clientWidth / 2}px`;
  big1.setAttribute("style", `height:${big1.clientWidth / 2}px`);
  for (let i of im) {
    i.style.height = `${big1.clientWidth / 2}px`;
  }

  let latest = document.querySelectorAll("#big2 img");
  for (let x of latest) {
    x.style.width = `${top.clientWidth / 6.5}px`;
    x.style.height = `${(top.clientWidth / 6.5) * 1.5}px`;
  }
};

let allImages = document.querySelectorAll("img");

allImages.forEach((img) => {
  img.addEventListener("click", () => information(img.name));
});

function information(title) {
  // document.querySelector("#title h1").innerText = title
  localStorage.setItem("clicked", title);
  window.location.href = "info.html";

  // console.log("k",title)
}

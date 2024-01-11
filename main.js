let allImages = document.querySelectorAll("img");

allImages.forEach((img) => {
  img.addEventListener("click", () => information(img.name));
});

function information(title) {
  localStorage.setItem("clicked", title);
  window.location.href = "info.html";
}

document.querySelector("#nav #search img").addEventListener("click",()=>{
  window.location="search.html"
})
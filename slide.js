// window.onresize = (event)=>{
//   console.log(window.innerWidth);
// }

let x, y, z, x2, y2, z2;

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");

let box = [box1, box2, box3, box4];

let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");
let r4 = document.querySelector("#r4");

var dots = [r1, r2, r3, r4];
r1.classList.add("transform");

let slide = setInterval(slider, 28000);

slider();
function slider() {
  x = setTimeout(myfun, 4000);

  function myfun() {
    r2.classList.add("transform");
    r1.classList.remove("transform");
    box1.classList.add("trans");
    box2.classList.add("trans2");
    y = setTimeout(myfun2, 4000);
  }

  function myfun2() {
    r3.classList.add("transform");
    r2.classList.remove("transform");
    box2.classList.add("trans");
    box3.classList.add("trans2");
    z = setTimeout(myfun3, 4000);
  }

  function myfun3() {
    r4.classList.add("transform");
    r3.classList.remove("transform");
    box3.classList.add("trans");
    box4.classList.add("trans2");
    x2 = setTimeout(rfun3, 4000);
  }

  function rfun3() {
    r4.classList.remove("transform");
    r3.classList.add("transform");
    box4.classList.remove("trans2");
    box3.classList.remove("trans");
    y2 = setTimeout(rfun2, 4000);
  }

  function rfun2() {
    r3.classList.remove("transform");
    r2.classList.add("transform");
    box3.classList.remove("trans2");
    box2.classList.remove("trans");
    z2 = setTimeout(rfun, 4000);
  }

  function rfun() {
    r2.classList.remove("transform");
    r1.classList.add("transform");
    box2.classList.remove("trans2");
    box1.classList.remove("trans");
  }
}

var d = 0;
var just = 0;
function dot(e) {
  clearInterval(slide);
  clearTimeout(x);
  clearTimeout(y);
  clearTimeout(z);
  clearTimeout(x2);
  clearTimeout(y2);
  clearTimeout(z2);
  
if(d=="0"){
  if(e.id==just){
    return;
  }
  just = e.id;
  box1.classList.add("back")
  for (a in box){
    box[a].classList.remove("back2")
    box[a].classList.remove("trans2")
    dots[a].classList.remove("transform")
  }
  if(e.id=="r1"){
    box1.classList.remove("back")
    // box1.classList.add("trans2")
    box1.classList.remove("trans")
    dots[0].classList.add("transform")
  }
  else if(e.id=="r2"){
    box2.classList.add("trans2")
    box2.classList.remove("trans")
    dots[1].classList.add("transform")
  }
  else if(e.id=="r3"){
    box3.classList.add("trans2")
    box3.classList.remove("trans")
    dots[2].classList.add("transform")
  }
  else if(e.id=="r4"){
    box4.classList.add("trans2")
    box4.classList.remove("trans")
    dots[3].classList.add("transform")
  }
  d=1;
}else{
  if(e.id==just){
    return;
  }
  just = e.id;
  box1.classList.add("trans2")
  for (x in box){
    box[x].classList.remove("trans2");
    box[x].classList.add("back2");
    dots[x].classList.remove("transform")
  }
  if(e.id=="r1"){
    box1.classList.remove("back2")
    box1.classList.remove("back")
    // box1.classList.add("trans2")
    box1.classList.remove("trans")
    dots[0].classList.add("transform")
  }
  else if(e.id=="r2"){
    box2.classList.remove("back2")
    box2.classList.add("trans2")
    box2.classList.remove("trans")
    dots[1].classList.add("transform")
  }
  else if(e.id=="r3"){
    box3.classList.remove("back2")
    box3.classList.add("trans2")
    box3.classList.remove("trans")
    dots[2].classList.add("transform")
  }
  else if(e.id=="r4"){
    box4.classList.remove("back2")
    box4.classList.add("trans2")
    box4.classList.remove("trans")
    dots[3].classList.add("transform")
  }

  d=0;

}  
}

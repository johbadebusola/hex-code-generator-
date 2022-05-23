
let hexCode = "0123456789abcdef";
let box = document.querySelector(".box");
function generate() {
  let color = "#";
  for (i=0;i<6;i++){
let random = hexCode[Math.floor(Math.random()*16)];
color += random;
  }
  box.style.backgroundColor = color;
  document.querySelector("h1").innerHTML = color;
  console.log(color);
  
}

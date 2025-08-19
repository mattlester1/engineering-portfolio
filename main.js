
(function(){const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.navlinks a').forEach(a=>{const href=a.getAttribute('href');
if((path===''&&href==='index.html')||href===path){a.classList.add('active');}});})();
// Lightbox
document.addEventListener("DOMContentLoaded",()=>{
const lightbox=document.createElement("div");lightbox.className="lightbox";
const img=document.createElement("img");lightbox.appendChild(img);document.body.appendChild(lightbox);
document.querySelectorAll(".card img").forEach(image=>{image.addEventListener("click",()=>{
img.src=image.src;lightbox.classList.add("show");});});
lightbox.addEventListener("click",()=>{lightbox.classList.remove("show");});});

const preloader = document.getElementById
("container-preloader");
const video = document.getElementById("preloader-video");

let siteCarregado = false;

window.addEventListener("load", () => {
    siteCarregado = true;
})
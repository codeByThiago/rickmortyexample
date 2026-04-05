const menuHamburguer = document.querySelector(".menu-hamburguer");
const headerNav = document.querySelector('header nav');

menuHamburguer.addEventListener('click', () => {
    if(menuHamburguer.classList.contains('ativo')) {
        menuHamburguer.classList.remove('ativo');
        headerNav.classList.remove('ativo');
    } else {
        menuHamburguer.classList.add('ativo');
        headerNav.classList.add('ativo');
    }
});
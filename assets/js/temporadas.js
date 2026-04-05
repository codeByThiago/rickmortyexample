gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 2,
    effects: true
})

gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        end: "100% 100%",
        invalidateOnRefresh: true,
    }
})

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
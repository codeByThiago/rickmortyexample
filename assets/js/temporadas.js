gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText,ScrollToPlugin);

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


function redirecionar() {
    const select = document.querySelector(".select-wrapper select");

    let url = select.value;

    window.location.href = url;    
}

document.getElementById("scroll-explorar-temporadas").addEventListener('click', () => {
    gsap.to(window, { duration: .2, scrollTo: "#explorar-temporadas" });
})
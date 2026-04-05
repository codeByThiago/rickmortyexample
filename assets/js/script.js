gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

const logoPulse = gsap.to("#rem-preloader-logo", {
    scale: 1.1,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// document.body.style.overflow = 'hidden';

// window.addEventListener('load', () => {
//     const video = document.querySelector('#preloader-video');
//     const tl = gsap.timeline();

//     tl.to("#rem-preloader-logo", {
//         opacity: 0,
//         scale: 1.5,
//         duration: 0.5,
//         onStart: () => {
//             logoPulse.kill(); 
//         },
//         onComplete: () => {
//             video.play();
//         }
//     })
//     .to("#preloader-video", {
//         opacity: 1,
//         duration: 0.3
//     })
//     .to("#preloader-container", {
//         yPercent: -100,
//         duration: 1.5,
//         ease: "power4.inOut",
//         delay: 2, 
//         onStart: () => {
//             startMainAnimations();
//         },
//         onComplete: () => {
//             document.getElementById("preloader-container").style.display = "none";
//             document.body.style.overflow = 'auto';
//         }
//     });
// });

function startMainAnimations() {
    const contentTl = gsap.timeline();

    contentTl.from("#content-container", {
        opacity: 0,
        y: 40,
        duration: 2,
        ease: "power2.out"
    })
}

gsap.to("#hero-container", {
    filter: "blur(5px)",
    opacity: .5,
    scale: "0.85",
    boxShadow: " 0 0 15px #39FF14, 0 0 30px #39FF14",
    borderRadius: 50,
    scrollTrigger: {
        start: "0%, 0%",
        end: "20%, 70%",
        scrub: true
    }
})

gsap.set(".info-video-container img", {
    y: "-50%"
})

gsap.from(".info-video-container img", {
    x: "-200%",
    rotate: "180degree",
    filter: "blur(10px)",
    scale: .5,
    y: "-80%",
    scrollTrigger: {
        start: "10%, 10%",
        end: "20% 20%",
        scrub: true
    }
})


// ANIMAÇÕES NO FOOTER

// SLIDER DE TEMPORADAS

const slider = document.querySelector('.temporadas-carrossel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});
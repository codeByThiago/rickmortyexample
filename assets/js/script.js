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

document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
    const video = document.querySelector('#preloader-video');
    const tl = gsap.timeline();

    tl.to("#rem-preloader-logo", {
        opacity: 0,
        scale: 1.5,
        duration: 0.5,
        onStart: () => {
            logoPulse.kill(); 
        },
        onComplete: () => {
            video.play();
        }
    })
    .to("#preloader-video", {
        opacity: 1,
        duration: 0.3
    })
    .to("#preloader-container", {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut",
        delay: 2, 
        onStart: () => {
            startMainAnimations();
        },
        onComplete: () => {
            document.getElementById("preloader-container").style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
});

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


// ANIMAÇÕES NO FOOTER

const footer = document.getElementsByTagName("footer");

// WebP Sequence Video

const canvas = document.getElementById("webp-rick-animation");
const context = canvas.getContext("2d");

const frameCount = 44;
const currentFrame = index => `media/videos/rick_walking_frames/${String(index).padStart(4, '0')}.webp`;

const images = [];
const airbnb = { frame: 0 };

// Pré-carregamento
for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

// FORÇA O PRIMEIRO FRAME: Assim que a primeira imagem carregar, desenha ela
images[0].onload = () => {
    render();
    // Faz o canvas aparecer suavemente para não dar um "pulo" visual
    gsap.to(canvas, { opacity: 1, duration: 0.5 });
};

function render() {
    const img = images[airbnb.frame];
    if (img && img.complete) {
        canvas.width = img.width;
        canvas.height = img.height;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0);
    }
}

gsap.to(airbnb, {
    frame: frameCount - 1,
    snap: "frame", 
    ease: "none",
    scrollTrigger: {
        trigger: "#info-container", 
        start: "top top",           
        end: "+=2000",              
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
            // Garante que o render rode durante o scroll
            render();
            
            // Lógica extra: Se chegar no fim do scroll (progresso 1), 
            // garante que o último frame esteja desenhado
            if (self.progress === 1) {
                airbnb.frame = frameCount - 1;
                render();
            }
        }
    }
});

// 5. Ajuste de Responsividade (Opcional, mas recomendado)
window.addEventListener("resize", render);
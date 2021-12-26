document.addEventListener('DOMContentLoaded', () =>{
    var tl = gsap.timeline();

tl
.from(".logo",{
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
})

.from(".navbar",{
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
},"-=0.8")

.from(".hero-item",{
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
},"-=0.8")

.from(".hero-img",{
    duration: 1,
    x: 10,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
},"-=0.8")

gsap.registerPlugin(ScrollTrigger);

gsap.from("#acessorios div",{
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".card-gift",
    }
});

gsap.from("#doacao div",{
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: {each: 0.2},
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".foot-img",    
    }
})


})




let image = document.querySelectorAll(".image");
let cursor = document.querySelector(".cursor");
var main = document.querySelector("main");
let part1 = document.querySelector(".part1");
let part2 = document.querySelector(".part2");
let part3 = document.querySelector(".part3");
let body = document.querySelector("body");
let icons  = document.querySelector(".icons")
let a = document.querySelectorAll(".part2 h4 .first");
let h4 = document.querySelectorAll(".part2 h4");
let bar = document.querySelectorAll(".part2 .bar"); 
var fsec = document.querySelector(".fsection");
let boxcon = document.querySelector(".box-contaier");
let box = document.querySelectorAll(".box");
let h1= document.querySelector(".box h1");
let h5= document.querySelector(".box h5");
let theme= document.querySelectorAll(".theme");
let menu = document.querySelector(".sidebar .menu");
let menubar = document.querySelector(".menubar");
let cross = document.querySelector(".menubar .head .close");
let btn = document.querySelector(".theme .btn");


function themeAnimation(){
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})
}
themeAnimation();

function menuAnimation(){
    menu.addEventListener("click",() => {
        var tl = gsap.timeline();
        tl.from(".menubar",{
            y:1000,
            opacity:1,
            duration:.9,
            delay:-1,
            ease:Power4,
        })
        
        tl.to(".menubar",{
            y:-1000,
            opacity:1,
            duration:.9,
            delay:-1,
            ease:Power4,
        })
        tl.from(".body h5",{
            y:10,
            opacity:0,
            duration:.9,
            delay:1,
            stagger:.2
        })
        
    })
    
        cross.addEventListener("click",() => {
            console.log('here');
            var tl = gsap.timeline();
        tl.from(".menubar",{
            y:-1000,
            duration:.9,
            delay:-1,
            ease:Power4,
    
        })
        tl.to(".menubar",{
            y:1000,
            duration:.9,
            delay:-1,
            ease:Power4,
        })
    
    })
}
menuAnimation();

function sliderAnimation(){
    function moveSlider(){
        image.forEach(img =>{ img.classList.remove("active"),
        img.classList.add("noActive")});
        this.classList.add("active");
        this.classList.remove("noActive");
    }
    image.forEach((img) => {
        img.addEventListener("mouseenter", moveSlider);
    })
}
sliderAnimation();

function cursorAnimation(){

    window.addEventListener("mousemove",function(e){
        gsap.to(cursor,{
            x:e.x,
            y:e.y
        })
        cursor.style.transfrom=`translate(${e.clientX}px, ${e.clientY}px)`;
    })
}
cursorAnimation();

function mouseAnimation(){
    window.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
    window.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    
}

function gsapAnimation(){
let tl = gsap.timeline();
tl.from(".loader h4",{
    x:100,
    duration:.9,
    delay:.2,
    stagger:.2,
    opacity:0
})
tl.to(".loader h4",{
    x:-33,
    duration:.4,
    delay:.1,
    stagger:.2,
    opacity:0
})  
tl.to(".loader",{

    y:-1000,
    duration:1,
    display:"none",
})
tl.from(".part1 h1, .part2, .part3 , .icons",{
    y:60,
    duration:1,
    delay:0,
})
tl.from(" .fsection .left h5",{
    y:250,
    delay:0,
    stagger:.2
})
tl.from(" .right",{
    scale:.5,
    opacity:0,
    duration:.5,
    delay:-.5,
    stagger:.2
})

gsap.from(".heading p",{
    y:34,
    duration:.3,
    delay:.1,
    scrollTrigger:{
        trigger:".heading p",
        scroller:"body",
        start:"top 90%",
        end:"bottom 70%",
        scrub:1
        
    }
})
gsap.from(".links h6",{
    y:34,
    duration:.3,
    delay:.1,
    stagger:.4,
    ease:Power4,
    scrollTrigger:{
        trigger:".heading p",
        scroller:"body",
        start:"top 80%",
        end:"bottom 50%",
        scrub:1
    }
})
gsap.from(".swiper-slide .image",{
    scale:0,
    duration:.3,
    delay:.1,
    scrollTrigger:{
        trigger:".heading p",
        scroller:"body",
        start:"top 50%",
        end:"bottom 10%",
        scrub:3
    }
})
}
gsapAnimation();

// swipper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});




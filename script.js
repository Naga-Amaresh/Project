function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".container"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);  

// tell ScrollTrigger to use these proxy methods for the ".container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// locomotiveAnimation();   


function themeAnimation(){
    let btn = document.querySelector(".theme .btn");
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    })
}
themeAnimation();

function menuAnimation(){
    let menu = document.querySelector(".sidebar .menu");
    menu.addEventListener("click",() => {
        var tl = gsap.timeline();
            
            tl.to(".menubar",{
                y:-1000,
                opacity:1,
                duration:.6,
                delay:-1,
                ease:"power4.inout",
            })
            tl.from(".menubar .body h5, .menubar .body h6",{
                y:10,
                opacity:0,
                duration:.9,
                delay:1,
                stagger:.2,
                ease:"power4.inout",
            })
            
        })
        
        let cross = document.querySelector(".menubar .head .close");
        cross.addEventListener("click",() => {
            var tl = gsap.timeline();
            tl.from(".menubar",{
                y:-1000,
                duration:.9,
                delay:-1,
                ease:"power4.inout",
                
            })
            tl.to(".menubar",{
                y:1000,
                duration:.9,
                delay:-1,
                ease:"power4.inout",
            })
            
        })
        
    }
    menuAnimation();
    
    function sliderAnimation(){
        let image = document.querySelectorAll(".image");
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
    document.addEventListener("mousemove",function(e){
        gsap.to(".cursor",{
            x:e.x,
            y:e.y,
        });
    });
}
cursorAnimation();


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
    ease:"ease.inout",
})
tl.from("header",{
    y:-100,
    duration:1,
    ease:"ease.inout",
})
tl.from(".part1 h1, .part2, .part3 , .icons",{
    opacity:1,
    y:60,
    duration:1,
    delay:-1,
    ease:"ease.inout",
})
tl.from(" .fsection .left h5",{
    y:390,
    delay:.5,
    stagger:.2,
    ease:"ease.inout",
})
tl.from(" .right",{
    scale:.5,
    opacity:0,
    duration:.5,
    delay:-1,
    stagger:.2,
    ease:"ease.inout",
})

gsap.from(".heading p",{
    y:34,
    duration:.3,
    delay:.1,
    ease:"ease.inout",
    scrollTrigger:{
        trigger:".heading p",
        scroller:".container",
        start:"top 90%",
        end:"bottom 70%",
        // scrub:1
        
    }
})
gsap.from(".links h6",{
    y:34,
    duration:.3,
    delay:.1,
    stagger:.4,
    // ease:"power4.inout",
    scrollTrigger:{
        trigger:".heading p",
        scroller:".container",
        start:"top 80%",
        end:"bottom 50%",
        // scrub:1
    }
})
gsap.from(".swiper-slide .image",{
    scale:0,
    duration:.3,
    delay:.1,
    scrollTrigger:{
        trigger:".heading p",
        scroller:".container",
        start:"top 50%",
        end:"bottom 10%",
        scrub:3
    }
})
}
gsapAnimation();

// swipper

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 1,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
}
swiper()

    


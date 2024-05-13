// gsap : Animation of Loader 

function loading() {
    var tl = gsap.timeline()


    tl.to("#yellow1", {
        top: "-100%",
        duration: 0.7,
        delay: 0.5,
        ease: "expo.out"

    });
    tl.from("#yellow2", {
        top: "100%",
        duration: 0.7,
        delay: 0.5,
        ease: "expo.out"

    }, "anim");
    tl.to("#loader  h1", {
        color: "black",
        delay: 0.6,
        duration: 0.7
    }, "anim");
    tl.to("#loader ", {
        opacity: 0
    });
    tl.to("#loader ", {
        display: "none"
    });


}
loading();

// locomotive : for smoothly scrooling  the page 

// import LocomotiveScroll from 'locomotive-scroll';

function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    document.querySelector("footer h5").addEventListener("click", () => {
        scroll.scrollTo(0)
    })
    let elems = document.querySelectorAll(".elem");
    let page2 = document.querySelector("#page2")
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            let target = ele.getAttribute("data-img")
            // console.log(target)
            page2.style.backgroundImage = `url(${target})`

        })
    })

}

loco();



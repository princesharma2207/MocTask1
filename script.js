gsap.to("#nav",{
    backgroundColor: "#c1520855",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,


    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:1,

    }
})
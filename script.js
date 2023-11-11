function myAnimation(){
    gsap.from("#home-main h4", {
        y:200,
        opacity:0,
        delay:0.5,
        duration:0.7,
        ease: "shine.in" 
    })

    const headings = document.querySelectorAll("#heading h1");

    // Iterate over each h1 element and apply GSAP animation
    headings.forEach((heading, index) => {
      gsap.from(heading, {
        opacity: 0,
        delay: 1.5 + index * 0.4, // Adjust delay for each heading
        duration: 0.7,
        stagger: 1.1
      });
    });


    gsap.from("#nav", {
        opacity:0,
        delay:2.5,
        duration:1.7
    })

    gsap.from("#home-last", {
        opacity:0,
        delay:2.5,
        duration:1.7,
        ease: "expo.in" 
    })

}
myAnimation();
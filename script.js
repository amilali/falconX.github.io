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

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('body'),
//   smooth: true
// });

Shery.mouseFollower();

  Shery.hoverWithMediaCircle(".hva", {
    videos: ["https://media.istockphoto.com/id/1399092574/video/adventurous-woman-on-a-rocky-mountain-overlooking-ocean-coast.mp4?s=mp4-640x640-is&k=20&c=xqpqkkQgwjJvb3IXekuXSOYa-ajiNW_eFZFIT1vkFHY="]
  });


  gsap.to(".flefth", {
    scrollTrigger: {
      trigger: "#fcont",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

  let sections = document.querySelectorAll(".flefth");
  Shery.imageEffect(".fimg", {
    style: 4,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });




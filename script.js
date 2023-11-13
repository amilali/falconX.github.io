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
    y: "-200%",
    ease: Power1,
  });

  let sections = document.querySelectorAll(".flefth");
  Shery.imageEffect(".fimg", {
    style: 2,
    config:  {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":0.851063829787234},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":1.75},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
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




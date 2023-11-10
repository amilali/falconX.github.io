var sound = new Howl({
    src: ['https://res.cloudinary.com/djcmgdn0x/video/upload/v1699598853/Hans_Zimmer_-_Time_Pen_Perry_Remix_u4fa1s.mp3']
  });
  sound.play();

//   document.addEventListener('click', () => {
//     sound.pause();
//   });
  
let pau = document.getElementById("logo");

pau.addEventListener('click', () => {
    if (sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }
});

Howler.volume(0.1);

  

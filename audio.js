var sound = new Howl({
    src: ['https://res.cloudinary.com/djcmgdn0x/video/upload/v1699642560/Ramp_eb8sfs.mp3','https://res.cloudinary.com/djcmgdn0x/video/upload/v1699615026/%EF%BC%B3%EF%BC%B0%EF%BC%A1%EF%BC%A3%EF%BC%A5%EF%BC%B4%EF%BC%B2%EF%BC%A9%EF%BC%B0%EF%BC%A9%EF%BC%A9_Chillwave_-_Synthwave_-_Retrowave_Mix_yhw5th.mp3']
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



  

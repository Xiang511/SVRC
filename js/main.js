let nav = document.querySelector(".main-nav");
let hb = document.querySelector(".hb");

// if (window.innerWidth < 993) {
//     $('.click').click(function () {
//         nav.style.display = "none";
//     });
//     $('.hb').click(function () {
//         nav.style.display = "block";
//     });
    
// }
function Confetti() {
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 3000)
}
  // nav選單動畫
  let menuBtn = document.querySelectorAll(".icon");
  for (var i = 0; i < menuBtn.length; i++) {
      menuBtn[i].addEventListener("click", (e) => {
          console.log(e.target);
          e.target.classList.toggle("active");
      });
  }
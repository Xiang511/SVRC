let nav = document.querySelector(".main-nav");
let hb = document.querySelector(".hb");

if (window.innerWidth < 993) {
    $('.click').click(function () {
        nav.style.display = "none";
    });
    $('.hb').click(function () {
        nav.style.display = "block";
    });
    
}
function Confetti() {
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 3000)
}

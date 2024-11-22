const DevAnim = document.getElementById("Devanim");
const WebAnim = document.getElementById("Webanim");
const LogoAnim = document.getElementById("Logoanim");
const anim = document.querySelectorAll(".anim");
const nav = document.querySelector("nav");
const buttons = document.querySelectorAll(".btn");
const moves = document.querySelectorAll(".move");
let lastScroll = 0;

function Scroll() {
  window.addEventListener("scroll", () => {
    console.log("coucou");
    if (window.scrollY < lastScroll) {
      nav.style.opacity = 1;
    } else {
      nav.style.opacity = 0;
    }

    lastScroll = window.scrollY;

    if (window.scrollY > 520 && window.scrollY < 1200) {
      DevAnim.style.transform = "translateX(0)";
      DevAnim.style.opacity = 1;
    }
    if (window.scrollY > 660 && window.scrollY < 1200) {
      WebAnim.style.transform = "translateX(0)";
      WebAnim.style.opacity = 1;
    }
    if (window.scrollY > 800 && window.scrollY < 1200) {
      LogoAnim.style.transform = "translateX(0)";
      LogoAnim.style.opacity = 1;
    }

    if (window.scrollY > 1200) {
      anim.forEach((animAll) => {
        animAll.style.opacity = 1;
        animAll.style.transform = "translateX(0)";
        animAll.style.transition = "none";
        console.log("yo");
      });
    }
  });
}
Scroll();

// Animation du caroussel

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let moveArray = [...moves];
    if (e.target.id === "next" ? 1 : -1) {
      moveArray.unshift(moveArray.pop());
    } else {
      moveArray.push(moveArray.shift());
    }
    console.log(moveArray);
  });
});

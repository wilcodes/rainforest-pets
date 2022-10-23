const hamburger = document.querySelector(".icon-box");
let isHamburgerOpen = false;

function toggleMenu() {
  if (!isHamburgerOpen) {
    document.querySelector(".close").style.display = "block";
    document.querySelector(".open").style.display = "none";
    document.querySelector(".hamburger-modal").style.display = "block";
  } else {
    document.querySelector(".close").style.display = "none";
    document.querySelector(".open").style.display = "block";
    document.querySelector(".hamburger-modal").style.display = "none";
  }
  isHamburgerOpen = !isHamburgerOpen;
}

hamburger.addEventListener("click", toggleMenu);

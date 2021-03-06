const coverStars = document.querySelector(".cover-stars");
const github = document.querySelector(".github");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight / 2;

function handleGithubLogin() {
  window.location.href = "http://101.101.210.243/thedream.api/github2/login/";
}

function loadStar() {
  let top = 0;
  let left = 0;
  let star;
  for (var i = 0; i < 250; i++) {
    star = document.createElement("div");
    star.classList.add("star");
    star.classList.add("loaded");
    top = Math.ceil(Math.random() * windowHeight);
    left = Math.ceil(Math.random() * windowWidth);
    width = Math.ceil(Math.random() * 4);
    if (i % 7 === 0) {
      star.style.top = String(top * 2) + "px";
    } else {
      star.style.top = String(top) + "px";
    }
    star.style.left = String(left) + "px";
    star.style.width = String(width) + "px";
    star.style.height = String(width) + "px";
    if (i % 3 === 0) {
      let t = Math.ceil(Math.random() * 3);
      star.classList.add("shine" + `-${t}`);
    }
    coverStars.appendChild(star);
  }
}

function init() {
  loadStar();
  github.addEventListener("click", handleGithubLogin);
}

init();

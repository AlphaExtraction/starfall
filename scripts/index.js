const cols = {
  haze: "#476ad4",
  magna: "#ffbf99",
  aster: "#ff99a6",
  face: "#00aa80",
  heart: "#aa0040",
  soul: "#604e4e",
};
const animLen = 15000;

// Original from Mike Bostock, 2012 Jan 14
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(null);
    }, time);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const curURL = window.location.href;
  const parCol = document.getElementsByClassName("mainsec");
  const titleTxt = document.getElementById("titletxt");
  const theStar = document.getElementById("thestar");
  const clix = document.getElementsByClassName("divclick");

  let loadDelay = 4750;

  if (theStar != undefined && titleTxt != undefined) {
    setTimeout(() => {
      document.body.classList.remove("stop-scrolling");
    }, 5000);
    const randRot = Math.random() * 360;
    theStar.animate(
      {
        rotate: [
          `${randRot.toString()}deg`,
          `${(randRot - 360).toString()}deg`,
        ],
      },
      { duration: 90000, iterations: Infinity, easing: "linear" }
    );

    if (curURL.search("#") < 0) {
      let scrollInterval = window.setInterval(() => window.scroll(0, 0), 50);
      setTimeout(() => clearInterval(scrollInterval), 1500);

      titleTxt.style.fontSize = "150pt";
      titleTxt.style.margin = "450px auto";
      theStar.style.margin = "50px auto";
      theStar.style.scale = "1";

      theStar.animate(
        { opacity: [0, 1] },
        { duration: 1000, delay: 500, fill: "forwards", easing: "linear" }
      );
      theStar.animate(
        { opacity: [1, 0.25] },
        { duration: 1000, delay: 2000, fill: "forwards", easing: "linear" }
      );

      titleTxt.animate(
        { opacity: [0, 1] },
        { duration: 1000, delay: 2500, fill: "forwards", easing: "linear" }
      );
      titleTxt.animate(
        { fontSize: "75pt", margin: "200px auto" },
        {
          duration: 1250,
          delay: 4000,
          fill: "forwards",
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        }
      );
      theStar.animate(
        { margin: "-200px auto", scale: "0.5" },
        {
          duration: 1250,
          delay: 4000,
          fill: "forwards",
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        }
      );
    } else {
      document.body.classList.remove("stop-scrolling");
      let scrollInterval = window.setInterval(() => window.scroll(0, 0), 50);
      setTimeout(() => clearInterval(scrollInterval), 300);
      loadDelay = 750;

      theStar.animate(
        { opacity: [0, 0.25] },
        { duration: 500, fill: "forwards", easing: "linear" }
      );
      titleTxt.animate(
        { opacity: [0, 1] },
        { duration: 500, fill: "forwards", easing: "linear" }
      );
    }
  }

  if (
    !(location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ) {
    window.history.replaceState(undefined, "", "index");
  } else {
    window.history.replaceState(undefined, "", "index.html");
  }
  window.location.hash = "#home";
  /* window.addEventListener("beforeunload", () => {
    document.body.animate(
      { opacity: 0 },
      { duration: 188, easing: "linear", fill: "forwards" }
    );
    document.body.style.pointerEvents = "none";
  }); */

  for (var i = 0; i < clix.length; i++) {
    let clicky = clix[i];
    clicky.addEventListener("click", () => {
      document.body.animate(
        { opacity: 0 },
        { duration: 375, easing: "linear", fill: "forwards" }
      );
      document.body.style.pointerEvents = "none";
      setTimeout(() => {
        window.location.href = `${clicky.id}.html`;
      }, 400);
    });
  }

  for (var i = 0; i < parCol.length; i++) {
    let par = parCol[i];
    par.animate(
      { opacity: [0, 1] },
      {
        duration: 750,
        easing: "linear",
        delay: i * 250 + loadDelay,
        fill: "forwards",
      }
    );
  }
});

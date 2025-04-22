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
  const txtCol = document.getElementsByClassName("spectext");
  const parCol = document.getElementsByClassName("ele");
  const imgCol = document.getElementsByClassName("image");
  const titleTxt = document.getElementById("titletxt");
  const backs = document.getElementsByClassName("backbutton");

  let specText = shuffle(Array.from(txtCol));
  let specLen = specText.length;
  let pathname = window.location.pathname;

  if (
    !(location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ) {
    const pathsearch = pathname.search(".html");
    if (pathsearch >= 0) {
      window.history.replaceState(
        undefined,
        "",
        pathname.substring(0, pathsearch)
      );
    }
  }

  /* window.addEventListener("beforeunload", () => {
    document.body.animate(
      { opacity: 0 },
      { duration: 188, easing: "linear", fill: "forwards" }
    );
    document.body.style.pointerEvents = "none";
  }); */

  if (titleTxt != undefined) titleTxt.opacity = 1;
  document.body.animate(
    { opacity: [0, 1] },
    { duration: 750, fill: "forwards", easing: "linear" }
  );
  document.body.style.opacity = 1;

  for (var i = 0; i < imgCol.length; i++) {
    let img = imgCol[i];
    img.animate(
      { opacity: [0, 1] },
      { duration: 750, delay: 500, fill: "forwards", easing: "linear" }
    );
  }

  /*for (var i = 0; i < specLen; i++) {
    let txt = specText[i];
    txt.style.color = "white";
    let tCol = cols[txt.classList[1]];
    txt.animate(
      [
        { color: "white" },
        { color: tCol },
        { color: tCol },
        { color: tCol },
        { color: tCol },
        { color: tCol },
        { color: "white" },
      ],
      {
        duration: animLen,
        easing: "linear",
        iterations: Infinity,
        delay: (animLen * i) / specLen,
      }
    );
  }*/

  for (var i = 0; i < backs.length; i++) {
    let clicky = backs[i];
    clicky.addEventListener("click", () => {
      document.body.animate(
        { opacity: 0 },
        { duration: 375, easing: "linear", fill: "forwards" }
      );
      document.body.style.pointerEvents = "none";
      setTimeout(() => {
        window.location.href = `index.html#home`;
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
        delay: i * 250 + 1000,
        fill: "forwards",
      }
    );
  }
});

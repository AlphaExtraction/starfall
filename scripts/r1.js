window.history.replaceState(undefined, "", "tolot_rebirth");
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

document.addEventListener("DOMContentLoaded", function () {
  if (getCookie("Resurrected1").localeCompare("Yes") == 0) {
    document.body.animate(
      { opacity: [0, 1] },
      { duration: 1500, fill: "forwards", easing: "linear" }
    );
  } else {
    document.location.href = "midnight.html";
  }

  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");

  const t1 = document.getElementById("t1");
  const t2 = document.getElementById("t2");

  const texts = [
    "",
    "",
    "images/res1/L-01.png",
    "images/res1/L-02.png",
    "images/res1/L-03.png",
    "images/res1/L-04.png",
    "images/res1/L-05.png",
    "images/res1/L-06.png",
    "images/res1/L-07.png",
    "images/res1/L-08.png",
    "images/res1/L-09.png",
    "images/res1/L-10.png",
    "",
    "",
  ];
  let curCycle = true;
  let curText = 0;
  const speedMult = 1;
  const tTime = 5000 * speedMult;
  const tDelay = 2500 * speedMult;
  const tEasing = "linear";

  function repeater(times, ob1, ob2) {
    let animList = ob1.getAnimations();
    if (animList[animList.length - 1].currentTime >= tTime) {
      times = 0;
      curText = (curText + 1) % 14;
      if (curText == 0) {
        const curDate = new Date();
        curDate.setTime(curDate.getTime() + 300000);
        document.cookie = `Resurrected1=Cooldown; expires=${curDate.toUTCString()}`;
        document.location.href = "midnight.html";
      } else {
        curCycle = !curCycle;

        setTimeout(() => {
          if (curCycle) {
            t2.src = texts[curText];
            c1.animate(
              { fill: ["#000", "#000"] },
              { duration: 50, fill: "forwards" }
            );
          } else {
            t1.src = texts[curText];
            c1.animate(
              { fill: ["#fff", "#fff"] },
              { duration: 50, fill: "forwards" }
            );
          }

          ob1.animate({ r: ["0%", "0%"] }, { duration: 50, fill: "forwards" });
          ob2.animate(
            { r: ["0%", "50%"] },
            {
              duration: tTime,
              easing: tEasing,
              fill: "forwards",
            }
          );
          repeater(250, ob2, ob1);
        }, tDelay);
      }
    }
    if (times > 0) {
      setTimeout(() => {
        repeater(times - 1, ob1, ob2);
      }, 100);
    }
  }
  setTimeout(() => {
    c2.animate(
      { r: ["0%", "50%"] },
      {
        duration: tTime,
        easing: tEasing,
        fill: "forwards",
      }
    );

    repeater(250, c2, c3);
  }, 1500);
});

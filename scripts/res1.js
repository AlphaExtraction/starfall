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

  document.body.animate(
    { opacity: [0, 1] },
    { duration: 1500, fill: "forwards", easing: "linear" }
  );

  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");
  const c4 = document.getElementById("c4");
  const c5 = document.getElementById("c5");
  const c6 = document.getElementById("c6");
  const c7 = document.getElementById("c7");
  const c8 = document.getElementById("c8");
  const c9 = document.getElementById("c9");
  const cA = document.getElementById("cA");
  const cB = document.getElementById("cB");
  const cC = document.getElementById("cC");
  const cD = document.getElementById("cD");

  const h1 = document.getElementById("hand1");
  const h2 = document.getElementById("hand2");

  c2.animate(
    { r: ["45%", "50%", "50%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  c3.animate(
    { r: ["40%", "50%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  c4.animate(
    { r: ["35%", "45%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  c5.animate(
    { r: ["30%", "40%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  c6.animate(
    { r: ["25%", "35%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  c7.animate(
    { r: ["20%", "30%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  c8.animate(
    { r: ["15%", "25%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  c9.animate(
    { r: ["10%", "20%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  cA.animate(
    { r: ["5%", "15%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  cB.animate(
    { r: ["0%", "10%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );
  cC.animate(
    { r: ["0%", "0%", "5%"] },
    { duration: 5000, easing: "linear", iterations: Infinity }
  );

  const curDate = new Date();
  const hours = curDate.getHours();
  const minutes = curDate.getMinutes();
  const seconds = curDate.getSeconds();

  const startHand1 = (minutes + seconds / 60) / 60;
  const startHand2 = (hours + startHand1) / 12;
  const timeMin = 1000 * 60 * 60;

  h1.style.transform = "rotate(" + startHand1.toString() + "turn)";
  h2.style.transform = "rotate(" + startHand2.toString() + "turn)";

  h1.animate(
    {
      transform: [
        "rotate(" + startHand1.toString() + "turn)",
        "rotate(" + (startHand1 + 1).toString() + "turn)",
      ],
    },
    { duration: timeMin, easing: "linear", iterations: Infinity }
  );
  h2.animate(
    {
      transform: [
        "rotate(" + startHand2.toString() + "turn)",
        "rotate(" + (startHand2 + 1).toString() + "turn)",
      ],
    },
    { duration: timeMin * 12, easing: "linear", iterations: Infinity }
  );

  function repeater(times) {
    if (
      cD.getAnimations()[0] == null ||
      cD.getAnimations()[0].currentTime > 4999
    ) {
      const curDate = new Date();
      curDate.setTime(curDate.getTime() + 300000);
      document.cookie = `Resurrected1=Yes; expires=${curDate.toUTCString()}`;
      document.location.href = "tolot_rebirth.html";
      times = 0;
    }
    if (times > 0) {
      setTimeout(() => {
        repeater(times - 1);
      }, 100);
    }
  }

  if (
    hours <= 0 &&
    minutes < 3 &&
    getCookie("Resurrected1").localeCompare("Cooldown") != 0
  ) {
    cD.animate(
      { r: ["6.66%", "50.1%"] },
      {
        duration: 5000,
        easing: "cubic-bezier(0.32, 0, 0.67, 0)",
        fill: "forwards",
      }
    );

    repeater(150);
  } else {
    setTimeout(() => {
      cD.animate(
        { r: ["6.66%", "50.1%"] },
        {
          duration: 5000,
          easing: "cubic-bezier(0.32, 0, 0.67, 0)",
          fill: "forwards",
        }
      );

      repeater(150);
    }, 86400000 - hours * 3600000 - minutes * 60000 - seconds * 1000);
  }
});

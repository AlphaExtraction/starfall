document.addEventListener("DOMContentLoaded", function () {
  const c1 = document.getElementById("c1");
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

  let thingy = new Date();
  console.log(thingy.getFullYear());
});

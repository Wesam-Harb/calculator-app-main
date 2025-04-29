let toggle = document.querySelector(".toggle");
let screen = document.querySelector(".screen");
let header = document.querySelector("header");
let inputs = document.querySelector(".inputs");
let del = document.querySelector(".del");
let res = document.querySelector(".res");
let eq = document.querySelector(".eq");
let inp = document.querySelectorAll(".inputs div:not(.eq, .res, .del)");

function theme(
  bodyColor,
  screenColor,
  toggleAndInputColor,
  headerColor,
  deleteAndResetColor,
  delAndResetShadow,
  equalAndToggleColor,
  eqShadow,
  screenTextColor,
  inpACtive,
  DelResActive,
  EqActive,
  Inpbg
) {
  document.body.style.backgroundColor = bodyColor;
  screen.style.backgroundColor = screenColor;
  toggle.style.backgroundColor = toggleAndInputColor;
  header.style.color = headerColor;
  inputs.style.backgroundColor = toggleAndInputColor;
  // eq.style.backgroundColor = equalAndToggleColor;
  eq.style.boxShadow = `0px 3px 0px 0px ${eqShadow}`;
  toggle.firstChild.style.backgroundColor = equalAndToggleColor;
  // res.style.backgroundColor = deleteAndResetColor;
  // del.style.backgroundColor = deleteAndResetColor;
  del.style.boxShadow = `0px 3px 0px 0px ${delAndResetShadow}`;
  res.style.boxShadow = `0px 3px 0px 0px ${delAndResetShadow}`;
  screen.style.color = screenTextColor;
  //
  document.documentElement.style.setProperty(
    "--themeInpAcitveColor",
    inpACtive
  );
  document.documentElement.style.setProperty("--themeEqAcitveColor", EqActive);
  document.documentElement.style.setProperty(
    "--themeDelAndResAcitveColor",
    DelResActive
  );
  document.documentElement.style.setProperty("--themeInpColor", Inpbg);
  document.documentElement.style.setProperty(
    "--themeEqColor",
    equalAndToggleColor
  );
  document.documentElement.style.setProperty(
    "--themeDelAndResColor",
    deleteAndResetColor
  );
}
let left = 2;
let count = 0;
toggle.onclick = function () {
  count++;
  left += 15;
  toggle.firstChild.style.left = `${left}px`;
  //theme 1
  if (count == 3) {
    inp.forEach(
      (el) =>
        (el.style.cssText +=
          "color:hsl(60, 10%, 19%);box-shadow:0px 3px 0px 0px hsl(35, 11%, 61%);")
    );
    theme(
      "hsl(222, 26%, 31%)",
      "hsl(224, 36%, 15%)",
      "hsl(223, 31%, 20%)",
      "hsl(0, 0%, 100%)",
      "hsl(225, 21%, 49%)",
      "hsl(224, 28%, 35%)",
      "hsl(6, 63%, 50%)",
      "hsl(6, 70%, 34%)",
      "hsl(0, 0%, 100%)",
      "hsl(0, 0%, 100%)",
      "hsl(226, 23%, 65%)",
      "hsl(6, 52.8%, 58.4%)",
      "hsl(45, 7%, 89%)"
    );
  }
  //theme 2
  if (count == 1) {
    inp.forEach(
      (el) =>
        (el.style.cssText +=
          "color:hsl(60, 10%, 19%);box-shadow:0px 3px 0px 0px hsl(35, 11%, 61%);")
    );
    theme(
      "hsl(0, 0%, 90%)",
      "hsl(0, 0%, 93%)",
      "hsl(0, 5%, 81%)",
      "hsl(60, 10%, 19%)",
      "hsl(185, 42%, 37%)",
      "hsl(185, 58%, 25%)",
      "hsl(25, 98%, 40%)",
      "hsl(25, 99%, 27%)",
      "hsl(60, 10%, 19%)",
      "hsl(60, 100%, 100%)",
      "hsl(185, 31%, 46%)",
      "hsl(25, 70.70%, 83.90%)",
      "hsl(45, 7%, 89%)"
    );
  }
  //theme 3
  if (count == 2) {
    inp.forEach(
      (el) =>
        (el.style.cssText +=
          "color:hsl(52, 100%, 62%);box-shadow:0px 3px 0px 0px hsl(290, 70%, 36%);")
    ); //;background-color:hsl(268, 47%, 21%)
    theme(
      "hsl(268, 75%, 9%)",
      "hsl(268, 71%, 12%)",
      "hsl(268, 71%, 12%)",
      "hsl(52, 100%, 62%)",
      "hsl(281, 89%, 26%)",
      "hsl(285, 91%, 52%)",
      "hsl(176, 100%, 44%)",
      "hsl(177, 92%, 70%)",
      "hsl(52, 100%, 62%)",
      "hsl(268, 48.30%, 34.10%)",
      "hsl(268, 62.50%, 31.40%)",
      "hsl(176, 91.00%, 52.20%)",
      "hsl(268, 47%, 21%)"
    );
  }
  //reset toggle to first place
  if (count == 3) {
    toggle.firstChild.style.left = "2px";
    count = 0;
    left = 2;
  }
};
let result = ``;
document.querySelectorAll(".inputs div").forEach(function (el) {
  el.onclick = function () {
    if (result === "" && (el.innerText === "X" || el.innerText === "/")) {
      return;
    }
    let input = el.innerText;

    if (input == "X") input = "*";

    if (input == "RESET") {
      result = ``;
      screen.textContent = "";
    } else if (input == "DEL") {
      result = result.toString().slice(0, -1);
      screen.textContent = result;
    } else if (input == "=") {
      screen.textContent = eval(result);
      result = eval(result);
    } else if (/[+\-/*]/.test(input)) {
      if (/[+\-]/.test(result[result.length - 1]) && result.length == 1)
        input = "";
      else if (/[+\-/*]/.test(result[result.length - 1])) {
        result = result.slice(0, -1) + input;
      } else {
        result += input;
      }
      screen.textContent = result;
    } else {
      result += input;
      screen.textContent = result;
    }
  };
});

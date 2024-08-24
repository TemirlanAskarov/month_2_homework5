let $redBlock = document.querySelector("#red_block");
let $yellowBlock = document.querySelector("#yellow_block");
let $greenBlock = document.querySelector("#green_block");
let textBlock = document.querySelector(".text_block");
let defaultColor = "white";

let changeColor = (color) => {
  for (let i of [$greenBlock, $redBlock, $yellowBlock]) {
    i.style.backgroundColor = defaultColor;
  }

  if (color === "red") {
    $redBlock.style.backgroundColor = "red";
    textBlock.innerHTML = "STOP";
    textBlock.style.color = "red";
  } else if (color === "yellow") {
    $yellowBlock.style.backgroundColor = "yellow";
    textBlock.innerHTML = "WAIT";
    textBlock.style.color = "yellow";
  } else if (color === "green") {
    $greenBlock.style.backgroundColor = "green";
    textBlock.innerHTML = "GO";
    textBlock.style.color = "greenyellow";
  } else {
    $greenBlock.style.backgroundColor = defaultColor;
    $redBlock.style.backgroundColor = defaultColor;
    $yellowBlock.style.backgroundColor = defaultColor;
  }
};

$redBlock.addEventListener("mousemove", function () {
  changeColor("red");
});
$yellowBlock.addEventListener("mousemove", function () {
  changeColor("yellow");
});

$greenBlock.addEventListener("mousemove", function () {
  changeColor("green");
});

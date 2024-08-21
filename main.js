let $redBlock = document.querySelector("#red_block");
let $yellowBlock = document.querySelector("#yellow_block");
let $greenBlock = document.querySelector("#green_block");
let textBlock = document.querySelector(".text_block");

let changeColor = (color) => {
  for (let i of [$greenBlock, $redBlock, $yellowBlock]) {
    i.style.backgroundColor = "white";
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
    $greenBlock.style.backgroundColor = "white";
    $redBlock.style.backgroundColor = "white";
    $yellowBlock.style.backgroundColor = "white";
  }
};

$redBlock.addEventListener("click", function () {
  changeColor("red");
});
$yellowBlock.addEventListener("click", function () {
  changeColor("yellow");
});

$greenBlock.addEventListener("click", function () {
  changeColor("green");
});

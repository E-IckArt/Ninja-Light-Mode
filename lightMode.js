let mode = "light";

function selectMode(mode) {
  let color = "ghostWhite";
  let image = "../img/ninja-index.jpg";
  let label = "Index Mode";
  let label2 = "Select your favorite mode for background";

  if (mode === "dark") {
    color = "rgb(42, 41, 48)";
    image = "../img/ninja-darkmode.png";
    label = "Dark Ninja Mode";
    label2 = "";
  } else if (mode === "light") {
    color = "ghostWhite";
    image = "../img/ninja-lightmode.png";
    label = "Light Ninja Mode";
    label2 = "";
  } else {
    color = "dimGray";
    image = "../img/ninja-greymode.png";
    label = "Grey Ninja Mode";
    label2 = "";
  }

  console.log(label);

  document.getElementById("icon").src = image;
  document.getElementById("theme").style.background = color;
  document.getElementById("label").innerHTML = label;
  document.getElementById("label2").innerHTML = label2;
}

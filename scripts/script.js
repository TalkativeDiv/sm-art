const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");
let mouseEvent;
let color = "red";
let radius = "20";
let width = 2;
let height = 2;
let lastPosX;
let lastPosY;
let type;
let colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];
const txtColor = document.getElementById("txtColor");
for (let i = 0; i < colors.length; i++) {
  txtColor.innerHTML += `<option>${colors[i]}</option>`;
}

let drawShape = (x, y, r, c, w, s, h, lX, lY) => {
  console.log(
    `The current position of x and y is: x:${x} y:${y} and last position of x and y is: x:${lX} y:${lY}. The radius, color and width is: radius:${r} color:${c} width:${w}`
  );
  ctx.beginPath();
  ctx.strokeStyle = c;
  ctx.lineWidth = w;
  //if (s === "Line") {
  //  ctx.moveTo(lX, lY);
  //  ctx.lineTo(x, y);
  //} else if (s === "Circle") {
  //  ctx.arc(x, y, r, 0, 2 * Math.PI);
  //} else if (s === "Rectangle (Filled)") {
  //  ctx.fillRect(x, y, w, h);
  //} else (s === "Rectangle (Filled)") {
  //  ctx.fillRect(x, y, w, h);
  //}

  switch (s) {
    case "Line":
      ctx.moveTo(lX, lY);
      ctx.lineTo(x, y);
      break;
    case "Circle":
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      break;
    case "Rectangle":
      ctx.fillRect(x, y, w, h);
      break;
  }
  ctx.stroke();
};

//let drawLine = (x, y, w, c, lX, lY) => {
//  ctx.beginPath();
//  ctx.strokeStyle = c;
//  ctx.lineWidth = w;

//  ctx.stroke();
//};

cvs.addEventListener("mousedown", (e) => {
  color = document.getElementById("txtColor").value;
  width = document.getElementById("txtWidth").value;
  height = document.getElementById("txtHeight").value;
  radius = document.getElementById("txtRadius").value;
  type = document.getElementById("txtType").value;
  mouseEvent = "mouseDown";
});
cvs.addEventListener("mouseleave", (e) => (mouseEvent = "mouseLeave"));
cvs.addEventListener("mouseup", (e) => (mouseEvent = "mouseUp"));
cvs.addEventListener("mousemove", (e) => {
  let mX = e.clientX - cvs.offsetLeft;
  let mY = e.clientY - cvs.offsetTop;

  if (mouseEvent === "mouseDown") {
    drawShape(mX, mY, radius, color, width, type, height, lastPosX, lastPosY);
  }
  lastPosX = mX;
  lastPosY = mY;
});

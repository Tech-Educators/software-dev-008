// get canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageUpload = document.getElementById("imageUpload");
const form = document.querySelector("form");
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]');
const imageFilter = document.getElementById("imageFilter");

let img;

function handleImage() {
  const file = this.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", function () {
    img = new Image();
    img.addEventListener("load", function (event) {
      canvas.width = img.width;
      canvas.height = img.height;
    });
    img.src = event.target.result;
  });

  reader.readAsDataURL(file);
}

function drawMeme() {
  ctx.font = `bold 70px sans-serif`;
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.filter = imageFilter.value;
  ctx.drawImage(img, 0, 0);
  ctx.filter = "none";
  ctx.fillText(topText.value, canvas.width / 2, 100);
  ctx.fillText(bottomText.value, canvas.width / 2, canvas.height - 100);
}

imageUpload.addEventListener("change", handleImage, false);
form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    drawMeme();
  },
  false
);

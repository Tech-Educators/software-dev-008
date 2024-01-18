const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imageUpload = document.getElementById("imageUpload");
const form = document.querySelector("form");
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]');
const imageFilter = document.getElementById("imageFilter");

let img;

// Runs when the user changes the selected image with the file input element
function handleImageChange(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  // onload is like addEventListener("load", ...). Where addEventListener can be used many times
  // onload overwrites all other listeners. It's an older approach that is simpler to use in this case
  // because we know we only need the one fuction attached to this event.
  reader.onload = handleFileReaderLoad;
  reader.readAsDataURL(file);
}

// Runs when the FileReader had "read" the image from the file (see reader.onload on line 20)
function handleFileReaderLoad(event) {
  img = new Image();
  img.onload = handleImageLoad;
  img.src = event.target.result;
}

// Runs when the image has loaded into the img element (see img.onload on line 28)
function handleImageLoad() {
  canvas.width = img.width;
  canvas.height = img.height;
  drawMeme(); // Draw the image as soon as it's loaded
}

// Runs when the user clicks the submit button on the form (see handleFormSubmit)
// and when the image has loaded (see handleImageLoad)
function drawMeme() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
  ctx.font = "bold 70px sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.filter = imageFilter.value;
  ctx.drawImage(img, 0, 0);
  ctx.filter = "none";
  ctx.fillText(topText.value, canvas.width / 2, 100);
  ctx.fillText(bottomText.value, canvas.width / 2, canvas.height - 100);
}

// Runs when the user submits the form by clicking the submit button
function handleFormSubmit(event) {
  event.preventDefault();
  drawMeme(); // Redraw the meme to update the text
}

// The user driven events from the form elements that make it all go
imageUpload.addEventListener("change", handleImageChange);
form.addEventListener("submit", handleFormSubmit);

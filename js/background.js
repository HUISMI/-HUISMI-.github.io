const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.position = 'absolute';
bgImage.style.top = '50%';
bgImage.style.left = '50%';
bgImage.style.width = '100%';
bgImage.style.height = '100%';
bgImage.style.objectFit = 'cover';
bgImage.style.transform = 'translate(-50%, -50%)';
bgImage.style.zIndex = '-1';

document.body.appendChild(bgImage);


/*const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);*/
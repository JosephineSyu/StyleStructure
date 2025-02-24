const imageUrl = 'Images/Image.jpg';
const characters = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.'];

const img = new Image();
img.src = imageUrl; 
img.crossOrigin = "Anonymous";

img.onload = function () {
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    const maxWidth = window.innerWidth * 0.9; 
    const maxHeight = window.innerHeight * 0.9; 

    let scaleFactor = Math.min(maxWidth / img.naturalWidth, maxHeight / img.naturalHeight);

    if (scaleFactor > 1) scaleFactor = 1; 

    canvas.width = img.naturalWidth * scaleFactor;
    canvas.height = img.naturalHeight * scaleFactor;

    console.log("New Canvas Size:", canvas.width, "x", canvas.height);

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const width = canvas.width; 
    const height = canvas.height; 

    let asciiImage = '';

    const aspectRatio = 1.65;

    for (let y = 0; y < height; y += 5 * aspectRatio) {
        for (let x = 0; x < width; x += 5) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            const r = pixel[0];
            const g = pixel[1];
            const b = pixel[2];

            const brightness = (r + g +b ) / 3;

            const charIndex = Math.floor((brightness / 255) * (characters.length-1));
            asciiImage += characters[charIndex];
        }
        asciiImage += '\n';
    }
    document.getElementById('textOutput').textContent = asciiImage;
  
    // TroubleShooting
//     document.body.appendChild(img);
//     console.log("Success!");
// };
//     img.onerror = function () {
//     console.error("Error!");
//     };
}   
const imageUrl = 'Images/Image.jpg';
const characters = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.'];

const img = new Image();
img.src = imageUrl; 

img.onload = function () {
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const width = canvas.width; 
    const height = canvas.height; 

    let asciiImage = '';

    for (let y = 0; y < height; y += 8) {
        for (let x = 0; x < width; x += 8) {
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
    document.body.appendChild(img);
    console.log("Success!");
};
    img.onerror = function () {
        console.error("Error!");
    };
window.onload = function () {
const imageUrl = 'Images/Scene02.jpg';
const characters = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.'];
const colors = ['#c26e61', '#237b8e', '#d7ae93'];

const img = new Image();
img.src = imageUrl; 
img.crossOrigin = "Anonymous";

img.onload = function () {
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const width = canvas.width; 
    const height = canvas.height; 
    let asciiImage = '';
    const aspectRatio = 1.65;

    for (let y = 0; y < height; y += 1.75) {
        for (let x = 0; x < width; x += 1.045) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            // const r = pixel[0];
            // const g = pixel[1];
            // const b = pixel[2];

            // const brightness = (r + g +b ) / 3;
            const brightness = (pixel[0] + pixel [1] + pixel[2]) / 3;
            const charIndex = Math.floor((brightness / 255) * (characters.length-1));
            // asciiImage += characters[charIndex];

            let color;
                if (brightness < 85) color = colors[0];
                else if (brightness < 170) color = colors[1];
                else color = colors[2];
    
                asciiImage += `<span style ="color: ${color}">${characters[charIndex]}</span>`
        }
        asciiImage += '<br>';
    }
    // document.getElementById('textOutput').textContent = asciiImage;
    document.getElementById('textOutput').innerHTML = asciiImage;
};
};
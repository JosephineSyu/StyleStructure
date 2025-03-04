// console.log("script.js is running!");
window.onload = function () {
const imageUrl = 'Images/Image.jpg';
const transcript = [
    "INT. JOEL'S BEDROOM - NIGHT", 
    "It's dark.", 
    "Joel and Clementine are in bed.",
    "The memory is already in the midst of being erased.",
    "Clementine is talking in a monotonous, robotic manner.",
    "CLEMENTINE",
    "You don't tell me things, Joel.",
    "I'm an open book.",
    "I tell you everything.",
    "Every damn embarassing thing.",
    "You don't trust me.",
    "JOEL",
    "No, it isn't that.",
    "CLEMENTINE", 
    "I want to know you.",
    "JOEL",
    "I just don't have anything very interesting about my life.",
    "CLEMENTINE",
    "Joel, you're a liar.",
    "The scene is faded completely now and Joel just lies there for a moment, registering Clementine's statement.",
];

const img = new Image();
img.src = imageUrl; 
img.crossOrigin = "Anonymous";

img.onload = function () {
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    // const maxWidth = 700;
    // const maxHeight = 1000;
    //     const scaleFactorWidth = maxWidth / img.naturalWidth;
    //     const scaleFactorHeight = maxHeight / img.naturalHeight;
    //     const scaleFactor = Math.min(scaleFactorWidth, scaleFactorHeight);

    //     const scaledWidth = img.naturalWidth * scaleFactor;
    //     const scaledHeight = img.naturalHeight * scaleFactor;

        // canvas.width = window.innerWidth * 0.9;
        // canvas.height = window.innerHeight * 0.9;

        // const aspectRatio = img.naturalWidth / img.naturalHeight;
        // let imageWidth = canvas.width;
        // let imageHeight = canvas.width / aspectRatio;

        // if (imageHeight > canvas.Height) {
        //     imageHeight = canvas.height;
        //     imageWidth = canvas.height * aspectRatio; 
        // }

        // const offsetX = (canvas.width - imageWidth) / 2;
        // const offsetY = (canvas.height - imageHeight) / 2;

        // ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
        // ctx.drawImage(img, offsetX, offsetY, imageWidth, imageHeight);

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const width = canvas.width; 
    const height = canvas.height; 
    let asciiImage = '';
    const aspectRatio = 1.65;
    // let transcriptIndex = 0;

    // const xStep = 15;
    // const yStep = 25 * aspectRatio;

    // const words = transcript.join(" ").split(" ");

    for (let y = 0; y < height; y += 5) {
        for (let x = 0; x < width; x += 5) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            const r = pixel[0];
            const g = pixel[1];
            const b = pixel[2];

            const brightness = (r + g +b ) / 3;
            // const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            // const opacity = (brightness / 255) * 0.8 + 0.2;
            // const textSnippet = transcript[transcriptIndex % transcript.length];
            // const textSnippet = words[transcriptIndex % words.length];
            // const fadedText = `<span style="opacity:${opacity}">${textSnippet}</span>`;
            const charIndex = Math.floor((brightness / 255) * (characters.length-1));
            asciiImage += characters[charIndex];
            // asciiImage += fadedText + " ";
            // transcriptIndex++;
        }
        asciiImage += '\n';
    }
    document.getElementById('textOutput').textContent = asciiImage;
    // const textOutput = document.getElementById('textOutput');
    // textOutput.innerHTML = `<pre>${asciiImage}</pre>`;
};

};
// console.log("Image loaded:", img.width, img.height);
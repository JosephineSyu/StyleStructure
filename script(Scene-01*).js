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
const colors = ['#7b3f00', '#52796f', '#a39e66'];

const img = new Image();
img.src = imageUrl; 
img.crossOrigin = "Anonymous";

img.onload = function () {
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.9;

    const scaleFactor = Math.min(maxWidth / img.naturalWidth, maxHeight / img.naturalHeight);

    canvas.width = img.naturalWidth * scaleFactor;
    canvas.height = img.naturalHeight * scaleFactor;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const width = canvas.width; 
    const height = canvas.height; 
    let asciiImage = '';
    const aspectRatio = 1.65;
    let transcriptIndex = 0;

    const xStep = 30;
    const yStep = 60 * aspectRatio;

    const words = transcript.join(" ").split(" ");

    for (let y = 0; y < height; y += 5) {
        for (let x = 0; x < width; x += 5) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            const r = pixel[0];
            const g = pixel[1];
            const b = pixel[2];

            const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

            let color;
                if (brightness < 85) color = colors[0];
                else if (brightness < 170) color = colors[1];
                else color = colors[2];

                const opacity = (brightness / 255) * 0.8 + 0.2;
                const textSnippet = words[transcriptIndex % words.length];

                // const delay = Math.random() * 2;
                const fadedText = `<span class="shimmer" style="color: ${color}; opacity:${opacity};filter: saturate (1.5)">${textSnippet}</span>`;
                asciiImage += fadedText + " ";
                transcriptIndex++;
                
        }
        asciiImage += '<br>';
    }
    // document.getElementById('textOutput').textContent = asciiImage;
    const textOutput = document.getElementById('textOutput');
    textOutput.innerHTML = `<pre>${asciiImage}</pre>`;
};

};
// console.log("Image loaded:", img.width, img.height);
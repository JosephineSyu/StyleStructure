window.onload = function () {
const imageUrl = 'Images/Image.jpg';
const transcript = [
    "EXT. BEACH - LATER", 
    "Joel sits on a log, a paper plate of chicken and corn on his lap.", 
    "People warm themselves at the fire.",
    "Joel watches couples talking, kissing, and Rob sharing a joint with a guy.",
    "Clementine is talking in a monotonous, robotic manner.",
    "JOEL",
    "You were down by the surf.",
    "I could just make you out in the dark.",
    "Joel looks down to the water.",
    "There's Clementine, in her orange hooded sweatshirt, looking out to sea.",
    "JOEL (CONT'D)",
    "Your back to me.",
    "In that orange sweatshirt I would come to know so well and even hate eventually.",
    "At the time I thought, how cool, an orange sweatshirt.", 
    "VOICE-OVER",
    "I remember being drawn to you even then.",
    "I thought, how odd, I'm drawn to someone's back.",
    "I thought, I love this woman because she's alone down there looking out at the black ocean.",
    "JOEL (CONT'D)",
    "But I went back to my food.",
    "The next thing I remember, I felt someone sitting next to me and I saw the orange sleeve out of the corner of my eye.",
    "A shot of the orange sleeve.",
    "Joel looks up.", 
    "CLEMENTINE",
    "Hi there.",
    "JOEL",
    "Hi.",
    "VOICE-OVER",
    "I was so nervous.",
    "What were you doing there, I wondered.",
    "Your hair was lime green.",
    "Green revolution.",
    "A shot of her green hair.",
    "JOEL",
    "You said...",
    "CLEMENTINE",
    "I saw you sitting over here. . By yourself.",
    "I thought, thank God, someone normal, who doesn't know how to interact at these things either.",
    "JOEL",
    "Yeah. I don't ever know what to say.",
    "CLEMENTINE",
    "I can't tell you how happy I am to hear that.", 
    "I mean, I don't mean I'm happy you're uncomfortable, but, y’know... I'm such a loser.", 
    "Every time I come to a party I tell myself I'm going to be different and it's always exactly the same and then I hate myself after for being such a clod.",
    "JOEL",
    "Even then I didn't believe you entirely.", 
    "I thought how could you be talking to me if you couldn't talk to people?",
    "VOICE-OVER",
    "But I thought, I don't know, I thought it was cool that you were sensitive enough to know what I was feeling and that you were attracted to it.",
    "CLEMENTINE (CONT'D)",
    "But, I don't know, maybe we're the normal ones, y'know?",
    "I mean, what kind of people do well at this stuff?",
    "VOICE-OVER",
    "And I just liked you so much.",
    "CLEMENTINE (CONT'D)",
    "You did?", 
    "You liked me?",
    "JOEL",
    "You know I did.",
    "CLEMENTINE",
    "Yeah, I know.", 
    "I'm fishing.",
    "JOEL",
    "You said —",
    "She picks a drumstick off of Joel's plate.",
    "CLEMENTINE",
    "I'm Clementine.", 
    "Can I borrow a piece of your chicken?",
    "JOEL",
    "And you picked it out of my plate before I could answer and it felt so intimate like we were already lovers.",
    "JOEL (CONT'D)",
    "I remember –",
    "VOICE-OVER",
    "The grease on your chin in the bonfire light.",
    "Shot of a smudge of chicken grease on Clementine's chin.",
    "CLEMENTINE",
    "Oh God, how horrid.",
    "JOEL",
    "I'm Joel.",
    "VOICE-OVER",
    "No, it was lovely.",
    "CLEMENTINE (CONT'D)",
    "Hi, Joel. So no jokes about my name?",
    "JOEL",
    "You mean, like. . .",
    "(singing)",
    "Oh, my darlin', oh, my darlin' , oh, my darlin', Clementine.", 
    ". . ? Huckleberry Hound? That sort of thing?",
    "CLEMENTINE",
    "Yeah, like that.",
    "JOEL",
    "Nope.", 
    "No jokes.", 
    "My favorite thing when I was a kid was my Huckleberry Hound doll.", 
    "I think your name is magic.",
    "She smiles.",
    "CLEMENTINE",
    "(eyes welling)",
    "This is it, Joel.",
    "It's gonna be gone soon.",
    "JOEL",
    "I know.",
    "CLEMENTINE",
    "What do we do?",
    "JOEL",
    "Enjoy it.", 
    "Say good-bye.",
    "She nods."
];
const secretChar ='JOEL';
const colors = ['#c26e61', '#237b8e', '#d7ae93'];

const img = new Image();
img.src = imageUrl; 
img.crossOrigin = "Anonymous";

img.onload = function () {
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.9;

    const scaleFactor = Math.min(maxWidth / img.naturalWidth, maxHeight / img.naturalHeight);

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const width = canvas.width * scaleFactor; 
    const height = canvas.height * scaleFactor; 
    let asciiImage = '';
    const aspectRatio = 1.65;
    let transcriptIndex = 0;

    const xStep = 20;
    const yStep = 40 * aspectRatio;

    const words = transcript.join(" ").split(" ");

    for (let y = 0; y < height; y += 3.5) {
        for (let x = 0; x < width; x += 3.5) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            const r = pixel[0];
            const g = pixel[1];
            const b = pixel[2];

            // const brightness = (r + g +b ) / 3;
            const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            // const opacity = (brightness / 255) * 0.8 + 0.2;
            // // const textSnippet = transcript[transcriptIndex % transcript.length];
            // const textSnippet = words[transcriptIndex % words.length];
            // const fadedText = `<span style="opacity:${opacity}">${textSnippet}</span>`;
            // const charIndex = Math.floor((brightness / 255) * (characters.length-1));
            // asciiImage += characters[charIndex];

            let color;
                if (brightness < 85) color = colors[0];
                else if (brightness < 170) color = colors[1];
                else color = colors[2];

                const opacity = (brightness / 255) * 0.8 + 0.2;
                const textSnippet = words[transcriptIndex % words.length];

                const delay = Math.random() * 2;
                const fadedText = `<span class="shimmer" style="color: ${color}; opacity:${opacity};">${textSnippet}</span>`;
                asciiImage += fadedText + " ";
                transcriptIndex++;
                
        }
        asciiImage += '<br>';
    }
    // document.getElementById('textOutput').textContent = asciiImage;
    asciiImage = asciiImage.replace(/\JOEL/g, `<a href="index(Scene-01).html" style="color: #inherit; text-decoration: none;">${secretChar}</a>`);
    const textOutput = document.getElementById('textOutput');
    textOutput.innerHTML = `<pre>${asciiImage}</pre>`;
};
};
// console.log("Image loaded:", img.width, img.height);
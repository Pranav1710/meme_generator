window.addEventListener('load', function() {
    const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");

let image;

imageFileInput.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imageDataUrl + "hello")
    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener(
        "load",
        () => {
            updateMemeCanvas(
                canvas,
                image,
                topTextInput.value,
                bottomTextInput.value
            );
        },
        { once: true }
    );
});



topTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener("change", () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

    // Update canvas background
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

    // Prepare text
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    // Add top text
    ctx.textBaseline = "top";
    ctx.strokeText(topText, width / 2, yOffset);
    ctx.fillText(topText, width / 2, yOffset);

    // Add bottom text
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - yOffset);
    ctx.fillText(bottomText, width / 2, height - yOffset);
}
var download = function () {
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = document.getElementById('meme').toDataURL()
    link.click();
}
document.getElementById("download").addEventListener("click", download);
document.querySelector(".meme-template").addEventListener("click", () => {
    console.log(this)
    updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
    );
})

const allmeme = document.querySelectorAll(".meme-template");
for (let i = 0; i < allmeme.length; i++) {
    allmeme[i].addEventListener("click", () => {
        console.log(allmeme[i].src)
        image = new Image();
        image.src = allmeme[i].src;
        image.addEventListener(
            "load",
            () => {
                updateMemeCanvas(
                    canvas,
                    image,
                    topTextInput.value,
                    bottomTextInput.value
                );
            },
            { once: true }
        );
    })
}

});


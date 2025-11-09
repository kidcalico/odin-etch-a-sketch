// Establish the container as a variable

const container = document.querySelector("#container");

// Create screen element within the container

const screen = document.createElement("div");
screen.style.cssText = "width: 540px; height: 540px; background-color: lightgray; margin: 0 auto; padding: 0; display: flex; flex-wrap: wrap;";
container.appendChild(screen);

// Create variables to calculate the size of pixels based on the
// desired dimensions (size) and screen size

const size = 16;
const canvasSize = screen.offsetWidth;
const pixelSize = (canvasSize/size);

// Fill the screen with pixels

for(i = 0; i < (size*size); i++) {
    const pixel = document.createElement("div");
    // pixel.style.cssText = "box-sizing: border-box; background-color: gray; flex: 1; border: 0.1px solid black;";
    pixel.style.boxSizing = "border-box";
    pixel.style.width = pixelSize + "px";
    pixel.style.backgroundColor = "black";
    // pixel.style.border = "0.1px solid white";
    pixel.classList.add("pixel");
    screen.appendChild(pixel);
}

// Change pixel color when the mouse enters a pixel

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "white";
    });
});
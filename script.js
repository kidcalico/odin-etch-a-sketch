// Establish the container as a variable

const container = document.querySelector("#container");

// Create a border around the screen element

const border = document.createElement("div");
border.style.cssText = "width: 640px; height: 640px; background-color: salmon; border-radius: 10px; margin: auto; align-content: center;";
container.appendChild(border);

// Create screen element within the container

const screen = document.createElement("div");
screen.style.cssText = "width: 540px; height: 540px; background-color: lightgray; margin: auto; padding: 0; display: flex; flex-wrap: wrap;";
border.appendChild(screen);

// Create variables to calculate the size of pixels based on the
// desired dimensions (size) and screen size

const myRange = document.querySelector("#myRange");


myRange.addEventListener('change', screenSize);

// Fill the screen with pixels
function screenSize () {
    const size = myRange.value;
    const canvasSize = screen.offsetWidth;
    const pixelSize = (canvasSize/size);
    console.log(myRange.value);
    console.log(size);
    for(i = 0; i < (size*size); i++) {
        const pixel = document.createElement("div");
        // pixel.style.cssText = "box-sizing: border-box; background-color: gray; flex: 1; border: 0.1px solid black;";
        pixel.style.boxSizing = "border-box";
        pixel.style.width = pixelSize + "px";
        pixel.style.backgroundColor = "lightgray";
        // pixel.style.border = "0.1px solid white";
        pixel.classList.add("pixel");
        screen.appendChild(pixel);
    }
    // Change pixel color when the mouse enters a pixel
    
    const pixels = document.querySelectorAll(".pixel");
    
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
        });
    });
}

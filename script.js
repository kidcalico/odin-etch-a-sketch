// Establish the container as a variable

const container = document.querySelector("#container");

// Create a border around the screen element

const border = document.createElement("div");
border.style.cssText = "width: 640px; height: 640px; background-color: #B7161E; border-radius: 10px; margin: auto; align-content: center;";
container.appendChild(border);

// Create screen element within the container

const screen = document.createElement("div");
screen.style.cssText = "width: 540px; height: 540px; background-color: lightgray; margin: auto; padding: 0; display: flex; flex-wrap: wrap;";
border.appendChild(screen);


// Create slider which changes the resolution

const myRange = document.querySelector("#myRange");
myRange.addEventListener("change", screenSize);

// Add clear button
const clearBtn = document.querySelector("#clearbtn");
clearBtn.textContent = "Clear";
clearBtn.addEventListener("click", screenSize);
// container.appendChild(clearBtn);

// Add button to change pixel color to black on mouseover
const blackBtn = document.querySelector("#blackbtn");
blackBtn.textContent = "Black";
blackBtn.addEventListener("click", blackPix);

// Add button to change pixels to random color on mouseover
const colorBtn = document.querySelector("#colorbtn");
colorBtn.textContent = "Random Colors";
colorBtn.addEventListener("click", colorPix);

// Fill the screen with pixels
screenSizeInit();
function screenSizeInit() {
    // Create variables to calculate the size of pixels based on the
    // desired dimensions (size) and screen size
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
    blackPix();
    showRes();
}

// Change screen resolution based on slider
function screenSize() {
    // Create variables to calculate the size of pixels based on the
    // desired dimensions (size) and screen size
    const size = myRange.value;
    const canvasSize = screen.offsetWidth;
    const pixelSize = (canvasSize/size);
    console.log(myRange.value);
    console.log(size);

    // Clear old resolution
    screen.innerHTML = '';

    // Fill screen with pixels
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
    blackPix();
    showRes();
}

function blackPix() {
    // Change pixel color when the mouse enters a pixel
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
        });
    });
}

function colorPix() {
    // Change pixel color when the mouse enters a pixel
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", (event) => {
            const color = getColor();
            event.target.style.backgroundColor = `${color}`;
        });
    });
}

// Write function for random RGB color generation
function getColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function showRes() {
    // Display resolution value. Clear old text.
    // slideContainer.removeChild(lastChild);
    const resolution = document.createElement("div");
    const slideContainer = document.querySelector(".slidecontainer");
    resolution.textContent = `Resolution: ${myRange.value} x ${myRange.value}`;
    slideContainer.appendChild(resolution);
    slideContainer.removeChild(resolution.previousSibling);
}
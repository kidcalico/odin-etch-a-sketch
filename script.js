// Establish the container as a variable
const container = document.querySelector("#screen-container");

// Create a border around the screen element
const border = document.querySelector(".border");
border.style.cssText = "width: 640px; height: 700px; background-color: #B7161E; border-radius: 10px; margin: auto; align-content: center; box-shadow: 0px 0px 20px #0b2005ff;";

// Create screen element within the container
const screen = document.querySelector(".screen");
screen.style.cssText = "width: 800x; height: 450px; background-color: lightgray; margin: auto; padding: 0; display: flex; flex-wrap: wrap;";

// Control center
const controlCenter = document.querySelector(".controlcenter");
controlCenter.style.cssText = "width: 500px; margin: auto; display: flex; align-content: center; justify-content: space-around;";

// Style .slidecontainer
const slideContainer = document.querySelector(".slidecontainer");
slideContainer.style.cssText = "flex: 1;";

// Style buttons
const buttons = document.querySelector(".buttons");
buttons.style.cssText = "flex: 2; align-content: center;";

// Create slider which changes the resolution
const slider = document.querySelector("#slider");
slider.addEventListener("input", screenSize);
// slider.addEventListener("change", screenSize);

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

// Add button to shade pixel ten percent darker
// const shaderBtn = document.querySelector("#shaderbtn");
// shaderBtn.textContent = "Shader";
// shaderBtn.addEventListener("click", shadePix);

// Fill the screen with pixels
screenSizeInit();
function screenSizeInit() {
    pixelFill();
    blackPix();
    showRes();
}

// Change screen resolution based on slider
function screenSize() {
    // Clear old resolution
    screen.innerHTML = '';
    pixelFill();
    blackPix();
    showRes();
}

// Create function which fills screen with pixels
function pixelFill () {
    // Create variables to calculate the size of pixels based on the
    // desired dimensions (size) and screen size
    const size = slider.value;
    const canvasSize = screen.offsetWidth;
    const pixelSize = (canvasSize/size);
    console.log(slider.value);
    console.log(size);
    for(i = 0; i < (size*(size*9/16)); i++) {
        const pixel = document.createElement("div");
        // pixel.style.cssText = "box-sizing: border-box; background-color: gray; flex: 1; border: 0.1px solid black;";
        pixel.style.boxSizing = "border-box";
        pixel.style.width = pixelSize + "px";
        pixel.style.height = pixelSize + "px";
        pixel.style.backgroundColor = "lightgray";
        // pixel.style.border = "0.1px solid white";
        pixel.classList.add("pixel");
        screen.appendChild(pixel);
    }
}

function blackPix() {
    // Change pixel color when the mouse enters a pixel
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
            event.target.style.opacity = 1;
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
            event.target.style.opacity = 1;
        });
    });
}


// Shader function which adds 10% to given pixel. This does not work yet :(
function shadePix() {
    // Change pixel color when the mouse enters a pixel
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", (event) => {
            const currentCol = this.style.backgroundColor;
            // console.log(this.style.backgroundColor);
            event.target.style.backgroundColor = currentCol;
            const currentOp = this.style.opacity;
            event.target.style.opacity = currentOp + 0.1;
            // console.log(Number(currentOp));
            // console.log(currentCol.value);
        });
    });
}

// Write function for random RGB color generation
function getColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b}, 0.5)`;
}

function showRes() {
    // Display resolution value. Clear old text.
    // slideContainer.removeChild(lastChild);
    const resolution = document.createElement("div");
    resolution.textContent = `${slider.value} x ${slider.value*9/16}`;
    slideContainer.appendChild(resolution);
    slideContainer.removeChild(resolution.previousSibling);
}
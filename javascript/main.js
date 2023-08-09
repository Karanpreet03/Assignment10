// main.js
// Created By: Karanpreet Sachdeva
// ID: C0884994
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const brushSizeSlider = document.getElementById("slider");
    const brushSizeLabel = document.getElementById("brushSize");
    const clearButton = document.getElementById("new");
    const eraseButton = document.getElementById("erase");
    const pinkButton = document.getElementById("pink");
    const blueButton = document.getElementById("blue");
    const yellowButton = document.getElementById("yellow");
    const blackButton = document.getElementById("black");

    let isPainting = false;
    let currentColor = "black";
    let currentBrushSize = brushSizeSlider.value;

    function startPainting() {
        isPainting = true;
    }

    function stopPainting() {
        isPainting = false;
        context.beginPath();
    }

    function draw(e) {
        if (!isPainting) return;

        context.lineWidth = currentBrushSize;
        context.lineCap = "round";
        context.strokeStyle = currentColor;

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    brushSizeSlider.addEventListener("input", function() {
        currentBrushSize = brushSizeSlider.value;
        brushSizeLabel.textContent = currentBrushSize;
    });

    clearButton.addEventListener("click", clearCanvas);

    eraseButton.addEventListener("click", function() {
        currentColor = "white";
    });
    pinkButton.addEventListener("click", function() {
        currentColor = "#F50057";
        isErasing = false; // Reset eraser mode
    });

    blueButton.addEventListener("click", function() {
        currentColor = "#2979FF";
        isErasing = false; // Reset eraser mode
    });

    yellowButton.addEventListener("click", function() {
        currentColor = "#FFD600";
        isErasing = false; // Reset eraser mode
    });

    blackButton.addEventListener("click", function() {
        currentColor = "#000000";
        isErasing = false; // Reset eraser mode
    });


    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseout", stopPainting);
});

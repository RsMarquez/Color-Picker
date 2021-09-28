window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box") ;
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker")
    setColorpickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorpickerEventListeners(element, colors, pickerElements) {
    let pickerlen = pickerElements.length;
    for (let i = 0; i < pickerlen; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue)
        });
    }
}

function setElementBGColor (bgElement, red, green, blue) {
    let rgbval= [red, green, blue].join('.');
    bgElement.style.backgroundColor = "rgb("+ rgbval + ")";
}

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = red
    greenVal.innerText = green
    blueVal.innerText = blue
}
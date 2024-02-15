
function calculateRectangle(){
    //----------------rectangle-length------------
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);
//----------rectangle-width
const rectangleWidthInput = document.getElementById('rectangle-width');
const rectangleWidthText = rectangleWidthInput.value;
const width = parseFloat(rectangleWidthText);
console.log(width);

// calculate area-------
const area = length * width;
console.log('area of the rectangle',area);

// display rectangle-area 
const rectangleArea = document.getElementById('rectangle-area');
rectangleArea.innerText = area;
console.log(area);
}
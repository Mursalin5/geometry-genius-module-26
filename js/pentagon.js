function calculatePentagonArea(){
const perimeter = getInputValueByTd('pentagon-p')
const apothem = getInputValueByTd('pentagon-b')

const area = 0.5 * perimeter * apothem;
setInnerTextById('pentagon-area',area);


}
function getInputValueByTd(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputValueText = inputField.value;
const value = parseFloat(inputValueText);
return value;
}
function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
element.innerText = area;
}
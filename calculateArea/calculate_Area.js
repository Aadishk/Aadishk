let length;
let width;
function calculateArea(){
lenth=parsefloat(document.getElementById('lenght').value);
width=parseFloat(document.getElementById('width').value);

let area= length*width;
document.getElementById('result').innerText='The area of the rectangle is: ${area}';
}
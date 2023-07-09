var num1=parseInt(prompt("ingrese un numero"));
var num2=parseInt(prompt("ingrese otro numero"));
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
document.write(random(num1,num2)); 

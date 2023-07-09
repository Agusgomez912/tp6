var num1 = parseInt(prompt("ingrese un numero"));
function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

document.write(factorial(num1)); 
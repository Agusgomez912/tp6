var lista = new Array()
function calcularpromedio() {
    var i = 0

    do {
        lista[i] = parseInt(prompt("Ingrese un numero"));
        i++
        var seguir = confirm("Quiere ingresar otro numero?");
    } while (seguir);
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] % 2 == 0) {
            document.write("<br>" + lista[i]);
        }
    }
}
calcularpromedio()


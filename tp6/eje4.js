
let lista = [0, 9, 12, 18, 3, 1];
let cont;
for (let i = 0; i < lista.length; i++) {
    for (let a = i + 1; a < lista.length; a++) {
        if (lista[i] > lista[a]) {
            cont = lista[i]
            lista[i] = lista[a]
            lista[a] = cont

        }

    }

}
document.write(lista);
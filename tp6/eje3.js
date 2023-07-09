let lista=[9,12,20,18,3,1];
var maximo=lista[0];
for (let i = 0; i < lista.length; i++) {
        if (lista[i]>maximo) {
            maximo=lista[i]
        }
        
    }
document.write("El numero mayor de la lista es "+maximo);
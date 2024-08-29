// 8. Búsqueda de elementos en un arreglo
// Torres Reyes Jaime Camil
function buscarNombre(arreglo, nombre) {
    return arreglo.includes(nombre) 
        ? `${nombre} está presente en el arreglo.` 
        : `${nombre} no está presente en el arreglo.`;
}

const nombres = ["Alexis", "Julio", "Pedro", "Antonio"];
const nombreBuscado = "Pedro";
console.log(buscarNombre(nombres, nombreBuscado));

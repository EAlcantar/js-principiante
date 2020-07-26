//Call y apply
//Son metodos para funciones
// Se traen el valor de un objeto para ser aplicado como valor de
// this. 
//Ambos funcionan identico. 
//El primer argumento en call y apply será el valor de this y los siguientes
//son simples argumentos. En apply esos argumentos extra deben ser listados como
//arreglo, a diferencia de call que se entregan de forma normal
// function executor(funcion) {
//     funcion.call(tutor);
// }

// let tutor = {
//     nombre: "Erick",
//     apellido: "Alcantar",
//     nombreCompleto: function (){
//         console.log(this.nombre + " " + this.apellido)
//     }
// }

// executor(tutor.nombreCompleto);

//Bind

//Es una función que establece el contexto de la función en el argumento
//desde el inicio


function executor(funcion) {
    funcion();
}

let tutor2 = {
    nombre: "Erick",
    apellido: "Alcantar",
    nombreCompleto: function () {
        console.log(this.nombre + " " + this.apellido)
    }
}

executor(tutor2.nombreCompleto.bind(tutor2));
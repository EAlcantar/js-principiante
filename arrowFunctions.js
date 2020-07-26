//Características
// 1. Sintaxis corta
// 2. No modifican el valor de this

//Sintaxis convencional

let hola = ()=>{
    console.log("Hola mundo");
}

hola();

//Sintaxis sin llaves

let suma = (a,b)=> a+b; //No se requiere la palabra return cuando es una línea

console.log(suma(2,2));

// EL uso del arrow funtion permite conservar el valor de this (El contexto)
let tutor = {
    nombre: "Erick",
    apellido: "Alcantar",
    nombreCompleto: function () {
        setTimeout(() => { //Al usar el fat arrow se conserva el contexto del objeto tutor
            console.log(this.nombre + " " + this.apellido)
        }, 1000);
    }
}

tutor.nombreCompleto();
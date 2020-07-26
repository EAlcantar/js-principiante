/* SCOPE en Javascript */

// Scope global: cualquier cosa que esté fuera del cuerpo
// de una función

let name = "Erick"; //name es de Scope global

function present(){
    console.log("Mi nombre es "+name)
}

present()

// Principio de Menor acceso: limitar el alcance de los datos
// a los lugares en el código donde es útil

// Scope local: cualquier cosa que esté dentro del cuerpo
// de una función

function cuadrado(){
    //Scope local 1
    var number = 0;
}
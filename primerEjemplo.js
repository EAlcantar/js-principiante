var cars = ["Seat", "Chevrolet", "Ferrari", "Fiat"];
//For-loop clásico de cualquier lenguaje.
for (let x = 0; x < cars.length; x++) {
    console.log("For (común) -"+cars[x]);
}
console.log("-------------------------------");
//For/in. Itera EN el arreglo sin tener que inicializar variables
for(x in cars){
    console.log("For/in - "+cars[x]);
}
console.log("-------------------------------");
//For/of. Extrae el contenido DEL indice del arreglo en cada iteración
for (x of cars) {
    console.log("For/of - " + x);
}
console.log("-------------------------------");
//Se declara una variable que servirá para la iteración
var y = 0;
while(y<cars.length){
    console.log("While - "+cars[y]);
    y++; //En el while, la iteración tiene que ser explícita
}
//Se declara una variable que servirá para la iteración
var z=0;
do{
    console.log("Hola, esto se tiene que ejecutar al menos "+z+" vez");
    console.log("Do while - "+cars[z]);
    z++; //En el do-while, la iteración tiene que ser explícita
}while(z<cars.length);

console.log("----------- CONSTANTES --------------------");
const PI = 3.1416; //Declaración de una constante
console.log(PI);

console.log("----------- OBJETOS --------------------");
//Esta es la declaración de un objeto (si dentro del las llaves no tiene nada
//significa que el objeto está vacío, nulo o null)
var car = {
    //Características o propiedades del objeto
    brand: "Seat",
    name: "Ibiza",
    model: 2020,
    color: "Rojo",
    disponible: true,
    arreglo: ["variacion1", "variacion2"],
}
console.log(car.arreglo[0]);

console.log("---------- FUNCIONES Y FUNCIONES FLECHA -----------------");
//Esta es la declaración de una función normal
function nuevaFuncion(){
    console.log("Esta es una función");
}
console.log("** Función normal **");
nuevaFuncion();

//Esta es la declaración de una función flecha. Facilita la sintaxis
//Reduce la cantidad de código y lo vuelve legible
console.log("** Función flecha **");
nuevaFuncionFlecha = (param) => {console.log("Esta es una función flecha y me escribiste un "+param);}
nuevaFuncionFlecha(3);
//Otra sintaxis simple de una función flecha
nuevaFuncionFlecha2 = (param) => console.log("Esta es otra función flecha y me mandaste un "+param)
nuevaFuncionFlecha2(10);

console.log("---------- PROMESAS -----------------");
//Las promesas son funciones que tienen su propios call backs
//o tienen call backs personalizadas.
//Es para hacer validaciones encadenadas.
 
//Se usa para hacer fetch a URL's por ejemplo. Con la promesa se valida la 
//información (los JSON's) retornados por la URL 
var cumplirPromesa = false;

let promesa = new Promise((si, no) => {
    if(cumplirPromesa){
        si("Si se cumplió la promesa");
    }else{
        no("No se cumplió la promesa");
    }
});
//Ejecutando la promesa
promesa.then( (res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


/* Los objetos se crean con una notación llamada JSON
    JSON = JavaScript Object Notation
*/

//Declaracion de un objeto
let curso = { //El objeto se puede almacenar en una variable
    titulo: "Curso de Javascript",         //Propiedades y sus valores
    duracion: 2.2,
    formato: "Video",
    bloque: ["Introducción", "Funciones"],  //Las propiedades pueden ser arreglos, funciones u otros objetos
    inscribir: function (usuario) {        //Se declara un método. Un método, no es más que una propiedad de un objeto declarada como función
        console.log(`${usuario} ahora está inscrito`);     
    }
}
//Existen 2 formas de acceder a la propiedad de un objeto
//La primera es usando un punto para acceder a la propiedad
console.log(curso.titulo);
console.log("\n---------------------------------\n");

//La segunda es usando usando corchetes y poniendo el nombre de la
//propiedad cómo una cadena
console.log(curso["titulo"]);

console.log("\n-------- USANDO EL MÉTODO INSCRIBIR ------------------\n");
//Llamando al método 'inscribir' para inscribir a un usuario al curso
curso.inscribir('Erick');
//Las propiedades y los métodos pueden ser reasignados en cualquier
//momento

/* 
    Reasignando el titulo del curso
    curso.titulo = 'Curso base de JavaScript;  

    Sustituyendo el método inscribir por una función vacía
    curso['inscribir'] = function(){};
    curso.inscribir = function(){}
*/
console.log("\n-------- USANDO CONSTRUCTORES -------------------\n");

/* CONSTRUCTORES
    Son funciones que crean objetos definidos, sus propiedades
    y sus valores (se parace a las clases en otros lenguajes, pero no los son)
*/

function Curso(nombreCurso) { //La convención para los constructores, es que el nombre inicie con mayúscula
    this.titulo = nombreCurso; //this sirve para crear las propuedades
    this.inscribir = (usuario) => console.log(`${usuario} se ha inscrito en el ${nombreCurso} \n`);
}

//new sirve para crear un objeto a partir de un constructor. En este caso se crean 2 objetos
//utilizando el constructor de Curso
let cursoJavascript = new Curso("Curso profesional de JavaScript");
let cursoRuby = new Curso("Curso profesional de Ruby")

console.log(cursoJavascript.titulo);
cursoJavascript.inscribir("Erick");
console.log(cursoRuby.titulo);
cursoRuby.inscribir("Erick");



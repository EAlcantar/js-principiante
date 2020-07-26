/* Aunque en JavaScript no existen las clases, la última versión
    de JavaScript (ES2015) se introdujo una sintaxis alternativa para generar
    objetos, parecida a la forma en la que se usan las clases en otros lenguajes*/

/* Class expressions
    Son otra forma de generar clases, pero se recomienda
    usar el Class declaration por que es más parecido a cómo
    se utilizan las clasese en otros lenguajes

    let Curso = class{}
    let usuario = class Usuario{}
 */

//Class declaration
class Curso{

    constructor(nombreCurso){ //El constructor crea las propiedades de la clase
        this.titulo = nombreCurso;
    }
    inscribir(usuario) { //Para definir métodos, no es necesario usar la palabra function
        console.log(`${usuario} se ha inscrito`);
    }
    
}

//INSTANCIAR: Es el proceso de crear un objeto a partir de una clase
//Al objeto creado en ese proceso se le llama INSTANCIA de esa clase determinada
let cursoJavascript = new Curso("Curso profesional de Javascript");
console.log(cursoJavascript.titulo);
cursoJavascript.inscribir("Erick");

console.log("\n---------------------------\n");

/* 
    CONSTRUCTOR
    Método 'constructor' dentro de clases.
    En POO este método se manda a llamar cuando se 
    crea un objeto nuevo de una clase.
    El constructor es el lugar para inicializar los 
    valores del objeto.

    Una clase de Javascript ÚNICAMENTE PUEDE TENER UN CONSTRUCTOR
    Si el interprete detecta otro, se arroja un error.

    Permite enlistar los parámetros que requerirá el objeto para 
    recibir valores.

    Este constructor se manda a ejecutar automáticamente al usar la
    palabra 'new' para crear un objeto de una clase.
    */

/* HERENCIAS
    Las herencias se utilizan para heredar propiedades/métodos
    de una clase padre a las clases hijas de tal forma que se puedan
    reutilizar */

//Esta es la clase base o clase padre
class User {
    constructor(nombreUsr, apellidoUsr){ 
        this.nombre = nombreUsr;
        this.apellido = apellidoUsr;
    }
    saludar(){
        console.log("Hola " + this.nombre + this.apellido);
    }
}

//La clase hija hereda las funcionalidades del padre (atributos y métodos)
//y además puede tener sus funcionalidades particulares

//También existe el término overwrite y es una forma de tomar
//un método de la clase padre y reescribirlo.
class Admin extends User{
    constructor(nombreUsr, apellidoUsr, rolUsr) { //la función 'super' nos permite ejecutar el constructor de la clase padre,
        super(nombreUsr, apellidoUsr);    //recibiendo también los argumentos que se le entregaron a la función constructora del padre
        this.rol = rolUsr;                //lo que permite no tener que repetir toda la configuración que ya se hizo en el padre
    }                                     
    saludar(){
        super.saludar(); //el objeto 'super' nos permite acceder a un método del padre
        console.log("Bienvenido al panel de administración");
    }
}

//Se crean las instancias de las clases
let admin = new Admin("Erick","Alcantar","Jefe ingenieria"); //Instancia de administrador
let usuario = new User("Juanito","Tinoco"); //Instancia de usuario

usuario.saludar();
console.log(usuario);
console.log("\n");
admin.saludar();
console.log(admin);

//También se puede heredar de los built-in objects, que son objetos
//que ya vienen en el lenguaje

class CustomDate extends Date{}
class Coleccion extends Array{}

//Una clase también puede heredar de una función constructora
/* function User(){
}
class Admin extends User{

} */

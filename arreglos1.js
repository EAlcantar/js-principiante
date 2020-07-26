/*  Recorriendo arreglos - Código facilito */

/* Utilizando FOR convencional para recorrer un arreglo
 */

    let arreglo = [1,34,19,28,10];

    for (let i = 0; i < arreglo.length; i++) {
        let elemento = arreglo[i];
        console.log(elemento);
    }
    
    console.log("\n---------------------------\n"); //Imprimo un separador

 /* Utilizando FOR EACH para recorrer un arreglo. Hace
    lo mismo pero leerlo puede ser más expresivo
    Es un método que se puede utilizar para objetos iterables
    (como arreglos u objetos)

    El recorrido con FOR EACH es ligeramente más lento que un FOR convencional
    */

    let array = ['ruby', 'python', 'java', 'javaScript'];
    //Recorrido con método FOR EACH, que usa un call back function
    array.forEach(function(elemento){ //el parámetro 'elemento' representa al elemento dentro del arreglo, en cada iteración
        console.log(elemento);
    });

    
    console.log("\n---------------------------\n"); //Imprimo un separador

    /* Filter: ayuda a eliminar/filtrar elementos para obtener sólo 
       los que nos interesa basandose en un criterio
     */
    //Eliminar 'ruby'
    /* Con filter se genera un nuevo arreglo, utilizando el criterio != 'ruby'
        para que los nuevos elementos tengan esa característica */
    
    array = array.filter((elem)=>elem != 'ruby'); //Sintaxis usando fat arrow

/*     array = array.filter(function (elem) {  //Sintaxis usando 'function' y 'return'
        return elem != 'ruby';
    }); */

    array.forEach(function (elemento) { //el parámetro 'elemento' representa al elemento dentro del arreglo, en cada iteración
        console.log(elemento);
    });

    console.log("\n---------------------------\n"); //Imprimo un separador
 
    /* Find: es un método de búsqueda, para encontrar el primer elemento que tenga las
        carácterísticas del criterio de la búsqueda (satisface la condición)
    */

    let elementoEncontrado = array.find(elem => elem == 'javaScript');
    console.log("El elemento encontrado es "+elementoEncontrado);

    console.log("\n---------------------------\n"); //Imprimo un separador

    /* Map: su función es generar un nuevo arreglo con una operación
        definida. */

    //Generando un nuevo arreglo con los cuadrados de los números listados
    //en otro arreglo inicial de numeros

    let numeros = [2,35,6,20];
    console.log("Los números son: "+ numeros);
    let cuadrados = numeros.map(numero => Math.pow(numero,2));
    console.log("Los cuadrados son: " + cuadrados);
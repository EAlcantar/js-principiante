let usuario = {
    nombre: 'Erick',
    apellido: 'Alcantar',
    nombreCompleto: function () {
        console.log(this.nombre + ' ' + this.apellido)
    }
}

let executor = {
    funcion: null,
    execute: function (f) {
        this.funcion = f;
        this.funcion();
    }
}

executor.execute(usuario.nombreCompleto);

usuario.nombreCompleto();
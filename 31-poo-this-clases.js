/*
    this --> class

    this --> objeto - class
*/

class Persona {
    cosntructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona("Alice", 25);


persona1.nuevoMetodo = function() {
    console.log(`Mi nombre es ${this.nombre}`)
}

persona1.nuevoMetodo()
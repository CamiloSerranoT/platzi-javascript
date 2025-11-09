// Objetos
/*
    Key / Value

    objeto {
        propiedad: valor,
        propiedad: valor,

        metodos()
    }
*/

const persona = {
    nombre: "Camilo",
    edad: 25,
    direccion: {
        calle: "Avenida 196",
        ciudad: "Mexico"
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona)
persona.saludar()

// Agregar propiedades
persona.telefono = "555-555-5555";
console.log(persona)

// Agregar metodos
persona.despedir = () => {
    console.log("Adios")
}

persona.despedir()

// Eliminar propiedades
delete persona.telefono;
console.log(persona)

// Eliminar metodos
delete persona.despedir;
console.log(persona)
/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "caro",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const prompt = require('prompt-sync')();

const username = prompt("¿Cuál es tu usuario? ");
const password = prompt("¿Cuál es tu contraseña? ");

let varUsuario = 0;

function usuarioExistente(username, password) {
    for (let i = 0; i < usersDatabase.length; i++) {
        if (usersDatabase[i].username === username && usersDatabase[i].password === password) {
            varUsuario = i;
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (usuarioExistente(username, password)) {
        console.log(`Bienvenido a tu cuenta, ${username}`);
        
        for (let i = 0; i < usersTimeline.length; i++) {
            if (usersTimeline[i].username === usersDatabase[varUsuario].username) {
                console.log("El timeline es: ", usersTimeline[i].timeline)
                break;
            }
        }

    } else {
        console.log("Ups, usuario o contraseña incorrectos");
    }
}

signIn(username, password);
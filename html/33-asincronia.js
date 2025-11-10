/*
    Promise()

    Estados:
        pending 
        fullfilled
        Rejected

    callbacks:
        resolve
        reject

    metodos:
        then() --> Validacion correcta
        catch() --> Validación incorrecta
*/

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let operationSuccessful = true;

        if(operationSuccessful) {
            resolve("La operacion fue exitosa");
        } else {
            reject("Fallo la operación");
        }
    }, 2000);
})

promise 
    .then((successMessage) => {
        console.log(successMessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })
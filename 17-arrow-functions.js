const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - Explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow function - Implicit return

const newGreetingImplicit = name => `Hi, ${name}` // El parametro name se puede dejar sin parentesis ya que solo es un parametro
const newGreetingImplicitTwoParameters= (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responmsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor OCTO') // No reconoce el this

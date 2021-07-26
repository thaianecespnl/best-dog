let weight;
console.log(typeof weight)

let name = "jose";
let age = 23;
let stars = 4.8;
let isSubscrible = True;

let student = {}; //-> Objeto

let student = {
    name: "Maike",
    age: 28,
    weight: 72.8,
    isSubscrible: False
}

console.log(`${student.name} + " tem " ${student.age} + " anos."`)

//parameters
const sum = function (number1, number2) {

}

sum(2, 3) // arguments

const sayMyName = () => {

}

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando."
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())

//pode ser usado tbm 
/*Date
String*/
// Manipulando Strings e Números

let string = "123"
    (Number(string))

let number = 321
    (String(number))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "paralelepipedo"
    (word.length)
let number = 1234
    (String(number).length)

//Transformar um numero quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 453252452125.335661126634
    (number.toFixed(2).replace(".", ","))

//Transformar maiusculas em minuscas e vice-versa

let word = "Programa é muito legal"
    (word.toUpperCase()) //maiusculas

let code = "TUDO EM CAIXA ALTA"
    (code.toLowerCase()) //minusculas 
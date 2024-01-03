// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const num1 = 5
const num2 = 10

const result = num1 + num2

alert(`A soma do primeiro número ${num1} com o segundo número ${num2} é = ${result}`)

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const isANumber = 145
const verifi = (typeof isANumber)

verifi === "string"? alert('Não é um número') : alert('É um número')

// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isAString = '145'
const verifi2 = (typeof isAString)

verifi2 === "string"? alert('É uma String') : alert('Não é uma String')

// Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBolean = false 
      
if((isBolean === true) || (isBolean === false)) {
  console.log('É um boleano')
} else {
  console.log('Não é um boleano')
}

// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const number1 = 20
const numner2 = 2

const resultSubtraction = number1 - numner2

alert(`A subtração do primeiro número ${number1} com o segundo número ${numner2} é = ${resultSubtraction}`)

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const numA = 5
const numB = 15
const resultMultiplication = numA * numB

alert(`O resultado da multiplicação do primeiro número ${numA} com o segundo número ${numB} é = ${resultMultiplication}`)

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const NumberDiv1 = 5
const NumberDiv2 = 15
const resultDivision = NumberDiv1 / NumberDiv2

alert(`O resultado da divisão do primeiro número ${NumberDiv1} com o segundo número ${NumberDiv2} é = ${resultDivision.toFixed(2)}`)

// Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const typeNumber = 15
const isPar = (typeNumber % 2) === 0

isPar? alert('É um número par'): alert('É um número impar')

// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const typeNumberImpar = 15
const isImpar = (typeNumberImpar % 2) !== 0

isPar? alert('É um número impar'): alert('Não é um número impar')

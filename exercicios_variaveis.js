/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Arrombado";
console.log( "tipo da varia é: ",typeof nome);
console.log("Meu nome é:", nome)
// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = 3
numero = 4
console.log(numero)
// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const array = []
array.push("Boldenona", 4, "Viado")
console.log(array)

// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
if (true){
    var nome = "Lindo";
}
console.log("Meu nome é johny e eu sou",nome)

// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if(true){
    let cachorra = "Jéssica"
    console.log("A ",cachorra, " é uma cachorra!")
}
//console.log(cachorra) Essa linha dá erro pois é uma variável de escopo de bloco  

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.

    var Aya = "Abdallah"
   
    var Aya = "Carinhosa"
    console.log("Minha maior qualidade é ser:", Aya)


     let Nome = "Moskov";
     //Não funciona, pois o let não aceita ser redeclarado!!
    let Nome = "Solângela" ;
    console.log(Nome);


// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const objeto = {nome:"johny", idade: 20}
console.log(objeto.nome)
objeto.idade = 25
console.log(objeto.idade)
// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let nome 
nome = 'johny'
console.log(nome)
// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log("Minha idade é",idade)
var idade = 20

// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
function declarar(){
    var age = 43
    return age
}
console.log("Minha idade é:" ,declarar())


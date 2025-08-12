

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var variavel = 'Guilherme'; console.log("Atividade 1: ", variavel)
// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let numero = 12;  numero = 23;
// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const array = []; array.push(1, 2, 3); console.log("Atividade 3: ", array);
// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.

const Declarar = true;

if(Declarar){
  var seila = 'oi';
}

console.log("Atividade 4: ", seila);
// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).

if(Declarar){
  let seila = 'oi';
}

//console.log(seila) Da error pois let n existe aqui fora

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.

{
  var douc = "var Atividade";
  douc = "cu";
  

  let main = "Piz";
  main = "pou"
}

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.

const obj = {nome: 'Guilherme', idade: 18}

obj.idade = 20;

console.log("Atividade 7: ", obj)


// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.

let ong;

ong = 12

console.log("Atividade 8: ", ong);


// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
 
console.log("Atividade 9: ", chama);

var chama = "io";


// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).

function criarVAR(valor){

  var mobile = 10 + valor;

  return mobile;

}

// console.log(mobile) // Vai mostrar nada pois mobile só existe dentro da function

const resultado = criarVAR(3);

console.log("Atividade 10: ", resultado) // 12



//Crie uma função que exiba uma mensagem no console;

console.log("Exercício 01:")
console.log("Qual é o sentido da vida?")
function senseOfLife(numberCode){
    return numberCode;
}
let answer = 42
console.log("A resposta para tal complexidade existencial é simplesmente:", senseOfLife(answer));
//=============================================================
//Crie uma função que receba o seu nome como (parâmetro) e exiba no console;

console.log("Exercício 02:")
function myName(name){
    return name;
}

let fullName = 'Wanderson Henrique Oliveira';
console.log(myName(fullName))
//=============================================================
//Crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console;

console.log("Exercício 03:")
function aboutMe(name, age, musicStyle){
    return `${name}, ${age}, ${musicStyle}`
}

const data = aboutMe("Henrique", 29, "Post-punk");
console.log(data);
//=============================================================
//Crie uma função que receba um filme, uma música (parâmetros) e exiba no console;

console.log("Exercício 04:")
function popCulture(movie, music){
    return `${movie}, ${music}`;
}

const preference = popCulture("Donnie Darko", "Killing Moon")
console.log(preference)

//=============================================================
//Crie uma função que retorne o triplo do número recebido no (parâmetro) da função.
console.log("Exercício 05:")

function tripleNumber(number){
    return number * 3;
}
let reply1 = tripleNumber(3);
console.log("O resultado é:",(tripleNumber(reply1)))
let reply2 = tripleNumber(6*8);
console.log("O resultado é:",(tripleNumber(reply2)))
let reply3 = tripleNumber(10-8);
console.log("O resultado é:",(tripleNumber(reply3)))


//Estudar como colocar dados adicionais quando tiver dois parâmetros de string!
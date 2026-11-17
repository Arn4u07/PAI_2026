//Exercicis de taules//

/*21.1

let taula = [];

taula[0] = "Hola";
taula[1] = "Adeu";

console.log(taula); */

/* 21.2 
taula[2] = "Nom";
console.log(taula);
taula[1] = ",";
console.log(taula); */

/* 21.3

let taula = [23, 45, 98, 73];
suma = (taula[0] + taula [2]);
console.log(suma);

taula[6] = taula[0] + taula[2];
console.log(taula); */

/* 21.4 
let num = Number(prompt("Introdueix un número"));
let taula = [];
taula[0] = num * 2;
taula[1] = num * 3;
console.log(taula); */

/*21.5

let num1 = Number(prompt("Escriu un nombre: "));
let num2 = Number(prompt("Escriu un altre: "));

let taula = [];
taula[0] = (num1+num2);
taula[1] = (num1-num2);
taula[2] = (num1*num2);
taula[3] = (num1/num2);
console.log(taula); */

/* 21.6 
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

let resultat = [];

resultat[0] = taula[0];
resultat[1] = taula[taula.length - 1];

console.log(resultat); */

//21.7

/* let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

for (let i = 0; i < taula.length; i++) {
    console.log(taula[i]);
} */

//

/* 21.8

let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let suma = 0;
for (let i = 0; i < taula.length; i++){
    suma += taula[i];
}
console.log(suma); */

/* 21.9

let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let taula1 =[];
for( let i = 0; i< taula.length; i++){
    taula1[i] = taula[i] +25;
}
console.log(taula1); */

// 21.10
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let suma = 0;
for (let i = 0; i < taula.length; i++){
    suma +=taula[i];
}
console.log(suma/taula.length);








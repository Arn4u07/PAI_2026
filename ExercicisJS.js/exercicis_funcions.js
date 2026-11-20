/* Exercici 3.1
function parellOImparell(num) {
    if (num % 2 === 0) {
        return "El número es parell";
    } else {
        return "El número es imparell";
    }
}
let num = Number(prompt("Introdueix un número"));

console.log(parellOImparell(num)); */

/* Exercici 3.2
let numArg = Number(prompt("Introdueix l'any:"));
function traspasOno(numParam) {
    if (numParam % 4 == 0 && numParam % 100 !=0|| (numParam % 400 == 0)) {
        return "És un any de traspàs";
    } else {
        return "No és un any de traspàs";
    }
}
console.log(traspasOno(numArg)); */

/* Exercici 3.3
let N = Number(prompt("Introdueix un nombre enter:"));

function suma(N_param) {
    let resultat = 0;

    for (let n = 1; n <= N_param; n++) {
        resultat = resultat + (1 / (n * n));
    }

    return resultat;
}

console.log(suma(N)); */

/* Exercicis 3.4

let notaAC = Number(prompt("Introdueix la nota d'avaluació continuada:"));
let notaPract = Number(prompt("Introdueix la nota de pràctiques:"));
let notaExamen = Number(prompt("Introdueix la nota de l'examen:"));

function notaFinal(AC_param, Pract_param, Examen_param) {

    let resultat;

    if (AC_param >= 5) {
        resultat = 0.2 * AC_param + 0.4 * Pract_param + 0.4 * Examen_param;
    } else {
        resultat = 0.4 * Pract_param + 0.6 * Examen_param;
    }

    if (resultat < 5) {
        return resultat.toFixed(2) + " - D";
    } else if (resultat < 6.5) {
        return resultat.toFixed(2) + " - C";
    } else if (resultat < 8) {
        return resultat.toFixed(2) + " - B";
    } else if (resultat < 10) {
        return resultat.toFixed(2) + " - A";
    } else {
        return resultat.toFixed(2) + " - H";
    }
}

console.log(notaFinal(notaAC, notaPract, notaExamen)); */

// Exercici 3.5
/*  Noms de variables

1.1.- Digues quins d'aquests noms de variables són correctes i quins no.


1. variAble (correcte)
2. Variable (correcte)
3. vari-able (incorrecte)
4. vari_able (correcte)
5. _variable (correcte)
6. vari.able (incorrecte) fallada
7. vari4able (correcte)
8. 4variable (incorrecte) fallada
9. variable4 (correcte)
10.variable_4 (correcte) fallada
11.LaMevaVariable (correcte) */

/* 1.2.- Volem guardar a una variable el nom d'un empleat. Quin d'aquests noms de variable
seria el més addient?
1. nomempleat
2. Nomempleat
3. NomEmpleat (aquest) fallada
4. nomEmpleat ( resposta correcte)
5. Nom_empleat
6. _NomEmpleat
7. nomEmpleat0
8. nom_empleat
9. nom0empleat
10.Nom empleat */

/* Delcaració

2.1.- Què passaria si féssim aquestes declaracions de variables?
Pensa primer que creus que passaria. Després pots provar a executar aquestes instruccions
i veure que passa (si passa alguna cosa). */

/* a.-
var a = 1;
var a = 2;
console.log(a); */  /* Crec que la variable a agafara el nou valor que li assignem, per tant el resultat serà 2. */

/* b.-
var a = 1;
let a = 2;
console.log(a); /* En aquest cas, diria que es suma i donara un valor de 3.  ( Resposta correcta; el let bloqueja el tornar a declarar la matreixa varible i fa que doni un error de sintaxi */
/* c.-
let a = 1;
var a = 2;
console.log(a); Pasa el mateix que a l'anterior, el let bloqueja el tornar a declarar la matreixa varible i fa que doni un error de sintaxi. */
/* d.-
let a = 1;
let a = 2;
console.log(a); Segueix donant error de sintaxi */ 

//Subtema 3. Assignació
/* 3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignació
com si fos independent. 
let a = 5; (correcte, es un valor a una variable)
let b = 5z; (incorrecte, ja que no es poden posar numeros i lletres a la vegada)
let c = "c"; (correcte, ja que les cometes estan ben posades)
let c = "c'; ( incorrecte, mal tancament de cometes)
let c = "c'c'c"; ( correcte, les dobles cometes per fora per fer de limits i dintre les cometes uniques per separar variables)
let c = "c'c"c'; ( incorrecte, mal tancament de les cometes)
let n = 35; (correcte, assignació d'un valor a la variable)
let n = 35va; (incorrecte, afegir lletres i numeros en el mateix grup) */

/*3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una
línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
Fixa't en l'error que et dona el navegador.
let a = 5;
let b = c;
c = 7; ( jo crec que l'error es troba a la C ja que es un error de sintaxi i no esta definida,falta el let) */

/*3.3.- De quins tipus són les dades que assignem a aquestes variables?
let a = 55; (dada númerica entera)
let b = 55.5; ( dada númerica decimal)
let c = "Hola"; (dada cadena de text)
let d = 'Hola'; ( cadena de text)
let e = true;  (booleana, tot o res) */

// Operadors aritmètics
/*4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?
let a = 25;
let b = 15 + a;
let c = b * 2;
console.log(a,b,c); Els valors retornats son, 25,40,80 */

/*4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?
let a = 10;
let b = 20;
let c = 5;
a = a + 3; (13)
b = b + 4 - a; (11)
c = a + b + c; (29)
a = a + c; (42)
b = 4; (4)
c = c + 3 - b + 2; (30)
console.log(a,b,c); Els valors retornats seran 42, 4 i 30) */

//4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?
/*Escriu-los en un paper i desprès executa el codi. Et donen el mateix?
let a = 5;
let b = 18;
let c = 15;
let d = 22;
a = a + 10; 
b = b + 5 - c; 
c = c + 4 + b; 
d = d + b + a;
a = a + 1;
b = b + c;
c = b + c;
d = b + b;
console.log(a,b,c,d); (Valors obtinguts, 16,35,62,70) */

// 4.4.- Quins valors s’escriuran a la consola si executem aquest programa?

/* let a = 10
let b =  20
let c = 5
a = a+3
console.log(a); */

 /* let a = 10
let b = 5
let c = a / b
let d =  a * b
let e = a % 3   
console.log(a,b,c,d,e); */

/* let a = 10;
let b = 5;
let c = a * b * 3;
let d = a / 3;
console.log(c,d); */

// 5.1

 /*let a = 5;
a++;
console.log(a);
let b = a++;
console.log(a,b); */

/* let a = 5;
++a;
console.log(a);
let b = ++a;
console.log(a,b); */

/* let a = 5;
let b = a++;
let c = a--;
console.log(a,b,c); */

/* let a = 5;
let b = a++;
let c = a--;
console.log(a,b,c); */

/* a = 5;
let d = 25 + a++;
a = 5;
let e = 25 + ++a;
console.log(d,e); */

/*6.1.- Què s’escriurà a la consola si executes aquest codi?
let a = 10;
a += 5;
console.log(a);
a *= 5;
console.log(a);
a -= 5;
console.log(a);
a /= 5;
console.log(a); */

/* let a = 5, b = 7;
let c = 5,d = "5";
let e1 = a == b; false
let e2 = c == d; true
let e3 = c === d; false
console.log(e1,e2,e3); */

/* let a = 9;
let b = 7;
let c = 3;
let d = a < b < c;
console.log(d); ejercicio con truco */

/*console.log(true && true); solo dara TRUE si son 2 TRUE, sino, false
console.log(true && false);
console.log(false && (3 == 4));
console.log(false && true);
console.log(false && false); */

/* console.log(false || false); con que 1 de las 2 sea TRUE ya esta.
console.log(false || true);
console.log(false || (3 == 4));
console.log(true || true);
console.log(true || false); */

/* let a = 5;
let b = 10;
let c = 2;
a = a + b * c; // Pensa bé quin hauria de ser el resultat
// d’aquesta operació. 30? o 25?
console.log(a);
let r = a % b + 1; // Quina operació és %? (importante, al usar % nos daria 2.5 pero nos quedamos solo con el 5.)
let d = c + a / b;
console.log(d,r); */

 /* let a = 5;
let b = 4;
let e1 = a > b || a < b; //(true)
let e2 = a > b && a < b; //(false)
let e3 = e1 || e2; //(true)
let e4 = a <= b + 1 && b - 1 * 5 < 0; //(true)
// Atenció a la prioritat de les operacions!!!
console.log (e1,e2,e3,e4); */


/* let a = prompt("Introdueix el primer número");
let b = prompt("Introdueix el segon número");
let c = (a > b) ? a : b; /(REPASAR!)
console.log(c); */ 


/* let a = prompt("Introdueix una paraula");
let b = prompt("Introdueix una altra");
let c = (a == b) ? "Les paraules són iguals" : "Les paraules són diferents";
console.log(c); */

//PROBLEMES


/* let a = prompt("Escriu un nombre"); PROBLEMA1
let b = a*2;
let c= a*3;
let d = a*a;
console.log(b,c,d); */

//PROBLEMA2
/* let perimetro = 2*(20+80);
let area = (20*80);
let a = Number(prompt("Introdueix el valor d'un costat"));
let b = Number(prompt("Introdueix el valor de l'altre"));
let perimetro2 = 2*(a+b);
let area2 = (a*b);
console.log(perimetro,area,perimetro2,area2); */

// Problema3

/* let r = Number(prompt("Escriu el radi d'una circumferència"));
let pi = 3.141593;
let longitud = (2 * pi * r);
let area = (pi * r**2);
console.log(longitud,area); */

// Problema4

/* let hores = Number(prompt("Escriu el numero d'hores treballades"));
let diners = Number(prompt("Escriu quan guanyes per hora"));
let salari = (hores*diners);
console.log(salari); */

// Problema5

/* let x = prompt("Escriu una variable");
let y = prompt("Escriu una altre variable");
let temporal = x;
x = y;
y = temporal;
console.log(x, y); */

// Problema6

/* let x = Number(prompt("Escriu un nombre"));
let resultat = (x**3);
console.log(resultat); */

//Problema7
//alert("Hello World");

//Problema8
/*
let nom = prompt("Escriu el teu nom");
let resultat = ("Hola " +  nom);
console.log(resultat); */

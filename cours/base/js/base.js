// syntaxe de base 

// commentaire sur une ligne

/* ici je fais in commentaire sur plusieur lignes
*/ 

//--1: déclarer une variable en js 
// var prenom;

//--2  affecter une valeur à une variable 
// prenom = "anouar";

// var prenom = "anouar";

 

//--3: une instruction se termine toujours par un point virgule, il est possible d'écrire plusieur instructions sur une seule ligne
// intruction_1;
// instruction_2; inst_3;

//--4 afficher une boite de dialogue
// alert("super tu es arriver sur mon site");


// alert("super tu es arriver sur mon site");
 
//--5 afficher dans la console 
// console.log(prenom);
// ici on affiche la valeur du prenom
// console.log(prenom);

//--6 demander à l'utilisateur une valeur
// prompt("question : on est quel jour?");
var jour = prompt("question : on est quel jour?");
console.log(jour);
  
//--7 js est sensible à la casse
// mavariable en camel case : maVariabelet snake case : ma_variable

//--8 : une variable ne peut pas commencer par un chiffre , ne doit contenir que des caractères alphanumériques.

// les types de variables

//--1 chaine de caractères
var vacances = "2017";
var destination = 'australie';

//--2 un nombre entier (int )

var annee = 2017;

//--3  un nombre décimal (float)
var nombre = 5.32;

//--4 un booléen (vrai ou faux)
var unBooleen = true;

//--5 les constantes 
/* la déclaration de const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut plus etre modifiée par réaffectation plus bas dans le code.*/
// par convention les constantes sont en majuscule
  const PAYS = "France"; // chaine de caractère
  const AN = 2023; // nombre

//--6 typeof : permet de connaitre le type de ma variable

console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);
console.log(unBooleen);
console.log(typeof unBooleen);


// on peut convertir une variable de type Number en String et aussi String en Number avec les fonctions native de JS

// la fonction parseInt() renvoie un entier à partir d'une chaine de caractères

var exemple = "12";
console.log(exemple);
console.log(typeof exemple);

// string to number
exemple = parseInt(exemple);
console.log(exemple);
console.log(typeof exemple);

// je ré-affecte une valeur 
exemple = "12.2";
console.log(exemple);
console.log(typeof exemple);

//string to float
exemple = parseFloat(exemple);
console.log(exemple);
console.log(typeof exemple);

// number to string
var exemple2 = 258;
console.log(exemple2);
console.log(typeof exemple2);

var exemple2 = exemple2.toString();
console.log(exemple2);
console.log(typeof exemple2);







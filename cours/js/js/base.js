// syntaxe de base

// commentaire sur une ligne

/* ici je fais un commentaire sur plusieurs lignes
*/

//--1: declarer une variable en js
// var prenom;

//--2 affecter une valeur a une variable 
// prenom = "zakaria"

// var prenom = "zakaria";

//--3: une instruction se termine toujours par un point virgule, il est possible d'ecrire plusieurs instructions sur une seule ligne
// instruction_1;
// intruction_2; inst_3;

//--4 afficher une boite de dialogue
// alert ("super tu es arriver sur mon site");

// alert ("super tu es arriver sur mon site");

//--5 afficher dans la console
//console.log(prenom);
// ici on affiche la valeur du prenom
// console.log(prenom);

//--6 demander a l'utilisateur une valeur
//prompt("question: on est quel jour ? ")
var jour = prompt("question: on est quel jour ?");
console.log(jour);

//--7 js est sensible a la casse
//mavariable en camel case : maVariable et snake case : ma_variable

//--8 : une variable ne peut pas commencr par un chiffre , ne doit pas contenir que des caracteres alphanumeriques.

// les types variables 

//--1 chaine de caracteres
var vacances = "2017"
var destination = 'australie';

//--2 un nombre entier (int)

var annee = 2017;

//--3 un nombre decimal (float)
var nombre = 5.32;

//--4 un booléen (vrai ou faux)
var unBooleen= false;

//--5 les constantes
/* la declaration de const permet de créer une constante accessible uniquement en lecture. Contrairement a une variable sa valeur ne peut plus etre modifiée par réaffectation plus bas dans le code. */
// par convention les constantes sont en majuscule
const PAYS = "France"; // chaine de caractere 
const AN = 2023; //nombre

//--6 typeof : permet de connaitre le type de ma variable 

console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);
console.log(unBooleen);
console.log(typeof unBooleen);


// on peut convertir une variable de type number en String et aussi String en number avec les fonctions native de JS

// la fonction parseInt() renvoie un entier a partir d'une chaine de caracteres

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// string to number
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre)

// je ré-affecte une valeur
unChiffre = "12.22";
console.log(unChiffre;)
console.log(typeof unChiffre);

// string to float 
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// number to string
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres); 
// operateur arithmétique

// on declare les variables
var nb1 , nb2 , resultat;

// j'affecte des valeurs
nb1= 10;
nb2= 5 ;

//--1 addition
// j'utilise les variables avec un calcul 
resultat = nb1 + nb2 ;

// j'affiche mon resultat sur la console 
console.log(resultat);

//--2 soustraction
// soustraction nb1 - nb2 avec l'operateur "-"
resultat = nb1 + nb2 ;
console.log(resultat);

//--3 multiplication
// multiplication de nb1 * nb2 avec l'operateur "*"
resultat = nb1 * nb2 ;
console.log(resultat);

//--4 division
// division de nb1 / nb2 avec l'operateur "/"
resultat = nb1 / nb2 ;
console.log(resultat);

//--5 modulo
// modulo de nb1 % nb2 avec l'operateur "%"
resultat = nb1 / nb2 ;
console.log(resultat);

// et maintenant je ré-affecte une valeur a nb1
nb1= 12;
resultat = nb1 % nb2 ;
console.log("le reste de la division de " + nb1 + " par " + nb2 + " est egal a " + resultat);

//--6 ecriture simplifiées
x = 15
x = x + 5;// egale a 20

x +=10; //nb1 lui meme + quelque chose (10)
console.log("le resultat de nb1 += 10 est " + x);
// += ==> le raccourci est le memem avec les autres operateurs +,-,*,%,/
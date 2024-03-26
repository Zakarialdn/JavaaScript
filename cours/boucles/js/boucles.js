//alert("test");

// les boucles
// la  boucle FOR
/* les 3 parametres (arguments)
1- initialiser un compteur a partir d'une valeur de depart (ici 1) , par efault le compteur est la variable i
2- la conditions a verifier qui doit etre vrai (true)
3- le 'pas' d'incrementation (combien j'ajoute a chaque tour , generalement 1 donc i++)
*/
/*for (var i =1; i <= 10; i++ ){
    document.write("<p>Instruction executee :" + i + "</p>");
}

// la boucle while (tant que)
var j = 1;
while (j <= 10){
document.write("<p>Instruction executee :" + j + "</p>");
j++;
}*/

/* ---------------------------
        EXERCICE
j'ai 1000$ sur mon compte
chaque mois j'ajoute 50$
combien de temps me faut-il pour avoir 2000$ sur mon compte ?
----------------------------*/

//avec la boucle while
var mois = 0;
var compte = 1000; 
while (compte < 2000){
    compte += 50;
    mois++;
    document.write("<p>compte : " + compte + "€ il s'est passé " + mois  +" mois"+ "</p>");
}

 //avec la boucle for
 var mois = 0;
 for (var i = 1000; i < 2000; i+=50){
    mois++;
 }
 document.write("<h3> il aura fallu" + mois + "mois </h3>")
// alert("test");

// les boucles
// la boucle FOR
/* les 3 paramètre (arguments)
1. initialiser un compteur à partir d'une valeur de départ (ici 1), par défault le compteur est la  variable i
2-la condition à vérifier qui doit etre vrai (true)
3- le 'pas' d'incrémentation (combien j'ajoute à chaque tour, géneralement 1 donc i++)
*/
for (var i =1; i <= 10 ; i++ ){
    document.write("<p>Instruction exécutée :" + i + "</p>");
}

// la boucle while (tant que)
// quand on connait pas le nombre de tours de boucle à l'avance
var j = 1;
while (j <= 10){
    document.write("<p>Instruction exécutée :" + j + "</p>");
    j++;
}
/* -------------------------------
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
-------------------------------- */
//avec la boucle for
var mois = 0;
for (var i = 1000 ; i < 2000; i+=50){
    mois++;
}
document.write("<h3> il aura fallu "+ mois + "mois </h3>");

// avec la boucle while

var temps = 0;
var monCompte = 1000;
while(monCompte < 2000){
    monCompte +=50;
    temps++;
}
document.write("<h3> il aura fallu "+ temps + "mois </h3>");
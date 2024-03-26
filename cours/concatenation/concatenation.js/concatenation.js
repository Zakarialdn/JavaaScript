// la concatenation

var annee = 2017;
var futur = 3;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + " <br>");


var mois = "7";
var calcul2 = annee + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

var debutPhrase = "aujourd'hui ";
var NbStagiaires = 12;
var SuitesPhrase = " stagiaires";
var FinPhrase = "sont presents."; // pas d'espace

//nous souhaitons afficher la phrase en un seule morceau avec la concatenation
document.write(debutPhrase+NbStagiaires+SuitesPhrase+"  " +FinPhrase);
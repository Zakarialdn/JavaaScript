// alert("test");

// l'operateur de comparaison == signifie egale a
// il permet de verifier que les valeurs de 2 variables sont identiques
var nb1 = 123;
var nb2 = "123";
console.log (nb1 == nb2); //return true

// l'operateur de comparaison === signifie 'strictement egale a'
// il permet de verifier le type et la valeur 
console.log(nb1 === nb2) ; //return false

// l'operateur != signifie 'different de .. en valeur'
console.log(nb1 != nb2); // return false

// l'operateur !== signifie 'strictement different de .. en valeur et en type'
console.log(nb1 !== nb2); // return true

/* ---------------
      EXERCICES:
j'arrive sur une espace securisée au moyen du prenom et l'age.
je doit sairir mon prenom et mon age pour etre authentifié sur le site
(les infos sont en BDD, ici dans mes variables prenom etage).
en cas d'echec une alerte m'informe du probleme.
si tout se passe bien, un message de bienvenue m'acceuille.
      --------------------------------------*/

/*var nom = prompt('entre votre nom');
var prenom = prompt('entre votre prenom');
alert("bonjour, " + prenom +" " + nom);

var majorite = 18;
var age = parseInt(prompt ("quel ages avez-vous ?"))
if (age >= majorite){
    alert ("bienvenue sur le site");
} else {
    alert ("desolée vous ne pouvez pas acceder au site , vous allez etre rediriger sur une autre page");
    window.location.replace ("https://github.com/")
}*/


// avec mdp
var prenom = "zizou";
var age = 22;
var mdp = 123;
// 1- demander le prénom de l'utilisateur avec prompt
var prenomIdentique = prompt("quel est votre prénom");
// 2- je vérifie si le prénom saisie correspond à 'zizou'
if (prenom === prenomIdentique){
    // 2a si tous est ok , je continue la vérification avec l'age
    // 2b demande a mon utlisateur son age via prompt
    var ageIdentique = parseInt(prompt("votre age"));
    if (age === ageIdentique){
        var mdpSaisie = parseInt(prompt("le mot de passe"));
        if (mdp === mdpSaisie){
            // bienvenue
          alert("bienvenue " + prenomIdentique);      
        }else {
            alert("erreur mot de passe");
        }
      
    }else {
        // alert erreur age
        alert("erreur d'age");
    }
} else{
    // alert erreur prénom
    alert("attention prénom inconnu");
}
// alert('test);

//-- structure de base if

if(true){
    // par default la condition le IF si elle est vrai on execute ce code.
    //...code...
    //...code...
}

var nb1 = 10;
if (nb1 < 50){
    console.log("nb1 est bien inferieur a 50 ");
}

if(true){
    //... code si vrai
   }   else {
    //... code si faux
    }

    if(nb1 > 50){
        console.log("nb1 est bien superieur a 50");
    } else{
        console.log("nb1 est bien inferieur a 50");
    }

    /*
    EXERCICE
    on utilise le IF pour verifier l'age de l'internaute.
    => s'il est majeur je lui souhaite la bienvenue.
    => s'il est mineur je [1] lui signale et [2] le renvoie vers un autre site*/ 


    // var age = prompt("quel est votre age ?");
    // if (age >= 18){
        // alert("vous etes majeur !");
    // } else{
        // alert("vous etes mineur");
        // window.location.replace("https://www.youtube.com/")
    // }

    //--1 je declare la majorité légale
    var Majorite = 18;

    //--2 demander l'age en s'assurant que nous avons un number
    var age = parseInt(prompt ("indiquez votre age"));

    //--3 je verifie si mon inernaute est majeur
    if (age >= Majorite){
        alert ("bienvenue , vous etes majeur");
    } else{
        //je lui signal
        alert("aller voir un autre super site..");
        // et ensuite je redirige vers darty
        document.location.href = "https://www.darty.com/";
    }
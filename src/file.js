// Model
let farine = 63;
let oeuf = 1;
let lait = 0.2;
let sucre = 0.5;
let beurre = 13;


let button = document.getElementById("generer");
let val = document.getElementById("value");

val.addEventListener("change", function () {
    console.log(val.value);
    if (val.value < 0) {
        val.value = 0;
    };
    // Controller
    farine1 = farine * val.value;
    oeuf1 = oeuf * val.value;
    lait1 = lait * val.value;
    sucre1 = sucre * val.value;
    beurre1 = beurre * val.value;
    // Vue
    console.log("Vous avez choisi de faire des crepes pour " + val.value + " personnes");
    console.log("Il vous faudra " + farine1 + " g de farine");
    console.log("Il vous faudra " + oeuf1 + " oeufs");
    console.log("Il vous faudra " + lait1.toFixed(2) + " L de lait ");
    console.log("Il vous faudra " + sucre1 + " c.a.s de sucre");
    console.log("Il vous faudra " + beurre1 + " g de beurre");
    

//Calcul pour la liste de course
    let kgfarine = 1000;    
    let achatfarine = Math.ceil(farine1 / kgfarine);
    console.log("Il faut acheter " + achatfarine + " kg de farine");

    let lotOeuf = 12;
    let achatOeuf = Math.ceil(oeuf1 / lotOeuf);
    console.log("Il faut acheter " + achatOeuf + " pack de " + lotOeuf + " oeufs");

    let litreLait = 1;    
    let achatLait = Math.ceil(lait1 / litreLait);
    console.log("Il faut acheter " + achatLait + " Litre de Lait");

    let demicassucre = 15;    
    let achatSucre = Math.ceil( ((sucre1 * demicassucre) / 1000) );
    console.log("Il faut acheter " + achatSucre + " kg de sucre");

    let plaquettebeurre = 250;    
    let achatbeurre = Math.ceil(beurre1 / plaquettebeurre);
    console.log("Il faut acheter " + achatbeurre + " plaquette de beurre de 250g");



//Liste Ingrédients + Liste de course
    let affichefarine = farine1;                                                                   //Affiche farine
    let afficheoeuf = oeuf1;                                                                       //Affiche oeuf
    let affichelait = lait1.toFixed(2);                                                            //Affiche lait
    let affichesucre = sucre1;                                                                     //Affiche sucre
    let affichebeurre = beurre1;                                                                   //Affiche beurre

    let counterpersonne = document.getElementById("afficherpersonne");                             //Nombre de personne
    let counterfarine = document.getElementById("afficherfarine");                                 //Affiche farine
    let counteroeuf = document.getElementById("afficheroeuf");                                     //Affiche oeuf
    let counterlait = document.getElementById("afficherlait");                                     //Affiche lait
    let countersucre = document.getElementById("affichersucre");                                   //Affiche sucre
    let counterbeurre = document.getElementById("afficherbeurre");                                 //Affiche beurre

    let counternbpersonne = document.getElementById("affichernbpersonne");                         //Nombre de personne (course)
    let countercourselait = document.getElementById("affichercourselait");                         //Affiche nb bouteille d'un litre de lait (course)
    let counterlotoeuf = document.getElementById("afficherlotoeuf");                               //Affiche pack lot oeuf (course)
    let counterplaquettebeurre = document.getElementById("afficherplaquettebeurre");               //Affiche plaquette de beurre (course)
    let counterkgfarine = document.getElementById("afficherkgfarine");                             //Affiche farine (course)
    let counterkgsucre = document.getElementById("afficherkgsucre");                               //Affiche sucre (course)

    document.addEventListener("click", function (e) {

    counterpersonne.innerText = "Pour " + val.value + " personne(s)";                                 //Nombre de personne
    counterfarine.innerText = affichefarine + " gramme de farine";                                  //Affiche farine
    counteroeuf.innerText = afficheoeuf + " oeuf";                                                  //Affiche oeuf
    counterlait.innerText = affichelait + " Litre de lait";                                         //Affiche lait
    countersucre.innerText = affichesucre + " cuillière à soupe de sucre";                                   //Affiche sucre
    counterbeurre.innerText = affichebeurre + " gramme de beurre";                                  //Affiche beurre

    counternbpersonne.innerText = "Vous avez choisi de faire des crepes pour " + val.value + " personnes";    //Nombre de personne
    countercourselait.innerText = "Il faut acheter " + achatLait + " bouteille 1 Litre de Lait";            //Affiche nb bouteille d'un litre de lait (course)
    counterlotoeuf.innerText = "Il faut acheter " + achatOeuf + " pack de " + lotOeuf + " oeufs";           //Affiche pack lot oeuf (course)
    counterplaquettebeurre.innerText = "Il faut acheter " + achatbeurre + " plaquette de beurre de 250g";   //Affiche plaquette de beurre (course)
    counterkgfarine.innerText = "Il faut acheter " + achatfarine + " kg de farine";                         //Affiche plaquette de beurre (course)
    counterkgsucre.innerText = "Il faut acheter " + achatSucre + " kg de sucre";                         //Affiche plaquette de beurre (course)
  });

  });
  console.log(button, val.value);

//Faire charger le DOM
document.addEventListener("DOMContentLoaded", function() {

    //Charger le contenu du fichier JSON dans une variable analogies en utilisant fetch en Javascript
    fetch('js/analogies.json').then(function(response) {
        //Prend un flux response et le lit jusqu'à la fin, puis renvoie une promesse qui se résoud avec le résultat de l'analyse du texte en Json
        response.json().then(function(data) {

            //Déclaration de la fonction ajouteanal avec la valeur data
            function ajouteanal(data) {
                //Pour chaque valeur de la fonction f on attribut une valeur data
                data.forEach(function(f) {
                    //Déclaration de la variable blocAnal avec pour valeur document.createElement ce qui signifie qu'elle va permettre de crée l'élement section
                    var blocAnal = document.createElement("section");
                    //Pour la variable blocAnal on attribut un id
                    blocAnal.setAttribute('id', f.id);
                    //La variable blocAnal recupère la syntaxe HTML décrivant les descendants de blocAnal
                    blocAnal.innerHTML =
                        //On attribut aux descendants une disposition lié au json
                        '<div style="background-image: url(\' ' + f.img + '\')"' + 'class="portrait">' +
                        '<h3>' +
                        'Si j’étais ' + f.un + ', je serais ' +
                        '</h3>' +
                        '<h4>' +
                        f.deux +
                        '</h4>' +
                        '<p>' + f.justification + '</p>' +
                        '<div>' +
                        '<div class="box-fleche">' +
                        '<a class="' + f.cacher + '" href="#' + f.id2 + '" id="' + f.id2 + '"><img class="fleche" src="images/fleche.svg" alt=""></a>' +
                        '<div>';
                    //On sélectionne notre div bloc-portrait et on lui insert les objects de la variable blocAnal
                    document.querySelector("div.bloc-portrait").append(blocAnal);
                });
            }
            ajouteanal(data)
        })
    })



    //On sélectionne la classe volet-visible et on y ajoute l'évenement click avec sa fonction associée
    document.querySelector('.volet-invisible').addEventListener('click', function(click) {
        // Afficher le mot « click » dans la console quand on a cliqué sur l’élément ayant pour classe volet-invisible
        console.log("click")

        // Animation au bout de 800 millisecondes après le clic 
        document.getElementById('volet').animate([{
            height: '40em'
        }], {
            duration: 800
        })

        // Attribution de la classe volet-visible en supprimant la classe volet-invisible
        setTimeout(function() {
            document.querySelector('.volet-invisible').classList.add('volet-visible');
            document.querySelector('.volet-invisible').classList.remove('volet-invisible');
        }, 800);

    })

    // Pour refermer le volet des mentions légales
    document.getElementById('volet').addEventListener('click', function(click) {
        // afficher le mot « click » dans la console quand on a cliqué sur l’élément ayant pour classe volet-invisible
        console.log("click")

        // Animation au bout de 800 millisecondes après le clic
        document.querySelector('.volet-visible').animate([{
                height: '3em'
            }], {
                duration: 800
            })
            // Attribution de la classe volet-invisible en supprimant la classe volet-visible
        setTimeout(function() {
            document.getElementById('volet').classList.remove('volet-visible');
            document.getElementById('volet').classList.add('volet-invisible');
        }, 800);

    })

    //On crée la fonction d'ouverture d'un formulaire et on sélectionne notre id popupForm pour lui attribuer le style display block
    function openForm() {
        document.getElementById("popupForm").style.display = "block";
    }
    //On crée la fonction fermeture d'un formulaire et on sélectionne notre id popipForm pour lui attribuer le style display none
    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
    }


    //On crée la variable formulaire et on lui attribut la classe formulaire en la sélectionnant et on sélectionne notre classe bouton pour lui ajouter l'évenement click
    var formulaire = document.querySelector('.formulaire');
    document.querySelector('.bouton').addEventListener('click', function(e) {

            //On retire la fonction cacher de notre formulaire
            formulaire.classList.remove('cacher');


        })
        //On récupere notre id bouton fermer pour lui ajouter l'évenement click
    document.getElementById('boutonfermer').addEventListener('click', function(e) {

        //On ajoute la fonction cacher de notre formulaire
        formulaire.classList.add('cacher');


    })

    //On sélectionne notre classe btnenvoyer pour lui ajouter l'évenement click
    document.querySelector('.btnenvoyer').addEventListener('click', function(e) {
        //On sélectionne notre id fleche pour lui retirer l'option cacher
        document.getElementById('fleche').classList.remove('cacher');

        //On crée nos différentes variables et on y sélectionne nos élements pour leur ajouter une valeur
        var Sijetais = document.querySelector("#analogie").value;
        var Jeserais = document.querySelector("#valeurAnalogie").value;
        var justification = document.querySelector("#explication").value;
        //On affiche dans la console Sijetais
        console.log(Sijetais);
        //On crée la variable blocAjout et on lui attribut comme valeur l'élement section
        var blocAjout = document.createElement("section");
        //On donne comme attribut à notre variable blocAjout un id
        blocAjout.setAttribute('id', 'ajout');
        //On donne des nouvelles valeurs à notre variable blocAjout
        blocAjout.innerHTML =

            '<div style="background-image: url(images/dégradé.svg)"' + 'class="portrait">' +
            '<h3> Si j’étais ' + Sijetais + ', je serais </h3>' +
            '<h4>' + Jeserais + '</h4>' +
            '<p>' + justification + '</p>' +
            '<div>';
        //On sélectionne notre div bloc-portrait et on lui insert les objects de la variable blocAjout
        document.querySelector("div.bloc-portrait").append(blocAjout);
    })







})
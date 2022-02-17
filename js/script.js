const headerIcon = document.getElementById("imageTitle");
const headerText = document.getElementById("textTitle");
const header = document.getElementById("headerTitle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const displayZone = document.getElementById("displayZone");

const mainTextSlide = document.getElementsByClassName("mainText");

let pageState = 0;
let pageTitle = "La Biodiversité en Perpetuelle Evolution"
let removeLetters = false;

//Page Init
UpdateSlide(pageState)
UpdateTitle(pageState)

/* let images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "css/img/context/deforestation.jpg",
    "css/img/context/dinosaur.jpg"
) */



function nextSlide(){
    if(pageState != 7) pageState += 1;
    UpdateTitle(pageState)
    UpdateSlide(pageState)
}

function previousSlide(){
    if(pageState != 0) pageState -= 1;
    UpdateTitle(pageState)
    UpdateSlide(pageState)
}


function UpdateTitle(pageState){
    switch(pageState){
        case 0:
            headerIcon.style = "transform:translate(-100%);";
            headerText.style = "transform: translate(-10%);";
            headerText.innerHTML = "La Biodiversité en Perpetuelle Evolution";
            document.title = "Acceuil";
            color("#494949");

            leftArrow.style = "transform:translate(-100%);";

            //header.style = "justify-content: center;";
            break;

        case 1:
            headerIcon.style = "transform:translate(-100%);";
            headerText.style = "transform: translate(-10%);";
            headerText.innerHTML = "La Biodiversité en Perpetuelle Evolution";
            document.title = "La Biodiversité en Perpetuelle Evolution";
            color("#494949");

            leftArrow.style = "transform:translate(0%);"
            break;

        case 2:
            headerIcon.src = 'css/img/title/one.png';
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "La biodiversité génétique";
            document.title = "La biodiversité génétique";
            color("#69be57");

            leftArrow.style = "transform:translate(0%);";
            break;

        case 4:
        case 3:
            headerIcon.src = 'css/img/title/two.png';
            headerText.innerHTML = "La biodiversité des espèces et des écosystèmes";
            document.title = "La biodiversité des espèces et des écosystèmes";
            color("#5374ce");

            break;

        case 6:
        case 5:
            headerIcon.src = 'css/img/title/three.png';
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "L'évolution de la biodiversité et l'influence de l'Homme";
            document.title = "L'évolution de la biodiversité et l'influence de l'Homme";
            color("#d3d35f");
    
            rightArrow.style = "transform:translate(0%);";
            break;

        case 7:
            headerIcon.style = "transform:translate(-100%);";
            headerText.style = "transform: translate(-10%);";
            headerText.innerHTML = "Fin • La Biodiversité en Perpetuelle Evolution";
            document.title = "Fin";
            color("#494949");

            rightArrow.style = "transform:translate(100%);"
            break;
    }
}

function UpdateSlide(pageState){

        switch(pageState){
            case 0:
                displayZone.innerHTML = "<p class=\"mainTextTitle\" style=\"font-size: 400%;text-align: center;font-family:'Open Sans', sans-serif;\">Bienvenue</h1><p class=\"mainTextTitle\" style=\"font-size: 200%;text-align: center;font-family:'Segoe UI', sans-serif;\"> sur le chapitre n°3 de Camille et Nolhan</p><p class=\"mainTextTitle\" style=\"font-size: 100%;text-align: center;font-family:'Segoe UI', sans-serif;color: rgb(148, 148, 148);\">Nous vous recomendons d'utiliser Google Chorme et de cliquer sur la flèche de droite pour démarer</p>";
                break;

            case 1:
                displayZone.innerHTML = "<p class=\"mainText\">   La nature apporte depuis des milliards d\'années tout un panel d\’espèces différentes ayant chacune leur propre particularités physiques. Chaque espèce évolue chacun de son côté, normalement indépendamment des autres. Mais le développement d’une espèce est beaucoup plus complexe que ça car il dépend aussi des autres espèces et du milieu.<br><br>   Dans ce petit exposé numérique, nous verrons comment une espèce persiste dans le temps et les particularités qu\'elle reçoit en fonction du milieu dans lequel elle évolue et en fonction des gènes qu’ils lui sont transmis ; dans quel espace et milieu les animaux évoluent ; et nous verrons comment la survie d’une espèce dépend de celle des autres ou de son environement.</p>"; 
                break;
            
            case 2:
                displayZone.innerHTML = "<p class=\"mainText\">→ On a comparé les caractéristiques de 3 personnes de notre entourage, pour ainsi expliquer comment se fait la biodiversité génétique.</p><div id=\"divTable\"><table><tr><th>Caractéristiques</th><th>Individu 1</th><th>Individu 2</th><th>Individu 3</th></tr><tr><td>Couleur des yeux</td><td>Vert</td><td>Bleu</td><td>Marron</td></tr><tr><td>Couleur des cheveux</td><td>Brun</td><td>Blond</td><td>Châtain</td></tr><tr><td>Sexe</td><td>Homme</td><td>Femme</td><td>Femme</td></tr><tr><td>Groupe Sanguin</td><td>O+</td><td>A-</td><td>A+</td></tr></table></div><p class=\"mainText\"> On observe ici une biodiversité génétique car, toutes ces variations de l’être humain se font en fonction des gènes hérités de nos parents grâce au hasard.</p>";
                break;
            
            case 3:
                displayZone.innerHTML = "<p class=\"mainText\">Nous comparerons les milieux de vie suivant</p><table><tr><th>Milieu de vie marin<br>(récif)</th><th>Milieu de vie terrestre<br>(forêt)</th></tr><tr><td>Température : entre 25 et 27°C</td><td>Température : entre 5,5 et 7°C<br>dans la clairière, un peu moins en forêt</td></tr><tr><td>Pression élevée (dû à l’eau)</td><td>Pression presque nulle (dû à l’air)</td></tr><tr><td>Respiration : avec les branchies</td><td>Respiration : avec les poumons</td></tr><tr><td>Végétation : algues, plantes marines</td><td>Végétation : arbres, feuilles</td></tr></table><p class=\"mainTextCenter\"><a href=\"seaLife.html\" class=\"discoverWorld\" id=\"sea\"><u>Cliquer pour découvrir le récif</u></a>        <a href=\"forestLife.html\" class=\"discoverWorld\" id=\"forest\"><u>Cliquer pour découvrir la forêt</u></a></p>";
                break
            
            case 4:
                displayZone.innerHTML = "<p>Selon Larousse:</p><h1>Espèce </h1><i>n.f</i> :<br><p>Ensemble d'individus animaux ou végétaux, vivants ou fossiles, à la fois semblables par leurs formes adultes et embryonnaires et par leur génotype, vivant au contact les uns des autres, s'accouplant exclusivement les uns aux autres et demeurant indéfiniment féconds entre eux.</p><br><p>La classification des espèces est le fait de distinguer chaque espèce par une caractéristique qui lui est propre. Les arthropodes se classent en plusieurs familles distinctes en fonction de leurs attributs physiques. Les  arthropodes ayant 8 pattes sont considérés comme des araignées, les arthropodes sont classés en tant que crustacés s’ils ont entre 5 à 7 paires de pattes et 2 paires d'antennes, et quand aux insectes, on les distingue grâce à leur 3 paires de pattes et à la paire d’antennes qu’elles ont.</p>";
                break;
            
            case 5:
                displayZone.innerHTML = "<div style=\"display: flex;\"><p style=\"text-align: justify;line-height: 160%;\">   L’Homme influence la biodiversité de diverses façons. Tout d’abord avec la déforestation, qui entraîne la destruction des habitats naturels menaçant 80% de la biodiversité terrestre pour les espèces de la faune et de la flore qui abritent les forêts. La biodiversité est aussi influencée par la chasse intensive, elle peut être terrestre (chasse) ou maritime (pêche), et engendre des perturbations des écosystèmes et du sur-pâturage. A contrario, l’Homme peut aussi influencer positivement les autres espèces dans leur sauvegarde ou dans leur évolution. On retrouve donc la création de réserves naturelles qui sont un des outils de protection des milieux naturels et des espèces.</p><img src=\"css/img/context/deforestation.jpg\" class=\"context\" alt=\"Deforestation\" style=\"width: 40%;height: 40%;padding: 25px;border-radius: 40px;top: 50%;\"></div>";
                break;

            case 6:
                displayZone.innerHTML = "<div style=\"text-align: justify;\"><img src=\"css/img/context/dinosaur.jpg\" alt=\"dinosaur\" style=\"width: 50%;height: 50%;display: block;margin-left: auto;margin-right: auto;border-radius: 40px;padding-bottom: 20px;\"><p>  La biodiversité varie ou disparait aussi naturellement au cours des temps géologiques. Nous pouvons alors faire référence à un groupe entier d’espèces disparues, les dinosaures. Il y a 65 millions d’années, un gigantesque astéroïde a frappé la Terre, entraînant l’extinction des dinosaures. Cet évènement a brutalement mis fin à cette espèce, même s’il a été démontré que celle-ci commençait déjà à disparaître il y a 76 millions d’années.</p></div>";
                break;

            case 7:
                displayZone.innerHTML = "<p class=\"mainTextTitle\" style=\"font-size: 400%;text-align: center;font-family:'Open Sans', sans-serif;\">Fin</p><p class=\"mainTextTitle\" style=\"font-size: 200%;text-align: center;font-family:'Segoe UI', sans-serif;\"> Merci d'avoir lu ce document interactif</p><p class=\"mainTextTitle\" style=\"font-size: 100%;text-align: center;font-family:'Segoe UI', sans-serif;color: rgb(148, 148, 148);\"></p>";
                break;
        }
}


function color(color) {
    header.style = "background-color:" + color + ";";
}


// Blue: #5374ce
// Yellow : #d3d35f
// Green : #69be57

// Gray : #494949
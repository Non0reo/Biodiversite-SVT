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



function nextSlide(){
    pageState += 1;
    UpdateTitle(pageState)
    UpdateSlide(pageState)
}

function previousSlide(){
    if(pageState != 0) pageState -= 1;
    UpdateTitle(pageState)
    UpdateSlide(pageState)
}


function UpdateTitle(pageState){

    console.log(pageState)
    switch(pageState){
        case 0:
            headerIcon.style = "transform:translate(-100%);";
            headerText.style = "transform: translate(-10%);";
            headerText.innerHTML = "La Biodiversité en Perpetuelle Evolution";
            color("#494949");

            leftArrow.style = "transform:translate(-100%);";

            //header.style = "justify-content: center;";
            break;

        case 1:
            headerIcon.style = "transform:translate(-100%);";
            headerText.style = "transform: translate(-10%);";
            headerText.innerHTML = "La Biodiversité en Perpetuelle Evolution";
            color("#494949");

            leftArrow.style = "transform:translate(0%);"
            break;

        case 2:
            headerIcon.src = 'css/img/title/one.png';
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "La biodiversité génétique";
            color("#69be57");

            leftArrow.style = "transform:translate(0%);";
            break;

        case 3:
            headerIcon.src = 'css/img/title/two.png';
            headerText.innerHTML = "La biodiversité des espèces et des écosystèmes";
            color("#5374ce");

            break;

        case 4:
            headerIcon.src = 'css/img/title/three.png';
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "L'évolution de la biodiversité et l'influence de l'Homme";
            color("#d3d35f");
    
            rightArrow.style = "transform:translate(0%);";
            break;

        case 5:
            headerIcon.style = "transform:translate(-100%);";
            headerText.style = "transform: translate(-10%);";
            headerText.innerHTML = "Fin";
            color("#494949");

            rightArrow.style = "transform:translate(100%);"
            break;
    }
}

function UpdateSlide(pageState){
        switch(pageState){
            case 0:
                displayZone.innerHTML = "<p class=\"mainText\">Hello, World!</p>";
                break;

            case 1:
                displayZone.innerHTML = "<p class=\"mainText\">   La nature apporte depuis des milliards d\'années tout un panel d\’espèces différentes ayant chacune leur propre particularités physiques. Chaque espèce évolue chacun de son côté, normalement indépendamment des autres. Mais le développement d’une espèce est beaucoup plus complexe que ça car il dépend aussi des autres espèces et du milieu.<br><br>   Dans ce petit exposé numérique, nous verrons comment une espèce persiste dans le temps et les particularités qu\'elle reçoit en fonction du milieu dans lequel elle évolue et en fonction des gènes qu’ils lui sont transmis ; dans quel espace et milieu les animaux évoluent ; et nous verrons comment la survie d’une espèce dépend de celle des autres ou de son environement.</p>"; 
                break;
            
            case 2:
                displayZone.innerHTML = "<p class=\"mainText\">→ On a comparé les caractéristiques de 3 personnes de notre entourage, pour ainsi expliquer comment se fait la biodiversité génétique.</p><table><tr><th>Caractéristiques</th><th>Individus 1</th><th>Individus 2</th><th>Individus 3</th></tr><tr><td>Couleur des yeux</td><td>Vert</td><td>Bleu</td><td>Marron</td></tr><tr><td>Couleur des cheveux</td><td>Brun</td><td>Blond</td><td>Châtin</td></tr><tr><td>Sexe</td><td>Homme</td><td>Femme</td><td>Femme</td></tr><tr><td>Groupe Sanguin</td><td>O+</td><td>A-</td><td>A+</td></tr></table><p class=\"mainText\"> On observe ici une biodiversité génétique car, toutes ces variations de l’être humain se font en fonction des gènes hérités de nos parents grâce au hasard.</p>";
                break;
            
            case 3:
                displayZone.innerHTML = "<p class=\"mainText\">pouet</p>"
        }
}


function color(color) {
    header.style = "background-color:" + color + ";";
}


// Blue: #5374ce
// Yellow : #d3d35f
// Green : #69be57

// Gray : #494949
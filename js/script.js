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
            headerIcon.src = 'css/img/title/one.png';
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "La biodiversité génétique";
            color("#69be57");

            leftArrow.style = "transform:translate(0%);";
            break;

        case 2:
            headerIcon.src = 'css/img/title/two.png';
            headerText.innerHTML = "La biodiversité des espèces et des écosystèmes";
            color("#5374ce");

            break;

        case 3:
            headerIcon.src = 'css/img/title/three.png';
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "L'évolution de la biodiversité et l'influence de l'Homme";
            color("#d3d35f");
    
            rightArrow.style = "transform:translate(0%);";
            break;

        case 4:
            headerIcon.style = "transform:translate(-100%);";
            headerText.style = "transform: translate(-10%);";
            headerText.innerHTML = "Fin";
            color("#494949");

            rightArrow.style = "transform:translate(100%);"
            break;
    }
}

function UpdateSlide(pageState){
    for (let i = 0; i < mainTextSlide.length; i++) {

        switch(pageState){
            case 0:
                mainTextSlide[i].innerHTML = "Hellow World"; 
                break;

            case 1:
                mainTextSlide[i].innerHTML = "Salut tout le monde"; 
                break;
        }
    }
}


function color(color) {
    header.style = "background-color:" + color + ";";
}


// Blue: #5374ce
// Yellow : #d3d35f
// Green : #69be57

// Gray : #494949
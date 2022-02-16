let headerIcon = document.getElementById("imageTitle");
let headerText = document.getElementById("textTitle");
let header = document.getElementById("headerTitle");
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let pageState = 0;
let pageTitle = "La Biodiversité en Perpetuelle Evolution"
let removeLetters = false;

//Page Init
UpdateSlide(pageState)
UpdateTitle(pageState)
/*headerIcon.style = "translate: -100%;";
headerText.style = "translate: -10%;";*/



function nextSlide(){
    pageState += 1;
    UpdateTitle(pageState)
}

function previousSlide(){
    if(pageState != 0) pageState -= 1;
    UpdateTitle(pageState)
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
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "La biodiversité des espèces et des écosystèmes";
            color("#5374ce");

            leftArrow.style = "transform:translate(0%);";
            break;

        case 3:
            headerIcon.src = 'css/img/title/three.png';
            headerIcon.style = "transform:translate(0%);";
            headerText.style = "transform: translate(0%);";
            headerText.innerHTML = "L'évolution de la biodiversité et l'influence de l'Homme";
            color("#d3d35f");
    
            leftArrow.style = "transform:translate(0%);";
            break;
    }
}

function UpdateSlide(pageState){
    
}


function color(color) {
    header.style = "background-color:" + color + ";";
}


// Blue: #5374ce
// Yellow : #d3d35f
// Green : #69be57

// Gray : #494949
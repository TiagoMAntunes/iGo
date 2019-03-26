var screenStack = [];
var json = [];

function startup() {
    if (localStorage.getItem("isSet") == undefined) {
        localStorage.setItem("horizontalPx", 1920);
        localStorage.setItem("verticalPx", 1080);
        localStorage.setItem("diagonalSize", 13.3);
        localStorage.setItem("isSet", true);
    }
    setRealSize();
}

function setRealSize() {
    let div = document.getElementById("mainScreen");
    let width = localStorage.getItem("horizontalPx");
    let height = localStorage.getItem("verticalPx");
    let diagonalSize = localStorage.getItem("diagonalSize");
    let ppc = Math.sqrt(width ** 2 + height ** 2) / (diagonalSize * 2.54);

    div.style.width = ppc * 5.388;
    div.style.height = ppc * 5.388;
    let cover = document.getElementById("watchBorder");
    cover.style.width = ppc * 5.7;
    cover.style.height = ppc * 5.7;

    let backButton = document.getElementById("backButton");
    let scrollWheel = document.getElementById("scrollWheel");
    backButton.style.width = ppc * 0.2;
    backButton.style.height = ppc * 0.4;

    scrollWheel.style.width = ppc * 0.2;
    scrollWheel.style.height = ppc * 1.2;

    //calculate where to place the side buttons

    let left = 50 + (parseInt(cover.style.width) / 2) / width * 100;
    backButton.style.left = left + '%';
    scrollWheel.style.left = left + '%';

    let top = (parseInt(cover.style.height) / 2) / height * 100;
    backButton.style.top = 50 - top * 0.6 + '%';
    scrollWheel.style.top = 50 - top * 0.1 + '%';
    
    let fontsize = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = fontsize / 72 * ppc;
}


function updateSize() {
    let diagonalSize = parseInt(document.getElementById("screenSize").value);
    let horizontalPx = parseInt(document.getElementById("horizontalPx").value);
    let verticalPx = parseInt(document.getElementById("verticalPx").value);
    if ([diagonalSize, horizontalPx, verticalPx].some((n) => { return isNaN(n) })) {
        alert("É preciso preencher todos os inputs")
        return;
    }

    localStorage.setItem("horizontalPx", horizontalPx);
    localStorage.setItem("verticalPx", verticalPx);
    localStorage.setItem("diagonalSize", diagonalSize);
    window.location.href = "iGo.html"
}

function backButton() {
    console.log('backbutton');
    let screen = screenStack.pop()
    if (screen != undefined) {
        document.getElementById(screen).style.display= 'none';
    }
    
    if (screenStack.length != 0) {
        document.getElementById(screenStack[screenStack.length - 1]).style.display = '';
    } else {
        document.getElementById('mainmenu').style.display = '';
    }   
}

function pushScreen(screen) {
    console.log('Screen to load ' + screen);
    if (screenStack.length != 0)
        document.getElementById(screenStack[screenStack.length - 1]).style.display = 'none';
    else {
        document.getElementById('mainmenu').style.display = 'none';
    }
    screenStack.push(screen);
    console.log(screenStack);
    document.getElementById(screenStack[screenStack.length - 1]).style.display = '';
}

function scrollWheel() {
    console.log('ScrollWheel!');
}
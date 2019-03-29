var multimedia_storage = [{
    "photo": "images/shrek-1.jpg",
    "description": "Sejam bem vindos ao meu pântano #meme",
    "liked": false
}, {
    "photo": "images/shrek-2.jpg",
    "description": "Os novos bebés e a grande bebé #pantanoLife #marriedAndProud",
    "liked": false
}, {
    "photo": "images/shrek-3.jpg",
    "description": "Odeio ser a estrela no tapete vermelho #starLife",
    "liked": false
}, {
    "photo": "images/shrek-4.jpg",
    "description": "Fiz uma amizade na minha mais recente viagem #meetingStrangers",
    "liked": false
}, {
    "photo": "images/shrek-5.jpg",
    "description": "Vamos-nos casar!! Venham visitar-nos! #love #married #couple",
    "liked": false
}]

var profiles = [{
    "photo": "icons/prof1.jpg",
    "name": "Shrek"
}, {
    "photo": "icons/simb1.jpg",
    "name": "Bart"
}, {
    "photo": "icons/simb2.jpeg",
    "name": "Homer"
}, {
    "photo": "icons/toy1.jpg",
    "name": "Woody"
}, {
    "photo": "icons/toy2.png",
    "name": "Buzz",
    "description": "Para o infinito e mais alem"
}, {
    "photo": "icons/prof5.png",
    "name": "Dragon"
}]

var screenStack = [];
var picture_index = 0;
var count = 0;
function startup() {
    if (localStorage.getItem("isSet") == undefined) {
        localStorage.setItem("horizontalPx", 1920);
        localStorage.setItem("verticalPx", 1080);
        localStorage.setItem("diagonalSize", 13.3);
        localStorage.setItem("isSet", true);
    }
    setRealSize();
    createNotifications();
    createMessages();
    setupMultimediaScreen();
    picturesSetup();
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

    let time = new Date();
    document.getElementById('time').innerHTML = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0');

    Array.from(document.getElementsByClassName('switch')).map((el) => {
        el.style.width = 60 / 72 * ppc;
        el.style.height = 34 / 72 * ppc;
    });
    document.getElementById('tableSettings').style.fontSize = document.body.style.fontSize;   
}

function picturesSetup() {
    Array.from(document.getElementsByClassName("imageChoice")).map((picture) => {
        picture.onclick = () => {
            document.getElementById('photoToEdit').src = picture.src;
            Array.from(document.getElementsByClassName('filterImage')).map(image => {
                image.src = picture.src;
            })
            pushScreen('photoEditing');
        }
    });
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
        document.getElementById(screen).style.display = 'none';
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

var dragInfo = undefined

function scrollWheelMovement(event) {
    if (dragInfo == undefined)
        return;
    if (document.getElementById('tableScreen').style.top == '')
        document.getElementById('tableScreen').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('tableScreen').style.top) + i;
    console.log(val)
    if (!(val > 0 || val < -($(document.getElementById('tableBodyPictures')).height() - $(document.getElementById('photopublish')).height())))
        document.getElementById('tableScreen').style.top = val;
}

function scrollWheelStart(event) {
    dragInfo = event;
}

function scrollWheelFinish(event) {
    dragInfo = undefined;
}

function updatePicture() {
    document.getElementById("imageShown").src = multimedia_storage[picture_index]['photo'];
    document.getElementById("comment").innerHTML = multimedia_storage[picture_index]['description'];
    document.getElementById("likeButton").src = (multimedia_storage[picture_index]['liked'] == true ? 'icons/liked.svg' : 'icons/like.svg')
}


function createNotifications() {
    let profiletable = document.getElementById("notifications");
    profiletable.innerHTML += "<tr><td id='rowone'><img class='notifpic' src=" + profiles[0].photo + "><p id='notificationmessage'>" + profiles[0].name + " gostou da sua foto<p></td></tr>";
    for (i = 1; i < profiles.length; i++) {
        profiletable.innerHTML += "<tr><td class='row'><img class='notifpic' src=" + profiles[i].photo + "><p id='notificationmessage'>" + profiles[i].name + " gostou da sua foto<p></td></tr>";
    }
}

function createMessages() {
    let profiletable = document.getElementById("messages");
    profiletable.innerHTML += "<tr><td id='rowone'><img class='messagepic' src=" + profiles[0].photo + "><p id='messagename'>" + profiles[0].name + "<p></td></tr>";
    for(i = 1; i< profiles.length; i++){
        profiletable.innerHTML += "<tr><td class='row'><img class='messagepic' src=" + profiles[i].photo + "><p id='messagename'>" + profiles[i].name + "<p></td></tr>";
    }
}

function setupMultimediaScreen() {
    console.log('olá')
    updatePicture();
}

function true_modulo(val, n) {
    return ((val % n) + n) % n;
}

function nextPicture() {
    picture_index = true_modulo(picture_index + 1, multimedia_storage.length);
    updatePicture();
}

function previousPicture() {
    picture_index = true_modulo(picture_index - 1, multimedia_storage.length);
    updatePicture()
}

function likeAction(buttonElement) {
    switch (multimedia_storage[picture_index]['liked']) {
        case true:
            buttonElement.src = 'icons/like.svg'
            break;
        case false:
            buttonElement.src = 'icons/liked.svg'
    }
    multimedia_storage[picture_index]['liked'] = !multimedia_storage[picture_index].liked;
}
function Bluetooth() {
    count++;
    if (count % 2 == 0) {
        document.getElementById('bluetoothImg').style.visibility = 'hidden';
    }
    else {
        document.getElementById('bluetoothImg').style.visibility = 'visible';
    }
}
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
    "description": "Fiz uma amizade na minha viagem #meetingStrangers",
    "liked": false
}, {
    "photo": "images/shrek-5.jpg",
    "description": "Vamos-nos casar!! Venham visitar-nos! #love #married #couple",
    "liked": false
}]

var profiles = [{
    "photo": "icons/prof1.jpg",
    "name": "Shrek",
    "divName": "shrekscreenmessage",
    "messages": [{isMap: false, content:"Olá Gato das botas!",self: false},{isMap: false, content:"Olá Sherk",self: true},{isMap: false, content:"Tudo bem?",self: false},{isMap: false, content:"Sim e contigo?",self: true},{isMap: false, content:"Também",self: false},{isMap: false, content:"Como vai o projeto de IPM?",self: true},{isMap: false, content:"Bem e o teu?",self: false},{isMap: false, content:"Também!",self: true}]
}, {
    "photo": "icons/simb1.jpg",
    "name": "Bart",
    "divName": "bartscreenmessage",
    "messages": [{isMap: false, content:"Ola Gato",self: false},{isMap: false, content:"Oi Bart", self: true},{isMap: false, content:"Tiraste apontamentos das aulas de IPM?",self: false},{isMap: false, content:"Sim, amanha empresto-te",self: true},{isMap: false, content:"Obrigado",self: false}]
}, {
    "photo": "icons/simb2.jpeg",
    "name": "Homer",
    "divName": "homerscreenmessage",
    "messages": [{isMap: false, content:"Ola",self: false},{isMap: false, content:"Ola Homer",self: true},{isMap: false, content:"Queres ir beber uma jola?",self: false},{isMap: false, content:"Sim!!!",self: true},{isMap: false, content:"Vem ter ao MOE's amanha as 15",self: false},{isMap: false, content:"Ate amanha",self: true}]
}, {
    "photo": "icons/toy1.jpg",
    "name": "Woody",
    "divName": "woodyscreenmessage",
    "messages": [{isMap: false, content:"Ola Gato das botas",self: false},{isMap: false, content:"Oi Woody",self: true},{isMap: false, content:"Preciso da tua ajuda tenho uma cobra nas botas",self: false},{isMap: false, content:"A caminho!!!",self: true}]
}, {
    "photo": "icons/toy2.png",
    "name": "Buzz",
    "divName": "buzzscreenmessage",
    "description": "Para o infinito e mais alem",
    "messages": [{isMap: false, content:"Ola camarada",self: false},{isMap: false, content:"Oi Buzz",self: true},{isMap: false, content:"Vamos conquistar a galaxia?",self: false},{isMap: false, content:"Dobriga.",self: true},{isMap: false, content:"PARA O INFINTIO E MAIS ALEM!!!",self: false}]
}, {
    "photo": "icons/prof5.png",
    "name": "Dragon",
    "divName": "dragonscreenmessage",
    "messages": [{isMap: false, content:"Ola Gato das botas",self: false},{isMap: false, content:"Oi Dragon",self: true},{isMap: false, content:"Queres vir ver os teus sobrinhos?",self: false},{isMap: false, content:"Sim, posso amanha as 18!",self: true},{isMap: false, content:"Combinado!!",self: false}]
}]

var mainprofiles = [{
    "name": "Gato das botas",
    "description": "Espadachim nos tempos livres"
}]

var pictureProfileArray = [{
    "image": "images/australia.jpg",
    "description": "Looking for kangaroos!!",
    "divName": "image2Pop",
    "style": ''
}, {
    "image": "images/tropical.jpeg",
    "description": "Chilling...",
    "divName": "image1Pop",
    "style": ''
}, {
    "image": "images/beach.jpg",
    "description": "Great sunset at the beach today.",
    "divName": "image3Pop",
    "style": ''
}, {
    "image": "images/passport.jpg",
    "description": "Ready to travel!",
    "divName": "image4Pop",
    "style": ''
}]

var lockScreenIcons = [{
    "weather":"icons/drop.png",
    "temperature":"5",
    "thermometer": "icons/coldterm.svg"
},{
   "weather":"icons/cloud.png",
    "temperature":"15",
    "thermometer": "icons/normalterm.svg"
},{
    "weather": "icons/contrast.png",
    "temperature":"30",
    "thermometer": "icons/warmterm.svg"
}]

var popsGPS = [{
     "name":"",
    "description":"",
    "picture": "",
    "rating": 0,
},{
    "name":"Park",
    "description":"Beautiful birds and a cool lake to chill out",
    "picture": "images/park.jpg",
    "rating": 0,
    "sum" : 160,
    "quantity" : 40,
},{
    "name":"Restaurant",
    "description":"Good spaguetti and pasta",
    "picture": "images/restaurant.jpg",
    "rating": 0,
    "sum" : 250,
    "quantity" : 70,
},{
    "name":"Hotel",
    "description":"5 star with a good view",
    "picture": "images/hotel2.jpg",
    "rating": 0,
    "sum" : 460,
    "quantity" : 100,
    
},{
    "name":"Metro",
    "description":"Principal metro station of San Francisco city",
    "picture": "images/metro.JPG",
    "rating": 0,
    "sum" : 65,
    "quantity" : 30,
},{
    "name":"Museum",
    "description":"MonaLisa in room 505",
    "picture": "images/museum.jpg",
    "rating": 0,
    "sum" : 250,
    "quantity" : 60,
}]

var screenStack = [];
var picture_index = 0;
var count = 0;
var mic1 = 0, mic2 = 2, mic3 = 0, mic4 = 0, mic5=0, mic6 = 0;
var mics = [mic1, mic2, mic3, mic4, mic5, mic6];
var micsid = ['mic1', 'mic2', 'mic3', 'micmessage', 'mic5', 'mic6'];
var numberPostFtg = 0;
var indiceFtg = -1;
var numberNoti = 0;
var block = 0;
var popupon = 0;
var gpson = 0;
var zoom = 0;
var nav = 0;
var target = -1;
var modeWalk = 0;
var directions = []
var mapsize = [0,0] //height, width
var map_pins = []
var notifications = []
var notifiRandom = []
var vals = []
var bluetoothProfile = [['images/shrek-1.jpg','images/air.jpeg', 'images/hotel.jpg', 'images/newy.png', 'images/sunshine.jpg', 'images/climbing.jpg', 'images/food.jpg', 'images/airballon.jpg'], ['images/shrek-2.jpg','images/air.jpeg', 'images/hotel.jpg', 'images/newy.png', 'images/sunshine.jpg', 'images/climbing.jpg', 'images/food.jpg', 'images/airballon.jpg'], ['images/shrek-3.jpg','images/air.jpeg', 'images/hotel.jpg', 'images/newy.png', 'images/sunshine.jpg', 'images/climbing.jpg', 'images/food.jpg', 'images/airballon.jpg']];
var directionsIMG =['icons/up-arrow2.svg','icons/right-arrow2.svg','icons/down-arrow2.svg','icons/left-arrow2.svg']

var selectedTextBox = undefined;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new webkitSpeechRecognition()
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;

function startup() {
    if (localStorage.getItem("isSet") == undefined) {
        localStorage.setItem("horizontalPx", 1920);
        localStorage.setItem("verticalPx", 1080);
        localStorage.setItem("diagonalSize", 13.3);
        localStorage.setItem("isSet", true);
    }
    setRealSize();
    createLockScreenIcons();
    createRandomArrayNotifications();
    createNotifications();
    createMessages();
    createShareMenu(2);
    createMenuPerfil();
    createNotificationsPops();
    setupMultimediaScreen();
    picturesSetup();
    setupGraph();
    addAllPins();
    blockWatch(); blockWatch();
    setupInitialPosition();
    setShrekMovement();
    GPS()
    mapsize[0] = document.getElementById('mapLayer').height
    mapsize[1] = document.getElementById('mapLayer').width
    setInterval(function() {
        let time = document.getElementById('time').innerHTML.split(':')
        let minutes = (parseInt(time[1]) + 1) % 60
        let hours = Math.floor((parseInt(time[1]) + 1) / 60 + parseInt(time[0])) % 24
        document.getElementById('time').innerHTML = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
        document.getElementById('timeLockScreen'). innerHTML = document.getElementById('time').innerHTML 
    }, 1000 * 60)
}

let recognizing = false

recognition.onstart = function () {
    //cenas que acontecem qd a pessoa carrega no botão vermelho
    console.log('Recording started')
    recognizing = true
}

recognition.onend = function (event) {
    //acabou
    console.log('Recording ended')
    recognizing = false
}

recognition.onerror = function(event) {
    //quando para automaticamente
    console.log(event.error)
    if (event.error == 'no-speech') {
        console.log('User not speaking')
        autoturnoff()
    }
}

recognition.onresult = function (event) {
    if (typeof (event.results) === 'undefined') { //Something is wrong…
        recognition.stop();
        return;
    }

    let content = ''
    for (var i = event.resultIndex; i < event.results.length; ++i)
        content += event.results[i][0].transcript
    
    if (selectedTextBox !== undefined)
        selectedTextBox.value = content;
}

var offsets = {help: 0, back: 0, scroll: 0}
var shrekMov;

function setShrekMovement(){
    shrekMov = setInterval(function(){
        let pin = searchPin('shrek');
        let pino = searchPinCoordinates(pin.y,pin.x);
        let adjs = g.getEdges(pino[0]);
        let num = Math.floor(Math.random()*(adjs.length));
        pin.x = pins[adjs[num].id][2]
        pin.y = pins[adjs[num].id][1]
        reloadPins();
        if(nav == 1){
            recalibratePath();
        }
    },5000)
}

function goToPin(pinname) {
    if (pinname == 'shrek'){
        clearInterval(shrekMov)
        searchPlace('shrek');
    }
    if(screenStack[screenStack.length - 1] === 'ShrekScreen'){
        backButton()
    }else{
        pushScreen('mapaScreen')
    }
    centerPosition(pinname)
}

function stopShrekMovement(){
    clearInterval(shrekMov);
    pushScreen('mapaScreen');
    centerPosition('shrek');
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
    let helpButton = document.getElementById('helpButton');
    let backButton = document.getElementById("backButton");
    let scrollWheel = document.getElementById("scrollWheel");
    backButton.style.width = ppc * 0.2;
    backButton.style.height = ppc * 0.4;

    scrollWheel.style.width = ppc * 0.2;
    scrollWheel.style.height = ppc * 1.2;

    helpButton.style.width = ppc * 0.2;
    helpButton.style.height = backButton.style.height;

    //calculate where to place the side buttons

    //left side
    let position = 50 - (parseInt(cover.style.width) / 2) / width * 100 - parseInt(helpButton.style.width) / width * 100;
    helpButton.style.left = position + '%';

    //right side
    let left = 50 + (parseInt(cover.style.width) / 2) / width * 100;
    backButton.style.left = left + '%';
    scrollWheel.style.left = left + '%';

    //height
    let top = (parseInt(cover.style.height) / 2) / height * 100;
    backButton.style.top = 50 - top * 0.6 + '%';
    scrollWheel.style.top = 50 - top * 0.1 + '%';
    helpButton.style.top = 50 - top * 0.6 + '%';
    offsets['back'] = 50 - top * 0.6
    offsets['scroll'] = 50 - top * 0.1
    offsets['help'] = 50 - top * 0.6
    let fontsize = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = fontsize / 72 * ppc;

    let time = new Date();
    document.getElementById('time').innerHTML = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0');
    document.getElementById('timeLockScreen').innerHTML = time.getHours().toString().padStart(2, '0') + ':' + time.getMinutes().toString().padStart(2, '0');

    Array.from(document.getElementsByClassName('switch')).map((el) => {
        el.style.width = 60 / 72 * ppc;
        el.style.height = 34 / 72 * ppc;
    });
    document.getElementById('tableSettings').style.fontSize = document.body.style.fontSize;
}

function createLockScreenIcons(){
    let lockIcons = '';
    let indice = Math.floor(Math.random()*3);
    lockIcons += "<img id='weatherIcon' src='"+ lockScreenIcons[indice].weather+"'>"
    lockIcons += "<img id='temperatureIcon' src='"+ lockScreenIcons[indice].thermometer+"'>"
    lockIcons += "<h3>" + lockScreenIcons[indice].temperature + "º</h3>"
    lockIcons += "<img id='bellIcon' src='icons/bell3.png'>"
    document.getElementById('buttonsLock').innerHTML = lockIcons;
}

function picturesSetup() {
    Array.from(document.getElementsByClassName("publisheable")).map((picture) => {
        picture.onclick = () => {
            document.getElementById('photoToEdit').src = picture.src;
            Array.from(document.getElementsByClassName('filterImage')).map(image => {
                image.src = picture.src;
            })
            Array.from(document.getElementsByClassName('photoToPublish')).map(image => {
                image.src = picture.src;
            })
            pushScreen('photoEditing');
        }
    });
}

function filterClick(image) {
    document.getElementById("photoToEdit").style.filter = $(image).css("filter");
    document.getElementById("photofinal").style.filter = $(image).css("filter");
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

function helpButton() {
    backButton();
}

function backButton() {
    if(popupon) {
        location.href="#";
        popupon = 0;
        return;
    }
    if(screenStack[screenStack.length - 1] == 'mapaScreen' && nav == 1){
        popUpCancelTrip()
        return
    }
     if(screenStack[screenStack.length - 1] == 'augmentedHelp' && nav == 1 && upgrademap ){
        popUpCancelTrip3D()
        return;
    }
    if (localStorage.getItem('locked') === 'true' && screenStack[screenStack.length - 1] === 'lockScreen') {
        return
    }
    if (block % 2 == 1 && screenStack[screenStack.length - 1] === 'blackScreen') {
        return
    }
    if(screenStack[screenStack.length - 1] === 'mapaScreen'){
        desativeJoystick();
        hideNavbars();
    }
    if(screenStack[screenStack.lenght -1] === 'augmentedHelp'){

    }
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
    if (screenStack.length != 0)
        document.getElementById(screenStack[screenStack.length - 1]).style.display = 'none';
    else {
        document.getElementById('mainmenu').style.display = 'none';
    }
    if(screen=='mapaScreen'){
        ativeJoystick();
    }
    screenStack.push(screen);
    console.log(screenStack);
    document.getElementById(screenStack[screenStack.length - 1]).style.display = '';
}

var dragInfo = undefined

function scrollWheelPhotos(event) {
    if (document.getElementById('photopublish').style.top == '')
        document.getElementById('photopublish').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 5;
    } else if (direction < 0) {
        i = -5;
    }

    let val = parseInt(document.getElementById('photopublish').style.top) + i;
    let aux = -($(document.getElementById('tablePhotos')).outerHeight() + $(document.getElementById('photoLabel')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))

    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('photopublish').style.top = val;
}

function scrollWheelMessages(event) {
    if (document.getElementById('messageScreen').style.top == '')
        document.getElementById('messageScreen').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)
    let i = 0;
    if (direction > 0) {
        i = 5;
    } else if (direction < 0) {
        i = -5;
    }

    let val = parseInt(document.getElementById('messageScreen').style.top) + i;
    let aux = -($(document.getElementById('messageList')).outerHeight() + $(document.getElementById('messatext')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))

    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('messageScreen').style.top = val;
}

function scrollWheelNotifications(event) {
    if (document.getElementById('notificationScreen').style.top == '')
        document.getElementById('notificationScreen').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 5;
    } else if (direction < 0) {
        i = -5;
    }

    let val = parseInt(document.getElementById('notificationScreen').style.top) + i;
    let aux = -($(document.getElementById('notificationsList')).height() + $(document.getElementById('notiftext')).height() -
        ($(document.getElementById('notificationScreen')).height() - $(document.getElementById('top-bar')).height()))

    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('notificationScreen').style.top = val;
}

function scrollWheelProfile(event) {
    if (document.getElementById('profile').style.top == '')
        document.getElementById('profile').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 5;
    } else if (direction < 0) {
        i = -5;
    }

    let val = parseInt(document.getElementById('profile').style.top) + i;
    let aux = -($(document.getElementById('picturelist')).outerHeight() + $(document.getElementById('profile-top')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))
    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('profile').style.top = val;
}

function scrollWheelMessage(event) {
    if (document.getElementById('messageContent').style.top == '')
        document.getElementById('messageContent').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('messageContent').style.top) + i;
    let aux = -($(document.getElementById('messageContent')).outerHeight() + $(document.getElementById('zindex')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))

    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('messageContent').style.top = val;
}

function scrollWheelHelpMultiScreen(event) {
    if (document.getElementById('helpmultimediascreen').style.top == '')
        document.getElementById('helpmultimediascreen').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('helpmultimediascreen').style.top) + i;
    let aux = -($(document.getElementById('helpmultimediascreen')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))

    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('helpmultimediascreen').style.top = val;
}

function mapBoundariesPositioning() {
    let border = upgrademap ? $(document.getElementById('bettermap')) : $(document.getElementById('mapaScreen'))
    let current = $(getCurrentMap())
    const position = Object.values(current.position())
    const leftBorder = 0
    const topBorder = 0
    const rightBorder = leftBorder + border.width()
    const bottomBorder = topBorder + border.height()
    
    if (position[0] > topBorder){
        current.offset({top: current.offset().top - position[0] + topBorder})
    }
    if (position[1] > leftBorder) {
        current.offset({left: current.offset().left - position[1] + leftBorder})
    }

    if (position[0] + current.height() < bottomBorder){
        current.offset({top: current.offset().top - position[0] - current.height() + bottomBorder})
    }
    if (position[1] + current.width() < rightBorder) {
        current.offset({left: current.offset().left - position[1] - current.width() + rightBorder})
    }
    
}

function scrollWheelMap(event) {
    const maxZoom = 0.99;
    let i = 0;
    let direction = (event.clientY - dragInfo.clientY)
    let border = upgrademap ? $(document.getElementById('bettermap')) : $(document.getElementById('mapaScreen'))
    let current = $(getCurrentMap())
    if (direction > 0) {
        i = 0.01;
    } else if (direction < 0) {
        i = -0.01;
    }
    let offset = false
    let val = zoom + i;
    if (val > maxZoom) val = maxZoom
    if (val < 0) val = 0
    if (mapsize[0] * (1 - val) < border.height()) {
        val = (1 - border.height() / mapsize[0]) 
        offset = true
    }
    else if (mapsize[1] * (1 - val) < border.width()) {
        val = (1 - border.width() / mapsize[1]) 
    }
    let hor_pos = (border.width() / 2 - current.position().left) / (1-zoom)
    let ver_pos = (border.height() / 2 - current.position().top) / (1-zoom)
    zoom = val
    current.height(mapsize[0] * (1 - zoom))
    current.width(mapsize[1] * (1 - zoom))
    const baseOffset = border.offset()
    current.offset({top: baseOffset.top - ver_pos * (1-zoom) + border.height() / 2, left: baseOffset.left - hor_pos * (1-zoom) + border.width() / 2})
    mapBoundariesPositioning();
    reloadPins();
    if(nav == 1)
        recalibratePath();
}

function scrollWheelHelpMap(event) {
    if (document.getElementById('helpmapascreen').style.top == '')
        document.getElementById('helpmapascreen').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('helpmapascreen').style.top) + i;
    let aux = -($(document.getElementById('helpmapascreen')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))
    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('helpmapascreen').style.top = val;
}

function scrollWheelPointsInterest(event) {
    if (document.getElementById('pointsInterest').style.top == '')
        document.getElementById('pointsInterest').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('pointsInterest').style.top) + i;
    let aux = -($(document.getElementById('pointsInterest')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))
    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('pointsInterest').style.top = val;
}

function scrollWheelChoosePhone(event) {
    if (document.getElementById('choose-phone').style.top == '')
        document.getElementById('choose-phone').style.top = '0px';

    if ($('#choose-phone').outerHeight() < $(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight())
        return;
    let direction = (event.clientY - dragInfo.clientY)

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('choose-phone').style.top) + i;
    let aux = -($(document.getElementById('choose-phone')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()) + 20)
    
    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('choose-phone').style.top = val;
}

function scrollWheelHealth(event) {
    if (document.getElementById('saude').style.top == '')
        document.getElementById('saude').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)
    if ($('#saude').outerHeight() < $(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight())
    return;

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('saude').style.top) + i;
    let aux = -($(document.getElementById('saude')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))
    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('saude').style.top = val;
}

function scrollWheelGPSSettings(event) {
    if (document.getElementById('choose-gps').style.top == '')
        document.getElementById('choose-gps').style.top = '0px';
    let direction = (event.clientY - dragInfo.clientY)
    if ($('#choose-gps').outerHeight() < $(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight())
    return;

    let i = 0;
    if (direction > 0) {
        i = 10;
    } else if (direction < 0) {
        i = -10;
    }

    let val = parseInt(document.getElementById('choose-gps').style.top) + i;
    let aux = -($(document.getElementById('choose-gps')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()) + 20)
    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('choose-gps').style.top = val;
}

function scrollWheelMovement(event) {
    if (dragInfo == undefined || event.screenX === 0 && event.screenY === 0)
        return;
    switch (screenStack[screenStack.length - 1]) {
        case 'photopublish':
            scrollWheelPhotos(event)
            break
        case 'messageScreen':
            scrollWheelMessages(event)
            break
        case 'notificationScreen':
            scrollWheelNotifications(event)
            break
        case 'profile':
            scrollWheelProfile(event)
            break
        case 'messageBox':
            scrollWheelMessage(event)
            break
        case 'helpmultimediascreen':
            scrollWheelHelpMultiScreen(event)
            break
        case 'mapaScreen':
            scrollWheelMap(event)
            break
        case 'helpmapascreen':
            scrollWheelHelpMap(event)
            break
        case 'pointsInterest':
            scrollWheelPointsInterest(event)
            break
        case 'choose-phone':
            scrollWheelChoosePhone(event)
            break
        case 'saude':
            scrollWheelHealth(event)
            break
        case 'choose-gps':
            scrollWheelGPSSettings(event)
            break
    }
}

function scrollWheelStart(event) {
    dragInfo = event;
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
}

function scrollWheelFinish(event) {
    dragInfo = undefined;
}

function updatePicture() {
    document.getElementById("imageShown").src = multimedia_storage[picture_index]['photo'];
    document.getElementById("comment").innerHTML = multimedia_storage[picture_index]['description'];
    document.getElementById("likeButton").src = (multimedia_storage[picture_index]['liked'] == true ? 'icons/coracao.svg' : 'icons/meme.svg')
}   
                       
function createShareMenu(i){
    let ftg='';
    ftg += "<tbody id='tableBodyPictures'>";
    for(j = 0; j < bluetoothProfile[i].length; j= j + 2 ){
        ftg += "<tr>";
        ftg += '<td><img class="imageChoice publisheable" src='+ bluetoothProfile[i][j]+'></td>'
        if (j + 1 < bluetoothProfile[i].length){
            let k = j + 1;
            ftg += '<td><img class="imageChoice publisheable" src='+ bluetoothProfile[i][k]+'></td>';    
        }
        ftg += "</tr>";
    }
    ftg += " </tbody>";
    document.getElementById('tablePhotos').innerHTML = ftg;
}

function selectPhone(i){
    if(i == 1){
        document.getElementById('phone1').style.backgroundColor = "#ccc";
        document.getElementById('phone2').style.backgroundColor = "white";
        document.getElementById('phone3').style.backgroundColor = "white";
    }
    else if(i == 2){
        document.getElementById('phone1').style.backgroundColor = "white";
        document.getElementById('phone2').style.backgroundColor = "#ccc";
        document.getElementById('phone3').style.backgroundColor = "white";
    }
    else{
        document.getElementById('phone1').style.backgroundColor = "white";
        document.getElementById('phone2').style.backgroundColor = "white";
        document.getElementById('phone3').style.backgroundColor = "#ccc";
    }
}

function createRandomArrayNotifications(){
    for (i = 0; i < profiles.length; i++){
        notifiRandom.push({
            "number" : Math.floor(Math.random() * 4),
            "profileName": profiles[i].name,
            "profilePhoto" : profiles[i].photo 
        })
    }
}

function addNotificationInArray(){
    let number = Math.floor(Math.random()* (profiles.length-1));
    notifiRandom.unshift({
            "number" : indiceFtg,
            "profileName": profiles[number].name,
            "profilePhoto" :profiles[number].photo  
    });
    indiceFtg--;
}

function createNotifications() {
    let profiletable = '';
    profiletable += "<tr><td onclick='goToPop(" + notifiRandom[0].number + ");' id='rowone'><img class='notifpic' src=" + notifiRandom[0].profilePhoto + "><h4 id='notificationmessage'>" + notifiRandom[0].profileName + " gostou da sua foto</h4></td></tr>";
    for (i = 1; i < notifiRandom.length; i++) {
        profiletable += "<tr><td onclick= 'goToPop(" + notifiRandom[i].number + ");' class='row'><img class='notifpic' src=" + notifiRandom[i].profilePhoto + "><h4 id='notificationmessage'>" + notifiRandom[i].profileName + " gostou da sua foto</h4></td></tr>";
    }
    document.getElementById("notifications").innerHTML = profiletable;
}
function goToPop(i) {
    popupon = 1;
    location.href = '#' + pictureProfileArray[i + numberPostFtg].divName;
}

function goToPopPerfil(i) {
    popupon =
    location.href = '#' + pictureProfileArray[i].divName;
}
function createNotificationPop(){
     let profiletable = document.getElementById("notificationScreenPop");
     i = 0;
     profiletable.innerHTML += "<div class = 'overlay' id='" + pictureProfileArray[i].divName + "'><div class='popupphoto'><div id='toppopup'><a id='closepopup' href='#' onclick='popupclosed()'>&times;</a></div><div class='content'><img style='"+String(pictureProfileArray[i].style)+"' id='photopopup' src='" + pictureProfileArray[i].image + "'> <p id='descriptionNotifications'>"+ pictureProfileArray[i].description +"</p></div></div></div></div>";
}

function createNotificationsPops() {
    let profiletable = document.getElementById("notificationScreenPop");
    for (i = 0; i < pictureProfileArray.length; i++) {
        profiletable.innerHTML += "<div class = 'overlay' id='" + pictureProfileArray[i].divName + "'><div class='popupphoto'><div id='toppopup'><a id='closepopup' href='#' onclick='popupclosed()'>&times;</a></div><div class='content'><img id='photopopup' src='" + pictureProfileArray[i].image + "'><p id='descriptionNotifications'>"+ pictureProfileArray[i].description +"</p></div></div></div></div>";
    }
}
function createMessages() {
    let profiletable = '';
    profiletable += "<tr onclick=" + '"' + "pushScreen('messageBox');" +'createMenuMessage(' + 0 +  ')"' + "><td id='rowone' class='row'><img class='messagepic' src=" + profiles[0].photo + "><h3 id='messagename'>" + profiles[0].name + "</h3></td></tr>";
    for (i = 1; i < profiles.length; i++) {
        profiletable += "<tr onclick=" + '"' + "pushScreen('messageBox');" +'createMenuMessage(' + i +  ')"' + "><td class='row'><img class='messagepic' src=" + profiles[i].photo + "><h3 id='messagename'>" + profiles[i].name + "</h3></td></tr>";
    }
    document.getElementById("messages").innerHTML = profiletable;
}

var currentUser = 0;

function createMessage(message) {
    let content = message.self ? "<div class='containerM darkerM'>" : "<div class='containerM lighterM'><p class='messageP' id='message1'>"
    if (message.isMap)
        content += "<p class='messageP'> " + message.content + "<br><button id='goToMessages' onclick='goToPin(\"" + message.pinName + "\")'>GO TO</button>"
    else 
        content += "<p class='messageP'>" + message.content + "</p>"

    return content + "</div>"
}

/*Function that creates the messages*/
function createMenuMessage(index) {
    currentUser = index;
    let messages = '';
    messages += "<div id='zindex'><h1 id='messaperson'>" + profiles[index].name + "</h1><div id='message-share-location' onclick='shareLocationMessage()'><img src='icons/pin.svg'><p id='messageShare'>SHARE</p></div></div></div><div id='messageContent'>";
    console.log(profiles[index].messages.length)
    for (i = 0; i < profiles[index].messages.length; i++) {
        messages += createMessage(profiles[index].messages[i])
    }
    let name = profiles[index].divName + 'Input';
    messages += "<div id='box' class='boxMessage'><img id='micmessage' onclick=" + '"' + "microphoneOn('" + name + "','micmessage', 4)" + '"' + "src='icons/micoff.png'><input type='text' id='" + profiles[index].divName + "Input' class='sendmessage'></input><img src='icons/send.png' id='sendimage' onclick=" + "sendMessage('" + profiles[index].divName + "')" + '></div>'
    document.getElementById('messageBox').innerHTML = messages + "</div>";
    document.getElementById('messageBox').style.top = 0;
    let aux = -($(document.getElementById('messageContent')).outerHeight() + $(document.getElementById('zindex')).outerHeight() -
        ($(document.getElementById('mainScreen')).outerHeight() - $(document.getElementById('top-bar')).outerHeight()))
    document.getElementById('messageContent').style.top = aux;
}

function resetMenuMessage() {
    document.getElementById('messageBox').innerHTML = ''
}

function sendMessage(divName) {
    if (document.getElementById(divName + 'Input').value === '')
        return;
    if(divName =='shrekscreenmessage'){
        let value = document.getElementById('shrekscreenmessage' + 'Input').value;   
        let value2 = value.toLowerCase(); 
        if(value2.includes('onde') == true){
            setTimeout(function(){
                profiles[0].messages.push({content: 'Carregue para ter acesso a minha posicao atual', self: false, isMap: true, pinName: 'shrek'});
                resetMenuMessage();
                createMenuMessage(0);
                setTimeout(function(){
                    profiles[0].messages.push({content: 'Estou a tua espera',self:false});
                    resetMenuMessage();
                    createMenuMessage(0);
                }
                ,2000)
                }
                ,3000);
        }
    }
    profiles[currentUser].messages.push({content: document.getElementById(divName+'Input').value,self:true});
    if (mics[3] === 1)
        microphoneOn(profiles[currentUser].divName + 'Input', 'micmessage', 4);
    resetMenuMessage();
    createMenuMessage(currentUser);
}

function mapMessageShrek(){
}

function createMenuPerfil() {
    let profiletable = document.getElementById("pictureListTable")
    let content = ''
    for (i = 0; i < pictureProfileArray.length; i = i + 2) {
        content += "<tr><td onclick="+'"'+"goToPopPerfil('"+ i +"')"+'"'+"><img class='imageChoice' src='" + pictureProfileArray[i].image + "' style='" + String(pictureProfileArray[i].style) + "'></td>"
        if (i + 1 < pictureProfileArray.length){
            let j = i + 1;
            content += "<td onclick="+'"'+"goToPopPerfil('"+ j +"')"+'"'+"><img class='imageChoice' src='" + pictureProfileArray[i + 1].image + "' style='" + String(pictureProfileArray[i + 1].style) + "'></td>";
        }
        content += '</tr>'
    }
    profiletable.innerHTML = content;
}

function setupMultimediaScreen() {
    updatePicture();
}

function true_modulo(val, n) {
    return ((val % n) + n) % n;
}

function resetFilters() {
    document.getElementById("photoToEdit").style.filter = '';
    document.getElementById("photofinal").style.filter = ''
}

function nextPicture() {
    picture_index = true_modulo(picture_index + 1, multimedia_storage.length);
    updatePicture();
}

function previousPicture() {
    picture_index = true_modulo(picture_index - 1, multimedia_storage.length);
    updatePicture()
}

function fillProfile() {
    let informations = document.getElementById('profileInf');
    informations.innerHTML = "<h1 id='profileName'>" + mainprofiles[0].name + "</h1><p id='profileDescr'>" + mainprofiles[0].description + "</p><button class='btn-edit' onclick=\"pushScreen('profileEdit')\">Edit Profile</button>";
}

function saveProfile() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    if (input1 != '') {
        mainprofiles[0].name = input1;
    }
    if (input2 != '') {
        mainprofiles[0].description = input2;
    }
    if (input1 == '' && input2 == ''){
        location.href="#popup3";
        popupon = 1;
        return;
    }
    fillProfile();
    backButton();
    document.getElementById("formprofile").reset();
}

function cancelChange() {
    document.getElementById("photodescription").reset();
    document.getElementById("formprofile").reset();
    backButton();
}

function cancelSearch() {
    document.getElementById("searchForm").reset();
    backButton();
}

function cancelPoints() {
    backButton();
}


function likeAction(buttonElement) {
    switch (multimedia_storage[picture_index]['liked']) {
        case false:
            buttonElement.src = 'icons/coracao.svg'
            break;
        case true:
            buttonElement.src = 'icons/meme.svg'
    }
    multimedia_storage[picture_index]['liked'] = !multimedia_storage[picture_index]['liked'];
}
function Bluetooth() {
    count++;
    if (count % 2 == 0) {
        document.getElementById('bluetoothImg').style.visibility = 'hidden';
        document.getElementById('dropdown').style.display = 'none';
    }
    else {
        document.getElementById('bluetoothImg').style.visibility = 'visible';
        document.getElementById('dropdown').style.display = 'inline';
    }
    triggerBluetooths(count % 2 == 0 ? false : true)
}

function GPS(){
    gpson++;
    if(gpson % 2 == 0) {
        document.getElementById('gpsImg').style.visibility = "hidden";
        document.getElementById('gps-dropdown').style.display = 'none';
    }
    else{
        document.getElementById('gpsImg').style.visibility = "visible";
        document.getElementById('gps-dropdown').style.display = 'inline';
    }
    triggerGps(gpson % 2 == 0 ? false : true);
}


function blockWatch() {
    block++;
    localStorage.setItem('locked', true);
    if (screenStack[screenStack.length - 1] == 'lockScreen') {
        screenStack.pop();
        document.getElementById('lockScreen').style.display = 'none';
        pushScreen('blackScreen');
        return;
    }
    if (block % 2 == 1) {
        pushScreen('blackScreen');
        document.getElementById('top-bar').style.display = 'none';
    }
    else {
        backButton();
        pushScreen('lockScreen');
    }
}
function unlockWatch() {
    localStorage.setItem('locked', false)
    backButton();
    document.getElementById('top-bar').style.display = '';
}

function helpButton() {
    if (block % 2 == 1) {
        return;
    }
    switch (screenStack[screenStack.length - 1]) {
        case 'multimedia':
            pushScreen('helpmultimediascreen');
            break;
        case 'lockScreen':
        case 'helpmapascreen':
        case 'helpmultimediascreen':
        case 'helpphotosubmit':
        case 'helpsearchplace':
        case 'helpprofileedit':
            break;
        case 'photoSubmit':
            pushScreen('helpphotosubmit');
            break;
        case 'profileEdit':
            pushScreen('helpprofileedit');
            break;
        case 'messageBox':
            pushScreen('helpmessage');
            break;
        case 'searchFriend':
            pushScreen('helpsearchfriend');
            break;
        case 'searchPlace':
            pushScreen('helpsearchplace');
            break;
        case 'bluetooth-setup':
            popupon = 1;
            location.href = "#popup2";
            break;
        case 'gps-setup':
            popupon = 1;
            location.href = "#popup4";
            break;
        case 'mapaScreen':
            pushScreen('helpmapascreen');
            break;
        default:
            popupon = 1;
            location.href = "#popup1";
    }
}

function popupclosed(){
    popupon = 0;
}

/*corrigir quando vier a saude*/
function bluetoothIsOff() {
    if (count % 2 == 0) {
        location.href = "#popup2";
        pushScreen('bluetooth-setup');
    } else {
        pushScreen('photopublish')
    }
}

function gpsIsOff(){
    if(gpson % 2 == 0){
        location.href = "#popup4";
        popupon = 1;
        pushScreen('gps-setup');
    } else {
        pushScreen('mapaScreen')
        centerPosition('atualPosition');
        
    }
}

function validateBluetooth() {
    if (count % 2 !== 0) {
        backButton()
        pushScreen('photopublish')
    }
}

function validateGPS(){
    if(gpson % 2 !== 0 ){
        backButton()
        pushScreen('mapaScreen');
        centerPosition('atualPosition')
    }
}


function addPicture() {
    pictureProfileArray.unshift({
        "image": document.getElementById('photofinal').src,
        "description": document.getElementById('descript').value,
        "divName": document.getElementById('descript').value + String(numberPostFtg),
        "style": document.getElementById('photofinal').style.cssText
    })
    numberPostFtg++;
    document.getElementById('descript').value = '';
    createMenuPerfil();
    document.getElementById(screenStack[screenStack.length - 1]).style.display = 'none'
    screenStack = []
    pushScreen('multimedia');
    resetFilters();
    createNotificationPop();
}

function updateValue(value) {
    document.getElementById('mainScreen').style.opacity = value;
}

function triggerBluetooths(value) {
    $(document.getElementsByClassName('bluetooth-btn')).prop('checked', value)
}

function triggerGps(value) {
    $(document.getElementsByClassName('gps-btn')).prop('checked', value);
}

let status = false
function microphoneOn(inputname, value, numbermic) {
    let using = mics.some(val => val === 1)
    if (using) {
        micsid.map(id => { if (document.getElementById(id) !== null) document.getElementById(id).style.backgroundColor = 'white' }) //limpa todos
    }
    if (mics[numbermic - 1] === 0) {
        //start new recognition
        document.getElementById(inputname).focus();
        document.getElementById(value).style.backgroundColor = "#E84855";
        mics = Array(mics.length).fill(0)
        mics[numbermic - 1] = 1;
        selectedTextBox = document.getElementById(inputname)
        if (!recognizing) recognition.start()
        status = true
    } else {
        //just stop
        recognition.stop()
        document.getElementById(micsid[numbermic - 1]).style.backgroundColor = 'white'
        mics[numbermic - 1] = 0
        selectedTextBox = undefined
        status = false
    }
}

function autoturnoff() {
    for (let i = 0; i < mics.length; i++)
        if (mics[i] === 1) {
            //microphone is on. turn it off
            microphoneOn('',micsid[i], i+1 );
            return
        }
}

class Pin {
    constructor(x,y,name, type, index) {
        this.x = x;
        this.y = y;
        this.n = name; 
        this.t = type;
        this.i = index;
    }

    getCoords(scale) {
        if (scale !== undefined)
            return [this.x,this.y].map(el => el * (1 - scale));
        else
            return [this.x,this.y]
    }
    
    getName(){
        return this.n;
    }
    getType(){
        return this.t;
    }
}

function addAllPins(){
    addPin(639, 139 ,"atualPosition","atualPosition", 0)
    addPin(548,44,"park","park",1);
    addPin(685, 233,"restaurant","restaurant",2);
    addPin(816, 107,"hotel", "hotel",3);
    addPin(639,360,"metro","metro",4);
    addPin(771,233,"museum","museum",5);
    addPin(771,328,"shrek","friend",6)
    reloadPins();
}

function addPin(x, y, name, type,index) {
    map_pins.push(new Pin(x,y,name,type,index))
}

function reloadPins() {
    let map = document.getElementById(upgrademap ? 'betterpins' : 'pins')
    map.innerHTML = ''
    let pins = '', i = 0
    for (let pin of map_pins) {
        let newpin = document.createElement("IMG");
        
        //setting up data
        if(pin.t=="park" || pin.t == "atualPosition"){
            newpin.src = "icons/" + pin.t + ".svg"
        }
        else if(pin.t=="friend"){
            newpin.src = "icons/prof1.jpg"
        }
        else{
            newpin.src = "icons/" + pin.t + ".png"
        }
        let j = i
        if(pin.t != "atualPosition" && pin.t != 'friend'){
            $(newpin).click(function() {screenInfo(j)})
        }
        if(pin.t == 'friend'){
            $(newpin).click(function() {screenProfile(pin.n)})
        }
        newpin.id="pin" + (i++).toString()
        newpin.className = "pin"
        
        //position
        newpin.style.left = $(getCurrentMap()).position()['left'] + pin.getCoords(zoom)[1]
        newpin.style.top = $(getCurrentMap()).position()['top']+ pin.getCoords(zoom)[0]
        
        //size
        let scale = 1 - zoom
        if (scale < 0.1) scale = 0.1
        if (scale > 0.5) scale = 0.5
        newpin.style.height = 100 * scale + 'px';
        newpin.style.width = 100* scale + 'px';
        
        map.appendChild(newpin)
    }

    
    const maps = [['map-canvas', 'mapLayer'], ['bettermap-canvas','bettermap-img']]
    map = upgrademap ? maps[1] : maps[0] //decide between 3d or not
    $('#' + map[0]).width($('#' + map[1]).width())
    $('#' + map[0]).height($('#' + map[1]).height())
    document.getElementById(map[0]).height = $('#' + map[0]).height()
    document.getElementById(map[0]).width = $('#' + map[0]).width()
    $('#' + map[0]).offset($('#' + map[1]).offset())

    const self = searchPin('atualPosition')
    let ctx = document.getElementById(map[0]).getContext('2d')
    ctx.beginPath()
    ctx.arc(self.y * (1-zoom), self.x * (1-zoom), radius * (1-zoom), 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
}

let mapDrag = undefined

function changeReview(j, numberPin) {
    popsGPS[numberPin].rating = j+1;
    backButton()
    screenInfo(numberPin);
}

function screenInfo(numberPin) {
    console.log('Pin is ' + numberPin);
    let pin = map_pins[numberPin];
    document.getElementById("titleInformation").innerHTML = popsGPS[numberPin].name;
    document.getElementById("descriptionInformation").innerHTML = popsGPS[numberPin].description;
    document.getElementById("imageInformation").src = popsGPS[numberPin].picture;
    let i;
    document.getElementById('imgs-ratings').innerHTML = ''
    for (i = 0; i < popsGPS[numberPin].rating; i++) {
        let j = i;
        document.getElementById('imgs-ratings').innerHTML += "<div class='unselectable' ><img src=icons/star.png onclick=changeReview(" + j +"," + numberPin + ") /></div>"
    }
    for (; i < 5; i++) {
        let j = i;
        document.getElementById('imgs-ratings').innerHTML += "<div class='unselectable'  ><img src=icons/empty_star.png onclick=changeReview(" + j +"," + numberPin + ") />"
    }
    document.getElementById('imgs-ratings').innerHTML += "<button class='unselectable' onclick='goToTarget()' id='goToInformation'><b>GO TO</b></button>";
    document.getElementById('avg-rating').innerHTML = ((popsGPS[numberPin].sum + popsGPS[numberPin].rating) / (popsGPS[numberPin].quantity + (popsGPS[numberPin].rating ? 1 : 0))).toFixed(2);
    pushScreen('Information');
}

function goToTarget(){
    let destiny = document.getElementById('titleInformation').innerHTML;
    endNavigation();
    searchPlace(destiny);
    if(screenStack[screenStack.length - 1] == 'pointsInterest'){
        backButton();
    }
}

function dragMapStart(event) {
    mapDrag = event
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
}

function dragMapEnd(event) {
    mapDrag = undefined
}

const dragspeed = 7


function getCurrentMap() {
    return upgrademap ? document.getElementById('bettermap-img') : document.getElementById('mapLayer')
}

function dragMap(event) {
    if (event.screenX === 0 && event.screenY === 0)
        return
    let hi = 0, vi = 0

    hi = mapDrag.clientX - event.clientX
    vi = mapDrag.clientY - event.clientY
    mapDrag = event
    $(getCurrentMap()).offset({left: $(getCurrentMap()).offset().left - hi, top: $(getCurrentMap()).offset().top - vi})
    mapBoundariesPositioning()
    reloadPins()
    repositionCanvas()

}

function repositionCanvas() {
    const maps = [['map-canvas', 'mapLayer'], ['bettermap-canvas','bettermap-img']]
    map = upgrademap ? maps[1] : maps[0] //decide between 3d or not
    $('#' + map[0]).width($('#' + map[1]).width())
    $('#' + map[0]).height($('#' + map[1]).height())
    $('#' + map[0]).offset($('#' + map[1]).offset())
    drawPath()
}

function clearPath() {
    let canvas = document.getElementById((upgrademap ? 'better' : '') + 'map-canvas').getContext('2d');
    canvas.clearRect(0,0,$('#' + (upgrademap ? 'better' : '') + 'map-canvas').height(), $('#' + (upgrademap ? 'better' : '') + 'map-canvas').width());
    
}

function verifyFriend(friend){
    let flag = 0
    for(i = 0; i < map_pins.length; i++){
        if(map_pins[i].n == friend.toLowerCase() && map_pins[i].t == 'friend'){
                clearInterval(shrekMov);
                searchPlace(friend);
                return
        }
    }
    for (let profile of profiles)
        if(profile.name.toLowerCase() === friend.toLowerCase()) {
            flag++;
            openInvalidFriendPop()
            break
        }
    if(flag == 0){
        openNoFriendFoundPop();   
    }
}

function verifyPlace(place){
    let flag = 0;
    for(i = 0; i < map_pins.length; i++){
        if(map_pins[i].n == place.toLowerCase() && map_pins[i].t != 'friend'){
               flag++;
               searchPlace(place);
               break;
        }
    }
    if(flag == 0){
        openNoPlaceFoundPop();   
    }
}

function searchPlace(place){
    let flag = 0;
    let direct;
    for(i = 0; i < map_pins.length; i++){
        if(map_pins[i].n == place.toLowerCase()){
            nav = 1;
            let pino = searchPinCoordinates(map_pins[i].y,map_pins[i].x);
            target = pino[0]
            doPath(target);
            flag = 1;
            direct = findCurrentDirection();
            document.getElementById('direct').src = directionsIMG[direct];
            backButton();
            barsNavigation();
            break
        }
    }
    if (path.length == 1) {
        endOn3Dmap();
        endNavigation()
        openPopArriveTarget();
    }
    if(flag == 0){
        openNoPlaceFoundPop();   
    }

    resetInputPlace();
    
}

function endOn3Dmap() {
    if(screenStack[screenStack.length - 1] == 'augmentedHelp'){
        toggle3D();
        reloadPins()
        drawPath()
        backButton()
        centerPosition('atualPosition')
    }
}

function barsNavigation() {
    document.getElementById('navbarcenter').style.visibility = 'hidden';
    document.getElementById('navbarMap').style.visibility = 'hidden';
    document.getElementById('navbar2Map').style.visibility = 'hidden';
    document.getElementById('navbar3Map').style.visibility = 'hidden';
    document.getElementById('navbarNavigation').style.display = 'unset';
    document.getElementById('topbarNavigation').style.display = 'flex';
    document.getElementById('topbarNavigation').style.flexDirection = 'row';
    document.getElementById('endNavigation').style.display = 'unset';
    document.getElementById('navbarcenterNavigation').style.visibility = 'visible';
    if(modeWalk == 0){
        document.getElementById('car').style.backgroundColor = '#ccc';
    }
    else{
         document.getElementById('walk').style.backgroundColor = '#ccc';
    }
}

function topbarNavigation(mode) {
    if(mode === "car"){
        modeWalk = 0;
        document.getElementById('timeAndDistance').innerHTML = '<span id="timeGPS"></span> min (<span id="distance"></span>m)';
        calculateDistanceGPS();
        document.getElementById('car').style.backgroundColor = '#ccc';
        document.getElementById('walk').style.backgroundColor = 'white';
    }
    else{
        modeWalk = 1;
        document.getElementById('timeAndDistance').innerHTML = '<span id="timeGPS"></span> min (<span id="distance"></span>m)';
        calculateDistanceGPS();
        document.getElementById('walk').style.backgroundColor = '#ccc';
        document.getElementById('car').style.backgroundColor = "white"
    }
}

function startNavigation() {
    document.getElementById('top-bar').style.backgroundColor = "#ccc";
    document.getElementById('topbarNavigation').style.backgroundColor = "#ccc";
    document.getElementById('startNavigation').style.display = 'none';
}

function endNavigation() {
    document.getElementById('navbarcenter').style.visibility = 'visible';
    document.getElementById('top-bar').style.backgroundColor = "white";
    document.getElementById('topbarNavigation').style.backgroundColor = "white";
    document.getElementById('endNavigation').style.display = 'none';
    document.getElementById('topbarNavigation').style.display = 'none';
    document.getElementById('navbarNavigation').style.display = 'none';
    document.getElementById('navbarMap').style.visibility = 'visible';
    document.getElementById('navbar2Map').style.visibility = 'visible';
    document.getElementById('navbar3Map').style.visibility = 'visible';
    document.getElementById('car').style.backgroundColor = "white";
    document.getElementById('walk').style.backgroundColor = 'white';
    document.getElementById('navbarcenterNavigation').style.visibility = 'hidden';
    path = []
    nav = 0;
    let canvas = document.getElementById((upgrademap ? 'better' : '') + 'map-canvas').getContext('2d');
    canvas.clearRect(0,0,$('#' + (upgrademap ? 'better' : '') + 'map-canvas').height(), $('#' + (upgrademap ? 'better' : '') + 'map-canvas').width());

}

function goto2dmap() {
    toggle3D();
    backButton();
    centerPosition('atualPosition')
    reloadPins()
    drawPath()
}


function finish3dmap() {
    endNavigation();
    goto2dmap();
}


var path = [];

function recalibratePath(){
    doPath(target);
}

function doPath(target){
    clearArray(path);
    let current = searchPin('atualPosition');
    let closerPin = searchClosestPin();
    clearArray(vals);
    vals = Dijkstra(g, closerPin, target)
    path = doTraceback(vals[0],closerPin,target)
    drawPath();
    calculateDistanceGPS();
}

function calculateDistanceGPS(){
    let d = 0;
    for(let i=0; i < path.length;i++){
        d += vals[1][path[i]];
    }
    if(modeWalk == 1){
        document.getElementById('timeGPS').innerHTML = 2 * path.length - 2;
    }
    else{
        document.getElementById('timeGPS').innerHTML = path.length - 1;
    }
    document.getElementById('distance').innerHTML = Math.floor(d * 2.54);
}

function searchClosestPin(){
    let pin = pins[0][0];
    distance = calculateDistancePin(pins[0]);
    for(let i = 1; i < pins.length; i++){
        d = calculateDistancePin(pins[i]);
        if(d < distance){
            distance = d;
            pin = pins[i][0];
        }
    }
    return pin;
}

function drawPathToPin(current, closerPin){
    let canvas = document.getElementById((upgrademap ? "better" : "") + 'map-canvas').getContext('2d');
    values = calculateValues(current, pins[closerPin]);
    canvas.clearRect(0,0,$('#' + (upgrademap ? "better" : "") + 'map-canvas').height(), $('#' + (upgrademap ? "better" : "") + 'map-canvas').width());
    canvas.beginPath()
    canvas.moveTo(values[1], values[0]);
    canvas.lineTo(values[2], values[3]);
    canvas.stroke();
    canvas.closePath()
}
function calculateValues(current, closerPin) {
    let values = []
    values.push(current.x * (1-zoom));
    values.push(current.y * (1-zoom));
    values.push(closerPin[1] * (1-zoom));
    values.push(closerPin[2] * (1-zoom));
    return values; 
}
function drawPath(){
    let list = path;
    let canvas = document.getElementById((upgrademap ? "better" : "") + 'map-canvas').getContext('2d');
    for(i = 0; i < list.length - 1; i++){
        //values has the scaled coordinates
        canvas.lineWidth = 5;
        const values = [pins[list[i]][1],pins[list[i]][2], pins[list[i+1]][1],pins[list[i+1]][2]].map(el => el * (1-zoom))
        canvas.beginPath()
        canvas.moveTo(values[0], values[1]);
        canvas.lineTo(values[2], values[3]);
        canvas.stroke();
        canvas.closePath()
    }
}

function openNoPlaceFoundPop(){
    popupon = 1;
    location.href = "#popup7";
}

function openNoFriendFoundPop(){
    popupon = 1;
    location.href = "#popup6";
}

function openInvalidFriendPop() {
    popupon = 1;
    location.href = "#popup11";
}

function resetInputPlace(){
    document.getElementById('searchInput').value = '';
}

function searchPlacesNearBy(distance){
    let places = [];
    resetPlaces();
    for(i = 0; i < map_pins.length; i++){
        if(calculateDistance(map_pins[i]) <= distance && map_pins[i].n != 'atualPosition' && map_pins[i].t != 'friend'){
            places.push(map_pins[i]);
        }
    }
    console.log(places);
    if(places.length == 0){
        openNoPlaceFoundPop();
    } 
    else{
        doneRadius();
        printPlaces(places);
        backButton();
    }
    
}

function resetPlaces(){
    document.getElementById('ListOfInterest').innerHTML = '';
}

function printPlaces(places){
    let something = '<table id="tableInterest">';
    for(let pin of places){
        something += "<tr onclick='screenInfo("+pin.i+")'>"
        if(pin.t=="park" || pin.t == "atualPosition"){
            something += "<td><img class='iconInterest' src='icons/" + pin.t + ".svg'></td>";
        }
        else if(pin.t == 'friend'){
            continue;
        }
        else{
            something += "<td><img class='iconInterest' src='icons/" + pin.t + ".png'></td>";
        }
        something += "<td><p class='nameInterest'>" +pin.n+"</p></td></tr>";
    }
    something += '</table>';
    document.getElementById('ListOfInterest').innerHTML = something;
    pushScreen('pointsInterest');
}

function calculateDistance(ponto){
    let pin = searchPin("atualPosition");
    let distance = Math.sqrt(Math.pow(ponto.x - pin.x,2) + Math.pow(ponto.y - pin.y,2));
    //map scale 1px = 2.54m
    return distance * 2.54;
}

function calculateDistancePin(ponto){
    let pin = searchPin("atualPosition");
    let distance = Math.sqrt(Math.pow(ponto[2] - pin.x,2) + Math.pow(ponto[1] - pin.y,2));
    return distance;
}


function clearArray(array){
    while(array.length){
        array.pop();
    }
    if(array == notifications)
        desativeNotification();
}
function searchPin(name){
    for(let pin of map_pins){
        if(pin.n == name){
            return pin;
        }
    }
}
function addNotification(){
    numberNoti++;
    notifications.push(pictureProfileArray[numberPostFtg - numberNoti].divName);
    ativeNotification();
}

function ativeNotification(){
    addNotificationInArray();
    createNotifications();
    if(screenStack[screenStack.length - 1] != 'notificationScreen'){
        document.getElementById('bellIcon').src = 'icons/bell1.png';
        document.getElementById('bellButton').src = 'icons/bell1.png';
    }
}

function desativeNotification(){
    document.getElementById('bellIcon').src = 'icons/bell3.png';
    document.getElementById('bellButton').src = 'icons/bell3.png';
}
function setupInitialPosition(){
    let pin = searchPin("atualPosition");
    let pin2 = searchPinCoordinates(pin.y, pin.x)
    directions = graphMovement(pin2);
    updateDisplayController();
}
function findCurrentDirection(){
    let direct
    console.log(path);
    console.log(directions)
    for(let i = 0;i < directions.length; i++){
        if(directions[i][1] == path[1]){
            direct = directions[i][0]
            break;
        }
    }
    return direct
}
function upPosition(){
    let pino
    let direct
    let pin2 = searchPin('shrek');
    let pin = searchPin("atualPosition");
    for(i = 0; i < directions.length; i++){
        if(directions[i][0] == 0){
            pino = pins[directions[i][1]];   
            pin.x = pino[2];
            pin.y = pino[1];
        }
    }
    directions = graphMovement(pino);
    reloadPins();
    updateDisplayController();
    if(nav == 1){
        recalibratePath();
        direct = findCurrentDirection();
        console.log(direct)
        document.getElementById('direct').src = directionsIMG[direct];
        centerPosition('atualPosition');
        if(path.length == 1){
            endOn3Dmap();
            endNavigation();
            openPopArriveTarget()
        }
    }
}

function leftPosition(){
    let pino;
    let pin2 = searchPin('shrek');
    let pin = searchPin("atualPosition");
    for(i = 0; i < directions.length; i++){
        if(directions[i][0] == 3){
            pino = pins[directions[i][1]]; 
            pin.x = pino[2];
            pin.y = pino[1];
        }
    }
    reloadPins();
    directions = graphMovement(pino);
    updateDisplayController();
    if(nav == 1){
        recalibratePath();
        direct = findCurrentDirection();
        console.log(direct)
        document.getElementById('direct').src = directionsIMG[direct];
        centerPosition('atualPosition');        if(path.length == 1){
            endOn3Dmap()
            endNavigation();
            openPopArriveTarget()
        }
    }   
}

function rightPosition(){
    let pino
    let pin2 = searchPin('shrek');
    let pin = searchPin("atualPosition");
    for(i = 0; i < directions.length; i++){
        if(directions[i][0] == 1){
            pino = pins[directions[i][1]];    
            pin.x = pino[2];
            pin.y = pino[1];
        }
    }
    reloadPins();
    directions = graphMovement(pino);
    updateDisplayController();
    if(nav == 1){
        recalibratePath();
        direct = findCurrentDirection();
        console.log(direct)
        document.getElementById('direct').src = directionsIMG[direct];
        centerPosition('atualPosition');
        if(path.length == 1){
            endOn3Dmap()
            endNavigation();
            openPopArriveTarget()
        }
    }
}

function downPosition(){
    let pino
    let pin2 = searchPin('shrek');
    let pin = searchPin("atualPosition");
    for(i = 0; i < directions.length; i++){
        if(directions[i][0] == 2){
            pino = pins[directions[i][1]];   
            pin.x = pino[2];
            pin.y = pino[1];
        }
    }
    reloadPins();
    directions = graphMovement(pino);
    updateDisplayController();
    if(nav == 1){
        recalibratePath();
        direct = findCurrentDirection();
        console.log(direct)
        document.getElementById('direct').src = directionsIMG[direct];
        centerPosition('atualPosition');
        if(path.length == 1){
            endOn3Dmap()
            endNavigation();
            openPopArriveTarget()
        }
    }
}

function graphMovement(pin){
    clearArray(directions)
    return getDirections(pin);
}

function updateDisplayController(){
    let flag= [0,0,0,0];
    for(i = 0; i < directions.length; i++){
        if(directions[i][0] == 0){
            displayButton('upArrow');
            flag[0] = 1
        }
        else if(directions[i][0] == 1){
            displayButton('rightArrow');
            flag[1] = 1
        }
        else if(directions[i][0] == 2){
            displayButton('downArrow');
            flag[2] = 1
        }
        else{
            displayButton('leftArrow');
            flag[3] = 1
        }
    }
    if(flag[0]==0){
        displayNoneButton('upArrow');
    }
    if(flag[1]==0){
        displayNoneButton('rightArrow');
    }
    if(flag[2]==0){
        displayNoneButton('downArrow');
    }
    if(flag[3]==0){
        displayNoneButton('leftArrow');
    }
}
function displayButton(id){
    document.getElementById(id).style.visibility='';
}

function displayNoneButton(id){
    document.getElementById(id).style.visibility='hidden';
}

function ativeJoystick(){
    document.getElementById('joystick').style.display = '';
}


function desativeJoystick(){
    document.getElementById('joystick').style.display = 'none';
}

function hideNavbars(){
    document.getElementById('navbarMap').style.visibility = 'visible';
    document.getElementById('navbar2Map').style.visibility = 'visible';
    document.getElementById('navbarNavigation').style.display = 'none';
    document.getElementById('topbarNavigation').style.display = 'none';
    document.getElementById('navbarcenter').style.visibility = 'visible';
    document.getElementById('navbarcenterNavigation').style.visibility = 'hidden';
    document.getElementById('walk').style.backgroundColor = 'white';
    document.getElementById('car').style.backgroundColor = 'white';
    document.getElementById('top-bar').style.backgroundColor = "white";
    document.getElementById('endNavigation').style.display = 'none';
    document.getElementById('topbarNavigation').style.backgroundColor = "white";
}

var g;
var pins = [];

function setupGraph() {
    
    pins.push([0, 13, 548])
    pins.push([1, 75, 548])
    pins.push([2, 139, 548])
    pins.push([3, 202, 548])
    pins.push([4, 265, 548])
    pins.push([5, 328, 548])
    pins.push([6, 391, 548])

    pins.push([7, 13, 593])
    pins.push([8, 75, 593])
    pins.push([9, 139, 593])
    pins.push([10, 202, 593])
    pins.push([11, 265, 593])
    pins.push([12, 328, 593])
    pins.push([13, 391, 593])

    pins.push([14, 13, 639])
    pins.push([15, 75, 639])
    pins.push([16, 139, 639])
    pins.push([17, 202, 639])
    pins.push([18, 265, 639])
    pins.push([19, 328, 639])
    pins.push([20, 391, 639])
    

    pins.push([21, 13, 685])
    pins.push([22, 75, 685])
    pins.push([23, 139, 685])
    pins.push([24, 202, 685])
    pins.push([25, 265, 685])
    pins.push([26, 328, 685])
    pins.push([27, 391, 685])

    pins.push([28, 13, 730])
    pins.push([29, 75, 730])
    pins.push([30, 139, 730])
    pins.push([31, 202, 730])
    pins.push([32, 265, 730])
    pins.push([33, 328, 730])
    pins.push([34, 391, 730])

    pins.push([35, 13, 771])
    pins.push([36, 75, 771])
    pins.push([37, 139, 771])
    pins.push([38, 202, 771])
    pins.push([39, 265, 771])
    pins.push([40, 328, 771])
    pins.push([41, 391, 771])

    pins.push([42, 13, 816])
    pins.push([43, 75, 816])
    pins.push([44, 139, 816])
    pins.push([45, 202, 816])
    pins.push([46, 265, 816])
    pins.push([47, 328, 816])
    pins.push([48, 391, 816])


    pins.push([49,233,771])
    pins.push([50,107,816])
    pins.push([51,233,685])
    pins.push([52,44,548])
    pins.push([53,360,639])

    pins.push([54,13,861])
    pins.push([55,75,861])
    pins.push([56,139,861])
    pins.push([57,265,861])
    pins.push([58,328,861])
    pins.push([59,391,861])     

    pins.push([60,454,548])
    pins.push([61,454,593])
    pins.push([62,454,639])
    pins.push([63,454,685])
    pins.push([64,454,730])
    pins.push([65,454,771])
    pins.push([66,454,816])
    pins.push([67,454,861])
    pins.push([68,454,616])
    pins.push([69,412,616])    

    pins.push([70,517,548])
    pins.push([71,517,593])
    pins.push([72,517,639])
    pins.push([73,517,685])
    pins.push([74,517,730])
    pins.push([75,517,771])
    pins.push([76,517,816])
    pins.push([77,517,861])


    g = new Graph(pins.length)
    
    g.insert(pins[0], pins[52])
    g.insert(pins[52],pins[1])
    g.insert(pins[0], pins[7])
    g.insert(pins[1], pins[2])
    g.insert(pins[1], pins[8])
    g.insert(pins[2], pins[3])
    g.insert(pins[2], pins[9])
    g.insert(pins[3], pins[4])
    g.insert(pins[3], pins[10])
    g.insert(pins[4], pins[5])
    g.insert(pins[4], pins[11])
    g.insert(pins[5], pins[6])
    g.insert(pins[5], pins[12])
    g.insert(pins[6], pins[13])

    g.insert(pins[7], pins[8])
    g.insert(pins[7], pins[14])
    g.insert(pins[8], pins[9])
    g.insert(pins[8], pins[15])
    g.insert(pins[9], pins[10])
    g.insert(pins[9], pins[16])
    g.insert(pins[10], pins[11])
    g.insert(pins[10], pins[17])
    g.insert(pins[11], pins[12])
    g.insert(pins[11], pins[18])
    g.insert(pins[12], pins[13])
    g.insert(pins[12], pins[19])
    g.insert(pins[13], pins[20])
    
    g.insert(pins[14], pins[15])
    g.insert(pins[14], pins[21])
    g.insert(pins[15], pins[16])
    g.insert(pins[15], pins[22])
    g.insert(pins[16], pins[17])
    g.insert(pins[16], pins[23])
    g.insert(pins[17], pins[18])
    g.insert(pins[17], pins[24])
    g.insert(pins[18], pins[19])
    g.insert(pins[18], pins[25])
    g.insert(pins[19], pins[53])
    g.insert(pins[53], pins[20])
    g.insert(pins[19], pins[26])
    g.insert(pins[20], pins[27])

    g.insert(pins[21], pins[22])
    g.insert(pins[21], pins[28])
    g.insert(pins[22], pins[23])
    g.insert(pins[22], pins[29])
    g.insert(pins[23], pins[24])
    g.insert(pins[23], pins[30])
    g.insert(pins[24], pins[51])
    g.insert(pins[51], pins[25])
    g.insert(pins[24], pins[31])
    g.insert(pins[25], pins[26])
    g.insert(pins[25], pins[32])
    g.insert(pins[26], pins[27])
    g.insert(pins[26], pins[33])
    g.insert(pins[27], pins[34])

    g.insert(pins[28], pins[29])
    g.insert(pins[28], pins[35])
    g.insert(pins[29], pins[30])
    g.insert(pins[29], pins[36])
    g.insert(pins[30], pins[31])
    g.insert(pins[30], pins[37])
    g.insert(pins[31], pins[32])
    g.insert(pins[31], pins[38])
    g.insert(pins[32], pins[33])
    g.insert(pins[32], pins[39])
    g.insert(pins[33], pins[34])
    g.insert(pins[33], pins[40])
    g.insert(pins[34], pins[41])


    g.insert(pins[35], pins[36])
    g.insert(pins[35], pins[42])
    g.insert(pins[36], pins[37])
    g.insert(pins[36], pins[43])
    g.insert(pins[37], pins[38])
    g.insert(pins[37], pins[44])
    g.insert(pins[38], pins[49])
    g.insert(pins[49], pins[39])
    g.insert(pins[38], pins[45])
    g.insert(pins[39], pins[40])
    g.insert(pins[39], pins[46])
    g.insert(pins[40], pins[41])
    g.insert(pins[40], pins[47])
    g.insert(pins[41], pins[48])

    g.insert(pins[42], pins[43])
    g.insert(pins[43], pins[50])
    g.insert(pins[50], pins[44])
    g.insert(pins[44], pins[45])
    g.insert(pins[45], pins[46])
    g.insert(pins[46], pins[47])
    g.insert(pins[47], pins[48])
    
    g.insert(pins[42], pins[54])
    g.insert(pins[43], pins[55])
    g.insert(pins[55], pins[56])
    g.insert(pins[44], pins[56])
    g.insert(pins[57], pins[46])
    g.insert(pins[57], pins[58])
    g.insert(pins[58], pins[59])
    g.insert(pins[58], pins[47])
    g.insert(pins[59], pins[48])

    g.insert(pins[6], pins[60])
    g.insert(pins[13], pins[61])
    g.insert(pins[20], pins[62])
    g.insert(pins[27], pins[63])
    g.insert(pins[34], pins[64])
    g.insert(pins[41], pins[65])
    g.insert(pins[48], pins[66])
    g.insert(pins[59], pins[67])
    g.insert(pins[60], pins[61])
    g.insert(pins[61], pins[68])
    g.insert(pins[68], pins[62])
    g.insert(pins[68], pins[69])
    g.insert(pins[62], pins[63])
    g.insert(pins[63], pins[64])
    g.insert(pins[64], pins[65])
    g.insert(pins[65], pins[66])
    g.insert(pins[66], pins[67])

    g.insert(pins[60], pins[70])
    g.insert(pins[61], pins[71])
    g.insert(pins[62], pins[72])
    g.insert(pins[63], pins[73])
    g.insert(pins[64], pins[74])
    g.insert(pins[65], pins[75])
    g.insert(pins[66], pins[76])
    g.insert(pins[67], pins[77])
    g.insert(pins[70], pins[71])
    g.insert(pins[71], pins[72])
    g.insert(pins[72], pins[73])
    g.insert(pins[73], pins[74])
    g.insert(pins[74], pins[75])
    g.insert(pins[75], pins[76])
    g.insert(pins[76], pins[77])

}
var upgrademap = false;

function toggle3D() {
    let item = document.getElementById('bettermap')
    $(item).css('display',$(item).css('display') === 'none' ? "initial" : "none")
    $('#watchBorder').css('top', $(item).css('display') === 'none' ? '50%' : '80%');
    $('#helpButton').css('top', offsets['help'] + ($(item).css('display') === 'none' ? 0 : 30) + '%');
    $('#backButton').css('top', offsets['back'] + ($(item).css('display') === 'none' ? 0 : 30) + '%');
    $('#scrollWheel').css('top', offsets['scroll'] + ($(item).css('display') === 'none' ? 0 : 30) + '%');
    upgrademap = !upgrademap
    if(screenStack[screenStack.length - 1] === 'mapaScreen'){
        pushScreen('augmentedHelp');
        centerPosition('atualPosition')    
        drawPath()
    }
}

function centerPosition(pinName) {
    let pin = searchPin(pinName)
    zoom = 0;
    let current = $(getCurrentMap())
    let border = upgrademap ? $(document.getElementById('bettermap')) : $(document.getElementById('mapaScreen'))
    current.height(mapsize[0] * (1 - zoom))
    current.width(mapsize[1] * (1 - zoom))
    let hor_pos = (border.width() / 2 - current.position().left) / (1-zoom)
    let ver_pos = (border.height() / 2 - current.position().top) / (1-zoom)
    let offset_x = (pin.y - hor_pos) * (1-zoom) 
    let offset_y = (pin.x - ver_pos) * (1-zoom)
    const baseOffset = current.offset()
    current.offset({top: baseOffset.top - offset_y, left: baseOffset.left - offset_x})
    mapBoundariesPositioning();
    reloadPins();
    if(nav == 1)
        recalibratePath();

}

function searchPinCoordinates(x,y){
    for(let i = 0; i < pins.length; i++){
        if(pins[i][1] == x && pins[i][2] == y){
            return pins[i];
        }
    }
}

function getDirections(pin){
    let adj2 = g.getEdges(pin[0]);
    for(let i = 0; i < adj2.length; i++){
        if((pin[1] - adj2[i].getXf() == 0 ) && (pin[2] - adj2[i].getYf() > 0)){
            directions.push([0,adj2[i].getId()]);
        }
        else if((pin[1] - adj2[i].getXf() == 0) && (pin[2] - adj2[i].getYf() < 0)){
            directions.push([2,adj2[i].getId()]);  
        }
        else if((pin[1] - adj2[i].getXf() < 0) && (pin[2] - adj2[i].getYf() == 0)){
            directions.push([1,adj2[i].getId()]);
        }
        else if((pin[1] - adj2[i].getXf() > 0) && (pin[2] - adj2[i].getYf() == 0)){
            directions.push([3,adj2[i].getId()]);
        }
    }
    return directions;
}

function plusOne(){
    let d = document.getElementById('radius').value;
    if(d < 9900){
        d = eval(d) + 100;
        document.getElementById('radius').value = d;
    }
}

function lessOne(){
    let d = document.getElementById('radius').value;
    if(d > 100){
        d= d - 100;
        document.getElementById('radius').value = d;
    }
}

function doneRadius(){
    document.getElementById('counterDistance').style.display = 'none';
    document.getElementById('ListOfInterest').style.display = '';
}

function doneSearching(){
     document.getElementById('counterDistance').style.display = '';
    document.getElementById('ListOfInterest').style.display = 'none';
}

function popUpCancelTrip(){
    popupon = 1;
    location.href = "#popup8";
}

function popUpCancelTrip3D(){
    popupon = 1;
    location.href = "#popup9";
}

function openPopArriveTarget(){
    popupon = 1;
    location.href = "#popup10";
}

var radius = 0;

function displayRadius() {
    radius = parseInt(document.getElementById('radius').value) / 2.54
    let border = upgrademap ? $(document.getElementById('bettermap')) : $(document.getElementById('mapaScreen'))
    if (border.height() < (2 * radius) * (1-zoom) * 1.5) {
        zoom = 2 * radius*1.5 / mapsize[0]
    } 
    if (border.width() < (2* radius) * (1-zoom) * 1.5){
        zoom = 2*radius*1.5/ mapsize[1]
    }
    backButton()
    let current = $(getCurrentMap())
    let hor_pos = (border.width() / 2 - current.position().left) / (1-zoom)
    let ver_pos = (border.height() / 2 - current.position().top) / (1-zoom)
    current.height(mapsize[0] * (1 - zoom))
    current.width(mapsize[1] * (1 - zoom))
    const baseOffset = border.offset()
    current.offset({top: baseOffset.top - ver_pos * (1-zoom) + border.height() / 2, left: baseOffset.left - hor_pos * (1-zoom) + border.width() / 2})
    let pin = searchPin('atualPosition')
    let offset_x = (pin.y - hor_pos) * (1-zoom) 
    let offset_y = (pin.x - ver_pos) * (1-zoom)
    const new_baseOffset = current.offset()
    current.offset({top: new_baseOffset.top - offset_y, left: new_baseOffset.left - offset_x})
    mapBoundariesPositioning();
    reloadPins();
    if(nav == 1)
        recalibratePath();
}

function pushMapMessage(index, positionname) {
    profiles[index].messages.push({content:"Gostei desta posição e decidi partilhar contigo " + positionname, self: true})
}

function shareLocationMessage() {
    popupon = 1
    location.href = "#popup12"
}

function shareLocationWithFriend() {
    let name = messaperson.innerText
    for (let i = 0; i <  profiles.length; i++) 
        if (profiles[i].name === name) {
            profiles[i].messages.push({content: 'Vem ter comigo! Estou aqui', self:true, isMap: true, pinName: 'atualPosition'})
            createMenuMessage(i)
            break
        }
}

function shareInterest() {
    let profiletable = '';
    let positionName = titleInformation.innerText
    profiletable += "<tr onclick=" + '"' + "pushScreen('messageBox');" + 'pushMapMessage(0,\'' + positionName + '\');' +'createMenuMessage(' + 0 +  ')"' + "><td id='rowone' class='row'><img class='messagepic' src=" + profiles[0].photo + "><h3 id='messagename'>" + profiles[0].name + "</h3></td></tr>";
    for (i = 1; i < profiles.length; i++) {
        profiletable += "<tr onclick=" + '"' + "pushScreen('messageBox');" + 'pushMapMessage(' + i + ',\'' + positionName +'\');createMenuMessage(' + i +  ')"' + "><td class='row'><img class='messagepic' src=" + profiles[i].photo + "><h3 id='messagename'>" + profiles[i].name + "</h3></td></tr>";
    }
    document.getElementById("messages").innerHTML = profiletable;
    pushScreen('messageScreen')
}

function cancelSearchFriend() {
    document.getElementById("searchFormFriend").reset();
    backButton();
}

function waitDiv(nameDiv){
    setTimeout(function(){
        pushScreen(nameDiv);
        console.log(screenStack[screenStack.length -2 ]);
        screenStack.splice(screenStack.length-2,1);
        console.log(screenStack[screenStack.length -1 ]);
        imconfused();
    }, 920);
}

function screenProfile() {
    pushScreen('ShrekScreen')
}

function sendMessageShrek() {
    pushScreen('messageBox')
    createMenuMessage(0)
}

var share_shrek = false

function ShrekToggle() {
    share_shrek = !share_shrek
    $(document.getElementsByClassName('shrek-btn')).prop('checked', share_shrek);
}

function turnonActivity() {
    document.getElementById('profileScreen').style.display = "none";
    document.getElementById('activityScreen').style.display = "inline";
    document.getElementById('navtitleHealthActivity').style.borderBottom = "4px solid steelblue";
    document.getElementById('navtitleHealthProfile').style.borderBottom = "0px";
}

function turnonProfile() {
    document.getElementById('profileScreen').style.display = "inline";
    document.getElementById('activityScreen').style.display = "none";
    document.getElementById('navtitleHealthProfile').style.borderBottom = "4px solid steelblue";
    document.getElementById('navtitleHealthActivity').style.borderBottom = "0px";
}

var emergency_timeout;

function waitEmergency() {
    clearInterval(emergency_timeout)
    calling.innerHTML = "CALLING"
    setTimeout(function(){
        document.getElementById('calling').innerHTML = "00:00";
        emergency_timeout = setInterval(function() {
            let time = calling.innerText.split(':')
            let seconds = (parseInt(time[1]) + 1) % 60
            let minutes = Math.floor((parseInt(time[1]) + 1) / 60 + parseInt(time[0]))
            calling.innerText =  minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
        }, 1000)
    }, 500);
}

function imconfused(){
    var line = new window.ProgressBar.Circle('#container', {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#FFEA82', width: 6 },
        to: { color: '#ED6A5A', width: 6 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + "%");
          }
      
        }
      })
    
    line.animate(0.5);
}

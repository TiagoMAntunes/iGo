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
    "responses": ["Olá Gato das botas!", "Tudo bem?", "Também", "Bem e o teu?"],
    "messages": ["Olá Sherk", "Sim e contigo?", "Como vai o projeto de IPM?", "Também!"]
}, {
    "photo": "icons/simb1.jpg",
    "name": "Bart",
    "divName": "bartscreenmessage",
    "responses": ["Ola Gato", "Tiraste apontamentos das aulas de IPM?", "Obrigado"],
    "messages": ["Oi Bart", "Sim, amanha empresto-te"]
}, {
    "photo": "icons/simb2.jpeg",
    "name": "Homer",
    "divName": "homerscreenmessage",
    "responses": ["Ola", "Queres ir beber uma jola?", "Vem ter ao MOE's amanha as 15"],
    "messages": ["Ola Homer", "Sim!!!", "Ate amanha"]
}, {
    "photo": "icons/toy1.jpg",
    "name": "Woody",
    "divName": "woodyscreenmessage",
    "responses": ["Ola Gato das botas", "Preciso da tua ajuda tenho uma cobra nas botas"],
    "messages": ["Oi Woody", "A caminho!!!"]
}, {
    "photo": "icons/toy2.png",
    "name": "Buzz",
    "divName": "buzzscreenmessage",
    "description": "Para o infinito e mais alem",
    "responses": ["Ola camarada", "Vamos conquistar a galaxia?", "PARA O INFINTIO E MAIS ALEM!!!"],
    "messages": ["Oi Buzz", "Dobriga."]
}, {
    "photo": "icons/prof5.png",
    "name": "Dragon",
    "divName": "dragonscreenmessage",
    "responses": ["Ola Gato das botas", "Queres vir ver os teus sobrinhos?", "Combinado!!"],
    "messages": ["Oi Dragon", "Sim, posso amanha as 18!"]
}]

var mainprofile = [{
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
var screenStack = [];
var picture_index = 0;
var count = 0;
var mic1 = 0, mic2 = 2, mic3 = 0, mic4 = 0;
var mics = [mic1, mic2, mic3, mic4];
var micsid = ['mic1', 'mic2', 'mic3', 'micmessage'];
var numberPostFtg = 0;
var block = 0;
var popupon = 0;
var gpson = 0;
var zoom = 0;
var mapsize = [0,0] //height, width
var map_pins = []

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
    createNotifications();
    createMessages();
    createMenuPerfil();
    createNotificationsPops();
    setupMultimediaScreen();
    picturesSetup();
    blockWatch(); blockWatch();
}

let recognizing = false

recognition.onstart = function () {
    //cenas que acontecem qd a pessoa carrega no botão vermelho
    console.log('Recording started')
    recognizing = true
}

recognition.onend = function (event) {
    //acabou
    console.log(event);
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
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        content += event.results[i][0].transcript
        if (event.results[i].isFinal) { //Final results
            console.log("final results: " + event.results[i][0].transcript);   //Of course – here is the place to do useful things with the results.
        } else {   //i.e. interim...
            console.log("interim results: " + event.results[i][0].transcript);  //You can use these results to give the user near real time experience.
        }
    } //end for loop
    console.log(selectedTextBox)
    if (selectedTextBox !== undefined)
        selectedTextBox.value = content;
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
    console.log(typeof (localStorage.getItem('locked')))
    console.log(localStorage.getItem('locked') === 'true' && (screenStack[screenStack.length - 1] === 'lockScreen'))
    if (localStorage.getItem('locked') === 'true' && screenStack[screenStack.length - 1] === 'lockScreen') {
        console.log('stopeed!')
        return
    }
    if (block % 2 == 1 && screenStack[screenStack.length - 1] === 'blackScreen') {
        console.log('stopeed!')
        return
    }
    console.log('hi')
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
    console.log(val)
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
    console.log(val)
    console.log(aux)
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

function scrollWheelMap(event) {
    const maxZoom = 0.99;
    let i = 0;
    let direction = (event.clientY - dragInfo.clientY)

    if (direction > 0) {
        i = 0.01;
    } else if (direction < 0) {
        i = -0.01;
    }

    let val = zoom + i;
    if (val > maxZoom) val = maxZoom
    if (val < 0) val = 0
    if (mapsize[0] * (1 - val) < $(document.getElementById('mapaScreen')).height()) val = (1 - $(document.getElementById('mapaScreen')).height() / mapsize[0]) 
    if (mapsize[1] * (1 - val) < $(document.getElementById('mapaScreen')).width()) val = (1 - $(document.getElementById('mapaScreen')).width() / mapsize[1]) 
    zoom = val
    
    $(document.getElementById('mapLayer')).height(mapsize[0] * (1 - val))
    $(document.getElementById('mapLayer')).width(mapsize[1] * (1 -  val))
    
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
    console.log(val)
    if (val > 0) val = 0
    if (val < aux) val = aux
    document.getElementById('helpmapascreen').style.top = val;
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
    }
}

function scrollWheelStart(event) {
    dragInfo = event;
}

function scrollWheelFinish(event) {
    dragInfo = undefined;
    console.log('done')
}

function updatePicture() {
    document.getElementById("imageShown").src = multimedia_storage[picture_index]['photo'];
    document.getElementById("comment").innerHTML = multimedia_storage[picture_index]['description'];
    document.getElementById("likeButton").src = (multimedia_storage[picture_index]['liked'] == true ? 'icons/coracao.svg' : 'icons/meme.svg')
}


function createNotifications() {
    let profiletable = '';
    profiletable += "<tr><td onclick='goToPop(" + Math.floor(Math.random() * 4) + ");' id='rowone'><img class='notifpic' src=" + profiles[0].photo + "><h4 id='notificationmessage'>" + profiles[0].name + " gostou da sua foto</h4></td></tr>";
    for (i = 1; i < profiles.length; i++) {
        profiletable += "<tr><td onclick= 'goToPop(" + Math.floor(Math.random() * 4) + ");' class='row'><img class='notifpic' src=" + profiles[i].photo + "><h4 id='notificationmessage'>" + profiles[i].name + " gostou da sua foto</h4></td></tr>";
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
        console.log('doing');
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

/*Function that creates the messages*/
function createMenuMessage(index) {
    currentUser = index;
    let messages = '';
    messages += "<div id='zindex'><h1 id='messaperson'>" + profiles[index].name + "</h1></div><div id='messageContent'>";
    for (i = 0, k = 0; i < profiles[index].messages.length || k < profiles[index].responses.length; i++ , k++) {
        if (profiles[index].responses[k] != null) {
            messages += "<div class='containerM lighterM'><p class='messageP' id='message1'>" + profiles[index].responses[k] + "</p></div>";
        }
        if (profiles[index].messages[i] != null) {
            messages += "<div class='containerM darkerM'><p class='messageP' id='message2'>" + profiles[index].messages[i] + "</p></div>";
        }
    }
    let name = profiles[index].divName + 'Input';
    console.log(name);
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
    profiles[currentUser].messages.push(document.getElementById(divName + 'Input').value);
    if (mics[3] === 1)
        microphoneOn(profiles[currentUser].divName + 'Input', 'micmessage', 4);
    resetMenuMessage();
    createMenuMessage(currentUser);
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
    console.log(content)
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
    informations.innerHTML = "<h1 id='profileName'>" + mainprofile[0].name + "</h1><p id='profileDescr'>" + mainprofile[0].description + "</p><button class='btn-edit' onclick=\"pushScreen('profileEdit')\">Edit Profile</button>";
}

function saveProfile() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    if (input1 != '') {
        mainprofile[0].name = input1;
    }
    if (input2 != '') {
        mainprofile[0].description = input2;
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
    }
    else {
        document.getElementById('bluetoothImg').style.visibility = 'visible';
    }
    triggerBluetooths(count % 2 == 0 ? false : true)
}

function GPS(){
    gpson++;
    if(gpson % 2 == 0) {
        document.getElementById('gpsImg').style.visibility = "hidden";
    }
    else{
        document.getElementById('gpsImg').style.visibility = "visible";
    }
    triggerGps(gpson % 2 == 0 ? false : true);
}


function blockWatch() {
    console.log('blackScreen');
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
    console.log('unlock');
    document.getElementById('top-bar').style.display = '';
}

function helpButton() {
    if (block % 2 == 1) {
        return;
    }
    console.log(screenStack[screenStack.length - 1]);
    switch (screenStack[screenStack.length - 1]) {
        case 'multimedia':
            pushScreen('helpmultimediascreen');
            break;
        case 'lockScreen':
        case 'helpmultimediascreen':
        case 'helpphotosubmit':
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
        pushScreen('mapaScreen');
        getMapSize();
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
        getMapSize();
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
    console.log('Turning off...')
    for (let i = 0; i < mics.length; i++)
        if (mics[i] === 1) {
            //microphone is on. turn it off
            microphoneOn('',micsid[i], i+1 );
            console.log('Found it!')
            return
        }
}

function getMapSize() {
    mapsize[0] = $(document.getElementById('mapLayer')).height()
    mapsize[1] = $(document.getElementById('mapLayer')).width()
}

class Pin {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    getCoords(scale) {
        if (scale !== undefined)
            return [this.x,this.y].map(el => el * (1 - scale));
        else
            return [this.x,this.y]
    }
}

function addPin(x, y) {
    map_pins.push(new Pin(x,y))
}

function reloadPins() {
    let pins = ''
    for (let pin of map_pins) {
        //add pins
    }
    document.getElementById('map').innerHTML = pins
}
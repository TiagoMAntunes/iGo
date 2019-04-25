var canvas;
var ctx;

function load() {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
}

function loadData() {
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(200,400)
    ctx.stroke()
    ctx.closePath()
}

function clear() {
    canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height)
}
var bstart
var bpause
var breset
var dtempo
var tempo = 0
var tempoid

init()

function init(){
  bstart = document.getElementById("start")
  bstart.onclick = start
  bpause = document.getElementById("pause")
  bpause.onclick = pause
  bpause.disabled =true
  breset = document.getElementById("reset")
  breset.onclick = reset
  breset.disabled = true
  dtempo = document.getElementById("tempo")
}
function update(){
  tempo = tempo + 0.1
  dtempo.innerHTML = tempo.toFixed(1) + "s"
}
function start(){
  tempoid = setInterval(update, 100)
  bstart.disabled = true
  bpause.disabled =false
  breset.disabled = false
  
  
}
function pause(){
  clearInterval(tempoid)
  bstart.disabled = false
  bpause.disabled = true
}
function reset(){
  clearInterval(tempoid)
  bstart.disabled = false
  bpause.disabled = true
  breset.disabled = true
  tempo = 0
  dtempo.innerHTML = tempo.toFixed(1) + "s"
}
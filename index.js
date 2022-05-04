console.log("Alarm Clock");

var audio = new Audio('http://www.adapticom1.net/adapticom/SoundEffects/dive%20alarm.wav');

function playAlarm(){
    audio.play();
}

const btn = document.getElementById("btn");

btn.addEventListener('click', setAlarm);

function setAlarm(e){
    e.preventDefault
    const alarm = document.getElementById("alarm");
    const para = document.getElementById("info");
    const box = document.getElementById("box");
    alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    box.style.backgroundColor = "Black"
    para.innerText = `Setting Alarm for ${alarmDate}...`;

    console.log(alarmDate - now );
    let diff = alarmDate - now ;

if (diff >= 0){
    setTimeout(() => {
        playAlarm();
    }, diff);
}
}
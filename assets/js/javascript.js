



function update() {
    let rlgDigital = document.querySelector(".digital");
    let data = new Date;
    let hrs = data.getHours();
    let min = data.getMinutes();
    let seconds = data.getSeconds();
    rlgDigital.innerHTML = `${fixZero(hrs)}:${fixZero(min)}:${fixZero(seconds)}`;

    let ponteiroHrs = document.querySelector(".hrs");
    let ponteiroMin = document.querySelector(".min");
    let ponteiroSeconds = document.querySelector(".sec");
    let degHrs= ((360 / 12)* hrs) -90;
    let degMin= ((360 / 60)* min) -90;
    let degSec= ((360 / 60)* seconds) -90;
    ponteiroMin.style.transform = `rotate(${degMin}deg)`;
    ponteiroSeconds.style.transform = `rotate(${degSec}deg)`;
    ponteiroHrs.style.transform = `rotate(${degHrs}deg)`;
}

function fixZero(tempo){

    if(tempo < 10){
       return tempo = `0${tempo}`;
    }else{
       return tempo;
    }
}

setInterval(update,5);
update();
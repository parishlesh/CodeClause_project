const time_el= document.getElementById('time')
const stop_btn= document.getElementById('stop')
const start_btn= document.getElementById('start')
const reset_btn= document.getElementById('reset')

let counter =00;
let interval= null;

start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

    document.getElementById('hrs').innerText='00'
    document.getElementById('mins').innerText='00'
    document.getElementById('secs').innerText='00'

function timer(){
    counter++;

    let hrs= Math.floor(counter/3600)
    let mins = Math.floor((counter-(hrs * 3600))/60);
    let secs= counter % 60;

     if (secs<10) secs= '0' + secs;
     if (mins<10) mins= '0' + mins;
     if (hrs<10) hrs= '0' + hrs;

    document.getElementById('hrs').innerText=hrs
    document.getElementById('mins').innerText=mins
    document.getElementById('secs').innerText=secs
    
}

function start(){
    if (interval){
        return
    }
    interval= setInterval(timer ,1000)
}

function stop(){
    clearInterval(interval);
    interval=null;
}

 function reset(){
     stop();
     counter=00;
     
    document.getElementById('hrs').innerText='00'
    document.getElementById('mins').innerText='00'
    document.getElementById('secs').innerText='00'    
}

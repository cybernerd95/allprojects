const hourEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if (h>12){
        h=h-12
        ampm= "PM"

    }
    h = h <10 ? "0"+h :h;
    
    hourEl.innerText= h;
    minutesEl.innerText= m;
    secondsEl.innerText= s;
    ampmEl.innerText= ampm;
    setTimeout(()=>{
    updateclock()
    }, 1000)
}
updateclock()


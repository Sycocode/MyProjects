var miliseconds=0
var seconds=0
var minutes=0
var hours=0
var time=document.querySelector('.timer-display')
var currentInterval=null

document.getElementById("start").addEventListener("click",()=>{
    if(currentInterval!==null)
    {
        clearInterval(currentInterval)
    }
    currentInterval=setInterval(display,10)
})
document.getElementById("pause").addEventListener("click",()=>{
    clearInterval(currentInterval)
})

document.getElementById("reset").addEventListener("click",()=>{
    clearInterval(currentInterval)
    miliseconds=0
    seconds=0
    minutes=0
    hours=0
    time.innerHTML="00 : 00 : 00 : 000"
})
function display()
{
    miliseconds+=10
    if(miliseconds==1000)
    {
        miliseconds=0
        seconds++
        if(seconds==60)
        {
            seconds=0
            minutes++
            if(minutes==60)
            {
                minutes=0
                hours++
            }
        }
    }
    var h=hours <10 ? "0" +hours : hours
    var m=minutes <10 ? "0" + minutes : minutes
    var s=seconds <10 ? "0" +seconds : seconds
    var ms=miliseconds <10
                       ? "00" +miliseconds
                       : miliseconds <100
                       ? "0" + miliseconds
                       : miliseconds
    
    time.innerHTML=` ${h} : ${m} : ${s} : ${ms}`
}
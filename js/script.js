let allSelect = document.querySelectorAll('select')
let btn = document.querySelector('button')
let time = document.querySelector('.time')
let body = document.querySelector('.body')
let timeFound ;
let click = false
// let audio = new Audio('../audio/audio.mp3')
let audio = document.querySelector('audio')
// hour--
for(let i =1;i <= 12;i++){
    let hour = i
    let option = `<option value="${hour}">${hour}</option>`
    allSelect[0].innerHTML += option
}
// minites--
(function (){
    for(let i =1;i <= 60;i++){
        let minites = i<10 ?'0'+i:i
        let option = `<option value="${minites}">${minites}</option>`
        allSelect[1].innerHTML += option
    }
}())
// Am/pm
function x (){
    for(let i =1;i <= 2;i++){
        let apm = i===1?'AM':'PM'
        let option = `<option value="${apm}">${apm}</option>`
        allSelect[2].innerHTML += option
    }
}
x()

setInterval(() => {
    let data = new Date
    let hours = data.getHours()
    let minites = data.getMinutes()
    let second = data.getSeconds()
    let apm = ' AM'
    if(hours >= 12) {
        hours -=12
        apm = 'PM'
    }
    hours ===0? (hours = 12):hours
    // hours = hours < 10 ?'0' + hours : hours
    minites = minites < 10 ?'0' + minites : minites
    second = second < 10 ?'0'+second :second
    time.innerHTML = `${hours} : ${minites} : ${second} ${apm}`
    if(timeFound === `${hours} : ${minites}${apm}`){
        
    audio.play()
 
    }
    
}, 1000);


btn.addEventListener('click',addAlarm)
function addAlarm(){
    if(click){
        btn.innerHTML ='🙄شغلني ي عمنا'
        audio.pause()
        body.classList.remove('headdin')
        timeFound =''
        return;
            }
let time = `${allSelect[0].value} : ${allSelect[1].value}${allSelect[2].value}`   
if(time.includes('Hour') || time.includes('minite') ||time.includes('Am/Pm')){
    return alert("😏متختاار ي اسطا")
}

click = true
timeFound = time;
btn.innerHTML ='🥱اصحاا ي عمنااا'
body.classList.add('headdin')

}

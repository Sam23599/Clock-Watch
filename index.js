let initialSeconds = 0;
let initialMiliSeconds = 0;
let initialMinutes = 0;

let Minutes = document.querySelector('.Minutes');
let Seconds = document.querySelector('.Seconds');
let MiliSeconds = document.querySelector('.MiliSeconds');

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let timer =null;

start.addEventListener('click', ()=>{
    if (timer === null) { 
        timer = setInterval(startWatch, 10);
    }
})

stop.addEventListener('click', ()=>{
    clearInterval(timer);
    timer = null;
})

reset.addEventListener('click',() =>{
    clearInterval(timer);
    timer = null;

    initialMinutes=0;
    initialSeconds=0;
    initialMiliSeconds=0;
    
    Minutes.innerHTML = '0'+initialMinutes;
    Seconds.innerHTML = '0'+ initialSeconds;
    MiliSeconds.innerHTML = '0'+ initialMiliSeconds;
})

function startWatch(){
    initialMiliSeconds++;
    if(initialMiliSeconds<=9){
        MiliSeconds.innerHTML = '0' + initialMiliSeconds;
    }
    if(initialMiliSeconds>9){
        MiliSeconds.innerHTML = initialMiliSeconds;
    }
    if(initialMiliSeconds>99){
        initialSeconds++;
        Seconds.innerHTML='0'+initialSeconds;
        
        initialMiliSeconds=0;
        MiliSeconds.innerHTML = '0' + initialMiliSeconds;
    }
    if(initialSeconds>9){
        Seconds.innerHTML = initialSeconds;
    }
    if(initialSeconds>59){
        initialMinutes++;
        Minutes.innerHTML= '0'+initialMinutes;

        initialSeconds=0;
        Seconds.innerHTML ='0'+initialSeconds;
    }
}

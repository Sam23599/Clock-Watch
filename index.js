// Initialize variables for time components
let initialSeconds = 0;
let initialMiliSeconds = 0;
let initialMinutes = 0;

// Select HTML elements
let Minutes = document.querySelector('.Minutes');
let Seconds = document.querySelector('.Seconds');
let MiliSeconds = document.querySelector('.MiliSeconds');

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let timer = null;

// Start button click event listener
start.addEventListener('click', () => {
    // Start the timer if it's not already running
    if (timer === null) {
        timer = setInterval(startWatch, 10);
    }
})

// Stop button click event listener
stop.addEventListener('click', () => {
    // Pause the timer by clearing the interval
    clearInterval(timer);
    timer = null;
})

// Reset button click event listener
reset.addEventListener('click', () => {
    // Reset the timer and all time components to zero
    clearInterval(timer);
    timer = null;
    initialMinutes = 0;
    initialSeconds = 0;
    initialMiliSeconds = 0;
    
    // Update the displayed time to show zeros
    Minutes.innerHTML = '0' + initialMinutes;
    Seconds.innerHTML = '0' + initialSeconds;
    MiliSeconds.innerHTML = '0' + initialMiliSeconds;
})

// Function to update the timer logic
function startWatch() {
    initialMiliSeconds++;
    
    // Update milliseconds display with leading zero
    MiliSeconds.innerHTML = initialMiliSeconds <= 9 ? '0' + initialMiliSeconds : initialMiliSeconds;
    
    if (initialMiliSeconds > 99) {
        initialSeconds++;
        
        // Update seconds display with leading zero
        Seconds.innerHTML = initialSeconds <= 9 ? '0' + initialSeconds : initialSeconds;
        
        initialMiliSeconds = 0;
        MiliSeconds.innerHTML = '0' + initialMiliSeconds;
    }
    
    if (initialSeconds > 59) {
        initialMinutes++;
        
        // Update minutes display with leading zero
        Minutes.innerHTML = initialMinutes <= 9 ? '0' + initialMinutes : initialMinutes;

        initialSeconds = 0;
        Seconds.innerHTML = '0' + initialSeconds;
    }
}

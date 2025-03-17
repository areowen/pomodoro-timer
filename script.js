let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const alarmSound = document.getElementById("alarm");

// Function to update the timer display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alarmSound.play(); // Play sound when time is up
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateDisplay();
}

// Event Listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();

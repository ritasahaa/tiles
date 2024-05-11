const boxes = document.querySelectorAll('.box');
const startButton = document.querySelector("#box1 .button");
const nextButton1 = document.querySelector("#box2 .button");
const nextButton2 = document.querySelector("#box3 .button");
const timerDisplay = document.getElementById("timer");
const timeTakenDisplay = document.getElementById("timeTaken");

let startTime;
let endTime;
let timeoutId;
let intervalId;

startButton.addEventListener("click", () => {
    startTime = new Date().getTime();
    updateTime();
    highlightBox(1);
    // Set timeout to transition to box 4 after 10 seconds
    timeoutId = setTimeout(() => {
        clearInterval(intervalId); // Stop the timer in box 2 after 10 seconds
        highlightBox(3);
    }, 10000);
});

nextButton1.addEventListener("click", () => {
    clearInterval(intervalId); // Stop the timer in box 2 when transitioning to box 4
    endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    timeTakenDisplay.textContent = `Total Time Taken: ${timeTaken.toFixed(2)} seconds`; // Display total time taken in box 4
    highlightBox(2);
});

nextButton2.addEventListener("click", () => {
    highlightBox(0);
});

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000; // in seconds
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = Math.floor(elapsedTime % 60);
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    intervalId = setInterval(updateTime, 1000); // Update every second
}

function highlightBox(index) {
    boxes.forEach((box, i) => {
        if (i === index) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}
function moveToBox2() {
    document.getElementById('box1').classList.remove('active');
    document.getElementById('box2').classList.add('active');
    var countdownDisplay = document.getElementById('countdownDisplay');
    countdownDisplay.innerText = '03:14';
    startTime = new Date().getTime() + 174000; // 3 minutes and 14 seconds in milliseconds
    countdown = setInterval(updateCountdown, 1000);
}
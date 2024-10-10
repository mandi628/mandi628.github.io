/* Get the HTML element where the time will be displayed. */

/* Write the function to get the current time and update the #clock element. */

/* Use "setInterval" to call the function every second. */

// Select the clock element.
const clockElement = document.getElementById('clock');

// Function to update the time.
function updateClock() {
    // Get the current date and time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros for single-digit numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time in HH:MM:SS format
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
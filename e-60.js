const endDate = new Date("30 june 2025 17:19:00").getTime();
const startDate = new Date().getTime();

// Update timer every second
let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // Constants for time calculations
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const oneHourInMillis = 60 * 60 * 1000;
    const oneMinInMillis = 60 * 1000;
    const oneSecondInMillis = 1000;

    // Calculate time left
    const days = Math.floor(distancePending / oneDayInMillis);
    const hrs = Math.floor((distancePending % oneDayInMillis) / oneHourInMillis);
    const mins = Math.floor((distancePending % oneHourInMillis) / oneMinInMillis);
    const secs = Math.floor((distancePending % oneMinInMillis) / oneSecondInMillis);

    // Update HTML elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // Progress bar update
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered / totalDistance) * 100;
    
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    // Expired check
    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = " Expired";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);

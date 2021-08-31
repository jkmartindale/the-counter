let reset = Date.UTC(2021,7,31,15,55,3);

daysSinceReset = () => {
    let daysSince = (Date.now() - reset) / 1000 / 60 / 60 / 24;
    
    if (daysSince < 1) {
        return daysSince.toFixed(4);
    }
    if (daysSince < 2) {
        return daysSince.toFixed(3);
    }
    if (daysSince < 5) {
        return daysSince.toFixed(2);
    }
    if (daysSince < 10) {
        return daysSince.toFixed(1)
    }
    return Math.floor(daysSince);
}

updateCounter = () => {
    document.getElementById("counter-text").innerText = daysSinceReset() + " days";
}

window.addEventListener('DOMContentLoaded', (event) => updateCounter());
window.setInterval(updateCounter, 8000);

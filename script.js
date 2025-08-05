function refreshClock() {
    const actualTime = new Date();

    let hours = actualTime.getHours().toString().padStart(2, '0');
    let minutes = actualTime.getMinutes().toString().padStart(2, '0');
    let seconds = actualTime.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function getSeason() {
    const month = new Date().getMonth();
    if (month === 11 || month <= 1) {
        return 'summer';
    } else if (month >= 2 && month <= 4) {
        return 'fall';
    } else if (month >= 5 && month <= 7) {
        return 'winter';
    } else {
        return 'spring';
    }
}

document.body.dataset.season = getSeason();

refreshClock();
setInterval(refreshClock, 1000);

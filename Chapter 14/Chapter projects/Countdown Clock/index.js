const endDateInput = document.querySelector('input[name="endDate"]');
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const mainClock = document.querySelector('.clock');

let timeInterval;
let stopClock = false;

const savedEndDate = localStorage.getItem('endDate');

if (savedEndDate) {
    endDateInput.value = savedEndDate;
    startClock(savedEndDate);
}

endDateInput.addEventListener('change', function() {
    if (timeInterval) {
        clearInterval(timeInterval);
    }
    localStorage.setItem('endDate', endDateInput.value);
    startClock(endDateInput.value);
});

function startClock(endDate) {
    const endDateTime = new Date(endDate).getTime();

    timeInterval = setInterval(function() {
        const timeLeft = timeLeftFunction(endDateTime);

        if (!timeLeft) {
            clearInterval(timeInterval);
            return;
        }

        updateClock(timeLeft);
    }, 1000);
}

function updateClock(timeLeft) {
    daysElement.textContent = timeLeft.days;
    hoursElement.textContent = timeLeft.hours;
    minutesElement.textContent = timeLeft.minutes;
    secondsElement.textContent = timeLeft.seconds;
}

function timeLeftFunction(endDateTime) {
    const now = new Date().getTime();
    const timeLeft = endDateTime - now;

    if (timeLeft <= 0) {
        clearInterval(timeInterval);
        return false;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}
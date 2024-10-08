const endDate = new Date('2023-12-31 23:59:59').getTime();

function countdown() {
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function update() {
    const temp = countdown();
    let output = '';

    for (const key in temp) {
        output += `${key}: ${temp[key]} `;
    }

    console.log(output);
}

setInterval(update, 1000);

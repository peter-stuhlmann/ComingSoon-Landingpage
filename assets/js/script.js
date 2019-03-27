let countdownEnd = moment('16-03-2019 21:53:08', 'DD-MM-YYYY HH:mm:ss').unix(),
    currentTime = moment().unix(),
    duration = moment.duration((countdownEnd - currentTime - 1) * 1000, 'milliseconds'),
    interval = 1000;

let countDown = setInterval(function () {

    duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
    let days =  Math.floor(duration / 1000 / 86400),
        hours = moment.duration(duration).hours(),
        minutes = moment.duration(duration).minutes(),
        seconds = moment.duration(duration).seconds();

    document.querySelector('#days').innerHTML = `<span>${days}</span><br><span>days</span>`
    document.querySelector('#hours').innerHTML = `<span>${hours}</span><br><span>hours</span>`
    document.querySelector('#minutes').innerHTML = `<span>${minutes}</span><br><span>minutes</span>`
    document.querySelector('#seconds').innerHTML = `<span>${seconds}</span><br><span>seconds</span>`

    if (duration.asMilliseconds() <= 0) {
        clearInterval(countDown)
        document.querySelector('#days').innerHTML = `<span>0</span><br><span>days</span>`
        document.querySelector('#hours').innerHTML = `<span>0</span><br><span>hours</span>`
        document.querySelector('#minutes').innerHTML = `<span>0</span><br><span>minutes</span>`
        document.querySelector('#seconds').innerHTML = `<span>0</span><br><span>seconds</span>`
    }
}, interval);
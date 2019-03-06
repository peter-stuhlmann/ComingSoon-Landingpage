let countdownEnd = moment('06-03-2019 21:53:08', 'DD-MM-YYYY HH:mm:ss').unix(),
    currentTime = moment().unix(),
    duration = moment.duration((countdownEnd - currentTime - 1) * 1000, 'milliseconds'),
    interval = 1000;

let countDown = setInterval(function () {

    duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
    let days =  Math.floor(duration / 1000 / 86400),
        hours = moment.duration(duration).hours(),
        minutes = moment.duration(duration).minutes(),
        seconds = moment.duration(duration).seconds();

    document.querySelector('#days').innerHTML = `<span>days</span><br>` + days
    document.querySelector('#hours').innerHTML = `<span>hours</span><br>` + hours
    document.querySelector('#minutes').innerHTML = `<span>minutes</span><br>` + minutes
    document.querySelector('#seconds').innerHTML = `<span>seconds</span><br>` + seconds

    if (duration.asMilliseconds() <= 0) {
        clearInterval(countDown)
        document.querySelector('#days').innerHTML = `<span>days</span><br>0`
        document.querySelector('#hours').innerHTML = `<span>hours</span><br>0`
        document.querySelector('#minutes').innerHTML = `<span>minutes</span><br>0`
        document.querySelector('#seconds').innerHTML = `<span>seconds</span><br>0`
    }
}, interval);
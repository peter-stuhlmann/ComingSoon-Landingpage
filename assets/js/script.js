let countdownEnd = moment('06-03-2019 21:50:08', 'DD-MM-YYYY HH:mm:ss').unix(),
    currentTime = moment().unix(),
    duration = moment.duration((countdownEnd - currentTime - 1) * 1000, 'milliseconds'),
    interval = 1000;

let countDown = setInterval(function () {

    duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
    let days = `<span>days</span><br>` + Math.floor(duration / 1000 / 86400),
        hours = `<span>hours</span><br>` + moment.duration(duration).hours(),
        minutes = `<span>minutes</span><br>` + moment.duration(duration).minutes(),
        seconds = `<span>seconds</span><br>` + moment.duration(duration).seconds();

    document.querySelector('#days').innerHTML = days
    document.querySelector('#hours').innerHTML = hours
    document.querySelector('#minutes').innerHTML = minutes
    document.querySelector('#seconds').innerHTML = seconds

    if (duration.asMilliseconds() <= 0) {
        clearInterval(countDown)
        document.querySelector('#days').innerHTML = `<span>days</span><br>0`
        document.querySelector('#hours').innerHTML = `<span>hours</span><br>0`
        document.querySelector('#minutes').innerHTML = `<span>minutes</span><br>0`
        document.querySelector('#seconds').innerHTML = `<span>seconds</span><br>0`
    }
}, interval);
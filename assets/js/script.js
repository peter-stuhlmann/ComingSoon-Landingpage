let countdownEnd = moment('06-03-2019 00:49:20', 'DD-MM-YYYY HH:mm:ss').unix(),
    currentTime = moment().unix(),
    timeDifference = countdownEnd - currentTime - 1,
    duration = moment.duration(timeDifference * 1000, 'milliseconds'),
    interval = 1000;

function countDown(countdownEnd, currentTime, timeDifference, duration, interval) {

    if (timeDifference > 0) {

        setInterval(function () {

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            let days = `<span>days</span><br>` + Math.floor(timeDifference / 86400),
                hours = `<span>hours</span><br>` + moment.duration(duration).hours(),
                minutes = `<span>minutes</span><br>` + moment.duration(duration).minutes(),
                seconds = `<span>seconds</span><br>` + moment.duration(duration).seconds();

            document.querySelector('#days').innerHTML = days
            document.querySelector('#hours').innerHTML = hours
            document.querySelector('#minutes').innerHTML = minutes
            document.querySelector('#seconds').innerHTML = seconds

        }, interval);
    } else {
        document.querySelector('#days').innerHTML = `<span>days</span><br>0`
        document.querySelector('#hours').innerHTML = `<span>hours</span><br>0`
        document.querySelector('#minutes').innerHTML = `<span>minutes</span><br>0`
        document.querySelector('#seconds').innerHTML = `<span>seconds</span><br>0`
    }
};

countDown(countdownEnd, currentTime, timeDifference, duration, interval)
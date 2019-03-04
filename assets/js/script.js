function countDown() {

    let clock = document.querySelector('#countdown'),
        countdownEnd = moment('01-05-2019 09:00:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        timeDifference = countdownEnd - currentTime,
        duration = moment.duration(timeDifference * 1000, 'milliseconds'),
        interval = 1000;

    if (timeDifference > 0) {

        setInterval(function () {

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            let days = `<span>days</span><br>` + moment.duration(duration).days(),
                hours = `<span>hours</span><br>` + moment.duration(duration).hours(),
                minutes = `<span>minutes</span><br>` + moment.duration(duration).minutes(),
                seconds = `<span>seconds</span><br>` + moment.duration(duration).seconds();

            document.querySelector('#days').innerHTML = days
            document.querySelector('#hours').innerHTML = hours
            document.querySelector('#minutes').innerHTML = minutes
            document.querySelector('#seconds').innerHTML = seconds

        }, interval);
    }
};

countDown()

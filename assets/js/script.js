function countDown() {
    
    let $clock = $('#countdown'),
        countdownEnd = moment('01-05-2019 09:00:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        timeDifference = countdownEnd - currentTime,
        duration = moment.duration(timeDifference * 1000, 'milliseconds'),
        interval = 1000;

    if (timeDifference > 0) {

        let $days = $('#days').appendTo($clock),
            $hours = $('#hours').appendTo($clock),
            $minutes = $('#minutes').appendTo($clock),
            $seconds = $('#seconds').appendTo($clock);

        setInterval(function () {

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            let days = `<span>days</span><br>` + moment.duration(duration).days(),
                hours = `<span>hours</span><br>` + moment.duration(duration).hours(),
                minutes = `<span>minutes</span><br>` + moment.duration(duration).minutes(),
                seconds = `<span>seconds</span><br>` + moment.duration(duration).seconds();

            days = $.trim(days).length === 1 ? '0' + days : days;
            hours = $.trim(hours).length === 1 ? '0' + hours : hours;
            minutes = $.trim(minutes).length === 1 ? '0' + minutes : minutes;
            seconds = $.trim(seconds).length === 1 ? '0' + seconds : seconds;

            $days.html(days);
            $hours.html(hours);
            $minutes.html(minutes);
            $seconds.html(seconds);

        }, interval);
    }
};

countDown()
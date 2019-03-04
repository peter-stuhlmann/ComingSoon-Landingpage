window.onload = function (e) {

    let $clock = $('#countdown'),
        eventTime = moment('01-05-2019 09:00:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds'),
        interval = 1000;

    if (diffTime > 0) {

        let $d = $('#days').appendTo($clock),
            $h = $('#hours').appendTo($clock),
            $m = $('#minutes').appendTo($clock),
            $s = $('#seconds').appendTo($clock);

        setInterval(function () {

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            let d = `<span>days</span><br>` + moment.duration(duration).days(),
                h = `<span>hours</span><br>` + moment.duration(duration).hours(),
                m = `<span>minutes</span><br>` + moment.duration(duration).minutes(),
                s = `<span>seconds</span><br>` + moment.duration(duration).seconds();

            d = $.trim(d).length === 1 ? '0' + d : d;
            h = $.trim(h).length === 1 ? '0' + h : h;
            m = $.trim(m).length === 1 ? '0' + m : m;
            s = $.trim(s).length === 1 ? '0' + s : s;

            $d.html(d);
            $h.html(h);
            $m.html(m);
            $s.html(s);

        }, interval);
    }
};
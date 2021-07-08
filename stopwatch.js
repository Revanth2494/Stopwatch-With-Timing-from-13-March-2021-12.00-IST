var ss = document.getElementsByClassName('stopwatch');

[].forEach.call(ss, function (s) {
    var milli = 0,
        interval = 0,
        lastUpdateTime = new Date("March 13, 2021 00:00:00 GMT+05:30").getTime(),
        start = s.querySelector('button.start'),
        stop = s.querySelector('button.stop'),
        reset = s.querySelector('button.reset'),
        days = s.querySelector('span.days'),
        hours = s.querySelector('span.hours'),
        mins = s.querySelector('span.minutes'),
        secs = s.querySelector('span.seconds'),
        cents = s.querySelector('span.centiseconds');

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);

    function update () {
        var now = new Date().getTime();
        milli = now - lastUpdateTime;

        days.innerHTML = parseInt(milli/86400000);
        milli = milli - 86400000 * days.innerHTML;

        hours.innerHTML = parseInt(milli/3600000);
        milli = milli - 3600000 * hours.innerHTML;

        mins.innerHTML = parseInt(milli/60000);
        milli = milli - 60000 * mins.innerHTML;

        secs.innerHTML = parseInt(milli/1000);
        milli = milli - 1000 * secs.innerHTML;

        
        cents.innerHTML = Math.floor(milli / 10);

    }

    function startTimer () {
        if (!interval) {
            lastUpdateTime = new Date("March 13, 2021 00:00:00 GMT+05:30").getTime();
            interval = setInterval(update, 1);
        }
    }

    function stopTimer () {
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer () {
        stopTimer();

        currentTimer = 0;

        days.innerHTML = hours.innerHTML = mins.innerHTML = secs.innerHTML = cents.innerHTML = '00';
    }
});

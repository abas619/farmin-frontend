if (document.querySelector('.countdown-timer') != null) {
    // مثال استفاده از تابع countdownTimer با تاریخ هدف 2023/12/31

    var countdownTimers = document.querySelector('.countdown-timer');
    var show_secounds = countdownTimers.querySelector('.timer-secound')
    var show_minutes = countdownTimers.querySelector('.timer-minutes')
    var show_hours = countdownTimers.querySelector('.timer-hours')
    var show_days = countdownTimers.querySelector('.timer-days')

    countdownTimer();
}

function countdownTimer() {
    // تاریخ هدف برای تایمر معکوس را دریافت می کنیم
    var countdownTimers = document.querySelector('.countdown-timer');
    const targetDate = countdownTimers.getAttribute("data-countdown");
    const targetTime = new Date(targetDate).getTime();

    // تابع setInterval را برای به روز رسانی زمان باقیمانده هر ثانیه فراخوانی می کنیم
    const timer = setInterval(function () {
        // زمان فعلی را دریافت می کنیم
        const currentTime = new Date().getTime();

        // زمان باقیمانده را محاسبه می کنیم
        const remainingTime = targetTime - currentTime;

        // محاسبه روز، ساعت، دقیقه و ثانیه های باقیمانده
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // نمایش زمان باقیمانده
        show_secounds.innerHTML = seconds;
        show_minutes.innerHTML = minutes;
        show_hours.innerHTML = hours;
        show_days.innerHTML = days;

        // بررسی اتمام زمان باقیمانده و پاکسازی تایمر
        if (remainingTime <= 0) {
            clearInterval(timer);
            console.log("زمان به پایان رسید.");
        }
    }, 1000); // به روز رسانی هر ثانیه (1000 میلی ثانیه)
}


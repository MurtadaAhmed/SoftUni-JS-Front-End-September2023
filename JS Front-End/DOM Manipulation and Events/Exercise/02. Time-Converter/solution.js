function attachEventsListeners() {

    let days = document.querySelector("#days");
    let daysButton = document.querySelector("#daysBtn");

    let hours = document.querySelector("#hours");
    let hoursButton = document.querySelector("#hoursBtn");

    let minutes = document.querySelector("#minutes");
    let minutesButton = document.querySelector("#minutesBtn");

    let seconds = document.querySelector("#seconds");
    let secondsButton = document.querySelector("#secondsBtn");

    daysButton.addEventListener('click', daysConvert);
    hoursButton.addEventListener('click', hoursConvert);
    minutesButton.addEventListener('click', minutesConvert);
    secondsButton.addEventListener('click', secondsConvert);

    function daysConvert() {
        hours.value = days.value * 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }

    function hoursConvert() {
        days.value = hours.value / 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }

    function minutesConvert() {
       days.value = minutes.value / 60 / 24
       hours.value = days.value * 24
       seconds.value = minutes.value * 60
    }

    function secondsConvert() {
        days.value = seconds.value / 60 / 60 / 24
        hours.value = days.value *24
        minutes.value = hours.value * 60
    }
}
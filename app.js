const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const digitalHour = document.querySelector('.digital-hour')

function addZero(num) {
    return String(num).padStart(2, '0');
}

const currentTime = () => {
    const actual = new Date()
    const changeSeconds = actual.getSeconds() * 6
    const changeMinutes = actual.getMinutes() * 6
    const changeHours = actual.getHours() * 30

    seconds.style.transform = `rotateZ(${changeSeconds}deg)`
    minutes.style.transform = `rotateZ(${changeMinutes}deg)`
    hours.style.transform = `rotateZ(${changeHours + changeMinutes / 12}deg)`
    digitalHour.innerHTML = addZero(actual.getHours()) + ':' + addZero(actual.getMinutes()) + ':' + addZero(actual.getSeconds())
}


setInterval(currentTime, 0)
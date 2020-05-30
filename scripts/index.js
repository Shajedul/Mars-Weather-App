const previousWeatherToggle = document.querySelector('.show-previous-weather-label')
const previousWeather = document.querySelector('.previous-weather');



previousWeatherToggle.addEventListener('click', ()=>{
    previousWeather.classList.toggle('show-weather')
})



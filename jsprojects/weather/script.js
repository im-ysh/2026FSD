// load DOM 
// grab the dom elemnts 
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElemmentById('Weather-info');
    const Cityinfo = document.getElementById('city-name');
    const Temperature = document.getElementById('temperature');
    const Description = document.getElementById('description'); 
    const ErrorMsg = document.getElementById('error-message');

    getWeatherBtn.addEventListener('click' , () => {
        const city = cityInput.value.trim()
        if(!city)  return;
    })
})
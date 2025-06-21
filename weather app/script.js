const key = '92e2ef8164e6d848188739bf123b08d0'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const cityName = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const search = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const error = document.querySelector('.error p')
const weatherImage = document.querySelector('.weather-image')

async function weatherInfo(city){
    
    const response = await fetch(apiUrl + city + `&appid=${key}`)
    if(response.status == 404){
        error.style.display = 'block'
        error.innerHTML = 'Enter valid city name'
        document.querySelector('.weatherInfo').style.display = 'none'
    }else{
        error.style.display = 'none'
        document.querySelector('.weatherInfo').style.display = 'block'
    }
    var data = await response.json()
    console.log(data)
    cityName.innerHTML = city
    temp.innerHTML = Math.round(data.main.temp) + '°C'
    humidity.innerHTML = data.main.humidity + '%'
    wind.innerHTML = data.wind.speed + ' km/h'

    if(data.weather[0].mian == 'Clouds'){
        weatherImage.src = "images/clouds.png"
    }else if(data.weather[0].mian == 'Clear'){
        weatherImage.src = "images/clear.png"
    }else if(data.weather[0].mian == "Rain"){
        weatherImage.src = "images/rain.png"
    }else if(data.weather[0].mian == 'Snow'){
        weatherImage.src = "images/snow.png"
    }else if(data.weather[0].mian == 'Mist'){
        weatherImage.src = "images/mist.png"
    }else if(data.weather[0].mian == 'Drizzle'){
        weatherImage.src = "images/drizzle.png"
    }

}
searchBtn.addEventListener('click', ()=>{
    weatherInfo(search.value)
})
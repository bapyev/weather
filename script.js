let key = "f5d9234be1bfda95ccf0f5b0a787d029" 
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`
let $cityName = document.querySelector('.cityName')
let $currentTemp = document.querySelector('.currentTemp')
let $description = document.querySelector('.description')
let $hourly = document.querySelector('.hourly')
let $daily = document.querySelector('.daily')
let $select = document.querySelector('.select')


let city = [
    {
        name: "Бишкек",
        lat: 42.882004,
        lon: 74.582748
    },
    {
        name: "Ош",
        lat: 40.52828,
        lon: 72.7985
    },
    {
        name: "Токмок",
        lat: 42.84194,
        lon: 75.30149
    },
    {
        name: "Баткен",
        lat: 40.066667,
        lon: 70.833333
    },
    {
        name: "Талас",
        lat: 42.52277,
        lon: 72.24274
    },
    {
        name: "Нарын",
        lat: 41.42866,
        lon: 75.99111
    },
    {
        name: "Каракол",
        lat: 42.478210,
        lon: 78.395599
    },
    {
        name: "Джалал-Абад",
        lat: 40.933155,
        lon: 72.981491
    },
]

getData(city[0])

async function getData(cit) { 
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cit.lat}&lon=${cit.lon}&lang=ru&units=metric&appid=${key}`
    let resp = await fetch(url) 
    let data = await resp.json() 
 
    currentWeather(data.current)
    hourlyWeather(data.hourly) 
    dailyWeather(data.daily)
} 

let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
]
let hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
]


getWeatherData(url)
async function getWeatherData(url){
    let resp = await fetch(url)
    let data = await resp.json()
    currentWeather(data.current)
    hourlyWeather(data.hourly)
    dailyWeather(data.daily)
    //console.log(data)
}


function currentWeather(data){
    $currentTemp.textContent = Math.trunc(data.temp) + "°C"
    $description.innerHTML = ""
    $description.insertAdjacentHTML('beforeend', `
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <span>${data.weather[0].description}</span>
    `)
    // console.log(data)
}

function hourlyWeather(data){
    // console.log(data)
    $hourly.innerHTML = ""
    data.forEach((element, index) => {
        $hourly.insertAdjacentHTML('beforeend',`
            <div class="hour">
                <span>${index == 0 ? "Сейчас" : hours[new Date().getHours() + index]}</span>
                <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
                <span>${Math.trunc(element.temp)} °C</span>
            </div>
        `)
    });
}

function dailyWeather(data){
    //console.log(data)
    $daily.innerHTML = ""
    data.forEach((element, index) => {
        $daily.insertAdjacentHTML('beforeend', `
            <div class="day">
                <span class="nameDay">${index == 0 ? "Сегодня" : days[new Date().getDay() + index]}</span>
                <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
                <span>${element.temp.min}°C</span>
                -----
                <span>${element.temp.max}°C</span>
            </div>
        `)
    })
}


// $select.addEventListener('change', function(){
//     let elem = city.find(elem => elem.name == $select.value)
//     console.log(elem)
//     let lat = elem.lat
//     let lon = elem.lon
//     url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${key}`
//     getWeatherData(url)
// })
document.querySelector('select').addEventListener('change', function () { 
    switch (this.value) { 
        case 'osh': 
            getData(city[1]) 
            break 
        case 'bishkek': 
            getData(city[0]) 
            break 
        case 'tokmok':
            getData(city[2])
            break
        case 'batken':
            getData(city[3])
            break
        case 'talas':
            getData(city[4])
            break
        case 'naryn':
            getData(city[5])
            break
        case 'karakol':
            getData(city[6])
            break
        case 'djalaAbad':
            getData(city[7])
            break
    } 
})
document.querySelector('.blockWeather').style.display = 'none'

document.querySelector('#btn').addEventListener('click',function(e){
        e.preventDefault()
        
        var city = document.querySelector('#search')

        document.querySelector('.blockWeather').style.display = 'block'

        
        const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=17c6ff7a68ddf23b9c99f11ba7456398&units=metric`, options)
        
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data)
                console.log(data.name)
                console.log(data.sys.country)
                console.log(data.main.temp)
                console.log(data.weather[0].description)
                console.log(data.main.temp_min)
                console.log(data.main.temp_max)
                console.log(data.main.feels_like)
                console.log(data.main.humidity)
                console.log(data.wind.speed)
                
                
                document.querySelector('#country').innerHTML = data.name + ' - ' + data.sys.country
                document.querySelector('#temp').innerHTML = data.main.temp + ' ' + data.weather[0].description
                document.querySelector('#min').innerHTML = data.main.temp_min + 'º'
                document.querySelector('#max').innerHTML = data.main.temp_max + 'º'
                document.querySelector('#feelsLike').innerHTML = data.main.feels_like + 'º'
                document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h'
                document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
                
                
        })
        .catch(function (e) {
                console.log('Erro: ')
        })
        
})








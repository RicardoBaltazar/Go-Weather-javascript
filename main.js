document.querySelector('.blockWeather').style.display = 'none'

document.querySelector('#btn').addEventListener('click',function(e){
        e.preventDefault()
        
        var city = document.querySelector('#search')

        document.querySelector('.blockWeather').style.display = 'block'
        document.querySelector('.blockWeather').style.display = 'flex'

        
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
                
                var temp = data.main.temp
                parseFloat(temp.value)

                var tempMin = data.main.temp_min
                parseFloat(tempMin.value)

                var tempMax = data.main.temp_max
                parseFloat(tempMax.value)

                var feelsLike = data.main.feels_like
                parseFloat(feelsLike.value)

                document.querySelector('#country').innerHTML = data.name + ' - ' + data.sys.country
                document.querySelector('#temp').innerHTML = temp.toFixed() + 'ºC ' + data.weather[0].description
                document.querySelector('#min').innerHTML = temp.toFixed() + 'ºC'
                document.querySelector('#max').innerHTML = tempMax.toFixed() + 'ºC'
                document.querySelector('#feelsLike').innerHTML = feelsLike.toFixed() + 'ºC'
                document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h'
                document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
                
        })
        .catch(function (e) {
                console.log('Erro: ')
                alert('Please enter a valid value')
                document.querySelector('.blockWeather').style.display = 'none'
        })
        
        city.value = ''
})


//evento para fechar o bloco das informações
document.querySelector('#btnClose').addEventListener('click', function(){
        document.querySelector('.blockWeather').style.display = 'none'
})









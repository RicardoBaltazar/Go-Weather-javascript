
var res = document.querySelector('#res')
var form = document.querySelector('form')
var clima = {}

document.querySelector(".block").style.display = "none";

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    
    var nameCity = document.querySelector('input')
    
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity.value}&appid=17c6ff7a68ddf23b9c99f11ba7456398&units=metric`, options)
    
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        console.log(data.name)
        console.log(data.sys.country)
        console.log(data.main.temp)
        console.log(data.weather[0].icon)
        console.log(data.weather[0].description)

        document.querySelector(".block").style.display = "block";
        
        clima.name = data.name
        clima.country = data.sys.country
        clima.temp = data.main.temp
        clima.icon = data.weather[0].icon
        clima.description = data.weather[0].description
        
        
        document.querySelector('#res1').innerHTML = clima.name
        document.querySelector('#res2').innerHTML =  clima.country         
        document.querySelector('#res3').innerHTML = clima.temp + '°C'
        document.querySelector('#res5').innerHTML =  clima.description
        
        
        
        if(clima.icon == '01n'){
            document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/01n@2x.png">'
        } else if(clima.icon == '01d'){
                document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/01d@2x.png">'
            } else if(clima.icon == '02d'){
                document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/02d@2x.png">'
            } else if(clima.icon == '02n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/02n@2x.png">'
            } else if(clima.icon== '03d'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/03d@2x.png">'
            } else if(clima.icon =='03n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/03n@2x.png">'
            } else if(clima.icon == '04d'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/04d@2x.png">'
            } else if(clima.icon == '04n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/04n@2x.png">'
            } else if(clima.icon == '09d'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/09d@2x.png">'
            } else if(clima.icon == '09n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/09n@2x.png">'
            } else if (clima.icon == '10d'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/10d@2x.png">'
            } else if(clima.icon == '10n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/10n@2x.png">'
            } else if (clima.icon == '11d'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/11d@2x.png">'
            } else if (clima.icon == '11n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/11n@2x.png">'
            } else if(clima.icon == '13d'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/13d@2x.png">'
            } else if(clima.icon == '13n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/13n@2x.png">'
            } else if(clima.icon == '50d'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/50d@2x.png">'
            } else if (clima.icon == '50n'){
                    document.querySelector('#res4').innerHTML = '<img src="http://openweathermap.org/img/wn/50d@2x.png">'
            }
        
    })
    .catch(function(e){
        console.log('Erro: '+ e,message)
    })  

    nameCity.value = ''
})
    

    
    
    
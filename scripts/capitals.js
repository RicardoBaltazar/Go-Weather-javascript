const capitals = []
capitals.Estocolmo = 'Estocolmo'
capitals.london = 'London'
capitals.paris = 'Paris'
capitals.dublin = 'Dublin'
capitals.tokyo = 'Tokyo'
capitals.ottawa =  'Ottawa'
capitals.berlim = 'Berlim'
capitals.amsterdam = 'Amsterdam'
capitals.copenhague = 'Copenhague'
capitals.reykjavik = 'Reykjavik'

for(indice in capitals){

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${indice}&appid=17c6ff7a68ddf23b9c99f11ba7456398&units=metric`, options)
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log(data)
        //console.log(data.name)
        //console.log(data.main.temp)
        let namesCities = []
        namesCities = data.name
        console.log(namesCities)

        let tempCities = []
        tempCities = data.main.temp
        console.log(tempCities)
        document.querySelector('.capitals').innerHTML += "<li><span>" + tempCities.toFixed() + 'º ' +"</spam>" + namesCities + "</li>"
    })

}


    



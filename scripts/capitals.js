/*
let spanList = [] 
spanList.saoPaulo = document.querySelector('#sp')
spanList.london = document.querySelector('#london')
capitals.paris = document.querySelector('#paris')
capitals.dublin = document.querySelector('#dublin')
capitals.tokyo = document.querySelector('#tokyo')
capitals.otawa = document.querySelector('#otawa')
capitals.berlim = document.querySelector('#berlim')
capitals.amsterdam = document.querySelector('#amsterdam')
capitals.copenhague = document.querySelector('#copenhague')
capitals.reykjavik = document.querySelector('#reykjavik')
*/


const capitals = []
capitals.saoPaulo = 'sao paulo'
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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=$&appid=17c6ff7a68ddf23b9c99f11ba7456398&units=metric`, options)
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log(data)
        console.log(data.name)
        //console.log(data.main.temp)
    })

}


    



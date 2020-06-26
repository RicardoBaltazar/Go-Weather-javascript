# Weather Forecast  
   
  
![temp](https://user-images.githubusercontent.com/56805229/83090122-620bab00-a06e-11ea-979f-4706683c5658.gif)

  
## Notes  
  
Aplicação front-end de previsão do tempo.  
Consome dados de uma api para consultar o clima da cidade pesquisada.  
Recebi as informações da api via get. Utilizer o fetch api do javascript.  

```
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
```
## Api  

Usei a api https://openweathermap.org/current 
  
## technologies used  
#### html  
#### css  
#### javascript

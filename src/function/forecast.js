
const request=require('postman-request');


const forecast=(longitude,latitude,callback)=>{
    const url1='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=1e5f89c5490fb589de8628f691d377bb';
    
    request({url:url1,json :true},(error,responce)=>{
            // console.log(responce.body.cod);
            if(error){
                    callback('unable to connect',undefined);
            }
            else if(responce.body.cod==400){
                    callback('unable to find location',undefined);
            }
            else{
                    callback(undefined,{
                        description:responce.body.weather[0].description,
                        currentTemp:responce.body.main.temp,
                        feelsLike:responce.body.main.feels_like, 


                    })
            }
    })
};

module.exports=forecast;
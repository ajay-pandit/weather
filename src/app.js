const geocode=require('./function/geocode');
const forecast=require('./function/forecast');



const express=require('express');
const path=require('path');
const app=express();

const pathToPublic=path.join(__dirname,'../public');

app.use(express.static(pathToPublic));


app.listen(3000,()=>{
    console.log('server running');
});

app.get('/weather',(req,res)=>{
    console.log(req.query.address);
    if(!req.query.address){
        return res.send({
            error:'Please provide a valid location'
        });
    }
    
//geocode(process.argv[2],(error,data1)=>{})
geocode(req.query.address,(error,{place,longitude,latitude}={})=>{
    if(error){          
            res.send({
                error
            });
    }
    else{
    forecast(longitude,latitude,(error,data2)=>{
         
            if(error){
          
            res.send({
                error
            });
            }
            else{
          
            res.send({
                place,
                description:data2.description,
                temp:(data2.currentTemp-273.15).toPrecision(4),
                feelsLike:(data2.feelsLike-273.15).toPrecision(4),
            })
            } 
    
    });
    }
});





    
    // res.send('Weather clear');

})
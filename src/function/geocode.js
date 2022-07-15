
const request=require('postman-request');

const geocode=(name,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+name+'.json?access_token=pk.eyJ1IjoiYWpheS1wYW5kaXQiLCJhIjoiY2twNzIyeG1zMGM1OTJvcWVxODRkZmdkOSJ9.X2eUi06w_8hDtXQIn9IPxg';

    request({url:url,json:true},(error,responce)=>{
            if(error){
                    callback('unable to connect',undefined);
            }
            else if(responce.body.message || responce.body.features.length==0){
                    callback('unable to find location',undefined);
            }
            else{
                    callback(undefined,{
                            place:responce.body.features[0].place_name,
                            longitude:responce.body.features[0].center[0],
                            latitude:responce.body.features[0].center[1]
                    })
            }
    });
};

module.exports=geocode;
console.log("testing javascript");



const form=document.querySelector('form');
const val=document.querySelector('input');

// document.getElementsByClassName("location").innerHTML='ajay pandit';

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(val.value);
    const name=val.value;
    fetch(`http://localhost:3000/weather?address=${name}`).then((res)=>{
    res.json().then((data)=>{
        if(data.error){
            document.getElementById("location").innerHTML=data.error;
            console.log(data.error);
        }
        else{
            document.getElementById("location").innerHTML=`Place-${data.place}`;
            document.getElementById('des').innerHTML=`Weather-${data.description}`;
            document.getElementById('temp').innerHTML=`temperature:  ${data.temp}℃`;
            document.getElementById('feels').innerHTML=`Feels Like:  ${data.feelsLike}℃`
            console.log(data.place,data.temp); 
        }
    })
});
})
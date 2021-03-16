const request=require('request');
const readline=require('readline');
var city='';
var count=0;
const apiKey='58687ab65cde51585ba1bd66c5c4d413';



const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('line',(cityName)=>{
console.log(`Enter City:${cityName}`);
city=String(cityName);
let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
request.get(url,(error,response,body)=>{
    if(error){
        console.log(error);
               }
    else{
        count=count+1;
        console.log(JSON.parse(body));
        
    }
    if(count===3){
        destroyInterface();
    }
    });


});
function destroyInterface(){
    rl.close();
}

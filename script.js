const apiKey = "0bb6b5a9b8a4a9846a0f703bb6a2978d";
const latliege = 50.6333 ;
const lonliege = 5.56667;
const langage = "fr"
const counter = 7
//https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=50.6333&lon=5.56667&appid=0bb6b5a9b8a4a9846a0f703bb6a2978d&lang=fr&cnt=7

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latliege}&lon=${lonliege}&appid=${apiKey}&lang=${langage}&cnt=${counter}`;

console.log(weatherUrl);

fetch(weatherUrl)
.then((response) => response.json())
.then((response) => 
console.log(response));


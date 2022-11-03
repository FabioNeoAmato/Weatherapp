const apiKey = "0bb6b5a9b8a4a9846a0f703bb6a2978d";
const latliege = 50.6333 ;
const lonliege = 5.56667;
const langage = "fr"
const counter = 7
//https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=50.6333&lon=5.56667&appid=0bb6b5a9b8a4a9846a0f703bb6a2978d&lang=fr&cnt=7

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latliege}&lon=${lonliege}&appid=${apiKey}&lang=${langage}&cnt=${counter}`;

function fetchingDatas() {
    return fetch(weatherUrl).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((error) => {
          console.log(error);
          throw new Error("Something went wrong - server-side");
        });
      }
    });
  }
  
  async function displayDatas() {
    const calls = (await fetchingDatas()) || [];
    const callList = calls.list;
    callList.forEach((call) => {
      const templateElement = document.importNode(
        document.querySelector("template").content,
        true
      );
      templateElement.getElementById("date").textContent = call.dt_txt;
      templateElement.getElementById("description").textContent =
        call.weather[0].description;
  
      document.querySelector("main").appendChild(templateElement);
    });
  }
  displayDatas();


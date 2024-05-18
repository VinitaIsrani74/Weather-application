const userInput = document.querySelector(".input-box");
const submitBtn = document.getElementById("search-btn");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const text = document.querySelector(".text");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const box=document.querySelector(".box");
const weatherBody=document.querySelector(".weather-body");
const errorMsg=document.querySelector(".error-msg");
const locationError =document.querySelector(".location-error");
const locationn =document.querySelector(".location");



const getWeather = async (city) => {
  //get your own api_key by creating an account on https://openweathermap.org/api
  const API_KEY = "80a71090118c3256b0d2cf52c04232a3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

if(data.cod === `404`){
    console.log("Error");
weatherBody.style.display = "none"; 
  
    locationError.style.display = "flex";
   errorMsg.innerHTML = "Please enter valid City  or Country";
   locationn.innerHTML = "";
   userInput.value="";
return;
}
else{
 
    locationError.style.display = "none";
weatherBody.style.display = "flex";
locationn.innerHTML = city;

  temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
  text.innerHTML = `${data.weather[0].description}`;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed}km/h`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherImg.src = "/assets/cloud.png";
      break;
    case "Clear":
      weatherImg.src = "/assets/clear.png";
      break;
    case "Rain":
      weatherImg.src = "/assets/rain.png";
      break;
    case "Mist":
      weatherImg.src = "/assets/mist.png";
      break;
    case "Snow":
      weatherImg.src = "/assets/snow.png";
      break;
    default:
      weatherImg.src = "/assets/cloud.png";
      break;
  }
userInput.value="";
}
};

submitBtn.addEventListener("click", () => {
 if(userInput.value == ""){
  alert("please provide a valid location ");
 }else{
    getWeather(userInput.value);
 }
});

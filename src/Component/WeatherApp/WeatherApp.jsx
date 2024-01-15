import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const WeatherApp = () => {
  let api_key = "ADD YOUR API KEY IN OPENWEATHERMAP";
  
  const saerch = async () => {
    const eliment=document.getElementsByClassName("city_input");
    if(eliment[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${eliment[0].value}&appid=${api_key}`;


    let response = await fetch(url);
    let data=await response.json();

    console.log(data);

    const humidity= document.getElementsByClassName("cur_humidity");
    const wind= document.getElementsByClassName("cur_wind");
    const temp= document.getElementsByClassName("cur_temp");
    const city= document.getElementsByClassName("cur_city");

    if(data.code===401){
      city[0].innerHTML="URL err";
    }else{

    humidity[0].innerHTML=data.main.humidity+"%";
    wind[0].innerHTML=data.wind.speed+"km/h";
    temp[0].innerHTML=Math.floor(data.main.temp-273)+"°C";    
    city[0].innerHTML=data.name;    
    }
  };

  return (
    <div className="container">
      <div className="top_bar">
        <input type="text" placeholder="City" className="city_input" />
        <div
          className="search_icon"
          onClick={() => {
            saerch();
          }}
        >
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>

      <div className="weather_icon">
        <img src={clear_icon} alt="weatheIcon" />
        <h1 className="cur_temp">°C</h1>
        <h2 className="cur_city">-</h2>
      </div>

      <div className="weather_detail">
        <div className="data">
          <p className="cur_data">
            <img src={humidity_icon} alt="humidity_img" />
            <br />
          </p>
          <p>
            <span>Humidity</span>
            <br />
            <span className="cur_humidity">-%</span>
          </p>
        </div>
        <div className="data">
          <p className="cur_data">
            <img src={wind_icon} alt="iwnd_img" />
            <br />
          </p>
          <p>
            <span>Wind</span>
            <br />
            <sapn className="cur_wind">-km/h</sapn>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

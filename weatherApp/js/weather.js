function kelvinTocel(value) {
  const cel = Math.round(value - 272.15);
  return `${cel} C`;
}

class WeatherApi {
  constructor(city) {
    this.apiKey = '8e238f908e32c841fc49dbc98c39bd72';
    this.city = city
  }

  //fetch weather from api
  async getWeather() {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);


    //response data
    const responseData = await response.json();
    return responseData;
  }
   
  //change weather location
  changelocation(city) {
    this.city = city;
  }
}
class UI {
  constructor() {
    this.location = document.getElementById('city');
    this.weather = document.getElementById('weather');
    this.temp = document.querySelector('#temp');

  }

  paint(weatherParam) {
    this.location.textContent = weatherParam.name;
    this.weather.textContent = weatherParam.weather[0].main;
    this.temp.textContent = kelvinTocel(weatherParam.main.temp);

  }
}
class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'chandigarh';
  }
  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    return {
      city: this.city
    }
  }
  setLocalStorage(city) {
    localStorage.setItem('city', city);
  }
}
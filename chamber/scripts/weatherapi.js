// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Turrialba,CostaRica&units=imperial&appid=270e38ed066873b2c1c99cd439fcfcac';
const mph = document.querySelector('#mph');
const condition = document.querySelector('#condition');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  apiFetch()

  function  displayResults(weatherData) {
    currentTemp.textContent = `Temperature: ${weatherData.main.temp.toFixed(0)} °F`;
    mph.textContent = `Wind Speed: ${weatherData.wind.speed} MPH`;
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    const desc = capitalize(weatherData.weather[0].description);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
   
    condition.textContent = desc;
    // console.log(desc);
  }

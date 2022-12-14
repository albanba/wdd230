// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#w-icon');
const humidity = document.querySelector('#humidity');
const first_day = document.querySelector('#day1');
const second_day = document.querySelector('#day2');
const third_day = document.querySelector('#day3');
const first_temp = document.querySelector('#temp1');
const second_temp = document.querySelector('#temp2');
const third_temp = document.querySelector('#temp3');
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=270e38ed066873b2c1c99cd439fcfcac';
const mph = document.querySelector('#mph');
const description = document.querySelector('#description');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    currentTemp.textContent = `${weatherData.list[0].main.temp.toFixed(0)} °F`;
    humidity.textContent = `Humidity: ${weatherData.list[0].main.humidity}%`;
    
    date1 = new Date(weatherData.list[8].dt*1000)
    date2 = new Date(weatherData.list[16].dt*1000)
    date3 = new Date(weatherData.list[24].dt*1000)
    
      
    day1 = weekdays[date1.getDay()]
    day2 = weekdays[date2.getDay()]
    day3 = weekdays[date3.getDay()]

    first_day.textContent = `${day1}`; 
    second_day.textContent = `${day2}`;
    third_day.textContent = `${day3}`;
    
    first_temp.textContent = `${weatherData.list[8].main.temp.toFixed(0)} °F`;
    second_temp.textContent = `${weatherData.list[16].main.temp.toFixed(0)} °F`;
    third_temp.textContent = `${weatherData.list[24].main.temp.toFixed(0)} °F`;    
 
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png`;
    const desc = capitalize(weatherData.list[0].weather[0].description);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
   
    description.textContent = desc;
    
  }

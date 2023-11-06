document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display1');
  

async function fetcher(num, displayNum){
  const display = displayNum;
  const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast');
  const result = await data.json();
  display.innerHTML = `
  Day: ${result.properties.periods[num].name}__________
  Humidity: ${result.properties.periods[num].relativeHumidity.value}__________    
 Forecast: ${result.properties.periods[num].detailedForecast}`;
  console.log(`Day: ${result.properties.periods[num].name}`);
  console.log(`Humidity: ${result.properties.periods[num].relativeHumidity.value}`);
  console.log(`Forecast: ${result.properties.periods[num].detailedForecast}`);
  console.log(`Location: ${result.geometry.coordinates[0][0][0]}, ${result.geometry.coordinates[0][0][1]}`);
}

fetcher(0, document.querySelector('.display1')); 
fetcher(1, document.querySelector('.display2')); 
fetcher(2, document.querySelector('.display3')); 
fetcher(3, document.querySelector('.display4')); 
fetcher(4, document.querySelector('.display5')); 
fetcher(5, document.querySelector('.display6')); 
fetcher(6, document.querySelector('.display7')); 
fetcher(7, document.querySelector('.display8')); 
fetcher(8, document.querySelector('.display9')); 
fetcher(9, document.querySelector('.display10')); 
fetcher(10, document.querySelector('.display11')); 
fetcher(11, document.querySelector('.display12')); 
fetcher(12, document.querySelector('.display13')); 
fetcher(13, document.querySelector('.display14')); 
fetcher(14, document.querySelector('.display15')); 
});

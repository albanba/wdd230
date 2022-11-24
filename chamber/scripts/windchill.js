
const temp = document.getElementById('temp').innerHTML
const speed = document.getElementById("mph").innerHTML

if (temp <= 50 && mph >3){ 
    let wChill = 35.74 + (0.6215 * temp) - (35.75 * (speed **0.16)) + (0.4275 * temp * (speed ** 0.16));
    document.getElementById("wChill").innerText =`Wind Chill: ${wChill.toFixed(2)} °F`;
} 

else {document.getElementById("wChill").innerText = "Wind Chill: N/A";  
} 


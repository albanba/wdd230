
const temp = document.getElementById('temp').innerHTML
const speed = document.getElementById("speed").innerHTML

let wChill = 35.74 + (0.6215 * temp) - (35.75 * (speed **0.16)) + (0.4275 * temp * (speed ** 0.16))

document.getElementById("wChill").innerText = wChill.toFixed(2);
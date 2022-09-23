const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
 ]


let d = new Date();

let fullyear = d.getFullYear();

document.querySelector("#year").textContent = fullyear;

let last = new Date(document.lastModified);

let month = months[last.getMonth()]
let date = last.getDate()
let year = last.getFullYear()
let hour = last.getHours()
let minutes = last.getMinutes()
let seconds = last.getSeconds()





document.getElementById("lastupdate").textContent = `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;
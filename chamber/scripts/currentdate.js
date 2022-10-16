const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let d = new Date();

let fullyear = d.getFullYear();

document.querySelector("#year").textContent = fullyear;

let last = new Date(document.lastModified);

let month = months[last.getMonth()]
let day = weekday[last.getDay()]
let date = last.getDate()
let year = last.getFullYear()
let hour = last.getHours()
let minutes = last.getMinutes()
let seconds = last.getSeconds()





document.getElementsByClassName("lastupdate")[0].textContent = `${day}, ${date} ${month} ${year}`;
document.getElementsByClassName("lastupdate")[1].textContent = `${day}, ${date} ${month} ${year}`;

//if (day == 'Monday' || day == 'Tuesday' ) {
    
    

  //}

  document.getElementById('banner').style.display = "block"
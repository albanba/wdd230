const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let d = new Date();

document.getElementsByName("date")[0].setAttribute("value", d)



let fullyear = d.getFullYear();

document.querySelector("#year").textContent = fullyear;

let last = new Date(document.lastModified);

let today = new Date()

let month = months[last.getMonth()]
let day = weekday[last.getDay()]
let date = last.getDate()
let year = last.getFullYear()


let tmonth = months[today.getMonth()]
let tday = weekday[today.getDay()]
let tdate = today.getDate()
let tyear = today.getFullYear()



document.getElementsByClassName("lastupdate")[0].textContent = `${tday}, ${tdate} ${tmonth} ${tyear}`;
document.getElementsByClassName("lastupdate")[1].textContent = `${day}, ${date} ${month} ${year}`;

if (tday == 'Monday' || tday == 'Tuesday' ) {
    
  document.getElementById('banner').style.display = "block" 

}

  
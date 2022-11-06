
const days = document.querySelector(".daysSinceLast");



let lastVisit = new Date(window.localStorage.getItem("Last Visit"));

let result = Math.round((new Date() - lastVisit) / 86400000)


localStorage.setItem("Days Since Last Visit", result);

localStorage.setItem("Last Visit", new Date());

days.textContent = result
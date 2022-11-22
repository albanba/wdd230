
const cards = document.querySelector('.cards');

const gridbutton = document.querySelector("#gridButton");
const listbutton = document.querySelector("#listButton");
const display = document.querySelector("#cards");


function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  }

  function showGrid() {
    display.classList.add("grid");
    display.classList.remove("list");
    }
function displayOrgs(orgs){}


fetch("json/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const orgs = jsonObject['orgs'];
    orgs.forEach(displayOrgs);
    
    });

    function displayOrgs(org) {
        // Create elements to add to the document
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let location = document.createElement('p');
        let web = document.createElement('a')
        let phone = document.createElement('p');
        let logo = document.createElement('img');
        let membership = document.createElement('p');
      
        // Change the textContent property of the elements 
        name.textContent = `${org.name}`;
        web.textContent = `${org.weburl}`;
        location.textContent = `Address: ${org.address}`;
        phone.textContent = `Phone: ${org.phonenumber}`;
        membership.textContent=`Membership Level: ${org.membership}`;
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
        logo.setAttribute('src', org.img);
        logo.setAttribute('alt', `${org.name}'s Logo`);
        logo.setAttribute('loading', 'lazy');
        web.setAttribute('href', org.weburl)
        membership.setAttribute('class', 'membership')
      
        // Add/append the section(card) with the elements
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(web);
        card.appendChild(phone);
        card.appendChild(logo);
        card.appendChild(membership);
      
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('.grid').appendChild(card);  

        
    }

  listbutton.addEventListener("click", showList); 

  gridbutton.addEventListener("click", showGrid)
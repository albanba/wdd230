

const cards = document.querySelector('.cards');


const display = document.querySelector("#cards");


 
function displayOrgs(orgs){}


fetch("json/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
    const orgs = jsonObject['orgs'];
    
  
    const spots = []

    while (spots.length < 3){
        let random = Math.floor(Math.random() * orgs.length);
        
        // console.table(random);
        
        if (orgs[random].membership == "Silver"|| orgs[random].membership == "Gold")
            spots.push(orgs[random])
            orgs.splice(random,1)
        }
  
    spots.forEach(displayOrgs);
    
    });

    function displayOrgs(org) {
        // Create elements to add to the document
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let web = document.createElement('a')
        let phone = document.createElement('p');
        let logo = document.createElement('img');
        
      
        // Change the textContent property of the elements 
        name.textContent = `${org.name}`;
        
        phone.textContent = `Phone: ${org.phonenumber}`;
        
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
        logo.setAttribute('src', org.img);
        logo.setAttribute('alt', `${org.name}'s Logo`);
        logo.setAttribute('loading', 'lazy');
        web.setAttribute('href', org.weburl)
        
      
        // Add/append the section(card) with the elements
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(web)
        web.appendChild(logo)
       
      
        // Add/append the existing HTML div with the div(card)
        document.querySelector('#spotlights').appendChild(card);  

        
    }

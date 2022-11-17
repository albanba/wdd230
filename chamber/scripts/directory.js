
const cards = document.querySelector('.cards');




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
        let phone = document.createElement('p');
        let logo = document.createElement('img');
        let membership = document.createElement('p');
      
        // Change the textContent property of the h2 element to contain the prophet's full name
        name.textContent = `${org.name}`;
        location.textContent = `Address: ${org.address}`;
        phone.textContent = `Phone: ${org.phonenumber}`;
        membership.textContent=`Membership Level: ${org.membership}`;
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        logo.setAttribute('src', org.img);
        logo.setAttribute('alt', `${org.name}'s Logo`);
        logo.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(phone);
        card.appendChild(logo);
        card.appendChild(membership);
      
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.cards').appendChild(card);  
    }
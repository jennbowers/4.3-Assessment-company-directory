// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

  // declaring variables
  var url = 'https://randomuser.me/api/?results=12';
  var customers = document.querySelector('.customers');
  var infoBegins = [];

  // fetching users data with get request
  fetch(url).then(function(response){
    console.log('response', response);
    response.json().then(function(data){
      // console.log(data);
      infoBegins = data.results;
      // console.log('infoBegins', infoBegins);
      // return infoBegins;

      for (var i = 0; i < infoBegins.length; i++) {
        console.log('person', infoBegins[i]);

        // all outer divs
        var divNode = document.createElement('div');
        divNode.className = '.outer-div';
        customers.appendChild(divNode);

        // photo
        var picNode = document.createElement('div');
        picNode.className = '.picture';
        var picture = '<img src="' + infoBegins[i].picture.large + '">';
        // console.log('picture: ', picture);
        picNode.innerHTML = picture;
        divNode.appendChild(picNode);

        // name
        var nameNode = document.createElement('p');
        nameNode.className = '.full-name';
        var name = infoBegins[i].name.first + ' ' + infoBegins[i].name.last;
        // console.log('full name: ', name);
        nameNode.textContent = name;
        divNode.appendChild(nameNode);

        // email
        var emailNode = document.createElement('p');
        nameNode.className = '.email';
        var email = infoBegins[i].email;
        // console.log('email: ', email);
        emailNode.textContent = email;
        divNode.appendChild(emailNode);

        // full address div
        var addressNode = document.createElement('div');
        addressNode.className = '.full-address';
        divNode.appendChild(addressNode);

        // address line 1
        var addressLine1Node = document.createElement('p');
        addressLine1Node.className = '.address-line-1';
        var addressLine1 = infoBegins[i].location.street;
        // console.log('address line 1: ', addressLine1);
        addressLine1Node.textContent = addressLine1;
        addressNode.appendChild(addressLine1Node);

        // address line 2
        var addressLine2Node = document.createElement('p');
        addressLine2Node.className = '.address-line-2';
        var addressLine2 = infoBegins[i].location.city + ', ' + infoBegins[i].location.state + ' ' + infoBegins[i].location.postcode;
        // console.log('address line 2: ', addressLine2);
        addressLine2Node.textContent = addressLine2;
        addressNode.appendChild(addressLine2Node);

        // phone
        var phoneNode = document.createElement('p');
        phoneNode.className = '.phone';
        var phone = infoBegins[i].cell;
        console.log('phone: ', phone);
        phoneNode.textContent = phone;
        divNode.appendChild(phoneNode);


      }


      // function to create elements
      // function customerPhoto(infoBegins){
      //   // console.log(infoBegins);
      //   var divNode = document.createElement('div');
      //   divNode.innerHTML = picture
      //   console.log(divNode.innerHTML = picture);
      //   customers.appendChild(divNode);
      // }
      //
      // function customerName(infoBegins){
      //   // console.log(infoBegins);
      //   var divNode = document.createElement('div');
      //   divNode.textConent = name;
      //   console.log(divNode.textContent = name);
      //   customers.appendChild(divNode);
      // }
      //
      // function customerEmail(infoBegins){
      //   // console.log(infoBegins);
      //   var divNode = document.createElement('div');
      //   divNode.textConent = email;
      //   console.log(divNode.textContent = email);
      //   customers.appendChild(divNode);
      // }
      //
      // function customerAddress(infoBegins){
      //   // console.log(infoBegins);
      //   var divNode = document.createElement('div');
      //   divNode.textConent = address;
      //   console.log(divNode.textContent = address);
      //   customers.appendChild(divNode);
      // }
      //
      //
      //
      // customerName(infoBegins[i]);
      // customerEmail(infoBegins[i]);
      // customerAddress(infoBegins[i]);

    })
  });

  // function to create elements
  // function displayCustomers(infoBegins){
  //   console.log(infoBegins);
  // }
  //
  // displayCustomers(infoBegins);
  //

// from example in class
  // function displayCoffee(coffee){
  //   console.log(coffee);
  //   var tile = document.createElement('div');
  //   tile.innerHTML = '<img src="' + coffee.image + '">' + coffee.name;
  //   container.appendChild(tile);
  // }



})();

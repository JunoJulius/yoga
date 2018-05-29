

// Declare `shoppingCart`, something where you will be storing all products that the user buys.
let shoppingCart = []
// Declare `products`, the different that you will be selling under each of the departments.
let products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The Kundalini T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The ultra yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]



let shopFromStore =  function () {
  let refNr = askUserForReferenceNumber();
  console.log(refNr)
  if(refNr <= 7){
    shoppingCart.push(products[refNr].price + products[refNr].name);
  
    console.log(shoppingCart);
    // window.prompt("need more?")
  }else{
    console.log("nope")
  }
  // Add the product with the matching referenceNumber to the shoppingCart

  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  displayTotalPrice(/*The letiable holding the totol price*/);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
};

let displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents

  // use the printProductsOnScreen function for inspiration
};

let askUserForReferenceNumber = function() {
  // Use window.prompt to ask the user a question and capture their response,
  return window.prompt("Please provide the reference Number or the desired product")


  // then, return the response from this function back to our caller
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

let displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

let printProductsOnScreen = function () {
  for(let product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    let referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    let nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    let priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    let productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

let runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};

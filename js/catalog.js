/* global Product, CartItem */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var newOption = document.createElement("option");
    newOption.textContent = Product.allProducts[i].name;
    selectElement.appendChild(newOption);
  


  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}


function addSelectedItemToCart() {
  var items = document.getElementById('items');
  var quantity = document.getElementById('quantity');
  new CartItem(items.value, parseInt(quantity.value));

}


function saveCartToLocalStorage() {
  localStorage['cart'] = JSON.stringify(CartItem.allCartItems);
  console.log(localStorage);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart

function updateCounter() {
  var sum = 0;
  var cartCount = document.getElementById('itemCount');
  for (var i = 0; i < CartItem.allCartItems.length; i++){
    sum += CartItem.allCartItems[i].quantity;
  }
  console.log(CartItem.allCartItems);


  var countContent = sum;
  cartCount.textContent = countContent;
}
  

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

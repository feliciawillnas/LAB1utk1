let inventory= [];
let desiredItems = ["apple", "bread", "pear"];

const addItem = (x)=>{
    x.preventDefault();  
    let addedItem = document.getElementById('addtoinventory').value

    inventory.push(addedItem);
    document.forms[0].reset(); 

    localStorage.setItem('MyItemList', JSON.stringify(inventory) );
}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('formbutton').addEventListener('click', addItem);
});

///////////////////

function showItemList() {
    var k = (desiredItems); 
    x = document.getElementById("itemlist");

    document.getElementById("itemlist").innerHTML = "your cart: " + k; 

    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  }
 
  ////////////////

  function showCart2() {
    var cart = (inventory); 
    x = document.getElementById("showcart2");

    document.getElementById("showcart2").innerHTML = "your cart: " + cart; 

    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  }

  ////////////////

  function fruitArea() {
    var x = document.getElementById("fruitarea"); 

    if (x.style.display === "block") {
      x.style.display = "none"; 
    }
    else {
      x.style.display = "block"; 
    }
  }

  function breadSection() {
    var x = document.getElementById("bread"); 

    if (x.style.display === "block") {
      x.style.display = "none"; 
    }
    else {
      x.style.display = "block"; 
    }
  }

  function makePayment() {

    var cart = (inventory); 
    x = document.getElementById("payment");

    document.getElementById("payment").innerHTML = "here is your cart:" + cart + "would you like to proceed?"; 

    var x = document.getElementById("payment"); 

    if (x.style.display === "block") {
      x.style.display = "none"; 
    }
    else {
      x.style.display = "block"; 
    }
  }


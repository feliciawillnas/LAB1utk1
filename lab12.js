let inventory= [];
let desiredItems = ["apple", "bread", "pear"];
let availableItems = ["apple", "bread",]
/// kanske göra ngn lista, så man inte kan fylla i precis vad man vill 
///// kanske göra att man ej vet vilka alla desired items är ???? lite som bingospel
function printSame() {

  found = inventory.filter((val, index) => {
    console.log('index', index) // Stops at array1.length - 1
    return desiredItems.includes(val)
  })
  console.log(found)

  document.getElementById("hitta").innerHTML = "hittade: " + found; 

}

const addItem = (x)=>{
    x.preventDefault();  
    let addedItem = document.getElementById('addtoinventory').value

    inventory.push(addedItem);
    document.forms[0].reset(); 

    localStorage.setItem('MyItemList', JSON.stringify(inventory));
}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('formbutton').addEventListener('click', addItem);
});

///////////////////


function enterStore() {

    var x = document.getElementById("entrance"); 
    var k = document.getElementById("bread"); 

    if (x.style.display === "block") {//// om detta är sant 

      x.style.display = "none"; //// gör der här 
      k.style.display = "block";
    }
    else {
      x.style.display = "block"; ///// annars gör detta 
    }
  }

  function breadSection() {
    var x = document.getElementById("bread"); 
    var k = document.getElementById("fruitarea"); 

    if (x.style.display === "block") {

      x.style.display = "none"; 
      k.style.display = "block";
    }
    else {
      x.style.display = "block"; 
      k.style.display = "none"; 
    }
  }

  function fruitArea() {
    var x = document.getElementById("fruitarea"); 
    var k = document.getElementById("payment"); 

    if (x.style.display === "block") {//// om detta är sant 

      x.style.display = "none"; //// gör der här 
      k.style.display = "block";
    }
    else {
      x.style.display = "block"; ///// annars gör detta 
      k.style.display = "none"; 
    }
  }


function showItemList() {
    var k = (desiredItems); 
    x = document.getElementById("itemlist");

    document.getElementById("itemlist").innerHTML = "item list: " + k; 

    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }

    found = inventory.filter((val, index) => {
      console.log('index', index) // Stops at array1.length - 1
      return desiredItems.includes(val)
    })
    console.log(found)
  
    document.getElementById("hitta").innerHTML = "hittade: " + found; 


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

  function makePayment() {

    var x = document.getElementById("payment"); 

    if (x.style.display === "block") {
      x.style.display = "none"; 
    }
    else {
      x.style.display = "block"; 
    }
  }

  function makePayment2() {

    var cart = (inventory); 
    x = document.getElementById("payment2");

    document.getElementById("payment2").innerHTML = "here is your cart:" + cart + "would you like to proceed?"; 

    var x = document.getElementById("payment2"); 


  }


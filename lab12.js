let inventory= [];

const addItem = (ev)=>{
    ev.preventDefault();  
    let addedItem = document.getElementById('addtoinventory').value

    inventory.push(addedItem);
    document.forms[0].reset(); 

    localStorage.setItem('MyItemList', JSON.stringify(inventory) );
}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('formbutton').addEventListener('click', addItem);

console.log (inventory); 

});


///////////////////

function showItemList() {
    var displayItemList = document.getElementById("itemlist");

    if (displayItemList.style.display === "block") {
      displayItemList.style.display = "none";
    } 
    
    else {
      displayItemList.style.display = "block";
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
    var k = document.getElementById("entrance"); 

    if (x.style.display === "block") {
      x.style.display = "none"; 
    }
    else {
      x.style.display = "block"; 
    }
  }


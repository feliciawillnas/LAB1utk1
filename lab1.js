const inventory = []; 
const inkoplista = [apple, bread, milk]; 

function addToInventory() {
    const addItem = prompt ("ADD ITEM"); 
    inventory.push(addItem); 
    console.log(inventory); 

    ///////////////
      if (addItem === "apple")
      alert("rätt"); 
    /////// idk om det ska vara såhär 
}


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

  function showCart() {
    var displayCart = (inventory);
    alert(displayCart);
  }

  /////////////////


  function fruitArea() {
    var x = document.getElementById("fruitarea");

    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    
    else {
      x.style.display = "block";
    }
  }
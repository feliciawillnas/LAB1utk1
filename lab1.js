const inventory = []; 

function addToInventory() {
    const addItem = prompt ("ADD ITEM"); 
    inventory.push(addItem); 
    console.log(inventory); 
}

///////////////////

function showItemList() {
    var x = document.getElementById("itemlist");

    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    
    else {
      x.style.display = "block";
    }
  }
 
  ////////////////
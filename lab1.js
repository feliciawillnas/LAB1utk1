const inventory = []; 
const inkoplista = [apple, bread, milk]; 

function addToInventory() {
  
 // const desiredItem1 = document.getElementById("apple");
  desiredItem1 = ("apple")
  
  const addItem = prompt ("ADD ITEM"); 
  inventory.push(addItem); 
  console.log(inventory); 
  
  if (desiredItem1 === addItem) {
    alert("rätt"); 
    
  } else {
    alert("inte rätt");
  }
}


function addToInventory() {
  
  // const desiredItem1 = document.getElementById("apple");
   desiredItem1 = ("apple");
   
   const addItem = prompt ("ADD ITEM"); 
   inventory.push(addItem); 
   console.log(inventory); 
   
   if (desiredItem1 === addItem) {
     alert("rätt"); 
     
   } else {
     alert("inte rätt");
   }
 }


//let saveFile = () => {
  // Get the data from each element on the form.
//  const name = document.getElementById("addtoinventory2");
//}

/////////////
///while (addItem == desiredItem1) {

///  if (desiredItem1.style.color === "black") {
///      desiredItem1.style.color = "red";
//    } 
    
///  else {
///    desiredItem1.style.color= "black";
///    }
///  }
///}



 //     if (addItem === "apple");
//      alert("rätt"); 


    /////// idk om det ska vara såhär 



function addToInventory2() {

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

//function showCart() {
//   var displayCart = (inventory);
//  alert(displayCart);
//}

  /////////////////

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

  /////////////////









  

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



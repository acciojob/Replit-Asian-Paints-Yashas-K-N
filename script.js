//your JS code here. If required.
const gridContainer= document.querySelector(".grid")
 const form =document.querySelector("#form")
let previousSelectedElement = null;

function removePreviousColor(){
   if(previousSelectedElement){
      previousSelectedElement.style.backgroundColor = "white";
         }
 
}
 form.addEventListener("submit",function(event){
    event.preventDefault();
    let cellId = form.inputId.value;
    let selectedColor = form.color.value;
     
    let cell = document.getElementById(cellId);
      cell.style.backgroundColor = selectedColor;
     
      removePreviousColor();
      previousSelectedElement = cell;
	 form.reset();
      
 });
 for (let i=1; i<=9; i++){
    const gridItem = document.createElement("div");
     gridItem.id = i; 
     gridItem.innerText=i
     gridItem.className="grid-Item";
     gridContainer.appendChild(gridItem);

 }

//  document.addEventListener("contextmenu",(event)=>{
//     event.preventDefault();
//     console.log("inside submit button")
//  });

//  document.addEventListener("contextmenu",(event)=>{
//     event.preventDefault();
//     console.log("inside submit button")
//  });
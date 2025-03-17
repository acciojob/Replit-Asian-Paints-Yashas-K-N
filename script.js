//your JS code here. If required.
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let cellId = form.inputId.value;
    let selectedColor = form.color.value;

    // First, remove the color from the previously selected cell
    removePreviousColor();

    // Then, change the color of the newly selected cell
    let cell = document.getElementById(cellId);
    cell.style.backgroundColor = selectedColor;

    // Store the newly selected cell for future reference
    previousSelectedElement = cell;

    // Reset the form
    form.reset();
});
//  document.addEventListener("contextmenu",(event)=>{
//     event.preventDefault();
//     console.log("inside submit button")
//  });

//  document.addEventListener("contextmenu",(event)=>{
//     event.preventDefault();
//     console.log("inside submit button")
//  });
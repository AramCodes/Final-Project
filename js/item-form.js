// Importing itemsController form from javascript folder
import ItemsController from "./items.js"

// Using itemsController, set a new itemController to zero
const itemsController = new ItemsController(0);

// Select the New Item Form
const new_item_form = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
new_item_form.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // selecting the inputs based on itemsController.js
    const new_item_name = document.querySelector("#newItemName"); 
    const new_item_description = document.querySelector("#newItemDescription");
    const new_item_imageUrl = document.querySelector("#newItemImageUrl");

    // Get the values of the inputs based on itemsController.js
    const name = new_item_name.value;
    const description = new_item_description.value;
    const imageUrl = new_item_imageUrl.value;

    // Checking the Validation code
    console.log(ItemsController.items);
    
  
    // Add the item to the ItemsController
    itemsController.addItem(name, description, imageUrl);

    // Clear the form
    new_item_name.value = '';
    new_item_description.value = ''; 
});


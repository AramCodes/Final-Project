// Creating a new ItemsController class
class ItemsController {
    // Setting up the items and currentId property in constructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Creating a new addItem method
    addItem(name, description, imageUrl) {
        const item = {
            //Increment the current property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };
        
        // pushing item to items property list
        this.items.push(item);

        // saving the items to the local storage
        localStorage.setItem("items", JSON.stringify(this.item));
    }
}

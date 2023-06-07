// Creating a new ItemsController class
class ItemsController {
    // Setting up the items and currentId property in constructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Creating a new addItem method
    async function addItem(name, description, imageUrl) {

        e.preventDefault();

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

         //pushes item to the api through a post request
        const initialRequestObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(item)
        }
    
        await fetch("http://localhost:8080/item", initialRequestObj);
    
        await fetchItems();

    }
}

function save(name, description, imageUrl) {
    const data = { 
        name,  
        description, 
        imageUrl };

    fetch('http://localhost:8080/item', { //local host 3306
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

